import { ChakraProvider, Box, Container, Button, VStack, HStack, Heading, Text, useDisclosure, Flex, useColorMode, Icon, SimpleGrid, Circle, useColorModeValue, useBreakpointValue, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, FormControl, FormLabel, Input, InputGroup, InputRightElement, Image, Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel, IconButton, Tag, TagLeftIcon, TagLabel, Switch, Badge } from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import theme, { getThemeByVariant } from './theme'
import ThemeSelector from './components/ThemeSelector'
import { ThemeVariantProvider, useThemeVariant } from './context/ThemeContext'
import { extendTheme } from '@chakra-ui/react'
import { FaComments, FaUsers, FaImages, FaBell, FaPalette, FaUserPlus, FaComment, FaMagic, FaMoon, FaSun, FaCode, FaGamepad, FaTwitter, FaGithub, FaLinkedin, FaInstagram, FaPlay, FaQuoteLeft, FaHeadset, FaGlobe, FaBars, FaArrowRight, FaCheck, FaTimes, FaEye, FaEyeSlash } from 'react-icons/fa'
import { HiLightningBolt } from 'react-icons/hi'
import { motion, AnimatePresence } from 'framer-motion'
import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import UserHomePageNew from './components/UserHomePageNew'
import ChatPage from './components/ChatPage'

// Simple Landing Page Component that adapts to the current theme
function SimpleLanding({ onStartClick }) {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === 'dark';
  const textColor = useColorModeValue('gray.700', 'gray.100');
  const highlightColor = useColorModeValue('teal.500', 'teal.300');
  const boxBg = useColorModeValue('white', 'gray.800');
  const stepBg = useColorModeValue('teal.50', 'teal.900');
  const pageBg = useColorModeValue('gray.50', 'gray.900');
  
  const buttonClass = isDark ? 'glow-on-hover' : '';
  const headerClass = isDark ? 'glow-text-subtle' : '';
  const boxClass = isDark ? 'glow-box' : '';
  
  const MotionBox = motion.create(Box);
  const featureVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };
  
  const features = [
    { icon: FaUsers, title: 'Group Chats', desc: 'Create and manage multiple group conversations with friends, family, or colleagues.' },
    { icon: FaImages, title: 'Media Sharing', desc: 'Share photos, videos, and files instantly with your contacts.' },
    { icon: FaGlobe, title: 'Vibrant Community', desc: 'Join themed communities, participate in discussions, and connect with like-minded people.' },
    { icon: FaPalette, title: 'Theme Options', desc: 'Customize your chat experience with different theme options.' }
  ];
  
  const steps = [
    { icon: FaUserPlus, title: 'Sign Up', desc: 'Create your account in seconds - no email verification required.' },
    { icon: FaUsers, title: 'Add Contacts', desc: 'Connect with friends by adding them to your contact list.' },
    { icon: FaComment, title: 'Start Chatting', desc: 'Send messages, share media, and express yourself.' },
    { icon: FaMagic, title: 'Customize Theme', desc: 'Choose between light, dark, or neon themes for your experience.' }
  ];

  // Auth related states
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [authForm, setAuthForm] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    name: ''
  });

  // Add state for scroll button visibility
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Add state for first visit
  const [isFirstVisit, setIsFirstVisit] = useState(true);
  
  // Add state for theme guide position
  const [guidePosition, setGuidePosition] = useState({ x: 0, y: 0 });
  
  // Add state for theme guide step
  const [guideStep, setGuideStep] = useState(0);
  
  // Add state for theme guide visibility
  const [showGuide, setShowGuide] = useState(false);

  // Add pricing interval state
  const [pricingInterval, setPricingInterval] = useState('monthly');

  // Show guide popup on every page load/refresh
  useEffect(() => {
    // Always show the guide on page load/refresh
    setShowGuide(true);
    
    // Set a timeout to hide the guide after 10 seconds if user doesn't interact
    const timeoutId = setTimeout(() => {
      if (showGuide) {
        setShowGuide(false);
      }
    }, 10000);
    
    return () => clearTimeout(timeoutId);
  }, []);
  
  // Update guide position based on step
  useEffect(() => {
    if (showGuide) {
      // Get the elements we need to position the guide near
      const themeSelector = document.querySelector('.theme-selector');
      const darkModeToggle = document.querySelector('.dark-mode-toggle');
      
      if (guideStep === 0 && themeSelector) {
        // Position for theme selector
        const rect = themeSelector.getBoundingClientRect();
        setGuidePosition({ 
          x: rect.left - 320, // Position to the left of the theme selector
          y: rect.top - 10
        });
      } else if (guideStep === 1 && darkModeToggle) {
        // Position for dark mode toggle
        const rect = darkModeToggle.getBoundingClientRect();
        setGuidePosition({ 
          x: rect.left - 320, // Position to the left of the dark mode toggle
          y: rect.top - 10
        });
      } else {
        // Hide guide after all steps
        setShowGuide(false);
      }
    }
  }, [guideStep, showGuide]);

  // Add scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleAuthSubmit = (type) => {
    // Here you would handle the authentication
    console.log(`${type} submitted:`, authForm);
    if (type === 'signup') {
      setIsSignUpOpen(false);
    } else {
      setIsSignInOpen(false);
    }
    onStartClick(); // Navigate to the user home page after auth
  };

  const renderAuthModal = (type) => (
    <Modal 
      isOpen={type === 'signup' ? isSignUpOpen : isSignInOpen} 
      onClose={() => type === 'signup' ? setIsSignUpOpen(false) : setIsSignInOpen(false)}
    >
      <ModalOverlay backdropFilter="blur(4px)" />
      <ModalContent bg={boxBg}>
        <ModalHeader color={textColor}>
          {type === 'signup' ? 'Create Account' : 'Welcome Back'}
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <VStack spacing={4}>
            {type === 'signup' && (
              <FormControl>
                <FormLabel color={textColor}>Name</FormLabel>
                <Input 
                  placeholder="Enter your name"
                  value={authForm.name}
                  onChange={(e) => setAuthForm({...authForm, name: e.target.value})}
                  bg={isDark ? "gray.700" : "white"}
                  borderColor={isDark ? "gray.600" : "gray.200"}
                />
              </FormControl>
            )}
            <FormControl>
              <FormLabel color={textColor}>Email</FormLabel>
              <Input 
                type="email"
                placeholder="Enter your email"
                value={authForm.email}
                onChange={(e) => setAuthForm({...authForm, email: e.target.value})}
                bg={isDark ? "gray.700" : "white"}
                borderColor={isDark ? "gray.600" : "gray.200"}
              />
            </FormControl>
            <FormControl>
              <FormLabel color={textColor}>Create Password</FormLabel>
              <InputGroup>
                <Input 
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter password"
                  value={authForm.password}
                  onChange={(e) => setAuthForm({...authForm, password: e.target.value})}
                  bg={isDark ? "gray.700" : "white"}
                  borderColor={isDark ? "gray.600" : "gray.200"}
                />
                <InputRightElement width="4.5rem">
                  <IconButton
                    h="1.75rem"
                    size="sm"
                    onClick={() => setShowPassword(!showPassword)}
                    icon={showPassword ? <FaEyeSlash /> : <FaEye />}
                    variant="ghost"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  />
                </InputRightElement>
              </InputGroup>
            </FormControl>
            {type === 'signup' && (
              <FormControl>
                <FormLabel color={textColor}>Confirm Password</FormLabel>
                <InputGroup>
                  <Input 
                    type={showPassword ? "text" : "password"}
                    placeholder="Confirm password"
                    value={authForm.confirmPassword}
                    onChange={(e) => setAuthForm({...authForm, confirmPassword: e.target.value})}
                    bg={isDark ? "gray.700" : "white"}
                    borderColor={isDark ? "gray.600" : "gray.200"}
                  />
                  <InputRightElement width="4.5rem">
                    <IconButton
                      h="1.75rem"
                      size="sm"
                      onClick={() => setShowPassword(!showPassword)}
                      icon={showPassword ? <FaEyeSlash /> : <FaEye />}
                      variant="ghost"
                      aria-label={showPassword ? "Hide password" : "Show password"}
                    />
                  </InputRightElement>
                </InputGroup>
              </FormControl>
            )}
          </VStack>
        </ModalBody>
        <ModalFooter>
          <Button 
            colorScheme="blue" 
            mr={3} 
            onClick={() => handleAuthSubmit(type)}
            className={buttonClass}
          >
            {type === 'signup' ? 'Sign Up' : 'Sign In'}
          </Button>
          <Button 
            variant="ghost" 
            onClick={() => type === 'signup' ? setIsSignUpOpen(false) : setIsSignInOpen(false)}
          >
            Cancel
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );

  // Add animation variants for the guide popup
  const guideVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        type: "spring", 
        stiffness: 300, 
        damping: 20 
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.8,
      transition: { duration: 0.2 }
    }
  };
  
  // Add animation for the arrow
  const arrowVariants = {
    initial: { x: 0, y: 0 },
    animate: { 
      x: [0, 10, 0], 
      y: [0, 5, 0],
      transition: { 
        repeat: Infinity, 
        duration: 1.5,
        ease: "easeInOut"
      }
    }
  };

  return (
    <Box 
      width="100vw" 
      height="100vh" 
      bg={pageBg} 
      overflow="auto"
      css={{
        '&::-webkit-scrollbar': {
          display: 'none'
        },
        msOverflowStyle: 'none',
        scrollbarWidth: 'none'
      }}
    >
      <Container maxW="100%" py={10} px={0}>
        {/* Navigation Bar */}
        <Flex 
          w="100%" 
          maxW="container.xl" mx="auto"
          justify="space-between" 
          align="center" 
          position="fixed"
          top={0}
          left={0}
          right={0}
          px={{ base: 4, lg: 2 }}
          py={4}
          bg={isDark ? 'rgba(26, 27, 30, 0.8)' : 'rgba(255, 255, 255, 0.8)'}
          backdropFilter="blur(10px)"
          borderBottom="1px"
          borderColor={isDark ? "rgba(255,255,255,0.1)" : "gray.200"}
          zIndex={1000}
        >
          <Heading as="h1" size="lg">
            <Text as="span" color="primary.500">M</Text>ood
            <Text as="span" color="primary.500">A</Text>venue
          </Heading>
          <HStack spacing={3}>
            <ThemeSelector className="theme-selector" />
            <Box borderLeft="1px" borderColor={isDark ? "rgba(255,255,255,0.1)" : "gray.200"} h="24px" mx={2} />
            <IconButton
              icon={isDark ? <FaMoon /> : <FaSun />}
              variant="ghost"
              onClick={toggleColorMode}
              aria-label="Toggle dark mode"
              color={textColor}
              className="dark-mode-toggle"
              _hover={{ bg: isDark ? 'whiteAlpha.200' : 'blackAlpha.50' }}
            />
            <Box borderLeft="1px" borderColor={isDark ? "rgba(255,255,255,0.1)" : "gray.200"} h="24px" mx={2} />
            <Button
              variant="ghost"
              onClick={() => setIsSignInOpen(true)}
              color={textColor}
              _hover={{ bg: isDark ? 'whiteAlpha.200' : 'blackAlpha.50' }}
            >
              Sign In
            </Button>
            <Button
              colorScheme="primary"
              onClick={() => setIsSignUpOpen(true)}
              bg="primary.500"
              color="white"
              _hover={{ bg: 'primary.600' }}
            >
              Sign Up
            </Button>
          </HStack>
        </Flex>

        {/* Main Content - Add top margin to account for fixed navbar */}
        <Box mt="100px" px={{ base: 4, lg: 20 }}>
          {/* Hero Section */}
          <Flex 
            direction={{ base: 'column', lg: 'row' }} 
            spacing={8} 
            align="center" 
            justify="space-between"
            mb={{ base: 16, lg: 0 }} 
            w="full"
            maxW="container.xl" mx="auto"
            gap={{ base: 12, lg: 8 }}
            minH={{ lg: "calc(100vh - 100px)" }}
            pb={{ lg: 10 }}
          >
            {/* Left Side - Hero Image */}
            <Box 
              flex={{ base: '1', lg: '1.2' }}
              position="relative"
              display={{ base: 'none', lg: 'block' }}
              pt={8}
              pr={4}
              maxW="800px"
            >
              {/* Background Elements */}
              <Box
                position="absolute"
                top="0"
                left="0"
                right="0"
                bottom="0"
                overflow="hidden"
                zIndex={0}
              >
                {/* Main Gradient Background */}
                <Box
                  position="absolute"
                  top="-20%"
                  left="-20%"
                  width="140%"
                  height="140%"
                  bgGradient="radial(circle at 30% 30%, primary.500 0%, transparent 70%)"
                  opacity={0.15}
                  filter="blur(40px)"
                  transform="rotate(-15deg)"
                />
                
                {/* Additional Decorative Elements */}
                <Circle
                  position="absolute"
                  top="15%"
                  left="10%"
                  size="150px"
                  bg="primary.500"
                  opacity={0.1}
                  filter="blur(30px)"
                  className="float-animation"
                  style={{ animationDelay: '0.5s', animationDuration: '8s' }}
                />
                <Box
                  position="absolute"
                  bottom="20%"
                  right="5%"
                  width="180px"
                  height="180px"
                  bg="primary.400"
                  opacity={0.1}
                  filter="blur(35px)"
                  transform="rotate(45deg)"
                  className="float-animation"
                  style={{ animationDelay: '0.8s', animationDuration: '10s' }}
                />
              </Box>
              
              {/* Main Chat Interface */}
              <Box
                position="relative"
                maxW="600px"
                mx="auto"
                transform="perspective(1000px) rotateY(-8deg) rotateX(2deg)"
                transformOrigin="center center"
                className="float-animation"
                style={{ animationDuration: '8s' }}
              >
                {/* Chat Container */}
                <Box
                  bg={isDark ? 'gray.800' : 'white'}
                  borderRadius="2xl"
                  boxShadow="2xl"
                  overflow="hidden"
                  className={boxClass}
                  border="1px solid"
                  borderColor={isDark ? 'gray.700' : 'gray.200'}
                >
                  {/* Chat Header */}
                  <Flex 
                    bg={isDark ? 'gray.700' : 'gray.50'} 
                    p={4} 
                    align="center" 
                    justify="space-between"
                    borderBottom="1px"
                    borderColor={isDark ? 'gray.600' : 'gray.200'}
                  >
                    <HStack spacing={4}>
                      <Circle size="40px" bg="primary.500">
                        <Icon as={FaUsers} color="white" boxSize={5} />
                      </Circle>
                      <Box>
                        <Text fontWeight="bold" color={textColor}>Team Collaboration</Text>
                        <Text fontSize="sm" color={isDark ? "gray.400" : "gray.500"}>8 members online</Text>
                      </Box>
                    </HStack>
                    <HStack spacing={3}>
                      <Icon as={FaImages} color="primary.500" boxSize={4} />
                      <Icon as={FaPalette} color="primary.500" boxSize={4} />
                    </HStack>
                  </Flex>

                  {/* Chat Messages */}
                  <VStack spacing={4} p={4} align="stretch" bg={isDark ? 'gray.800' : 'white'}>
                    <HStack align="start" spacing={3}>
                      <Circle size="32px" bg="blue.500">
                        <Text color="white" fontSize="sm">E</Text>
                      </Circle>
                      <Box
                        bg={isDark ? "gray.700" : "gray.100"}
                        p={3}
                        borderRadius="lg"
                        maxW="80%"
                      >
                        <Text color={textColor} fontSize="sm" fontWeight="medium">
                          Hey team! I've just pushed the new UI updates 🎨
                        </Text>
                      </Box>
                    </HStack>

                    <HStack align="start" spacing={3} justify="flex-end">
                      <Box
                        bg="primary.500"
                        p={3}
                        borderRadius="lg"
                        maxW="80%"
                      >
                        <Text color="white" fontSize="sm">
                          Great work! The new design looks amazing ✨
                        </Text>
                      </Box>
                      <Circle size="32px" bg="green.500">
                        <Text color="white" fontSize="sm">S</Text>
                      </Circle>
                    </HStack>

                    <HStack align="start" spacing={3}>
                      <Circle size="32px" bg="purple.500">
                        <Text color="white" fontSize="sm">M</Text>
                      </Circle>
                      <Box
                        bg={isDark ? "gray.700" : "gray.100"}
                        p={3}
                        borderRadius="lg"
                        maxW="80%"
                      >
                        <Text color={textColor} fontSize="sm">
                          The responsive layout works perfectly! 💫
                        </Text>
                      </Box>
                    </HStack>
                  </VStack>

                  {/* Chat Input */}
                  <Box p={4} borderTop="1px" borderColor={isDark ? "gray.600" : "gray.200"}>
                    <HStack spacing={3}>
                      <Input
                        placeholder="Type your message..."
                        bg={isDark ? "gray.700" : "white"}
                        borderColor={isDark ? "gray.600" : "gray.200"}
                        _focus={{
                          borderColor: "primary.500",
                          boxShadow: "0 0 0 1px var(--chakra-colors-primary-500)"
                        }}
                      />
                      <IconButton
                        icon={<Icon as={FaComment} />}
                        colorScheme="primary"
                        borderRadius="full"
                        aria-label="Send message"
                      />
                    </HStack>
                  </Box>
                </Box>

                {/* Floating Elements */}
                <Box
                  position="absolute"
                  top="-40px"
                  right="-30px"
                  className="float-animation"
                  style={{ animationDelay: '0.3s', animationDuration: '6s' }}
                >
                  <HStack spacing={3}>
                    <Circle
                      size="45px"
                      bg={isDark ? 'gray.800' : 'white'}
                      boxShadow="lg"
                      className={boxClass}
                    >
                      <Icon as={FaPalette} color="primary.500" boxSize={5} />
                    </Circle>
                    <Circle
                      size="35px"
                      bg={isDark ? 'gray.800' : 'white'}
                      boxShadow="lg"
                      className={boxClass}
                    >
                      <Icon as={FaImages} color="primary.500" boxSize={4} />
                    </Circle>
                  </HStack>
                </Box>

                {/* Status Indicators */}
                <HStack 
                  spacing={4} 
                  position="absolute" 
                  bottom="-30px" 
                  left="20px"
                  className="float-animation"
                  style={{ animationDelay: '0.6s', animationDuration: '7s' }}
                >
                  <Box
                    bg={isDark ? 'gray.800' : 'white'}
                    p={2}
                    borderRadius="lg"
                    boxShadow="lg"
                    className={boxClass}
                  >
                    <HStack spacing={2}>
                      <Circle size="8px" bg="green.400" />
                      <Text fontSize="sm" color={textColor}>8 online</Text>
                    </HStack>
                  </Box>
                  <Box
                    bg={isDark ? 'gray.800' : 'white'}
                    p={2}
                    borderRadius="lg"
                    boxShadow="lg"
                    className={boxClass}
                  >
                    <HStack spacing={2}>
                      <Icon as={FaComment} color="primary.500" boxSize={3} />
                      <Text fontSize="sm" color={textColor}>3 typing</Text>
                    </HStack>
                  </Box>
                </HStack>

                {/* Additional Floating Elements */}
                <Circle
                  position="absolute"
                  top="50%"
                  right="-50px"
                  size="100px"
                  bg="primary.500"
                  opacity={0.1}
                  filter="blur(20px)"
                  className="float-animation"
                  style={{ animationDelay: '1s', animationDuration: '9s' }}
                />
              </Box>
            </Box>

            {/* Right Side - Content */}
            <VStack 
              flex="1" 
              spacing={8}
              align={{ base: 'center', lg: 'start' }}
              textAlign={{ base: 'center', lg: 'left' }}
              pl={{ lg: 4 }}
              maxW={{ lg: '600px' }}
              justify="center"
            >
              <Heading 
                as="h2" 
                size="3xl" 
                className={headerClass}
                bgGradient="linear(to-r, primary.500, primary.300)"
                bgClip="text"
                lineHeight="1.2"
              >
                Chat in your Vibe 🥂
              </Heading>
              <VStack 
                spacing={4} 
                align={{ base: 'center', lg: 'start' }}
              >
                <Text fontSize="xl" color={textColor}>
                  Express yourself through personalized themes and emotional connections!!
                </Text>
                <Text fontSize="lg" color={textColor} lineHeight="tall" textAlign="justify">
                  MoodAvenue is more than just a chat app - it's your digital space to connect, share, and express. 
                  With customizable themes that match your mood, vibrant communities that share your interests, 
                  and powerful features that make communication seamless.
                </Text>
                <HStack spacing={4} wrap="wrap" justify={{ base: 'center', lg: 'start' }}>
                  <Tag size="lg" variant="subtle" bg={isDark ? "whiteAlpha.200" : "blackAlpha.50"} color={textColor}>
                    <TagLeftIcon as={FaUsers} />
                    <TagLabel>Group Chats</TagLabel>
                  </Tag>
                  <Tag size="lg" variant="subtle" bg={isDark ? "whiteAlpha.200" : "blackAlpha.50"} color={textColor}>
                    <TagLeftIcon as={FaGlobe} />
                    <TagLabel>Communities</TagLabel>
                  </Tag>
                  <Tag size="lg" variant="subtle" bg={isDark ? "whiteAlpha.200" : "blackAlpha.50"} color={textColor}>
                    <TagLeftIcon as={FaPalette} />
                    <TagLabel>Custom Themes</TagLabel>
                  </Tag>
                </HStack>
              </VStack>
              <HStack spacing={4} pt={4}>
                <Button 
                  size="lg" 
                  colorScheme="primary"
                  onClick={() => setIsSignInOpen(true)} 
                  className={buttonClass}
                  _hover={{ transform: 'translateY(-2px)' }}
                  bg="primary.500"
                  color="white"
                  leftIcon={<Icon as={FaComment} />}
                >
                  Start Chatting Now
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => document.getElementById('features').scrollIntoView({ behavior: 'smooth' })}
                  _hover={{ transform: 'translateY(-2px)' }}
                  color={textColor}
                  borderColor={isDark ? "whiteAlpha.300" : "gray.300"}
                >
                  Learn More
                </Button>
              </HStack>
            </VStack>
          </Flex>

          {/* Key Features Section */}
          <VStack spacing={16} mb={20} w="full" maxW="container.xl" mx="auto">
            <Heading as="h2" size="xl" className={headerClass}>
              Key Features
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8} width="full">
              {[
                {
                  icon: FaUsers,
                  title: "Group Chats",
                  description: "Create and manage multiple group conversations with friends, family, or colleagues."
                },
                {
                  icon: FaImages,
                  title: "Media Sharing",
                  description: "Share photos, videos, and files instantly with your contacts."
                },
                {
                  icon: FaGlobe,
                  title: "Vibrant Community",
                  description: "Join themed communities, participate in discussions, and connect with like-minded people."
                },
                {
                  icon: FaPalette,
                  title: "Theme Options",
                  description: "Customize your chat experience with different theme options."
                },
                {
                  icon: FaHeadset,
                  title: "24/7 Support",
                  description: "Get help anytime with our dedicated customer support team."
                },
                {
                  icon: FaMagic,
                  title: "Smart Features",
                  description: "Enjoy AI-powered message suggestions and smart notifications."
                }
              ].map((feature, index) => (
                <Box
                  key={index}
                  bg={isDark ? 'gray.800' : 'white'}
                  p={6}
                  borderRadius="lg"
                  boxShadow="md"
                  className={boxClass}
                  _hover={{ transform: 'translateY(-4px)', transition: 'all 0.3s' }}
                >
                  <VStack spacing={4} align="start">
                    <Circle size="50px" bg="primary.500">
                      <Icon as={feature.icon} color="white" boxSize={6} />
                    </Circle>
                    <Heading size="md" color={textColor}>
                      {feature.title}
                    </Heading>
                    <Text color={textColor}>
                      {feature.description}
                    </Text>
                  </VStack>
                </Box>
              ))}
            </SimpleGrid>
          </VStack>

          {/* How It Works Section */}
          <VStack spacing={16} mb={20} w="full" maxW="container.xl" mx="auto">
            <Heading as="h2" size="xl" className={headerClass}>
              How It Works
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8} width="full">
              {[
                {
                  icon: FaUserPlus,
                  title: "Sign Up",
                  description: "Create your account in seconds - no email verification required."
                },
                {
                  icon: FaUsers,
                  title: "Add Contacts",
                  description: "Connect with friends by adding them to your contact list."
                },
                {
                  icon: FaComment,
                  title: "Start Chatting",
                  description: "Send messages, share media, and express yourself."
                },
                {
                  icon: FaMagic,
                  title: "Customize Theme",
                  description: "Choose between light, dark, or neon themes for your experience."
                }
              ].map((step, index) => (
                <Box
                  key={index}
                  bg={isDark ? 'gray.800' : 'white'}
                  p={6}
                  borderRadius="lg"
                  boxShadow="md"
                  className={boxClass}
                  position="relative"
                >
                  <VStack spacing={4} align="center" textAlign="center">
                    <Circle size="60px" bg="primary.500">
                      <Icon as={step.icon} color="white" boxSize={7} />
                    </Circle>
                    <Heading size="md" color={textColor}>
                      {step.title}
                    </Heading>
                    <Text color={textColor}>
                      {step.description}
                    </Text>
                    {index < 3 && (
                      <Box
                        position="absolute"
                        right="-20px"
                        top="50%"
                        transform="translateY(-50%)"
                        display={{ base: 'none', lg: 'block' }}
                      >
                        <Icon as={FaArrowRight} color="primary.500" boxSize={5} />
                      </Box>
                    )}
                  </VStack>
                </Box>
              ))}
            </SimpleGrid>
          </VStack>

          {/* User Stats Section */}
          <Box
            w="full"
            maxW="container.xl"
            mx="auto"
            bg={isDark ? 'gray.800' : 'white'}
            p={{ base: 8, lg: 20 }}
            borderRadius="2xl"
            mb={20}
            className={boxClass}
          >
            <VStack spacing={8} mb={8}>
              <Heading as="h2" size="xl" className={headerClass}>
                Our Growing Community
              </Heading>
              <Text fontSize="lg" color={textColor} textAlign="center" maxW="2xl">
                Join millions of users who are already experiencing the future of communication
              </Text>
            </VStack>
            <SimpleGrid columns={{ base: 2, md: 4 }} spacing={8} width="full">
              {[
                { number: "1M+", label: "Active Users" },
                { number: "50K+", label: "Daily Messages" },
                { number: "100+", label: "Countries" },
                { number: "24/7", label: "Support" }
              ].map((stat, index) => (
                <VStack key={index} spacing={2}>
                  <Heading size="2xl" color="primary.500">
                    {stat.number}
                  </Heading>
                  <Text color={textColor} fontSize="lg">
                    {stat.label}
                  </Text>
                </VStack>
              ))}
            </SimpleGrid>
          </Box>

          {/* Premium Pricing Section */}
          <VStack spacing={16} mb={20} w="full" maxW="container.xl" mx="auto">
            <Heading as="h2" size="xl" className={headerClass}>
              Premium Plans
            </Heading>
            
            {/* Pricing Toggle */}
            <HStack spacing={4} align="center">
              <Text color={textColor}>Monthly</Text>
              <Switch
                colorScheme="primary"
                size="lg"
                onChange={(e) => setPricingInterval(e.target.checked ? 'yearly' : 'monthly')}
                isChecked={pricingInterval === 'yearly'}
              />
              <HStack>
                <Text color={textColor}>Yearly</Text>
                <Badge colorScheme="green" variant="subtle">Save 20%</Badge>
              </HStack>
            </HStack>

            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8} width="full">
              {[
                {
                  title: "Basic",
                  price: "Free",
                  features: [
                    "Basic chat features",
                    "Standard themes",
                    "Group chats up to 100 members",
                    "Basic file sharing"
                  ]
                },
                {
                  title: "Pro",
                  monthlyPrice: "$9.99",
                  yearlyPrice: "$7.99",
                  features: [
                    "All Basic features",
                    "Premium themes",
                    "Group chats up to 500 members",
                    "Advanced file sharing",
                    "Priority support",
                    "Custom emojis"
                  ],
                  isPopular: true
                },
                {
                  title: "Enterprise",
                  monthlyPrice: "Custom",
                  yearlyPrice: "Custom",
                  features: [
                    "All Pro features",
                    "Unlimited group members",
                    "Custom integrations",
                    "Dedicated support",
                    "Advanced analytics",
                    "Custom branding"
                  ]
                }
              ].map((plan, index) => (
                <Box
                  key={index}
                  bg={isDark ? 'gray.800' : 'white'}
                  p={8}
                  borderRadius="lg"
                  boxShadow="md"
                  className={boxClass}
                  border={plan.isPopular ? "2px solid" : "1px solid"}
                  borderColor={plan.isPopular ? "primary.500" : isDark ? "gray.700" : "gray.200"}
                  position="relative"
                  height="100%"
                  display="flex"
                  flexDirection="column"
                >
                  {plan.isPopular && (
                    <Box
                      position="absolute"
                      top="-12px"
                      left="50%"
                      transform="translateX(-50%)"
                      bg="primary.500"
                      color="white"
                      px={4}
                      py={1}
                      borderRadius="full"
                      fontSize="sm"
                    >
                      Most Popular
                    </Box>
                  )}
                  <VStack spacing={6} align="start" flex="1">
                    <Heading size="lg" color={textColor}>
                      {plan.title}
                    </Heading>
                    <VStack spacing={1} align="start">
                      <Heading size="2xl" color="primary.500">
                        {plan.price || (pricingInterval === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice)}
                      </Heading>
                      {!plan.price && (
                        <Text fontSize="sm" color={isDark ? "gray.400" : "gray.500"}>
                          {pricingInterval === 'monthly' ? 'per month' : 'per month, billed yearly'}
                        </Text>
                      )}
                    </VStack>
                    <VStack spacing={4} align="start" width="full" flex="1">
                      {plan.features.map((feature, featureIndex) => (
                        <HStack key={featureIndex} spacing={3}>
                          <Icon as={FaCheck} color="primary.500" />
                          <Text color={textColor}>{feature}</Text>
                        </HStack>
                      ))}
                    </VStack>
                    <Button
                      width="full"
                      colorScheme="primary"
                      size="lg"
                      className={buttonClass}
                      mt="auto"
                    >
                      Get Started
                    </Button>
                  </VStack>
                </Box>
              ))}
            </SimpleGrid>
          </VStack>

          {/* Testimonials Section */}
          <VStack spacing={16} mb={20} w="full">
            <Heading as="h2" size="xl" className={headerClass}>
              What Our Users Say
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8} width="full" maxW="container.xl" mx="auto">
              {[
                {
                  text: "The theme customization is amazing! I love how I can match the chat to my mood.",
                  author: "Sarah K.",
                  role: "Digital Artist"
                },
                {
                  text: "Best group chat experience I've had. The interface is so intuitive.",
                  author: "Mike R.",
                  role: "Project Manager"
                },
                {
                  text: "The dark mode is perfect for late-night conversations.",
                  author: "Alex T.",
                  role: "Developer"
                }
              ].map((testimonial, index) => (
                <Box
                  key={index}
                  bg={isDark ? 'gray.800' : 'white'}
                  p={6}
                  borderRadius="lg"
                  boxShadow="md"
                  className={boxClass}
                >
                  <Icon as={FaQuoteLeft} color="primary.500" mb={4} />
                  <Text color={textColor} mb={4} fontSize="lg">
                    "{testimonial.text}"
                  </Text>
                  <HStack>
                    <Circle size="40px" bg="primary.500">
                      <Text color="white" fontWeight="bold">
                        {testimonial.author[0]}
                      </Text>
                    </Circle>
                    <Box>
                      <Text fontWeight="bold" color={textColor}>
                        {testimonial.author}
                      </Text>
                      <Text fontSize="sm" color={isDark ? "gray.400" : "gray.600"}>
                        {testimonial.role}
                      </Text>
                    </Box>
                  </HStack>
                </Box>
              ))}
            </SimpleGrid>
          </VStack>

          {/* FAQ Section */}
          <VStack spacing={16} mb={20} w="full" maxW="container.xl" mx="auto">
            <Heading as="h2" size="xl" className={headerClass} mb={8}>
              Frequently Asked Questions
            </Heading>
            <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={{ base: 8, lg: 16 }} width="full">
              {/* Left Column */}
              <Box>
                <Accordion allowMultiple width="full">
                  {[
                    {
                      question: "Is MoodAvenue free to use?",
                      answer: "Yes, MoodAvenue is completely free for personal use. We also offer premium features for power users who need advanced capabilities."
                    },
                    {
                      question: "How secure are my conversations?",
                      answer: "We use industry-standard end-to-end encryption to ensure your conversations remain private and secure. Your messages can only be read by the intended recipients."
                    },
                    {
                      question: "Can I create custom themes?",
                      answer: "Absolutely! MoodAvenue offers a wide range of pre-built themes, and premium users can create and share their own custom themes with the community."
                    },
                    {
                      question: "What's the maximum group size?",
                      answer: "Free accounts can create groups with up to 100 members. Premium accounts can create groups with up to 1000 members with additional administrative features."
                    }
                  ].map((faq, index) => (
                    <AccordionItem key={index} border="none" mb={6}>
                      <AccordionButton
                        bg={isDark ? 'gray.800' : 'white'}
                        _hover={{ bg: isDark ? 'gray.700' : 'gray.50' }}
                        borderRadius="lg"
                        p={4}
                      >
                        <Box flex="1" textAlign="left" fontWeight="medium" color={textColor}>
                          {faq.question}
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                      <AccordionPanel py={6} px={4} color={textColor}>
                        {faq.answer}
                      </AccordionPanel>
                    </AccordionItem>
                  ))}
                </Accordion>
              </Box>

              {/* Right Column */}
              <Box>
                <Accordion allowMultiple width="full">
                  {[
                    {
                      question: "Can I use MoodAvenue on mobile devices?",
                      answer: "Yes! MoodAvenue is fully responsive and works seamlessly across all devices - desktop, tablet, and mobile. You can access all features from any device."
                    },
                    {
                      question: "How do I join communities?",
                      answer: "You can browse and join communities directly from the app. Simply go to the Communities tab, find ones that interest you, and click 'Join'. You can also create your own communities!"
                    },
                    {
                      question: "Is there a file sharing limit?",
                      answer: "Free accounts can share files up to 100MB in size. Premium accounts can share files up to 1GB and have increased storage capacity for media sharing."
                    },
                    {
                      question: "Can I delete or edit messages?",
                      answer: "Yes, you can edit or delete your messages within 24 hours of sending them. Group administrators have additional message management capabilities."
                    }
                  ].map((faq, index) => (
                    <AccordionItem key={index} border="none" mb={6}>
                      <AccordionButton
                        bg={isDark ? 'gray.800' : 'white'}
                        _hover={{ bg: isDark ? 'gray.700' : 'gray.50' }}
                        borderRadius="lg"
                        p={4}
                      >
                        <Box flex="1" textAlign="left" fontWeight="medium" color={textColor}>
                          {faq.question}
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                      <AccordionPanel py={6} px={4} color={textColor}>
                        {faq.answer}
                      </AccordionPanel>
                    </AccordionItem>
                  ))}
                </Accordion>
              </Box>
            </SimpleGrid>
          </VStack>

          {/* Newsletter Section */}
          <Box
            w="full"
            maxW="container.xl"
            mx="auto"
            bg={isDark ? 'gray.800' : 'white'}
            p={{ base: 8, lg: 20 }}
            borderRadius="2xl"
            mb={20}
            className={boxClass}
            position="relative"
            overflow="hidden"
          >
            {/* Background Elements */}
            <Box
              position="absolute"
              top="-20%"
              left="-10%"
              width="120%"
              height="140%"
              bgGradient="radial(circle at 30% 30%, primary.500 0%, transparent 70%)"
              opacity={0.1}
              filter="blur(40px)"
              transform="rotate(-15deg)"
            />
            
            <Flex 
              direction={{ base: 'column', lg: 'row' }} 
              align="center" 
              justify="space-between"
              gap={{ base: 8, lg: 16 }}
              position="relative"
              zIndex={1}
            >
              <VStack 
                spacing={4} 
                align={{ base: 'center', lg: 'start' }}
                flex="1"
              >
                <Heading size="xl" className={headerClass}>
                  Stay Updated with MoodAvenue
                </Heading>
                <Text 
                  color={textColor} 
                  fontSize="lg"
                  textAlign={{ base: 'center', lg: 'left' }}
                >
                  Get the latest features, updates, and community news delivered directly to your inbox.
                </Text>
              </VStack>
              <Box flex="1" maxW={{ lg: '500px' }}>
                <HStack 
                  spacing={4}
                  w="full"
                  bg={isDark ? 'gray.700' : 'white'}
                  p={2}
                  borderRadius="lg"
                  boxShadow="lg"
                >
                  <Input
                    placeholder="Enter your email"
                    size="lg"
                    bg={isDark ? 'gray.700' : 'white'}
                    border="none"
                    _focus={{
                      boxShadow: 'none'
                    }}
                  />
                  <Button
                    colorScheme="primary"
                    size="lg"
                    px={8}
                    className={buttonClass}
                  >
                    Subscribe
                  </Button>
                </HStack>
                <Text 
                  fontSize="sm" 
                  color={isDark ? "gray.400" : "gray.500"} 
                  mt={2}
                  textAlign="center"
                >
                  No spam, unsubscribe at any time
                </Text>
              </Box>
            </Flex>
          </Box>

          {/* Footer */}
          <Box 
            as="footer" 
            w="full"
            maxW="container.xl" mx="auto"
            bg={isDark ? 'gray.800' : 'white'}
            borderTop="1px"
            borderColor={isDark ? "rgba(255,255,255,0.1)" : "gray.200"}
            borderRadius="2xl"
            overflow="hidden"
          >
            <Container maxW="container.xl" py={16} px={{ base: 4, lg: 8 }}>
              <SimpleGrid 
                columns={{ base: 1, md: 2, lg: 4 }} 
                spacing={{ base: 8, lg: 16 }}
                mb={16}
              >
                {/* Company Info */}
                <VStack align="start" spacing={6}>
                  <Heading size="lg" color={highlightColor}>
                    <Text as="span" color="primary.500">M</Text>ood
                    <Text as="span" color="primary.500">A</Text>venue
                  </Heading>
                  <Text color={textColor} fontSize="md" maxW="300px">
                    Express yourself through personalized themes and emotional connections in our vibrant chat community.
                  </Text>
                  <HStack spacing={6} color={textColor}>
                    <Icon 
                      as={FaTwitter} 
                      boxSize={5} 
                      cursor="pointer" 
                      _hover={{ color: 'primary.500', transform: 'translateY(-2px)' }}
                      transition="all 0.3s"
                    />
                    <Icon 
                      as={FaGithub} 
                      boxSize={5} 
                      cursor="pointer" 
                      _hover={{ color: 'primary.500', transform: 'translateY(-2px)' }}
                      transition="all 0.3s"
                    />
                    <Icon 
                      as={FaLinkedin} 
                      boxSize={5} 
                      cursor="pointer" 
                      _hover={{ color: 'primary.500', transform: 'translateY(-2px)' }}
                      transition="all 0.3s"
                    />
                    <Icon 
                      as={FaInstagram} 
                      boxSize={5} 
                      cursor="pointer" 
                      _hover={{ color: 'primary.500', transform: 'translateY(-2px)' }}
                      transition="all 0.3s"
                    />
                  </HStack>
                </VStack>

                {/* Product */}
                <VStack align="start" spacing={4}>
                  <Text fontWeight="bold" color={textColor} fontSize="lg" mb={2}>
                    Product
                  </Text>
                  <Button 
                    variant="link" 
                    color={textColor} 
                    _hover={{ color: 'primary.500', transform: 'translateX(4px)' }}
                    transition="all 0.3s"
                  >
                    Features
                  </Button>
                  <Button 
                    variant="link" 
                    color={textColor} 
                    _hover={{ color: 'primary.500', transform: 'translateX(4px)' }}
                    transition="all 0.3s"
                  >
                    Pricing
                  </Button>
                  <Button 
                    variant="link" 
                    color={textColor} 
                    _hover={{ color: 'primary.500', transform: 'translateX(4px)' }}
                    transition="all 0.3s"
                  >
                    Tutorial
                  </Button>
                  <Button 
                    variant="link" 
                    color={textColor} 
                    _hover={{ color: 'primary.500', transform: 'translateX(4px)' }}
                    transition="all 0.3s"
                  >
                    Updates
                  </Button>
                </VStack>

                {/* Support */}
                <VStack align="start" spacing={4}>
                  <Text fontWeight="bold" color={textColor} fontSize="lg" mb={2}>
                    Support
                  </Text>
                  <Button 
                    variant="link" 
                    color={textColor} 
                    _hover={{ color: 'primary.500', transform: 'translateX(4px)' }}
                    transition="all 0.3s"
                  >
                    Help Center
                  </Button>
                  <Button 
                    variant="link" 
                    color={textColor} 
                    _hover={{ color: 'primary.500', transform: 'translateX(4px)' }}
                    transition="all 0.3s"
                  >
                    Terms of Service
                  </Button>
                  <Button 
                    variant="link" 
                    color={textColor} 
                    _hover={{ color: 'primary.500', transform: 'translateX(4px)' }}
                    transition="all 0.3s"
                  >
                    Privacy Policy
                  </Button>
                  <Button 
                    variant="link" 
                    color={textColor} 
                    _hover={{ color: 'primary.500', transform: 'translateX(4px)' }}
                    transition="all 0.3s"
                  >
                    Contact Us
                  </Button>
                </VStack>

                {/* Contact */}
                <VStack align="start" spacing={4}>
                  <Text fontWeight="bold" color={textColor} fontSize="lg" mb={2}>
                    Contact
                  </Text>
                  <HStack spacing={3}>
                    <Icon as={FaHeadset} color="primary.500" />
                    <Text color={textColor}>support@moodavenue.com</Text>
                  </HStack>
                  <HStack spacing={3}>
                    <Icon as={FaGlobe} color="primary.500" />
                    <Text color={textColor}>+1 (555) 123-4567</Text>
                  </HStack>
                  <Box color={textColor}>
                    <Text>947 MAP Square</Text>
                    <Text>New York, NY, 94718</Text>
                    <Text>United States</Text>
                  </Box>
                </VStack>
              </SimpleGrid>

              {/* Copyright */}
              <Flex 
                borderTop="1px" 
                borderColor={isDark ? "rgba(255,255,255,0.1)" : "gray.200"}
                pt={8}
                justify="space-between"
                align="center"
                flexDir={{ base: 'column', lg: 'row' }}
                gap={4}
              >
                <Text color={textColor} fontSize="sm">
                  © 2025 MoodAvenue. All rights reserved.
                </Text>
                <HStack spacing={8}>
                  <Button 
                    variant="link" 
                    size="sm" 
                    color={textColor} 
                    _hover={{ color: 'primary.500' }}
                  >
                    Terms
                  </Button>
                  <Button 
                    variant="link" 
                    size="sm" 
                    color={textColor} 
                    _hover={{ color: 'primary.500' }}
                  >
                    Privacy
                  </Button>
                  <Button 
                    variant="link" 
                    size="sm" 
                    color={textColor} 
                    _hover={{ color: 'primary.500' }}
                  >
                    Cookies
                  </Button>
                </HStack>
              </Flex>
            </Container>
          </Box>
        </Box>

        {/* Auth Modals */}
        {renderAuthModal('signup')}
        {renderAuthModal('signin')}

        {/* Theme Guide Popup */}
        <AnimatePresence>
          {showGuide && (
            <motion.div
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={guideVariants}
              style={{
                position: 'fixed',
                top: `${guidePosition.y}px`,
                left: `${guidePosition.x}px`,
                zIndex: 1000,
              }}
            >
              <Box
                bg={isDark ? "gray.800" : "white"}
                p={4}
                borderRadius="lg"
                boxShadow="xl"
                maxW="300px"
                border="2px"
                borderColor="primary.500"
                className="guide-popup"
                position="relative"
              >
                {/* Arrow pointing to the element */}
                {guideStep === 0 && (
                  <motion.div
                    variants={arrowVariants}
                    initial="initial"
                    animate="animate"
                    style={{
                      position: 'absolute',
                      top: '50%',
                      right: '-20px',
                      width: 0,
                      height: 0,
                      borderTop: '15px solid transparent',
                      borderBottom: '15px solid transparent',
                      borderLeft: `20px solid ${isDark ? '#2D3748' : 'white'}`,
                      transform: 'translateY(-50%)',
                      zIndex: -1,
                    }}
                  />
                )}
                
                {guideStep === 1 && (
                  <motion.div
                    variants={arrowVariants}
                    initial="initial"
                    animate="animate"
                    style={{
                      position: 'absolute',
                      top: '50%',
                      right: '-20px',
                      width: 0,
                      height: 0,
                      borderTop: '15px solid transparent',
                      borderBottom: '15px solid transparent',
                      borderLeft: `20px solid ${isDark ? '#2D3748' : 'white'}`,
                      transform: 'translateY(-50%)',
                      zIndex: -1,
                    }}
                  />
                )}
                
                <VStack spacing={3} align="start">
                  <HStack spacing={2} width="100%" justify="space-between">
                    <Heading size="sm" color="primary.500">Theme Guide</Heading>
                    <IconButton
                      icon={<Icon as={FaTimes} />}
                      size="xs"
                      variant="ghost"
                      onClick={() => setShowGuide(false)}
                      aria-label="Close guide"
                    />
                  </HStack>
                  
                  {guideStep === 0 && (
                    <>
                      <Text fontSize="sm">
                        <Icon as={FaPalette} color="primary.500" mr={2} />
                        <strong>Theme Selector:</strong> Choose from multiple themes to match your style
                      </Text>
                      <HStack width="100%" justify="space-between">
                        <Text fontSize="xs" color={isDark ? "gray.400" : "gray.500"}>
                          Step 1 of 2
                        </Text>
                        <Button 
                          size="sm" 
                          colorScheme="primary" 
                          onClick={() => setGuideStep(1)}
                          rightIcon={<Icon as={FaArrowRight} />}
                        >
                          Next
                        </Button>
                      </HStack>
                    </>
                  )}
                  
                  {guideStep === 1 && (
                    <>
                      <Text fontSize="sm">
                        <Icon as={isDark ? FaMoon : FaSun} color="primary.500" mr={2} />
                        <strong>Dark/Light Mode:</strong> Toggle between dark and light mode for comfortable viewing
                      </Text>
                      <HStack width="100%" justify="space-between">
                        <Text fontSize="xs" color={isDark ? "gray.400" : "gray.500"}>
                          Step 2 of 2
                        </Text>
                        <Button 
                          size="sm" 
                          colorScheme="primary" 
                          onClick={() => setGuideStep(2)}
                        >
                          Got it
                        </Button>
                      </HStack>
                    </>
                  )}
                </VStack>
              </Box>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </Box>
  )
}

function App() {
  const { colorMode, toggleColorMode } = useColorMode()
  const { themeVariant } = useThemeVariant()
  const isDarkMode = colorMode === 'dark'
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  
  const [dynamicTheme, setDynamicTheme] = useState(theme)
  
  useEffect(() => {
    const currentThemeData = getThemeByVariant(themeVariant)
    const newTheme = extendTheme({
      config: theme.config,
      ...currentThemeData
    })
    setDynamicTheme(newTheme)
    
    // Remove any existing theme-specific styles
    const existingStyle = document.getElementById('theme-specific-styles')
    if (existingStyle) {
      existingStyle.remove()
    }
    
    // Add theme-specific CSS classes
    const style = document.createElement('style')
    style.id = 'theme-specific-styles'
    
    if (themeVariant === 'neonFuture') {
      style.textContent = `
        .glow-text {
          animation: glow 1.5s ease-in-out infinite alternate;
        }
        .glow-on-hover:hover {
          box-shadow: 0 0 20px ${currentThemeData.colors.primary[500]};
        }
      `
    } else if (themeVariant === 'pixelPlayground') {
      style.textContent = `
        * {
          image-rendering: pixelated;
        }
        button:hover {
          transform: translateY(-2px);
        }
      `
    } else if (themeVariant === 'otakuRealm') {
      style.textContent = `
        .float-effect {
          animation: float 3s ease-in-out infinite;
        }
      `
    }
    
    document.head.appendChild(style)
    
    return () => {
      if (document.getElementById('theme-specific-styles')) {
        document.getElementById('theme-specific-styles').remove()
      }
    }
  }, [themeVariant])

  const handleStartClick = () => {
    setIsAuthenticated(true)
  }
  
  const handleSignOut = () => {
    setIsAuthenticated(false)
  }

  return (
    <ChakraProvider theme={dynamicTheme}>
      <Routes>
        <Route 
          path="/" 
          element={
            isAuthenticated ? (
              <Navigate to="/home" replace />
            ) : (
              <SimpleLanding onStartClick={handleStartClick} />
            )
          } 
        />
        <Route 
          path="/home" 
          element={
            isAuthenticated ? (
              <UserHomePageNew onSignOut={handleSignOut} />
            ) : (
              <Navigate to="/" replace />
            )
          } 
        />
        <Route 
          path="/chat" 
          element={
            isAuthenticated ? (
              <ChatPage onSignOut={handleSignOut} />
            ) : (
              <Navigate to="/" replace />
            )
          } 
        />
      </Routes>
    </ChakraProvider>
  )
}

const AppWithThemeProvider = () => (
  <BrowserRouter>
    <ThemeVariantProvider>
      <App />
    </ThemeVariantProvider>
  </BrowserRouter>
)

export default AppWithThemeProvider
