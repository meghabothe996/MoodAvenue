import React, { useState } from 'react';
import {
  Box,
  Flex,
  Grid,
  GridItem,
  VStack,
  HStack,
  Text,
  Avatar,
  Button,
  IconButton,
  Input,
  Image,
  Heading,
  Divider,
  useColorModeValue,
  useColorMode,
  Badge,
  Tooltip,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  SimpleGrid,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Textarea,
  useDisclosure,
  Icon,
  InputGroup,
  InputLeftElement,
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
  Wrap,
  WrapItem,
  List,
  ListItem,
  FormControl,
  FormLabel,
  InputLeftAddon,
  Center,
  Switch,
  Select,
  AspectRatio,
  Spacer,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Progress,
  useTheme,
  Tag,
  CircularProgress,
  InputRightElement
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import {
  FaHome,
  FaHashtag,
  FaBell,
  FaEnvelope,
  FaBookmark,
  FaListAlt,
  FaUser,
  FaEllipsisH,
  FaFeatherAlt,
  FaImage,
  FaVideo,
  FaPoll,
  FaRegSmile,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaHeart,
  FaRetweet,
  FaComment,
  FaShareAlt,
  FaChartBar,
  FaSearch,
  FaMoon,
  FaSun,
  FaUsers,
  FaSignOutAlt,
  FaCog,
  FaRocket,
  FaTimes,
  FaMusic,
  FaPlay,
  FaPhone,
  FaInfoCircle,
  FaCheck,
  FaCheckDouble,
  FaPaperclip,
  FaPaperPlane,
  FaComments,
  FaPlus,
  FaArrowLeft,
  FaPalette,
  FaHeartbeat,
  FaGamepad,
  FaFlask,
  FaUtensils,
  FaStar,
  FaTrophy,
  FaCheckCircle,
  FaLink,
  FaMapMarker,
  FaCalendar,
  FaLock,
  FaTrash,
  FaCreditCard,
  FaShieldAlt,
  FaGlobe,
  FaUserFriends,
  FaChartLine,
  FaClock,
  FaCrown,
  FaExclamationTriangle,
  FaEdit,
  FaAt,
  FaRegThumbsUp,
  FaRegClock,
  FaExternalLinkAlt,
  FaArrowRight,
  FaUserPlus,
  FaBan,
  FaMedal,
  FaBolt,
  FaDatabase,
  FaRegChartBar,
  FaShare,
  FaPhoneAlt
} from 'react-icons/fa';
import ThemeSelector from './ThemeSelector';
import { useThemeVariant } from '../context/ThemeContext';
import userProfilePicture from '../assets/userprofilepicture.jpg';
import ExploreSection from './UserHome/ExploreSection';

// Import mock data from the data file
import {
  dummyPosts,
  trendingTopics,
  whoToFollow,
  communities,
  chats,
  exploreCategories,
  explorePosts,
  notifications,
  savedPosts,
  myCommunities,
  userProfile,
  stories,
  sidebarOptions
} from '../data/mockData';

const UserHomePageNew = ({ onSignOut }) => {
  const navigate = useNavigate();
  const { colorMode, toggleColorMode } = useColorMode();
  const { themeVariant } = useThemeVariant();
  // Get the current theme from Chakra
  const theme = useTheme();
  
  // State for component
  const [activeView, setActiveView] = useState('feed'); // feed, messages, explore, etc.
  const [activeTab, setActiveTab] = useState('home');
  const [newPostContent, setNewPostContent] = useState('');
  const [newPostType, setNewPostType] = useState('text'); // text, image, video, audio, etc.
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentChat, setCurrentChat] = useState(null);
  const [newMessage, setNewMessage] = useState('');
  const [showMediaPreview, setShowMediaPreview] = useState(false);
  const [viewingStory, setViewingStory] = useState(null);
  const [viewingPost, setViewingPost] = useState(null);
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);
  const [isPreferencesOpen, setIsPreferencesOpen] = useState(false);
  
  // Disclosure hooks for modals
  const { isOpen: isComposeOpen, onOpen: onComposeOpen, onClose: onComposeClose } = useDisclosure();
  const { isOpen: isChatOpen, onOpen: onChatOpen, onClose: onChatClose } = useDisclosure();
  const { isOpen: isMediaViewerOpen, onOpen: onMediaViewerOpen, onClose: onMediaViewerClose } = useDisclosure();
  const { isOpen: isSearchModalOpen, onOpen: onSearchModalOpen, onClose: onSearchModalClose } = useDisclosure();
  
  // Color values that adapt to theme variant and color mode
  const bgColor = useColorModeValue('white', 'gray.800');
  const textColor = useColorModeValue('gray.800', 'white');
  const borderColor = useColorModeValue('gray.200', 'gray.700');
  const navHoverBg = useColorModeValue('gray.100', 'gray.700');
  const secondaryBg = useColorModeValue('gray.50', 'gray.900');
  const cardBg = useColorModeValue('white', 'gray.700');
  const subtleText = useColorModeValue('gray.500', 'gray.400');
  
  // Use the actual theme colors instead of hardcoded mappings
  const primaryColor = theme.colors.primary?.[500] ? 'primary.500' : 'blue.500';
  const secondaryColor = theme.colors.secondary?.[400] ? 'secondary.400' : 'teal.400';
  
  // Extract the color scheme name for components
  const primaryColorScheme = primaryColor.split('.')[0];
  
  // Use theme colors for gradient as well
  const gradientBg = `linear(to-r, ${primaryColor}, ${secondaryColor})`;

  // Functions for handling actions
  const handleBrandClick = () => {
    // Navigate to landing page by triggering sign out
    if (onSignOut) {
      onSignOut();
    }
    navigate('/');
  };
  
  const handleComposePost = () => {
    console.log('New post:', { content: newPostContent, type: newPostType, media: selectedMedia });
    onComposeClose();
    setNewPostContent('');
    setNewPostType('text');
    setSelectedMedia(null);
  };
  
  const handleMediaSelect = (type) => {
    setNewPostType(type);
    // In a real app, this would open file picker or media selection UI
    setSelectedMedia(type === 'image' ? 'https://source.unsplash.com/random/500x300?placeholder' : null);
    setShowMediaPreview(true);
  };
  
  const handleSendMessage = () => {
    if (!newMessage.trim()) return;
    
    console.log('Sending message to', currentChat?.name, ':', newMessage);
    setNewMessage('');
    // In a real app, this would send the message to the server
  };
  
  const handleSelectChat = (chat) => {
    setCurrentChat(chat);
    if (window.innerWidth < 768) {
      setActiveView('chatDetail');
    }
  };
  
  const handleLogout = () => {
    setShowLogoutConfirm(true);
  };
  
  const confirmLogout = () => {
    if (onSignOut) {
      onSignOut();
    }
    navigate('/');
  };
  
  // Navigation items with icons - Replace with the sidebarOptions array we defined above
  const navItems = sidebarOptions;

  // Filtered chats for messaging
  const filteredChats = chats.filter(chat => 
    chat.name.toLowerCase().includes(searchQuery.toLowerCase()));

  try {
    return (
      <>
      <Box minH="100vh" bg={secondaryBg}>
        {/* App Header */}
        <Flex 
          as="header" 
          position="fixed" 
          top="0" 
          width="full" 
          zIndex="1000" 
          bg={useColorModeValue('rgba(255, 255, 255, 0.8)', 'rgba(26, 32, 44, 0.8)')} 
          backdropFilter="blur(10px)" 
          borderBottom="1px" 
          borderColor={borderColor} 
          py={2} 
          px={4}
        >
          <Flex justify="space-between" align="center" width="full" maxW="1600px" mx="auto">
            {/* Brand */}
            <HStack spacing={3} cursor="pointer" onClick={handleBrandClick}>
              <Icon 
                as={FaRocket} 
                boxSize={6} 
                color={colorMode === 'dark' ? `var(--chakra-colors-${primaryColorScheme}-300)` : `var(--chakra-colors-${primaryColorScheme}-500)`} 
              />
              <Text 
                fontWeight="bold" 
                fontSize="xl" 
                bgGradient={gradientBg}
                bgClip="text"
                letterSpacing="tight"
              >
                MoodAvenue
              </Text>
            </HStack>
            
            {/* Search bar - desktop */}
            <Flex 
              display={{ base: 'none', md: 'flex' }}
              flex={1} 
              justify="center" 
              maxW="500px"
            >
              <InputGroup maxW="400px">
                <InputLeftElement pointerEvents="none">
                  <Icon as={FaSearch} color="gray.400" />
                </InputLeftElement>
                <Input 
                  placeholder="Search anything..." 
                  borderRadius="full"
                  bg={useColorModeValue('gray.100', 'gray.700')}
                  _focus={{ 
                    borderColor: primaryColor,
                    boxShadow: `0 0 0 1px var(--chakra-colors-${primaryColor})` 
                  }}
                />
              </InputGroup>
            </Flex>
            
            {/* Right side controls - only theme controls */}
            <HStack spacing={3}>
              {/* Search icon for mobile */}
              <IconButton
                icon={<Icon as={FaSearch} />}
                variant="ghost"
                display={{ base: 'flex', md: 'none' }}
                aria-label="Search"
                borderRadius="full"
                size="sm"
                onClick={onSearchModalOpen}
              />
              
              <ThemeSelector className="theme-selector" />
              
              <IconButton
                icon={colorMode === 'light' ? <FaMoon /> : <FaSun />}
                onClick={toggleColorMode}
                variant="ghost"
                aria-label="Toggle color mode"
                borderRadius="full"
                size="sm"
              />
            </HStack>
          </Flex>
        </Flex>
        
        {/* Main Content Area */}
        <Grid 
          templateColumns={{ base: '1fr', md: '80px 1fr', lg: '240px 1fr 320px' }}
          maxW="1600px" 
          mx="auto"
          pt="60px"
          pb={{ base: "70px", md: 0 }} // Add bottom padding on mobile to account for bottom nav
        >
          {/* Left Sidebar - Navigation */}
          <GridItem 
            display={{ base: 'none', md: 'block' }}
            position="sticky"
            top="60px"
            height="calc(100vh - 60px)"
            overflowY="auto"
            borderRight="1px" 
            borderColor={borderColor}
            py={4}
            px={{ md: 2, lg: 4 }}
          >
            <VStack spacing={2} align="stretch">
              {navItems.map((item) => (
                <HStack
                  key={item.id}
                  py={2}
                  px={{ md: 2, lg: 3 }}
                  borderRadius="lg"
                  cursor="pointer"
                  color={activeView === item.view ? primaryColor : textColor}
                  bg={activeView === item.view ? useColorModeValue(`${primaryColorScheme}.50`, `${primaryColorScheme}.900`) : 'transparent'}
                  fontWeight={activeView === item.view ? 'bold' : 'normal'}
                  onClick={() => item.action ? handleLogout() : setActiveView(item.view)}
                  _hover={{ bg: useColorModeValue(`${primaryColorScheme}.50`, `${primaryColorScheme}.900`) }}
                  transition="all 0.2s"
                >
                  <Icon as={item.icon} boxSize={{ md: 5, lg: 5 }} />
                  <Text display={{ md: 'none', lg: 'block' }}>{item.label}</Text>
                  {item.badge && (
                    <Badge 
                      colorScheme={primaryColor.split('.')[0]} 
                      borderRadius="full" 
                      ml="auto"
                      display={{ md: 'none', lg: 'flex' }}
                    >
                      {item.badge}
                    </Badge>
                  )}
                  {item.badge && (
                    <Box 
                      position="absolute" 
                      top="0" 
                      right="0"
                      width="8px" 
                      height="8px" 
                      bg={`${primaryColor}`} 
                      borderRadius="full"
                      display={{ base: 'block', lg: 'none' }}
                    />
                  )}
                </HStack>
              ))}
              
              {/* Create post button */}
              <Button
                mt={4}
                w="full"
                colorScheme={primaryColorScheme}
                leftIcon={<FaPlus />}
                onClick={onComposeOpen}
                size="sm"
              >
                Create
              </Button>
              
              <IconButton
                icon={<Icon as={FaFeatherAlt} />}
                colorScheme={primaryColorScheme}
                borderRadius="lg"
                aria-label="Create post"
                onClick={onComposeOpen}
                mt={4}
                display={{ base: 'none', md: 'flex', lg: 'none' }}
              />
            </VStack>
          </GridItem>
          
          {/* Main Content */}
          <GridItem pt={2} px={{ base: 2, md: 4 }} overflowX="hidden">
            {/* Main content area - conditionally render based on activeView */}
            {activeView === 'feed' && (
              <Box>
                {/* Stories row */}
                <Box 
                  mb={4} 
                  p={4} 
                  bg={cardBg} 
                  borderRadius="lg" 
                  borderWidth="1px"
                  borderColor={borderColor}
                  overflowX="auto"
                >
                  <HStack spacing={4} pb={2}>
                    {stories.map((story) => (
                      <VStack key={story.id} spacing={2} minW="70px" align="center">
                        <Box 
                          position="relative" 
                          cursor="pointer"
                          onClick={() => setViewingStory(story)}
                        >
                          <Box
                            p="2px"
                            bg={story.unread ? 
                              `linear-gradient(45deg, ${primaryColor}, purple.500)` : 
                              useColorModeValue('gray.200', 'gray.600')}
                            borderRadius="full"
                          >
                            <Avatar 
                              size="md" 
                              name={story.user.name}
                              src={story.user.avatar}
                              borderWidth="2px"
                              borderColor={cardBg}
                            />
                          </Box>
                          {story.isYourStory && (
                            <Box
                              position="absolute"
                              bottom="0"
                              right="0"
                              bg={primaryColor}
                              borderRadius="full"
                              w="20px"
                              h="20px"
                              display="flex"
                              alignItems="center"
                              justifyContent="center"
                              borderWidth="2px"
                              borderColor={cardBg}
                            >
                              <Icon as={FaPlus} color="white" boxSize={3} />
                            </Box>
                          )}
                        </Box>
                        <Text 
                          fontSize="xs" 
                          fontWeight={story.unread ? "bold" : "normal"}
                          color={story.unread ? textColor : subtleText}
                          noOfLines={1}
                          textAlign="center"
                        >
                          {story.isYourStory ? 'Your Story' : story.user.name.split(' ')[0]}
                        </Text>
                      </VStack>
                    ))}
                  </HStack>
                </Box>
                
                {/* Create post area - mobile/tablet */}
                <Box 
                  display={{ base: 'block', lg: 'block' }}
                  mb={4} 
                  p={4} 
                  bg={cardBg} 
                  borderRadius="lg" 
                  borderWidth="1px"
                  borderColor={borderColor}
                >
                  <HStack spacing={3} align="start" w="100%">
                    <Avatar size="md" src={userProfilePicture} name={userProfile.name} />
                    <Box flex="1">
                      <Box
                        as="button"
                        onClick={onComposeOpen}
                        py={2}
                        px={4}
                        borderRadius="full"
                        border="1px"
                        borderColor={borderColor}
                        bg={useColorModeValue('gray.100', 'gray.700')}
                        color={subtleText}
                        fontWeight="medium"
                        textAlign="left"
                        w="100%"
                        _hover={{ bg: useColorModeValue('gray.200', 'gray.600') }}
                      >
                        What's on your mind?
                      </Box>
                      <HStack mt={3} spacing={4} justify="space-between">
                        <HStack>
                          <Tooltip label="Photo">
                            <IconButton
                              icon={<Icon as={FaImage} />}
                              variant="ghost"
                              colorScheme={primaryColor.split('.')[0]}
                              borderRadius="full"
                              size="sm"
                              onClick={() => handleMediaSelect('image')}
                            />
                          </Tooltip>
                          <Tooltip label="Video">
                            <IconButton
                              icon={<Icon as={FaVideo} />}
                              variant="ghost"
                              colorScheme={primaryColor.split('.')[0]}
                              borderRadius="full"
                              size="sm"
                              onClick={() => handleMediaSelect('video')}
                            />
                          </Tooltip>
                          <Tooltip label="Audio">
                            <IconButton
                              icon={<Icon as={FaMusic} />}
                              variant="ghost"
                              colorScheme={primaryColor.split('.')[0]}
                              borderRadius="full"
                              size="sm"
                              onClick={() => handleMediaSelect('audio')}
                            />
                          </Tooltip>
                        </HStack>
                      </HStack>
                    </Box>
                  </HStack>
                </Box>
                
                {/* Feed Content */}
                <VStack spacing={4} align="stretch" mb={10} w="100%">
                  {dummyPosts.filter(post => post.user.name !== 'Abhi P.').map((post) => (
                    <Box 
                      key={post.id} 
                      p={4} 
                      bg={cardBg} 
                      borderRadius="lg" 
                      borderWidth="1px"
                      borderColor={borderColor}
                      boxShadow="sm"
                      _hover={{ boxShadow: "md", transform: "translateY(-2px)" }}
                      transition="all 0.2s"
                    >
                      {/* Post Header */}
                      <HStack spacing={3} mb={3}>
                        <Avatar src={post.user.avatar} name={post.user.name} />
                        <Box>
                          <HStack>
                            <Text fontWeight="bold">{post.user.name}</Text>
                            {post.user.verified && (
                              <Badge 
                                bg={primaryColor} 
                                color="white" 
                                borderRadius="full" 
                                p="1px" 
                                minW="14px" 
                                minH="14px"
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                                fontSize="10px"
                              >
                                ✓
                              </Badge>
                            )}
                          </HStack>
                          <HStack spacing={1}>
                            <Text fontSize="sm" color={subtleText}>@{post.user.username}</Text>
                            <Text fontSize="sm" color={subtleText}>·</Text>
                            <Text fontSize="sm" color={subtleText}>{post.time}</Text>
                          </HStack>
                        </Box>
                        <IconButton
                          icon={<Icon as={FaEllipsisH} />}
                          variant="ghost"
                          aria-label="More options"
                          size="sm"
                          borderRadius="full"
                          ml="auto"
                        />
                      </HStack>

                      {/* Post Content */}
                      <Text mb={post.media ? 3 : 0}>{post.content}</Text>
                      
                      {/* Post Media */}
                      {post.media && (
                        <Box 
                          mt={3} 
                          borderRadius="md" 
                          overflow="hidden" 
                          position="relative"
                          cursor="pointer"
                          onClick={() => setViewingPost(post)}
                        >
                          {post.type === 'image' ? (
                            <Image src={post.media} alt="Post image" borderRadius="md" />
                          ) : post.type === 'video' ? (
                            <AspectRatio ratio={16 / 9}>
                              <Box
                                position="relative"
                                borderRadius="md"
                                overflow="hidden"
                                bg="black"
                              >
                                <Image 
                                  src={post.thumbnail || post.media} 
                                  alt="Video thumbnail" 
                                  objectFit="cover"
                                  width="100%"
                                  height="100%"
                                />
                                <Flex
                                  position="absolute"
                                  top="0"
                                  left="0"
                                  right="0"
                                  bottom="0"
                                  align="center"
                                  justify="center"
                                  bg="blackAlpha.500"
                                  color="white"
                                >
                                  <Icon as={FaPlay} boxSize={12} />
                                </Flex>
                              </Box>
                            </AspectRatio>
                          ) : null}
                        </Box>
                      )}
                      
                      {/* Post Actions */}
                      <HStack spacing={8} pt={3} justify="space-between">
                        <HStack spacing={1} color={subtleText} _hover={{ color: primaryColor }} cursor="pointer">
                          <Icon as={FaComment} />
                          <Text fontSize="sm">{post.comments}</Text>
                        </HStack>
                        <HStack spacing={1} color={subtleText} _hover={{ color: 'green.500' }} cursor="pointer">
                          <Icon as={FaRetweet} />
                          <Text fontSize="sm">{post.shares}</Text>
                        </HStack>
                        <HStack spacing={1} color={subtleText} _hover={{ color: 'red.500' }} cursor="pointer">
                          <Icon as={FaHeart} />
                          <Text fontSize="sm">{post.likes}</Text>
                        </HStack>
                        <HStack spacing={1} color={subtleText} _hover={{ color: primaryColor }} cursor="pointer">
                          <Icon as={FaShareAlt} />
                        </HStack>
                      </HStack>
                    </Box>
                  ))}
                </VStack>
              </Box>
            )}

            {activeView === 'messages' && (
              <Box>
                {/* Messages UI */}
                <HStack 
                  spacing={4} 
                  align="stretch" 
                  h="calc(100vh - 100px)"
                >
                  {/* Chat list sidebar */}
                  <Box 
                    w={{ base: '100%', md: '350px' }} 
                    borderWidth="1px"
                    borderColor={borderColor}
                    borderRadius="lg"
                    h="100%"
                    overflow="hidden"
                    display={activeView === 'chatDetail' && window.innerWidth < 768 ? 'none' : 'block'}
                  >
                    <VStack spacing={0} align="stretch" h="100%">
                      <Box p={3} borderBottomWidth="1px" borderColor={borderColor}>
                        <InputGroup size="md">
                          <InputLeftElement pointerEvents="none">
                            <Icon as={FaSearch} color="gray.400" />
                          </InputLeftElement>
                          <Input 
                            placeholder="Search messages..." 
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            borderRadius="full"
                          />
                        </InputGroup>
                      </Box>
                      
                      <Box p={2} borderBottomWidth="1px" borderColor={borderColor}>
                        <HStack spacing={2}>
                          <Button 
                            flex={1} 
                            size="sm" 
                            colorScheme={activeTab === 'all' ? primaryColorScheme : 'gray'} 
                            variant={activeTab === 'all' ? 'solid' : 'ghost'}
                            onClick={() => setActiveTab('all')}
                            borderRadius="full"
                          >
                            All
                          </Button>
                          <Button 
                            flex={1} 
                            size="sm" 
                            colorScheme={activeTab === 'personal' ? primaryColorScheme : 'gray'} 
                            variant={activeTab === 'personal' ? 'solid' : 'ghost'}
                            onClick={() => setActiveTab('personal')}
                            borderRadius="full"
                          >
                            Personal
                          </Button>
                          <Button 
                            flex={1} 
                            size="sm" 
                            colorScheme={activeTab === 'groups' ? primaryColorScheme : 'gray'} 
                            variant={activeTab === 'groups' ? 'solid' : 'ghost'}
                            onClick={() => setActiveTab('groups')}
                            borderRadius="full"
                          >
                            Groups
                          </Button>
                        </HStack>
                      </Box>
                      
                      {/* Chat list */}
                      <Box overflowY="auto" flex="1">
                        <VStack spacing={0} align="stretch">
                          {filteredChats
                            .filter(chat => activeTab === 'all' || 
                                           (activeTab === 'personal' && chat.type === 'personal') ||
                                           (activeTab === 'groups' && (chat.type === 'group' || chat.type === 'community')))
                            .map((chat) => (
                            <Box 
                              key={chat.id} 
                              p={3} 
                              borderBottomWidth="1px" 
                              borderColor={borderColor}
                              bg={currentChat?.id === chat.id ? 
                                  useColorModeValue(`${primaryColorScheme}.50`, `${primaryColorScheme}.900`) : 
                                  'transparent'}
                              _hover={{ bg: useColorModeValue('gray.50', 'gray.700') }}
                              cursor="pointer"
                              onClick={() => handleSelectChat(chat)}
                              position="relative"
                            >
                              <HStack spacing={3}>
                                <Box position="relative">
                                  <Avatar src={chat.avatar} name={chat.name} />
                                  {chat.status === 'online' && (
                                    <Box 
                                      position="absolute" 
                                      bottom="0" 
                                      right="0"
                                      width="12px" 
                                      height="12px" 
                                      bg="green.500" 
                                      borderRadius="full"
                                      borderWidth="2px"
                                      borderColor={cardBg}
                                    />
                                  )}
                                </Box>
                                <Box flex="1" overflow="hidden">
                                  <HStack justify="space-between" mb={1}>
                                    <Text fontWeight="bold" noOfLines={1}>{chat.name}</Text>
                                    <Text fontSize="xs" color={subtleText}>{chat.lastMessage.time}</Text>
                                  </HStack>
                                  <HStack justify="space-between">
                                    <Text fontSize="sm" color={subtleText} noOfLines={1}>
                                      {chat.type !== 'personal' && `${chat.lastMessage.sender}: `}
                                      {chat.lastMessage.content}
                                    </Text>
                                    {chat.unreadCount > 0 && (
                                      <Badge 
                                        borderRadius="full" 
                                        px={2} 
                                        colorScheme={primaryColor.split('.')[0]}
                                      >
                                        {chat.unreadCount}
                                      </Badge>
                                    )}
                                  </HStack>
                                  {chat.type === 'group' && (
                                    <Text fontSize="xs" color={subtleText} mt={1}>
                                      {chat.members.length} members
                                    </Text>
                                  )}
                                  {chat.type === 'community' && (
                                    <Text fontSize="xs" color={subtleText} mt={1}>
                                      {chat.members} members
                                    </Text>
                                  )}
                                </Box>
                              </HStack>
                            </Box>
                          ))}
                        </VStack>
                      </Box>
                    </VStack>
                  </Box>
                  
                  {/* Chat detail view */}
                  {currentChat ? (
                    <Box 
                      flex="1" 
                      borderWidth="1px"
                      borderColor={borderColor}
                      borderRadius="lg"
                      h="100%"
                      overflow="hidden"
                      display={activeView === 'messages' || activeView === 'chatDetail' ? 'flex' : 'none'}
                      flexDirection="column"
                    >
                      {/* Chat header */}
                      <Flex py={2} px={4} borderBottomWidth="1px" borderColor={borderColor} align="center">
                        <IconButton
                          icon={<Icon as={FaArrowLeft} />}
                          size="sm"
                          variant="ghost"
                          display={{ base: 'flex', md: 'none' }}
                          onClick={() => setActiveView('messages')}
                          mr={2}
                        />
                        <Avatar src={currentChat.avatar} name={currentChat.name} size="sm" />
                        <Box ml={3}>
                          <HStack>
                            <Text fontWeight="bold">{currentChat.name}</Text>
                            {currentChat.status === 'online' && (
                              <Badge colorScheme="green" variant="subtle">Online</Badge>
                            )}
                          </HStack>
                          <Text fontSize="xs" color={subtleText}>
                            {currentChat.type === 'personal' ? 
                              (currentChat.status === 'online' ? 'Online' : `Last active ${currentChat.lastActive}`) : 
                              (currentChat.type === 'group' ? `${currentChat.members.length} members` : `${currentChat.members} members`)}
                          </Text>
                        </Box>
                        <HStack ml="auto" spacing={2}>
                          <IconButton
                            icon={<Icon as={FaPhoneAlt} />}
                            size="sm"
                            variant="ghost"
                            borderRadius="full"
                          />
                          <IconButton
                            icon={<Icon as={FaVideo} />}
                            size="sm"
                            variant="ghost"
                            borderRadius="full"
                          />
                          <IconButton
                            icon={<Icon as={FaInfoCircle} />}
                            size="sm"
                            variant="ghost"
                            borderRadius="full"
                          />
                        </HStack>
                      </Flex>
                      
                      {/* Chat messages */}
                      <Box flex="1" overflowY="auto" p={4} bg={useColorModeValue('gray.50', 'gray.800')}>
                        <VStack spacing={4} align="stretch">
                          {currentChat.messages.map((msg) => (
                            <Flex 
                              key={msg.id} 
                              justifyContent={msg.sender === 'me' ? 'flex-end' : 'flex-start'}
                            >
                              {msg.sender !== 'me' && (
                                <Avatar 
                                  src={currentChat.avatar} 
                                  name={msg.sender} 
                                  size="xs" 
                                  mr={2} 
                                  mt={1}
                                />
                              )}
                              <Box
                                maxW="70%"
                                bg={msg.sender === 'me' ? 
                                    primaryColor : 
                                    useColorModeValue('white', 'gray.700')}
                                color={msg.sender === 'me' ? 'white' : textColor}
                                borderRadius="lg"
                                px={3}
                                py={2}
                                boxShadow="sm"
                              >
                                {currentChat.type !== 'personal' && msg.sender !== 'me' && (
                                  <Text fontSize="xs" fontWeight="bold" color={msg.sender === 'me' ? 'white' : primaryColor}>
                                    {msg.sender}
                                  </Text>
                                )}
                                <Text fontSize="sm">{msg.content}</Text>
                                <Text fontSize="xs" textAlign="right" mt={1} opacity={0.7}>
                                  {msg.time}
                                  {msg.sender === 'me' && (
                                    <Icon 
                                      as={msg.isRead ? FaCheckDouble : FaCheck} 
                                      ml={1} 
                                      boxSize={3} 
                                      color={msg.isRead ? 'blue.300' : 'current'}
                                    />
                                  )}
                                </Text>
                              </Box>
                            </Flex>
                          ))}
                        </VStack>
                      </Box>
                      
                      {/* Message input */}
                      <Box p={3} borderTopWidth="1px" borderColor={borderColor}>
                        <HStack spacing={2}>
                          <IconButton
                            icon={<Icon as={FaPaperclip} />}
                            variant="ghost"
                            colorScheme={primaryColor.split('.')[0]}
                            borderRadius="full"
                            aria-label="Attach file"
                          />
                          <Input 
                            placeholder="Type a message..." 
                            value={newMessage}
                            onChange={(e) => setNewMessage(e.target.value)}
                            borderRadius="full"
                          />
                          <IconButton
                            icon={<Icon as={FaPaperPlane} />}
                            colorScheme={primaryColorScheme}
                            borderRadius="full"
                            aria-label="Send message"
                            onClick={handleSendMessage}
                            isDisabled={!newMessage.trim()}
                          />
                        </HStack>
                      </Box>
                    </Box>
                  ) : (
                    <Flex 
                      flex="1"
                      borderWidth="1px"
                      borderColor={borderColor}
                      borderRadius="lg"
                      h="100%"
                      justifyContent="center"
                      alignItems="center"
                      display={{ base: 'none', md: 'flex' }}
                    >
                      <VStack spacing={4} p={8} textAlign="center">
                        <Icon as={FaComments} boxSize={12} color={primaryColor} />
                        <Text fontSize="xl" fontWeight="bold">Select a conversation</Text>
                        <Text color={subtleText}>Choose from your existing conversations or start a new one</Text>
                        <Button 
                          leftIcon={<Icon as={FaPlus} />} 
                          colorScheme={primaryColor.split('.')[0]}
                          borderRadius="full"
                        >
                          New conversation
                        </Button>
                      </VStack>
                    </Flex>
                  )}
                </HStack>
              </Box>
            )}

            {activeView === 'profile' && (
              <Box>
                {/* Enhanced Profile Header with gradient overlay */}
                <Box 
                  borderWidth="1px"
                  borderColor={borderColor}
                  borderRadius="xl"
                  overflow="hidden"
                  bg={cardBg}
                  mb={6}
                  boxShadow="xl"
                >
                  {/* Cover Photo with Gradient Overlay */}
                  <Box 
                    h={{ base: "160px", md: "240px" }} 
                    position="relative"
                    bgImage={`url("https://images.unsplash.com/photo-1496588152823-86ff7695e68f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")`}
                    bgSize="cover"
                    bgPosition="center"
                  >
                    {/* Gradient Overlay */}
                    <Box 
                      position="absolute"
                      top="0"
                      left="0"
                      right="0"
                      bottom="0"
                      bgGradient={`linear(to-t, ${cardBg}, transparent 70%)`}
                    />
                  </Box>
                  
                  {/* Profile Content Container */}
                  <Box px={{ base: 4, md: 8 }} pb={8} pt={0} position="relative">
                    {/* Profile Picture */}
                    <Box 
                      position="relative" 
                      mt={{ base: "-60px", md: "-80px" }}
                      mb={6}
                      display="flex"
                      justifyContent={{ base: "center", md: "flex-start" }}
                    >
                      <Box 
                        p="3px"
                        bg={`linear-gradient(45deg, ${primaryColor}, purple.500)`}
                        borderRadius="full"
                        boxShadow="xl"
                      >
                        <Avatar 
                          size={{ base: "xl", md: "2xl" }} 
                          src={userProfilePicture} 
                          name={userProfile.name} 
                          borderWidth="4px" 
                          borderColor={cardBg}
                        />
                      </Box>
                      
                      {/* Action Buttons - Positioned to the right on desktop */}
                      <HStack 
                        position={{ base: "static", md: "absolute" }} 
                        top={{ md: "10px" }} 
                        right={{ md: "20px" }}
                        mt={{ base: 4, md: 0 }}
                        spacing={3}
                        justifyContent={{ base: "center", md: "flex-end" }}
                      >
                        <Button 
                          leftIcon={<Icon as={FaEdit} />}
                          size={{ base: "sm", md: "md" }}
                          colorScheme={primaryColorScheme}
                          borderRadius="full"
                          boxShadow="md"
                          _hover={{
                            transform: "translateY(-2px)",
                            boxShadow: "lg"
                          }}
                          transition="all 0.2s"
                        >
                          Edit Profile
                        </Button>
                        <IconButton
                          icon={<Icon as={FaShareAlt} />}
                          size={{ base: "sm", md: "md" }}
                          colorScheme={primaryColorScheme}
                          variant="solid"
                          boxShadow="md"
                          borderRadius="full"
                          aria-label="Share profile"
                          _hover={{
                            transform: "translateY(-2px)",
                            boxShadow: "lg"
                          }}
                          transition="all 0.2s"
                        />
                      </HStack>
                    </Box>
                    
                    {/* Profile Info */}
                    <Flex 
                      direction="column"
                      alignItems={{ base: "center", md: "flex-start" }}
                      textAlign={{ base: "center", md: "left" }}
                      mb={8}
                    >
                      {/* Name and Username */}
                      <Heading 
                        size="lg" 
                        bgGradient={`linear(to-r, ${primaryColor}, purple.500)`} 
                        bgClip="text"
                        mb={1}
                        display="flex"
                        alignItems="center"
                      >
                        {userProfile.name}
                        <Icon as={FaCheckCircle} color={primaryColor} ml={2} boxSize={5} />
                      </Heading>
                      
                      <Text 
                        color={subtleText} 
                        fontSize="md" 
                        mb={4}
                        display="flex"
                        alignItems="center"
                      >
                        @{userProfile.username}
                        <Badge 
                          colorScheme={primaryColorScheme} 
                          variant="subtle" 
                          px={2} 
                          py={0.5} 
                          borderRadius="full"
                          ml={2}
                        >
                          {userProfile.accountType}
                        </Badge>
                      </Text>
                      
                      {/* Bio */}
                      <Text 
                        mb={5} 
                        fontSize="md" 
                        maxW="600px" 
                        lineHeight="1.6"
                      >
                        {userProfile.bio}
                      </Text>
                      
                      {/* Additional Info */}
                      <HStack 
                        spacing={{ base: 4, md: 6 }} 
                        wrap="wrap" 
                        justify={{ base: "center", md: "flex-start" }}
                        mb={5}
                      >
                        {userProfile.location && (
                          <HStack spacing={2}>
                            <Icon as={FaMapMarkerAlt} color={primaryColor} />
                            <Text fontSize="sm">{userProfile.location}</Text>
                          </HStack>
                        )}
                        
                        {userProfile.website && (
                          <HStack spacing={2}>
                            <Icon as={FaLink} color={primaryColor} />
                            <Text fontSize="sm" color={primaryColor} fontWeight="medium">
                              {userProfile.website}
                            </Text>
                          </HStack>
                        )}
                        
                        <HStack spacing={4}>
                          <Icon as={FaCalendarAlt} color={primaryColor} />
                          <Text fontSize="sm">Joined {userProfile.joined}</Text>
                        </HStack>
                      </HStack>
                      
                      {/* Stats Cards */}
                      <Flex 
                        width={{ base: "100%", md: "50%" }}
                        borderTop="1px"
                        borderColor={borderColor}
                        pt={5}
                        gap={0}
                        justifyContent="flex-start"
                        alignSelf="flex-start"
                      >
                        <VStack 
                          pr={{ base: 2, md: 6 }}
                          spacing={1}
                          align="flex-start"
                          flex={{ base: 1, md: "auto" }}
                        >
                          <Text fontSize="2xl" fontWeight="bold" bgGradient={`linear(to-r, ${primaryColor}, purple.500)`} bgClip="text">
                            {userProfile.posts}
                          </Text>
                          <Text fontSize="sm" color={subtleText} fontWeight="medium">Posts</Text>
                        </VStack>
                        
                        <VStack 
                          pr={{ base: 2, md: 6 }}
                          spacing={1}
                          align="flex-start"
                          px={{ base: 2, md: 0 }}
                          borderX={{ base: "1px", md: "1px 0 1px 1px" }}
                          borderColor={borderColor}
                          flex={{ base: 1, md: "auto" }}
                        >
                          <Text fontSize="2xl" fontWeight="bold" bgGradient={`linear(to-r, ${primaryColor}, purple.500)`} bgClip="text">
                            {userProfile.followers}
                          </Text>
                          <Text fontSize="sm" color={subtleText} fontWeight="medium">Followers</Text>
                        </VStack>
                        
                        <VStack 
                          spacing={1}
                          align="flex-start"
                          flex={{ base: 1, md: "auto" }}
                        >
                          <Text fontSize="2xl" fontWeight="bold" bgGradient={`linear(to-r, ${primaryColor}, purple.500)`} bgClip="text">
                            {userProfile.following}
                          </Text>
                          <Text fontSize="sm" color={subtleText} fontWeight="medium">Following</Text>
                        </VStack>
                      </Flex>
                    </Flex>
                  </Box>
                </Box>
                
                {/* User Profile Tabs */}
                <Box mb={6}>
                  <Tabs colorScheme={primaryColorScheme} variant="soft-rounded">
                    <TabList 
                      mb={6} 
                      overflowX="auto" 
                      py={2}
                      display="flex"
                      justifyContent={{ base: "space-between", md: "flex-start" }}
                      borderBottom="1px"
                      borderColor={borderColor}
                      pb={3}
                      css={{
                        '&::-webkit-scrollbar': {
                          display: 'none',
                        }
                      }}
                    >
                      <Tab 
                        _selected={{ 
                          color: "white", 
                          bg: primaryColor,
                          fontWeight: "bold"
                        }}
                        mr={{ md: 2 }}
                        fontSize={{ base: "sm", md: "md" }}
                        px={{ base: 3, md: 4 }}
                        py={2}
                      >
                        Posts
                      </Tab>
                      <Tab 
                        _selected={{ 
                          color: "white", 
                          bg: primaryColor,
                          fontWeight: "bold"
                        }}
                        mr={{ md: 2 }}
                        fontSize={{ base: "sm", md: "md" }}
                        px={{ base: 3, md: 4 }}
                        py={2}
                      >
                        Media
                      </Tab>
                      <Tab 
                        _selected={{ 
                          color: "white", 
                          bg: primaryColor,
                          fontWeight: "bold"
                        }}
                        mr={{ md: 2 }}
                        fontSize={{ base: "sm", md: "md" }}
                        px={{ base: 3, md: 4 }}
                        py={2}
                      >
                        Likes
                      </Tab>
                      <Tab 
                        _selected={{ 
                          color: "white", 
                          bg: primaryColor,
                          fontWeight: "bold"
                        }}
                        mr={{ md: 2 }}
                        fontSize={{ base: "sm", md: "md" }}
                        px={{ base: 3, md: 4 }}
                        py={2}
                      >
                        Highlights
                      </Tab>
                      <Tab 
                        _selected={{ 
                          color: "white", 
                          bg: primaryColor,
                          fontWeight: "bold"
                        }}
                        fontSize={{ base: "sm", md: "md" }}
                        px={{ base: 3, md: 4 }}
                        py={2}
                      >
                        Analytics
                      </Tab>
                    </TabList>
                    
                    <TabPanels>
                      <TabPanel px={0}>
                        {/* User Posts Tab - Only Show Abhi P.'s Posts */}
                        <VStack spacing={6} align="stretch">
                          {dummyPosts.filter(post => post.user.name === 'Abhi P.').map((post) => (
                            <Box 
                              key={post.id} 
                              p={4} 
                              bg={cardBg} 
                              borderRadius="lg" 
                              borderWidth="1px"
                              borderColor={borderColor}
                              boxShadow="sm"
                              _hover={{ boxShadow: "md", transform: "translateY(-2px)" }}
                              transition="all 0.2s"
                            >
                              {/* Post Header */}
                              <HStack spacing={3} mb={3}>
                                <Avatar src={userProfilePicture} name={post.user.name} />
                                <Box>
                                  <HStack>
                                    <Text fontWeight="bold">{post.user.name}</Text>
                                    {post.user.verified && (
                                      <Badge 
                                        bg={primaryColor} 
                                        color="white" 
                                        borderRadius="full" 
                                        p="1px" 
                                        minW="14px" 
                                        minH="14px"
                                        display="flex"
                                        alignItems="center"
                                        justifyContent="center"
                                        fontSize="10px"
                                      >
                                        ✓
                                      </Badge>
                                    )}
                                  </HStack>
                                  <HStack spacing={1}>
                                    <Text fontSize="sm" color={subtleText}>@{post.user.username}</Text>
                                    <Text fontSize="sm" color={subtleText}>·</Text>
                                    <Text fontSize="sm" color={subtleText}>{post.time}</Text>
                                  </HStack>
                                </Box>
                              </HStack>
                              
                              {/* Post Content */}
                              <Text mb={post.media ? 3 : 0}>{post.content}</Text>
                              
                              {/* Post Media */}
                              {post.media && (
                                <Box 
                                  mt={3} 
                                  borderRadius="md" 
                                  overflow="hidden" 
                                  position="relative"
                                  cursor="pointer"
                                  onClick={() => setViewingPost(post)}
                                >
                                  {post.type === 'image' ? (
                                    <Image src={post.media} alt="Post image" borderRadius="md" />
                                  ) : post.type === 'video' ? (
                                    <AspectRatio ratio={16 / 9}>
                                      <Box
                                        position="relative"
                                        borderRadius="md"
                                        overflow="hidden"
                                        bg="black"
                                      >
                                        <Image 
                                          src={post.thumbnail || post.media} 
                                          alt="Video thumbnail" 
                                          objectFit="cover"
                                          width="100%"
                                          height="100%"
                                        />
                                        <Flex
                                          position="absolute"
                                          top="0"
                                          left="0"
                                          right="0"
                                          bottom="0"
                                          align="center"
                                          justify="center"
                                          bg="blackAlpha.500"
                                          color="white"
                                        >
                                          <Icon as={FaPlay} boxSize={12} />
                                        </Flex>
                                      </Box>
                                    </AspectRatio>
                                  ) : null}
                                </Box>
                              )}
                              
                              {/* Post Actions */}
                              <HStack mt={4} spacing={6}>
                                <HStack spacing={1} cursor="pointer" _hover={{ color: "red.500" }}>
                                  <Icon as={FaHeart} boxSize={5} />
                                  <Text fontSize="sm">{post.likes}</Text>
                                </HStack>
                                <HStack spacing={1} cursor="pointer" _hover={{ color: primaryColor }}>
                                  <Icon as={FaComment} boxSize={5} />
                                  <Text fontSize="sm">{post.comments}</Text>
                                </HStack>
                                <HStack spacing={1} cursor="pointer" _hover={{ color: "green.500" }}>
                                  <Icon as={FaShare} boxSize={5} />
                                  <Text fontSize="sm">{post.shares || 0}</Text>
                                </HStack>
                                <Spacer />
                                <Icon as={FaBookmark} boxSize={5} cursor="pointer" _hover={{ color: "blue.500" }} />
                              </HStack>
                            </Box>
                          ))}
                          
                          {dummyPosts.filter(post => post.user.name === 'Abhi P.').length === 0 && (
                            <Box 
                              p={6} 
                              bg={cardBg} 
                              borderRadius="lg" 
                              borderWidth="1px"
                              borderColor={borderColor}
                              textAlign="center"
                            >
                              <Icon as={FaFeatherAlt} boxSize={12} color={subtleText} mb={4} />
                              <Heading size="md" mb={2}>No posts yet</Heading>
                              <Text color={subtleText} mb={4}>You haven't created any posts yet.</Text>
                              <Button 
                                colorScheme={primaryColorScheme} 
                                leftIcon={<Icon as={FaPlus} />}
                                onClick={onComposeOpen}
                              >
                                Create your first post
                              </Button>
                            </Box>
                          )}
                        </VStack>
                      </TabPanel>
                      
                      <TabPanel px={0}>
                        {/* Media Gallery */}
                        <SimpleGrid columns={{ base: 2, md: 3 }} spacing={4}>
                          {explorePosts.slice(0, 9).map((post) => (
                            <Box
                              key={post.id}
                              borderRadius="md"
                              overflow="hidden"
                              position="relative"
                              cursor="pointer"
                              transition="all 0.2s"
                              _hover={{ transform: "scale(1.02)", boxShadow: "lg" }}
                              onClick={() => setViewingPost(post)}
                              h={{ base: "150px", md: "200px" }}
                            >
                              <Image
                                src={post.thumbnail || (Array.isArray(post.media) ? post.media[0] : post.media)}
                                alt={post.content}
                                width="100%"
                                height="100%"
                                objectFit="cover"
                              />
                              {post.type === 'video' && (
                                <Box 
                                  position="absolute" 
                                  top="50%" 
                                  left="50%" 
                                  transform="translate(-50%, -50%)"
                                  bg="blackAlpha.700"
                                  borderRadius="full"
                                  w="40px"
                                  h="40px"
                                  display="flex"
                                  alignItems="center"
                                  justifyContent="center"
                                >
                                  <Icon as={FaPlay} color="white" />
                                </Box>
                              )}
                            </Box>
                          ))}
                        </SimpleGrid>
                      </TabPanel>
                      
                      <TabPanel px={0}>
                        <Text>Liked content will appear here</Text>
                      </TabPanel>
                      
                      <TabPanel px={0}>
                        <Text>Highlighted content will appear here</Text>
                      </TabPanel>
                      
                      <TabPanel px={0}>
                        {/* Analytics */}
                        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
                          <Box 
                            p={6} 
                            bg={cardBg} 
                            borderRadius="xl" 
                            borderWidth="1px"
                            borderColor={borderColor}
                          >
                            <Heading size="md" mb={6}>Engagement Overview</Heading>
                            <Box h="200px" position="relative">
                              {/* Placeholder for chart */}
                              <Box 
                                position="absolute"
                                bottom={0}
                                left={0}
                                right={0}
                                height="100%"
                              >
                                <HStack h="100%" spacing={2} align="flex-end">
                                  {userProfile.stats.postsPerMonth.map((value, i) => (
                                    <Box 
                                      key={i} 
                                      width="8.33%" 
                                      height={`${value * 5}%`} 
                                      bg={primaryColor}
                                      borderTopRadius="md"
                                      opacity={0.7 + (i * 0.02)}
                                      _hover={{ opacity: 1 }}
                                      transition="opacity 0.2s"
                                    />
                                  ))}
                                </HStack>
                              </Box>
                            </Box>
                            <Flex justify="space-between" mt={4}>
                              <Text fontSize="sm" color={subtleText}>Jan</Text>
                              <Text fontSize="sm" color={subtleText}>Dec</Text>
                            </Flex>
                          </Box>
                          
                          <Box 
                            p={6} 
                            bg={cardBg} 
                            borderRadius="xl" 
                            borderWidth="1px"
                            borderColor={borderColor}
                          >
                            <Heading size="md" mb={6}>Top Categories</Heading>
                            <VStack spacing={4} align="stretch">
                              {userProfile.stats.topCategories.map((category, index) => (
                                <Box key={index}>
                                  <Flex justify="space-between" mb={1}>
                                    <Text fontSize="sm" fontWeight="medium">{category}</Text>
                                    <Text fontSize="sm" color={subtleText}>{90 - (index * 15)}%</Text>
                                  </Flex>
                                  <Progress 
                                    value={90 - (index * 15)} 
                                    colorScheme={index === 0 ? "blue" : index === 1 ? "purple" : "green"} 
                                    borderRadius="full" 
                                    size="sm" 
                                  />
                                </Box>
                              ))}
                            </VStack>
                          </Box>
                        </SimpleGrid>
                      </TabPanel>
                    </TabPanels>
                  </Tabs>
                </Box>
              </Box>
            )}

            {activeView === 'notifications' && (
              <Box>
                <VStack spacing={4} align="stretch">
                  {notifications.map((notification) => (
                    <Box
                      key={notification.id}
                      p={4}
                      bg={cardBg}
                      borderRadius="lg"
                      borderWidth="1px"
                      borderColor={borderColor}
                      transition="all 0.2s"
                      _hover={{ boxShadow: "md" }}
                      opacity={notification.isRead ? 0.7 : 1}
                    >
                      <HStack spacing={3} align="flex-start">
                        <Avatar size="md" src={notification.user.avatar} name={notification.user.name} />
                        <Box flex="1">
                          <HStack mb={1}>
                            <Text fontWeight="bold">{notification.user.name}</Text>
                            <Text color={subtleText}>{notification.content}</Text>
                          </HStack>
                          {notification.post && (
                            <Box
                              mt={2}
                              p={3}
                              bg={useColorModeValue("gray.50", "gray.700")}
                              borderRadius="md"
                            >
                              <Text fontSize="sm" noOfLines={2}>{notification.post.text}</Text>
                              {notification.post.thumbnail && (
                                <Image
                                  src={notification.post.thumbnail}
                                  mt={2}
                                  borderRadius="md"
                                  h="60px"
                                  w="60px"
                                  objectFit="cover"
                                />
                              )}
                            </Box>
                          )}
                          <Text fontSize="sm" color={subtleText} mt={1}>{notification.time}</Text>
                        </Box>
                        {!notification.isRead && (
                          <Box
                            w="8px"
                            h="8px"
                            borderRadius="full"
                            bg={primaryColor}
                          />
                        )}
                      </HStack>
                    </Box>
                  ))}
                </VStack>
              </Box>
            )}

            {activeView === 'saved' && (
              <Box>
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
                  {savedPosts.map((post) => (
                    <Box
                      key={post.id}
                      p={4}
                      bg={cardBg}
                      borderRadius="lg"
                      borderWidth="1px"
                      borderColor={borderColor}
                      transition="all 0.2s"
                      _hover={{ boxShadow: "md", transform: "translateY(-2px)" }}
                    >
                      <HStack spacing={4}>
                        <Image
                          src={post.thumbnail}
                          borderRadius="md"
                          w="120px"
                          h="80px"
                          objectFit="cover"
                        />
                        <Box flex="1">
                          <HStack mb={1}>
                            {post.type === 'article' ? (
                              <Avatar size="xs" src={post.sourceIcon} name={post.source} />
                            ) : (
                              <Avatar size="xs" src={post.user.avatar} name={post.user.name} />
                            )}
                            <Text fontSize="sm" color={subtleText}>
                              {post.type === 'article' ? post.source : post.user.name}
                            </Text>
                          </HStack>
                          <Text fontWeight="bold" mb={1} noOfLines={2}>
                            {post.type === 'article' ? post.title : post.content}
                          </Text>
                          <HStack spacing={2}>
                            {post.type === 'article' ? (
                              <>
                                <Text fontSize="sm" color={subtleText}>{post.timeToRead}</Text>
                                {post.categories.map((category) => (
                                  <Badge key={category} colorScheme={primaryColor.split('.')[0]} variant="subtle">
                                    {category}
                                  </Badge>
                                ))}
                              </>
                            ) : (
                              <>
                                <Text fontSize="sm" color={subtleText}>
                                  {post.likes} likes
                                </Text>
                                <Text fontSize="sm" color={subtleText}>•</Text>
                                <Text fontSize="sm" color={subtleText}>
                                  {post.comments} comments
                                </Text>
                              </>
                            )}
                          </HStack>
                        </Box>
                      </HStack>
                    </Box>
                  ))}
                </SimpleGrid>
              </Box>
            )}

            {activeView === 'communities' && (
              <Box>
                {/* Communities content */}
                <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }} gap={6}>
                  {communities.map((community) => (
                    <Box 
                      key={community.id} 
                      p={5} 
                      bg={cardBg} 
                      borderRadius="lg" 
                      borderWidth="1px"
                      borderColor={borderColor}
                      boxShadow="md"
                      overflow="hidden"
                      position="relative"
                    >
                      <Box 
                        position="absolute" 
                        top="0" 
                        left="0" 
                        right="0" 
                        h="60px" 
                        bgGradient={`linear(to-r, ${community.color}.500, ${community.color}.300)`}
                      />
                      
                      <Flex position="relative" justifyContent="center" mb={6} mt={2}>
                        <Avatar 
                          size="xl" 
                          name={community.name}
                          src={community.avatar}
                          border="4px solid"
                          borderColor={cardBg}
                        />
                      </Flex>
                      
                      <VStack align="center" spacing={2}>
                        <Text fontWeight="bold" fontSize="xl">{community.name}</Text>
                        <Badge colorScheme={community.color} borderRadius="full" px={3}>{community.category}</Badge>
                        <Text fontSize="sm" color={subtleText} textAlign="center" noOfLines={2}>
                          {community.description}
                        </Text>
                        <HStack spacing={4} mt={2}>
                          <VStack spacing={0}>
                            <Text fontSize="md" fontWeight="bold">{community.members}</Text>
                            <Text fontSize="xs" color={subtleText}>Members</Text>
                          </VStack>
                          <VStack spacing={0}>
                            <Text fontSize="md" fontWeight="bold">{community.posts}</Text>
                            <Text fontSize="xs" color={subtleText}>Posts</Text>
                          </VStack>
                        </HStack>
                        <Button
                          size="sm"
                          colorScheme={community.joined ? "gray" : primaryColor.split('.')[0]}
                          variant={community.joined ? "outline" : "solid"}
                          width="100%"
                          mt={2}
                          leftIcon={community.joined ? <Icon as={FaCheck} /> : <Icon as={FaUserPlus} />}
                        >
                          {community.joined ? "Joined" : "Join"}
                        </Button>
                      </VStack>
                    </Box>
                  ))}
                </Grid>
              </Box>
            )}

            {/* Explore Section */}
            {activeView === 'explore' && (
              <ExploreSection 
                explorePosts={explorePosts}
                exploreCategories={exploreCategories}
                primaryColor={primaryColor} 
                setViewingPost={setViewingPost}
              />
            )}

            {/* Premium Section */}
            {activeView === 'premium' && (
              <Box>
                <VStack spacing={6} align="stretch">
                  {/* Premium Header */}
                  <Box 
                    p={6} 
                    borderRadius="lg" 
                    bgGradient="linear(to-r, yellow.400, orange.400)"
                    color="white"
                    boxShadow="lg"
                  >
                    <HStack spacing={4} mb={4}>
                      <Icon as={FaStar} boxSize={12} />
                      <VStack align="start" spacing={1}>
                        <Heading size="lg">Premium Membership</Heading>
                        <Text fontSize="md">Unlock exclusive features and benefits</Text>
                      </VStack>
                    </HStack>
                    <Button 
                      rightIcon={<Icon as={FaArrowRight} />} 
                      colorScheme="whiteAlpha" 
                      size="lg"
                      borderRadius="full"
                      px={8}
                    >
                      Upgrade Now
                    </Button>
                  </Box>
                  
                  {/* Premium Features */}
                  <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
                    <Box 
                      p={6} 
                      bg={cardBg} 
                      borderRadius="lg" 
                      borderWidth="1px"
                      borderColor={borderColor}
                      boxShadow="md"
                    >
                      <Icon as={FaBan} boxSize={10} color="green.500" mb={4} />
                      <Heading size="md" mb={2}>Ad-Free Experience</Heading>
                      <Text color={subtleText}>Enjoy browsing without any advertisements or sponsored content.</Text>
                    </Box>
                    
                    <Box 
                      p={6} 
                      bg={cardBg} 
                      borderRadius="lg" 
                      borderWidth="1px"
                      borderColor={borderColor}
                      boxShadow="md"
                    >
                      <Icon as={FaShieldAlt} boxSize={10} color="blue.500" mb={4} />
                      <Heading size="md" mb={2}>Enhanced Privacy</Heading>
                      <Text color={subtleText}>Get additional privacy controls and profile protections.</Text>
                    </Box>
                    
                    <Box 
                      p={6} 
                      bg={cardBg} 
                      borderRadius="lg" 
                      borderWidth="1px"
                      borderColor={borderColor}
                      boxShadow="md"
                    >
                      <Icon as={FaMedal} boxSize={10} color="purple.500" mb={4} />
                      <Heading size="md" mb={2}>Exclusive Badges</Heading>
                      <Text color={subtleText}>Show off your premium status with exclusive profile badges.</Text>
                    </Box>
                    
                    <Box 
                      p={6} 
                      bg={cardBg} 
                      borderRadius="lg" 
                      borderWidth="1px"
                      borderColor={borderColor}
                      boxShadow="md"
                    >
                      <Icon as={FaBolt} boxSize={10} color="yellow.500" mb={4} />
                      <Heading size="md" mb={2}>Priority Support</Heading>
                      <Text color={subtleText}>Get faster responses from our support team when you need help.</Text>
                    </Box>
                    
                    <Box 
                      p={6} 
                      bg={cardBg} 
                      borderRadius="lg" 
                      borderWidth="1px"
                      borderColor={borderColor}
                      boxShadow="md"
                    >
                      <Icon as={FaDatabase} boxSize={10} color="cyan.500" mb={4} />
                      <Heading size="md" mb={2}>Unlimited Storage</Heading>
                      <Text color={subtleText}>Store and share unlimited photos and videos in original quality.</Text>
                    </Box>
                    
                    <Box 
                      p={6} 
                      bg={cardBg} 
                      borderRadius="lg" 
                      borderWidth="1px"
                      borderColor={borderColor}
                      boxShadow="md"
                    >
                      <Icon as={FaRegChartBar} boxSize={10} color="red.500" mb={4} />
                      <Heading size="md" mb={2}>Analytics Dashboard</Heading>
                      <Text color={subtleText}>Access detailed insights about your profile and content performance.</Text>
                    </Box>
                  </SimpleGrid>
                  
                  {/* Pricing */}
                  <Box mt={8}>
                    <Heading size="lg" mb={6}>Choose Your Plan</Heading>
                    <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
                      <Box 
                        p={6} 
                        bg={cardBg} 
                        borderRadius="lg" 
                        borderWidth="1px"
                        borderColor={borderColor}
                        boxShadow="md"
                        _hover={{ transform: "translateY(-5px)", boxShadow: "xl" }}
                        transition="all 0.3s"
                      >
                        <Heading size="md" mb={4}>Monthly</Heading>
                        <Heading size="2xl" mb={6}>$9.99<Text as="span" fontSize="md" color={subtleText}>/month</Text></Heading>
                        <Button colorScheme={primaryColor.split('.')[0]} width="100%">Select Plan</Button>
                        <VStack mt={6} align="start" spacing={3}>
                          <HStack><Icon as={FaCheck} color="green.500" /><Text>Monthly billing</Text></HStack>
                          <HStack><Icon as={FaCheck} color="green.500" /><Text>All premium features</Text></HStack>
                          <HStack><Icon as={FaCheck} color="green.500" /><Text>Cancel anytime</Text></HStack>
                        </VStack>
                      </Box>
                      
                      <Box 
                        p={6} 
                        bg={useColorModeValue("purple.50", "purple.900")} 
                        borderRadius="lg" 
                        borderWidth="2px"
                        borderColor="purple.500"
                        boxShadow="lg"
                        position="relative"
                        _hover={{ transform: "translateY(-5px)", boxShadow: "xl" }}
                        transition="all 0.3s"
                      >
                        <Badge 
                          colorScheme="purple" 
                          position="absolute" 
                          top="-10px" 
                          right="20px"
                          py={1} 
                          px={3} 
                          borderRadius="full"
                        >
                          MOST POPULAR
                        </Badge>
                        <Heading size="md" mb={4}>Annual</Heading>
                        <Heading size="2xl" mb={2}>$7.99<Text as="span" fontSize="md" color={subtleText}>/month</Text></Heading>
                        <Text mb={4} fontWeight="bold" color="green.500">Save 20%</Text>
                        <Button colorScheme="purple" width="100%">Select Plan</Button>
                        <VStack mt={6} align="start" spacing={3}>
                          <HStack><Icon as={FaCheck} color="green.500" /><Text>Annual billing ($95.88/year)</Text></HStack>
                          <HStack><Icon as={FaCheck} color="green.500" /><Text>All premium features</Text></HStack>
                          <HStack><Icon as={FaCheck} color="green.500" /><Text>30-day money back guarantee</Text></HStack>
                        </VStack>
                      </Box>
                      
                      <Box 
                        p={6} 
                        bg={cardBg} 
                        borderRadius="lg" 
                        borderWidth="1px"
                        borderColor={borderColor}
                        boxShadow="md"
                        _hover={{ transform: "translateY(-5px)", boxShadow: "xl" }}
                        transition="all 0.3s"
                      >
                        <Heading size="md" mb={4}>Lifetime</Heading>
                        <Heading size="2xl" mb={6}>$299.99<Text as="span" fontSize="md" color={subtleText}>one-time</Text></Heading>
                        <Button colorScheme={primaryColor.split('.')[0]} width="100%">Select Plan</Button>
                        <VStack mt={6} align="start" spacing={3}>
                          <HStack><Icon as={FaCheck} color="green.500" /><Text>One-time payment</Text></HStack>
                          <HStack><Icon as={FaCheck} color="green.500" /><Text>All premium features forever</Text></HStack>
                          <HStack><Icon as={FaCheck} color="green.500" /><Text>All future updates included</Text></HStack>
                        </VStack>
                      </Box>
                    </SimpleGrid>
                  </Box>
                </VStack>
              </Box>
            )}

            {/* Settings Section */}
            {activeView === 'settings' && (
              <Box>
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
                  {/* Account Settings */}
                  <Box 
                    p={6} 
                    bg={cardBg} 
                    borderRadius="lg" 
                    borderWidth="1px"
                    borderColor={borderColor}
                    boxShadow="md"
                  >
                    <Heading size="md" mb={4}>Account Settings</Heading>
                    <VStack spacing={4} align="stretch">
                      <FormControl>
                        <FormLabel>Email Address</FormLabel>
                        <Input defaultValue="johndoe@example.com" />
                      </FormControl>
                      <FormControl>
                        <FormLabel>Username</FormLabel>
                        <Input defaultValue="johndoe" />
                      </FormControl>
                      <FormControl>
                        <FormLabel>Password</FormLabel>
                        <Input type="password" defaultValue="••••••••" />
                      </FormControl>
                      <FormControl>
                        <FormLabel>Phone Number</FormLabel>
                        <Input defaultValue="+1 555-123-4567" />
                      </FormControl>
                      <Button colorScheme={primaryColor.split('.')[0]}>Save Changes</Button>
                    </VStack>
                  </Box>
                  
                  {/* Appearance Settings */}
                  <Box 
                    p={6} 
                    bg={cardBg} 
                    borderRadius="lg" 
                    borderWidth="1px"
                    borderColor={borderColor}
                    boxShadow="md"
                  >
                    <Heading size="md" mb={4}>Appearance</Heading>
                    <VStack spacing={6} align="stretch">
                      <FormControl>
                        <FormLabel>Color Theme</FormLabel>
                        <HStack spacing={4} mt={2}>
                          <ThemeSelector className="theme-selector" />
                        </HStack>
                      </FormControl>
                      
                      <FormControl display="flex" alignItems="center">
                        <FormLabel htmlFor="dark-mode" mb="0">
                          Dark Mode
                        </FormLabel>
                        <Switch 
                          id="dark-mode" 
                          colorScheme={primaryColor.split('.')[0]} 
                          isChecked={colorMode === 'dark'}
                          onChange={toggleColorMode}
                        />
                      </FormControl>
                      
                      <FormControl>
                        <FormLabel>Font Size</FormLabel>
                        <Select defaultValue="medium">
                          <option value="small">Small</option>
                          <option value="medium">Medium</option>
                          <option value="large">Large</option>
                        </Select>
                      </FormControl>
                    </VStack>
                  </Box>
                  
                  {/* Privacy Settings */}
                  <Box 
                    p={6} 
                    bg={cardBg} 
                    borderRadius="lg" 
                    borderWidth="1px"
                    borderColor={borderColor}
                    boxShadow="md"
                  >
                    <Heading size="md" mb={4}>Privacy</Heading>
                    <VStack spacing={4} align="stretch">
                      <FormControl display="flex" alignItems="center">
                        <FormLabel htmlFor="private-account" mb="0">
                          Private Account
                        </FormLabel>
                        <Switch id="private-account" colorScheme={primaryColor.split('.')[0]} />
                      </FormControl>
                      
                      <FormControl display="flex" alignItems="center">
                        <FormLabel htmlFor="show-activity" mb="0">
                          Show Activity Status
                        </FormLabel>
                        <Switch id="show-activity" colorScheme={primaryColor.split('.')[0]} defaultChecked />
                      </FormControl>
                      
                      <FormControl display="flex" alignItems="center">
                        <FormLabel htmlFor="tag-approval" mb="0">
                          Require Tag Approval
                        </FormLabel>
                        <Switch id="tag-approval" colorScheme={primaryColor.split('.')[0]} defaultChecked />
                      </FormControl>
                      
                      <FormControl>
                        <FormLabel>Who Can Message You</FormLabel>
                        <Select defaultValue="everyone">
                          <option value="everyone">Everyone</option>
                          <option value="following">People I Follow</option>
                          <option value="followers">Followers</option>
                          <option value="nobody">Nobody</option>
                        </Select>
                      </FormControl>
                    </VStack>
                  </Box>
                  
                  {/* Notification Settings */}
                  <Box 
                    p={6} 
                    bg={cardBg} 
                    borderRadius="lg" 
                    borderWidth="1px"
                    borderColor={borderColor}
                    boxShadow="md"
                  >
                    <Heading size="md" mb={4}>Notifications</Heading>
                    <VStack spacing={4} align="stretch">
                      <FormControl display="flex" alignItems="center">
                        <FormLabel htmlFor="push-notifications" mb="0">
                          Push Notifications
                        </FormLabel>
                        <Switch id="push-notifications" colorScheme={primaryColor.split('.')[0]} defaultChecked />
                      </FormControl>
                      
                      <FormControl display="flex" alignItems="center">
                        <FormLabel htmlFor="email-notifications" mb="0">
                          Email Notifications
                        </FormLabel>
                        <Switch id="email-notifications" colorScheme={primaryColor.split('.')[0]} defaultChecked />
                      </FormControl>
                      
                      <FormControl display="flex" alignItems="center">
                        <FormLabel htmlFor="likes-notifications" mb="0">
                          Likes
                        </FormLabel>
                        <Switch id="likes-notifications" colorScheme={primaryColor.split('.')[0]} defaultChecked />
                      </FormControl>
                      
                      <FormControl display="flex" alignItems="center">
                        <FormLabel htmlFor="comments-notifications" mb="0">
                          Comments
                        </FormLabel>
                        <Switch id="comments-notifications" colorScheme={primaryColor.split('.')[0]} defaultChecked />
                      </FormControl>
                      
                      <FormControl display="flex" alignItems="center">
                        <FormLabel htmlFor="messages-notifications" mb="0">
                          Messages
                        </FormLabel>
                        <Switch id="messages-notifications" colorScheme={primaryColor.split('.')[0]} defaultChecked />
                      </FormControl>
                    </VStack>
                  </Box>
                </SimpleGrid>
              </Box>
            )}
          </GridItem>

          {/* Right Sidebar - Trending & suggestions */}
          <GridItem 
            display={{ base: 'none', lg: 'block' }}
            p={4}
            borderLeft="1px" 
            borderColor={borderColor}
            position="sticky"
            top="60px"
            height="calc(100vh - 60px)"
            overflowY="auto"
          >
            {/* Content specific to active view will be rendered here */}
            {activeView === 'feed' && (
              <VStack spacing={4} align="stretch">
                {/* Trending Topics */}
                <Box 
                  p={4} 
                  bg={cardBg} 
                  borderRadius="lg" 
                  borderWidth="1px"
                  borderColor={borderColor}
                >
                  <Heading size="md" mb={4}>Trending Topics</Heading>
                  <VStack spacing={3} align="stretch">
                    {trendingTopics.map((topic) => (
                      <HStack 
                        key={topic.id} 
                        justify="space-between" 
                        p={2} 
                        _hover={{ bg: useColorModeValue('gray.50', 'gray.700') }} 
                        borderRadius="md" 
                        cursor="pointer"
                      >
                        <VStack align="start" spacing={0}>
                          <Text fontSize="sm" color={subtleText}>Trending</Text>
                          <Text fontWeight="bold">{topic.topic}</Text>
                          <Text fontSize="sm" color={subtleText}>{topic.posts} posts</Text>
                        </VStack>
                      </HStack>
                    ))}
                  </VStack>
                </Box>
                
                {/* Who to Follow */}
                <Box 
                  p={4} 
                  bg={cardBg} 
                  borderRadius="lg" 
                  borderWidth="1px"
                  borderColor={borderColor}
                >
                  <Heading size="md" mb={4}>Suggested for You</Heading>
                  <VStack spacing={4} align="stretch">
                    {whoToFollow.map((user) => (
                      <HStack key={user.id} justify="space-between">
                        <HStack spacing={3}>
                          <Avatar src={user.avatar} name={user.name} size="sm" />
                          <VStack align="start" spacing={0}>
                            <Text fontWeight="bold" fontSize="sm">{user.name}</Text>
                            <Text fontSize="xs" color={subtleText}>@{user.username}</Text>
                          </VStack>
                        </HStack>
                        <Button 
                          size="sm" 
                          colorScheme={primaryColor.split('.')[0]} 
                          variant="outline"
                          borderRadius="full"
                        >
                          Follow
                        </Button>
                      </HStack>
                    ))}
                  </VStack>
                </Box>
              </VStack>
            )}
          </GridItem>
        </Grid>
        
        {/* Mobile Bottom Navigation Bar */}
        <Flex
          as="nav"
          position="fixed"
          bottom="0"
          left="0"
          right="0"
          bg={useColorModeValue('rgba(255, 255, 255, 0.9)', 'rgba(26, 32, 44, 0.9)')}
          backdropFilter="blur(10px)"
          borderTop="1px"
          borderColor={borderColor}
          py={2}
          px={1}
          display={{ base: 'flex', md: 'none' }}
          justifyContent="space-around"
          alignItems="center"
          zIndex="1000"
          boxShadow="0 -2px 10px rgba(0, 0, 0, 0.05)"
        >
          {navItems.slice(0, 5).map((item) => (
            <VStack
              key={item.id}
              spacing={0}
              align="center"
              py={1}
              px={2}
              borderRadius="md"
              color={activeView === item.view ? primaryColor : textColor}
              bg={activeView === item.view ? useColorModeValue(`${primaryColorScheme}.50`, `${primaryColorScheme}.900`) : 'transparent'}
              cursor="pointer"
              onClick={() => item.action ? handleLogout() : setActiveView(item.view)}
              position="relative"
              w="70px"
              transition="all 0.2s"
            >
              <Icon as={item.icon} boxSize={5} />
              <Text fontSize="xs" mt={1}>{item.label}</Text>
              {item.badge && (
                <Badge
                  colorScheme={primaryColor.split('.')[0]}
                  borderRadius="full"
                  position="absolute"
                  top="0"
                  right="calc(50% - 20px)"
                  fontSize="xx-small"
                  minW="5"
                  h="5"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  {item.badge}
                </Badge>
              )}
            </VStack>
          ))}
          {/* Create Post Button for Mobile */}
          <Box>
            <IconButton
              icon={<Icon as={FaPlus} />}
              colorScheme={primaryColorScheme}
              borderRadius="full"
              aria-label="Create post"
              onClick={onComposeOpen}
              size="md"
            />
          </Box>
        </Flex>
        
        {/* Compose Post Modal */}
        <Modal isOpen={isComposeOpen} onClose={onComposeClose} size="xl">
          <ModalOverlay backdropFilter="blur(5px)" />
          <ModalContent borderRadius="lg">
            <ModalHeader>Create a post</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <HStack spacing={3} align="start">
                <Avatar src={userProfilePicture} name={userProfile.name} />
                <VStack spacing={4} align="stretch" flex={1}>
                  <Textarea
                    placeholder="What's on your mind?"
                    resize="none"
                    minH="150px"
                    value={newPostContent}
                    onChange={(e) => setNewPostContent(e.target.value)}
                    _focus={{ boxShadow: 'none' }}
                  />
                  
                  {showMediaPreview && selectedMedia && (
                    <Box position="relative">
                      <Image 
                        src={selectedMedia} 
                        borderRadius="md" 
                        maxH="200px" 
                        objectFit="cover"
                      />
                      <IconButton
                        icon={<Icon as={FaTimes} />}
                        size="sm"
                        colorScheme="red"
                        borderRadius="full"
                        position="absolute"
                        top={2}
                        right={2}
                        onClick={() => {
                          setSelectedMedia(null);
                          setShowMediaPreview(false);
                        }}
                      />
                    </Box>
                  )}
                  
                  <Flex justify="space-between">
                    <HStack spacing={2} color={primaryColor}>
                      <Tooltip label="Photo">
                        <IconButton
                          icon={<Icon as={FaImage} />}
                          variant="ghost"
                          colorScheme={primaryColor.split('.')[0]}
                          borderRadius="full"
                          size="sm"
                          onClick={() => handleMediaSelect('image')}
                        />
                      </Tooltip>
                      <Tooltip label="Video">
                        <IconButton
                          icon={<Icon as={FaVideo} />}
                          variant="ghost"
                          colorScheme={primaryColor.split('.')[0]}
                          borderRadius="full"
                          size="sm"
                          onClick={() => handleMediaSelect('video')}
                        />
                      </Tooltip>
                      <Tooltip label="Audio">
                        <IconButton
                          icon={<Icon as={FaMusic} />}
                          variant="ghost"
                          colorScheme={primaryColor.split('.')[0]}
                          borderRadius="full"
                          size="sm"
                          onClick={() => handleMediaSelect('audio')}
                        />
                      </Tooltip>
                      <Tooltip label="Poll">
                        <IconButton
                          icon={<Icon as={FaPoll} />}
                          variant="ghost"
                          colorScheme={primaryColor.split('.')[0]}
                          borderRadius="full"
                          size="sm"
                        />
                      </Tooltip>
                      <Tooltip label="Emoji">
                        <IconButton
                          icon={<Icon as={FaRegSmile} />}
                          variant="ghost"
                          colorScheme={primaryColor.split('.')[0]}
                          borderRadius="full"
                          size="sm"
                        />
                      </Tooltip>
                    </HStack>
                    <Button
                      colorScheme={primaryColor.split('.')[0]}
                      borderRadius="full"
                      px={6}
                      isDisabled={!newPostContent.trim() && !selectedMedia}
                      onClick={handleComposePost}
                    >
                      Post
                    </Button>
                  </Flex>
                </VStack>
              </HStack>
            </ModalBody>
          </ModalContent>
        </Modal>

        {/* Story Viewer Modal */}
        <Modal isOpen={viewingStory !== null} onClose={() => setViewingStory(null)} size="xl" isCentered>
          <ModalOverlay backdropFilter="blur(10px)" />
          <ModalContent bg="transparent" boxShadow="none" mx={2}>
            <ModalBody p={0}>
              <Box
                bg={cardBg}
                borderRadius="lg"
                overflow="hidden"
                position="relative"
                maxH="90vh"
              >
                {viewingStory && (
                  <>
                    <Image
                      src={`https://source.unsplash.com/random/800x1200?story=${viewingStory.id}`}
                      width="100%"
                      height="auto"
                      maxH="90vh"
                      objectFit="cover"
                    />
                    <Flex
                      position="absolute"
                      top={0}
                      left={0}
                      right={0}
                      p={4}
                      bg="linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%)"
                      color="white"
                      alignItems="center"
                    >
                      <Avatar size="sm" src={viewingStory.user.avatar} mr={2} />
                      <Text fontWeight="bold">{viewingStory.user.name}</Text>
                      <Text fontSize="sm" ml={2} opacity={0.8}>
                        {Math.floor(Math.random() * 23) + 1}h
                      </Text>
                      <Box flex={1} />
                      <IconButton
                        icon={<FaEllipsisH />}
                        variant="ghost"
                        color="white"
                        aria-label="Options"
                        size="sm"
                      />
                    </Flex>
                    <Flex
                      position="absolute"
                      bottom={0}
                      left={0}
                      right={0}
                      p={4}
                      bg="linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%)"
                      color="white"
                      alignItems="center"
                    >
                      <Input
                        placeholder="Send message"
                        borderRadius="full"
                        bg="rgba(255,255,255,0.2)"
                        color="white"
                        _placeholder={{ color: "rgba(255,255,255,0.6)" }}
                        flex={1}
                        mr={2}
                      />
                      <IconButton
                        icon={<FaPaperPlane />}
                        colorScheme="blue"
                        borderRadius="full"
                        aria-label="Send"
                        size="sm"
                      />
                    </Flex>
                  </>
                )}
              </Box>
            </ModalBody>
          </ModalContent>
        </Modal>

        {/* Post Viewer Modal */}
        <Modal isOpen={viewingPost !== null} onClose={() => setViewingPost(null)} size="2xl" isCentered>
          <ModalOverlay backdropFilter="blur(10px)" />
          <ModalContent bg={cardBg} mx={2}>
            <ModalBody p={0}>
              {viewingPost && (
                <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }}>
                  <Box>
                    {viewingPost.type === 'video' ? (
                      <AspectRatio ratio={1}>
                        <iframe
                          src={viewingPost.media}
                          allowFullScreen
                          title={viewingPost.content}
                        />
                      </AspectRatio>
                    ) : viewingPost.type === 'gallery' ? (
                      <AspectRatio ratio={1}>
                        <Image
                          src={Array.isArray(viewingPost.media) ? viewingPost.media[0] : viewingPost.media}
                          objectFit="cover"
                          alt={viewingPost.content}
                        />
                      </AspectRatio>
                    ) : (
                      <AspectRatio ratio={1}>
                        <Image
                          src={viewingPost.media}
                          objectFit="cover"
                          alt={viewingPost.content}
                        />
                      </AspectRatio>
                    )}
                  </Box>
                  <VStack align="stretch" spacing={4} p={4}>
                    <Flex alignItems="center">
                      <Avatar src={viewingPost.user.avatar} size="sm" mr={2} />
                      <Box>
                        <Text fontWeight="bold" fontSize="sm">{viewingPost.user.name}</Text>
                        <Text fontSize="xs" color={subtleText}>@{viewingPost.user.username}</Text>
                      </Box>
                      <Spacer />
                      <IconButton
                        icon={<FaEllipsisH />}
                        variant="ghost"
                        aria-label="Options"
                        size="sm"
                      />
                    </Flex>
                    
                    <Divider />
                    
                    <VStack align="stretch" spacing={2} flex={1} overflowY="auto" maxH="400px">
                      <Flex alignItems="start">
                        <Avatar src={viewingPost.user.avatar} size="sm" mr={2} />
                        <Box>
                          <Text fontSize="sm">
                            <Text as="span" fontWeight="bold">{viewingPost.user.name}</Text>{" "}
                            {viewingPost.content}
                          </Text>
                          <Text fontSize="xs" color={subtleText} mt={1}>{viewingPost.time}</Text>
                        </Box>
                      </Flex>
                      
                      {/* Placeholder comments */}
                      {[...Array(5)].map((_, i) => (
                        <Flex key={i} alignItems="start" mt={4}>
                          <Avatar src={`https://i.pravatar.cc/150?img=${30 + i}`} size="sm" mr={2} />
                          <Box>
                            <Text fontSize="sm">
                              <Text as="span" fontWeight="bold">User {i + 1}</Text>{" "}
                              {["Great post!", "Amazing shot!", "Love this content!", "This is awesome!", "Thanks for sharing!"][i]}
                            </Text>
                            <Text fontSize="xs" color={subtleText} mt={1}>{Math.floor(Math.random() * 12) + 1}h</Text>
                          </Box>
                        </Flex>
                      ))}
                    </VStack>
                    
                    <Divider />
                    
                    <HStack spacing={4}>
                      <IconButton
                        icon={<Icon as={FaHeart} />}
                        variant="ghost"
                        colorScheme="red"
                        aria-label="Like"
                        size="sm"
                      />
                      <IconButton
                        icon={<Icon as={FaComment} />}
                        variant="ghost"
                        aria-label="Comment"
                        size="sm"
                      />
                      <IconButton
                        icon={<Icon as={FaShare} />}
                        variant="ghost"
                        aria-label="Share"
                        size="sm"
                      />
                      <Spacer />
                      <IconButton
                        icon={<Icon as={FaBookmark} />}
                        variant="ghost"
                        aria-label="Save"
                        size="sm"
                      />
                    </HStack>
                    
                    <Text fontSize="sm" fontWeight="bold">{viewingPost.likes.toLocaleString()} likes</Text>
                    
                    <Flex>
                      <Input
                        placeholder="Add a comment..."
                        size="sm"
                        borderRadius="full"
                        mr={2}
                      />
                      <Button
                        size="sm"
                        colorScheme={primaryColor.split('.')[0]}
                        borderRadius="full"
                      >
                        Post
                      </Button>
                    </Flex>
                  </VStack>
                </Grid>
              )}
            </ModalBody>
          </ModalContent>
        </Modal>

        {/* Logout Confirmation Dialog */}
        <AlertDialog
          isOpen={showLogoutConfirm}
          leastDestructiveRef={cancelRef}
          onClose={() => setShowLogoutConfirm(false)}
        >
          <AlertDialogOverlay>
            <AlertDialogContent>
              <AlertDialogHeader fontSize="lg" fontWeight="bold">
                Sign Out
              </AlertDialogHeader>
              <AlertDialogBody>
                Are you sure you want to sign out?
              </AlertDialogBody>
              <AlertDialogFooter>
                <Button ref={cancelRef} onClick={() => setShowLogoutConfirm(false)}>
                  Cancel
                </Button>
                <Button colorScheme="red" onClick={handleLogout} ml={3}>
                  Sign Out
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
        
        {isPreferencesOpen && (
          <PreferencesSidebar onClose={() => setIsPreferencesOpen(false)} />
        )}
      </Box>
      
      {/* Search Modal for Mobile */}
      <Modal isOpen={isSearchModalOpen} onClose={onSearchModalClose} size="full">
        <ModalOverlay />
        <ModalContent bg={bgColor} borderRadius="0">
          <ModalHeader p={3}>
            <HStack w="full">
              <IconButton
                icon={<FaArrowLeft />}
                onClick={onSearchModalClose}
                aria-label="Back"
                variant="ghost"
                size="sm"
              />
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <Icon as={FaSearch} color="gray.400" />
                </InputLeftElement>
                <Input
                  placeholder="Search anything..."
                  autoFocus
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  borderRadius="full"
                  bg={useColorModeValue('gray.100', 'gray.700')}
                  _focus={{ 
                    borderColor: primaryColor,
                    boxShadow: `0 0 0 1px var(--chakra-colors-${primaryColor})` 
                  }}
                />
                {searchQuery && (
                  <InputRightElement>
                    <IconButton
                      icon={<FaTimes />}
                      size="sm"
                      variant="ghost"
                      aria-label="Clear search"
                      onClick={() => setSearchQuery('')}
                    />
                  </InputRightElement>
                )}
              </InputGroup>
            </HStack>
          </ModalHeader>
          <ModalBody p={4}>
            {searchQuery ? (
              // Search results
              <VStack spacing={4} align="stretch">
                <Text fontSize="sm" color={subtleText} fontWeight="medium">
                  Search Results for "{searchQuery}"
                </Text>
                {/* Here you would map search results from your data */}
                {/* This is just a placeholder */}
                {[1, 2, 3, 4].map((item) => (
                  <HStack 
                    key={item} 
                    p={3}
                    borderWidth="1px"
                    borderColor={borderColor}
                    borderRadius="md"
                    _hover={{ bg: useColorModeValue('gray.50', 'gray.700') }}
                    cursor="pointer"
                    onClick={onSearchModalClose}
                  >
                    <Avatar size="md" name={`User ${item}`} src={`https://i.pravatar.cc/150?img=${item + 40}`} />
                    <Box>
                      <Text fontWeight="medium">Search Result {item}</Text>
                      <Text fontSize="sm" color={subtleText}>
                        Matching "{searchQuery}" in description
                      </Text>
                    </Box>
                  </HStack>
                ))}
              </VStack>
            ) : (
              // Recent searches or suggestions
              <VStack spacing={4} align="stretch">
                <Text fontSize="sm" color={subtleText} fontWeight="medium">
                  Recent Searches
                </Text>
                {["design inspiration", "programming tutorials", "productivity tools"].map((search, index) => (
                  <HStack 
                    key={index}
                    spacing={3}
                    p={2}
                    _hover={{ bg: useColorModeValue('gray.50', 'gray.700') }}
                    borderRadius="md"
                    cursor="pointer"
                    onClick={() => setSearchQuery(search)}
                  >
                    <Icon as={FaClock} color={subtleText} />
                    <Text>{search}</Text>
                    <Spacer />
                    <IconButton
                      size="xs"
                      icon={<FaTimes />}
                      variant="ghost"
                      aria-label={`Remove ${search}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        // Here you would remove the search from history
                      }}
                    />
                  </HStack>
                ))}
                
                <Divider my={2} />
                
                <Text fontSize="sm" color={subtleText} fontWeight="medium">
                  Suggested
                </Text>
                {["trending topics", "popular users", "active communities"].map((suggestion, index) => (
                  <HStack 
                    key={index}
                    spacing={3}
                    p={2}
                    _hover={{ bg: useColorModeValue('gray.50', 'gray.700') }}
                    borderRadius="md"
                    cursor="pointer"
                    onClick={() => setSearchQuery(suggestion)}
                  >
                    <Icon as={FaSearch} color={subtleText} />
                    <Text>{suggestion}</Text>
                  </HStack>
                ))}
              </VStack>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
      </>
    );
  } catch (error) {
    console.error('Error rendering UserHomePageNew:', error);
    return <div>Error rendering UserHomePageNew</div>;
  }
};

export default UserHomePageNew; 