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
  Progress
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
  FaShare
} from 'react-icons/fa';
import ThemeSelector from './ThemeSelector';
import { useThemeVariant } from '../context/ThemeContext';

// Dummy data for posts - updated with diverse media types
const dummyPosts = [
  {
    id: 1,
    type: 'image',
    user: {
      name: 'Alex Johnson',
      username: 'alexj',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
      verified: true,
    },
    content: 'Just launched our new product! Check it out and let me know what you think. #innovation #tech',
    media: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1744&q=80',
    time: '2h',
    likes: 1204,
    comments: 89,
    shares: 124,
  },
  {
    id: 2,
    type: 'text',
    user: {
      name: 'Emily Chen',
      username: 'emilyc',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
      verified: true,
    },
    content: 'Had an amazing time at the conference today. Met so many inspiring people! 🚀 Sometimes the simplest ideas lead to the biggest breakthroughs. Excited to implement what I learned today.',
    time: '4h',
    likes: 843,
    comments: 35,
    shares: 56,
  },
  {
    id: 3,
    type: 'video',
    user: {
      name: 'Tech Insights',
      username: 'techinsights',
      avatar: 'https://randomuser.me/api/portraits/men/22.jpg',
      verified: true,
    },
    content: 'Breaking: New AI model can generate code with 95% accuracy. This could revolutionize how we build software.',
    media: 'https://player.vimeo.com/video/235215203',
    thumbnail: 'https://images.unsplash.com/photo-1677442135148-1456f0ba5617?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80',
    duration: '3:45',
    time: '6h',
    likes: 3542,
    comments: 267,
    shares: 1298,
  },
  {
    id: 4,
    type: 'gallery',
    user: {
      name: 'Sophia Williams',
      username: 'sophiaw',
      avatar: 'https://randomuser.me/api/portraits/women/9.jpg',
      verified: false,
    },
    content: 'Snapshots from our company retreat. Amazing team building activities and beautiful location!',
    media: [
      'https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
      'https://images.unsplash.com/photo-1539635278303-d4002c07eae3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
      'https://images.unsplash.com/photo-1565944699718-19901001e846?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1738&q=80'
    ],
    time: '1d',
    likes: 567,
    comments: 42,
    shares: 21,
  },
  {
    id: 5,
    type: 'audio',
    user: {
      name: 'Music Producers Guild',
      username: 'mpguild',
      avatar: 'https://i.pravatar.cc/150?img=11',
      verified: true,
    },
    content: 'Check out this amazing track from our featured artist this week!',
    media: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    duration: '2:38',
    visualizer: true,
    time: '10h',
    likes: 2104,
    comments: 149,
    shares: 624,
  },
  {
    id: 6,
    type: 'short',
    user: {
      name: 'Travel Enthusiast',
      username: 'traveler',
      avatar: 'https://i.pravatar.cc/150?img=12',
      verified: true,
    },
    content: 'The beauty of nature never ceases to amaze. Captured this sunset at Lake Tahoe.',
    media: 'https://player.vimeo.com/video/559163669?h=78e7685dd2&title=0&byline=0&portrait=0',
    thumbnail: 'https://source.unsplash.com/random/500x300?sunset',
    duration: '0:15',
    time: '12h',
    likes: 5204,
    comments: 189,
    shares: 1024,
  },
  {
    id: 7,
    type: 'note',
    user: {
      name: 'Daily Thoughts',
      username: 'thoughts',
      avatar: 'https://i.pravatar.cc/150?img=20',
      verified: false,
    },
    content: '🌟 Daily Reflection 🌟\n\nThree things I am grateful for today:\n1. The support of my amazing friends\n2. The opportunity to learn something new\n3. A warm cup of coffee to start the day\n\nWhat are you grateful for?',
    background: 'linear-gradient(120deg, #f6d365 0%, #fda085 100%)',
    textColor: 'dark',
    time: '15h',
    likes: 1432,
    comments: 215,
    shares: 324,
  }
];

// Dummy data for trending topics
const trendingTopics = [
  { id: 1, topic: 'Technology', posts: '125K' },
  { id: 2, topic: '#ArtificialIntelligence', posts: '98K' },
  { id: 3, topic: 'SpaceX', posts: '82K' },
  { id: 4, topic: '#WebDevelopment', posts: '67K' },
  { id: 5, topic: 'Climate Change', posts: '54K' },
];

// Dummy data for who to follow
const whoToFollow = [
  { id: 1, name: 'TechCrunch', username: 'techcrunch', avatar: 'https://i.pravatar.cc/150?img=50' },
  { id: 2, name: 'NASA', username: 'nasa', avatar: 'https://i.pravatar.cc/150?img=51' },
  { id: 3, name: 'Design Weekly', username: 'designweekly', avatar: 'https://i.pravatar.cc/150?img=52' },
];

// Dummy data for communities
const communities = [
  { id: 1, name: 'React Developers', members: '125K', avatar: 'https://i.pravatar.cc/150?img=60' },
  { id: 2, name: 'UX/UI Designers', members: '89K', avatar: 'https://i.pravatar.cc/150?img=61' },
  { id: 3, name: 'Data Scientists', members: '76K', avatar: 'https://i.pravatar.cc/150?img=62' },
];

// Dummy data for chats (personal, groups, communities)
const chats = [
  // Personal chats
  {
    id: 'p1',
    type: 'personal',
    name: 'Sarah Johnson',
    avatar: 'https://i.pravatar.cc/150?img=25',
    status: 'online',
    unreadCount: 3,
    lastMessage: {
      content: 'Did you see the latest design I sent you?',
      time: '10:42 AM',
      sender: 'Sarah Johnson',
      isRead: false
    },
    messages: [
      {
        id: 'msg1',
        content: 'Hey, how are you doing?',
        time: '10:30 AM',
        sender: 'Sarah Johnson',
        isRead: true
      },
      {
        id: 'msg2',
        content: 'I am good! Working on that new project we discussed.',
        time: '10:32 AM',
        sender: 'me',
        isRead: true
      },
      {
        id: 'msg3',
        content: 'That sounds great! Any progress to share?',
        time: '10:35 AM',
        sender: 'Sarah Johnson',
        isRead: true
      },
      {
        id: 'msg4',
        content: 'Yes, I have finished the initial wireframes. I will send them over soon.',
        time: '10:38 AM',
        sender: 'me',
        isRead: true
      },
      {
        id: 'msg5',
        content: 'Did you see the latest design I sent you?',
        time: '10:42 AM',
        sender: 'Sarah Johnson',
        isRead: false
      }
    ]
  },
  {
    id: 'p2',
    type: 'personal',
    name: 'James Wilson',
    avatar: 'https://i.pravatar.cc/150?img=32',
    status: 'offline',
    lastActive: '2h ago',
    unreadCount: 0,
    lastMessage: {
      content: 'Lets meet up for coffee tomorrow',
      time: 'Yesterday',
      sender: 'me',
      isRead: true
    },
    messages: [
      {
        id: 'msg1',
        content: 'Hey James, are you free this weekend?',
        time: 'Yesterday',
        sender: 'me',
        isRead: true
      },
      {
        id: 'msg2',
        content: 'I should be! What did you have in mind?',
        time: 'Yesterday',
        sender: 'James Wilson',
        isRead: true
      },
      {
        id: 'msg3',
        content: 'Lets meet up for coffee tomorrow',
        time: 'Yesterday',
        sender: 'me',
        isRead: true
      }
    ]
  },
  // Group chats
  {
    id: 'g1',
    type: 'group',
    name: 'Project Alpha Team',
    avatar: 'https://i.pravatar.cc/150?img=55',
    members: ['You', 'Sarah Johnson', 'James Wilson', 'Ava Martinez', 'Noah Thompson'],
    unreadCount: 12,
    lastMessage: {
      content: 'The deadline has been extended to next Friday.',
      time: '2:15 PM',
      sender: 'Ava Martinez',
      isRead: false
    },
    messages: [
      {
        id: 'msg1',
        content: 'Team, lets discuss the latest requirements changes',
        time: '2:05 PM',
        sender: 'Noah Thompson',
        isRead: true
      },
      {
        id: 'msg2',
        content: 'I am concerned about meeting the deadline with these new changes.',
        time: '2:08 PM',
        sender: 'Sarah Johnson',
        isRead: true
      },
      {
        id: 'msg3',
        content: 'Has anyone spoken to the client about this?',
        time: '2:10 PM',
        sender: 'me',
        isRead: true
      },
      {
        id: 'msg4',
        content: 'I had a call with them this morning.',
        time: '2:12 PM',
        sender: 'Ava Martinez',
        isRead: false
      },
      {
        id: 'msg5',
        content: 'The deadline has been extended to next Friday.',
        time: '2:15 PM',
        sender: 'Ava Martinez',
        isRead: false
      }
    ]
  },
  // Communities
  {
    id: 'c1',
    type: 'community',
    name: 'React Developers',
    avatar: 'https://i.pravatar.cc/150?img=60',
    members: '125K',
    unreadCount: 5,
    lastMessage: {
      content: 'Has anyone tried the new React 19 alpha yet?',
      time: '11:30 AM',
      sender: 'Joshua Matthews',
      isRead: false
    },
    messages: [
      {
        id: 'msg1',
        content: 'React 19 alpha is now available for testing!',
        time: '11:20 AM',
        sender: 'Admin',
        isRead: true
      },
      {
        id: 'msg2',
        content: 'What are the key new features?',
        time: '11:22 AM',
        sender: 'Emma Davis',
        isRead: true
      },
      {
        id: 'msg3',
        content: 'The documentation mentions improved server components and a new caching layer.',
        time: '11:25 AM',
        sender: 'Ryan Jackson',
        isRead: true
      },
      {
        id: 'msg4',
        content: 'Has anyone tried the new React 19 alpha yet?',
        time: '11:30 AM',
        sender: 'Joshua Matthews',
        isRead: false
      }
    ]
  }
];

// Dummy data for explore page
const exploreCategories = [
  { id: 'trending', name: 'Trending', icon: FaChartBar },
  { id: 'tech', name: 'Technology', icon: FaRocket },
  { id: 'arts', name: 'Arts & Culture', icon: FaPalette },
  { id: 'health', name: 'Health & Fitness', icon: FaHeartbeat },
  { id: 'music', name: 'Music', icon: FaMusic },
  { id: 'gaming', name: 'Gaming', icon: FaGamepad },
  { id: 'science', name: 'Science', icon: FaFlask },
  { id: 'food', name: 'Food & Cooking', icon: FaUtensils },
];

const explorePosts = [
  {
    id: 'e1',
    type: 'image',
    category: 'technology',
    user: {
      name: 'Tech Insider',
      username: 'techinsider',
      avatar: 'https://randomuser.me/api/portraits/men/68.jpg',
      verified: true,
    },
    content: 'The future of augmented reality is here. This new AR headset weighs only 120g and provides 8K resolution per eye.',
    media: 'https://images.unsplash.com/photo-1525598912003-663126343e1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    time: '3h',
    likes: 3284,
    comments: 341,
    shares: 892,
    trending: true,
  },
  {
    id: 'e2',
    type: 'video',
    category: 'music',
    user: {
      name: 'Music Daily',
      username: 'musicdaily',
      avatar: 'https://randomuser.me/api/portraits/women/36.jpg',
      verified: true,
    },
    content: 'This acoustic cover of the latest hit song has gone viral! The artist recorded it in one take.',
    media: 'https://player.vimeo.com/video/219350821',
    thumbnail: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    duration: '4:26',
    time: '6h',
    likes: 15732,
    comments: 2105,
    shares: 5238,
    trending: true,
  },
  {
    id: 'e3',
    type: 'gallery',
    category: 'travel',
    user: {
      name: 'Travel Enthusiast',
      username: 'traveler',
      avatar: 'https://randomuser.me/api/portraits/women/12.jpg',
      verified: true,
    },
    content: 'Exploring the hidden gems of Bali. These spots are off the beaten path but absolutely worth the visit!',
    media: [
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1738&q=80',
      'https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
      'https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
      'https://images.unsplash.com/photo-1535827841776-24afc1e255ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1742&q=80'
    ],
    time: '8h',
    likes: 8921,
    comments: 432,
    shares: 1234,
    trending: true,
  },
  {
    id: 'e4',
    type: 'short',
    category: 'fashion',
    user: {
      name: 'Style Guide',
      username: 'styleguide',
      avatar: 'https://randomuser.me/api/portraits/women/45.jpg',
      verified: true,
    },
    content: 'Quick tips for summer fashion that will keep you cool and stylish!',
    media: 'https://player.vimeo.com/video/342333493',
    thumbnail: 'https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    duration: '0:15',
    time: '12h',
    likes: 12456,
    comments: 789,
    shares: 2345,
    trending: true,
  },
  {
    id: 'e5',
    type: 'audio',
    category: 'music',
    user: {
      name: 'Indie Music',
      username: 'indiemusic',
      avatar: 'https://randomuser.me/api/portraits/men/67.jpg',
      verified: true,
    },
    content: 'New track from our upcoming album. Let us know what you think!',
    media: 'https://cdn.pixabay.com/download/audio/2022/10/25/audio_099db1aed1.mp3?filename=the-cradle-of-your-soul-20815.mp3',
    duration: '3:45',
    visualizer: true,
    time: '1d',
    likes: 8765,
    comments: 543,
    shares: 987,
    trending: true,
  },
  {
    id: 'e6',
    type: 'note',
    category: 'motivation',
    user: {
      name: 'Daily Inspiration',
      username: 'inspiration',
      avatar: 'https://i.pravatar.cc/150?img=89',
      verified: true,
    },
    content: '🌟 Daily Affirmation 🌟\n\nYou are capable of amazing things. Believe in yourself and take that first step today.',
    background: 'linear-gradient(120deg, #f6d365 0%, #fda085 100%)',
    textColor: 'dark',
    time: '2d',
    likes: 15678,
    comments: 876,
    shares: 2345,
    trending: true,
  },
  {
    id: 'e7',
    type: 'image',
    category: 'food',
    user: {
      name: 'Foodie Adventures',
      username: 'foodie',
      avatar: 'https://randomuser.me/api/portraits/women/23.jpg',
      verified: true,
    },
    content: 'Homemade pasta with truffle sauce - a perfect weekend dinner!',
    media: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    time: '1d',
    likes: 9876,
    comments: 456,
    shares: 789,
    trending: true,
  },
  {
    id: 'e8',
    type: 'video',
    category: 'fitness',
    user: {
      name: 'Fitness Coach',
      username: 'fitnesscoach',
      avatar: 'https://randomuser.me/api/portraits/men/34.jpg',
      verified: true,
    },
    content: '10-minute full body workout you can do anywhere! No equipment needed.',
    media: 'https://player.vimeo.com/video/174002812',
    thumbnail: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    duration: '10:00',
    time: '2d',
    likes: 23456,
    comments: 1234,
    shares: 3456,
    trending: true,
  },
  {
    id: 'e9',
    type: 'gallery',
    category: 'art',
    user: {
      name: 'Art Gallery',
      username: 'artgallery',
      avatar: 'https://randomuser.me/api/portraits/women/56.jpg',
      verified: true,
    },
    content: 'New exhibition opening this weekend! Here\'s a preview of some featured pieces.',
    media: [
      'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1748&q=80',
      'https://images.unsplash.com/photo-1531913764164-f85c52d7e6a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
      'https://images.unsplash.com/photo-1536924940846-227afb31e2a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1732&q=80'
    ],
    time: '3d',
    likes: 7654,
    comments: 321,
    shares: 987,
    trending: true,
  },
  {
    id: 'e10',
    type: 'short',
    category: 'comedy',
    user: {
      name: 'Comedy Central',
      username: 'comedycentral',
      avatar: 'https://randomuser.me/api/portraits/men/78.jpg',
      verified: true,
    },
    content: 'When you try to be productive but your cat has other plans 😂',
    media: 'https://player.vimeo.com/video/201092160',
    thumbnail: 'https://images.unsplash.com/photo-1533738363-b7f9aef128ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1735&q=80',
    duration: '0:30',
    time: '1d',
    likes: 45678,
    comments: 2345,
    shares: 8765,
    trending: true,
  },
  {
    id: 'e11',
    type: 'audio',
    category: 'podcast',
    user: {
      name: 'Tech Talk',
      username: 'techtalk',
      avatar: 'https://i.pravatar.cc/150?img=90',
      verified: true,
    },
    content: 'Latest episode: The future of AI in everyday life. Special guest: Dr. Sarah Chen',
    media: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    duration: '45:30',
    visualizer: true,
    time: '2d',
    likes: 3456,
    comments: 234,
    shares: 567,
    trending: true,
  },
  {
    id: 'e12',
    type: 'note',
    category: 'quotes',
    user: {
      name: 'Daily Quotes',
      username: 'dailyquotes',
      avatar: 'https://i.pravatar.cc/150?img=45',
      verified: true,
    },
    content: '✨ Today\'s Wisdom ✨\n\n"The only way to do great work is to love what you do." - Steve Jobs',
    background: 'linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)',
    textColor: 'dark',
    time: '1d',
    likes: 12345,
    comments: 678,
    shares: 2345,
    trending: true,
  },
  {
    id: 'e13',
    type: 'image',
    category: 'nature',
    user: {
      name: 'Nature Lover',
      username: 'naturelover',
      avatar: 'https://i.pravatar.cc/150?img=67',
      verified: true,
    },
    content: 'Sunrise at the Grand Canyon - a moment of pure magic!',
    media: 'https://source.unsplash.com/random/600x400?canyon',
    time: '2d',
    likes: 23456,
    comments: 1234,
    shares: 3456,
    trending: true,
  },
  {
    id: 'e14',
    type: 'video',
    category: 'education',
    user: {
      name: 'Learn Daily',
      username: 'learndaily',
      avatar: 'https://i.pravatar.cc/150?img=89',
      verified: true,
    },
    content: 'Quick tutorial: How to improve your public speaking skills in 5 minutes',
    media: 'https://player.vimeo.com/video/484627918?h=6c109e263e&title=0&byline=0&portrait=0',
    thumbnail: 'https://source.unsplash.com/random/600x400?speaking',
    duration: '5:00',
    time: '3d',
    likes: 8765,
    comments: 543,
    shares: 987,
    trending: true,
  },
  {
    id: 'e15',
    type: 'gallery',
    category: 'architecture',
    user: {
      name: 'Architecture Daily',
      username: 'archdaily',
      avatar: 'https://i.pravatar.cc/150?img=12',
      verified: true,
    },
    content: 'Modern architecture meets nature in these stunning designs from around the world',
    media: [
      'https://source.unsplash.com/random/600x400?architecture1',
      'https://source.unsplash.com/random/600x400?architecture2',
      'https://source.unsplash.com/random/600x400?architecture3',
      'https://source.unsplash.com/random/600x400?architecture4'
    ],
    time: '4d',
    likes: 9876,
    comments: 456,
    shares: 789,
    trending: true,
  },
  {
    id: 'e16',
    type: 'short',
    category: 'dance',
    user: {
      name: 'Dance Studio',
      username: 'dancestudio',
      avatar: 'https://i.pravatar.cc/150?img=34',
      verified: true,
    },
    content: 'Learn this viral dance move in 15 seconds!',
    media: 'https://player.vimeo.com/video/559163669?h=78e7685dd2&title=0&byline=0&portrait=0',
    thumbnail: 'https://source.unsplash.com/random/600x400?dance',
    duration: '0:15',
    time: '1d',
    likes: 34567,
    comments: 2345,
    shares: 6789,
    trending: true,
  },
  {
    id: 'e17',
    type: 'audio',
    category: 'meditation',
    user: {
      name: 'Mindful Moments',
      username: 'mindfulmoments',
      avatar: 'https://i.pravatar.cc/150?img=56',
      verified: true,
    },
    content: '5-minute guided meditation for stress relief',
    media: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    duration: '5:00',
    visualizer: true,
    time: '2d',
    likes: 7654,
    comments: 321,
    shares: 987,
    trending: true,
  },
  {
    id: 'e18',
    type: 'note',
    category: 'poetry',
    user: {
      name: 'Poetry Corner',
      username: 'poetrycorner',
      avatar: 'https://i.pravatar.cc/150?img=78',
      verified: true,
    },
    content: '🌙 Midnight Thoughts 🌙\n\nIn the quiet of the night,\nWhere dreams take flight,\nThe stars whisper secrets,\nOf love and light.',
    background: 'linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)',
    textColor: 'dark',
    time: '3d',
    likes: 12345,
    comments: 678,
    shares: 2345,
    trending: true,
  },
  {
    id: 'e19',
    type: 'image',
    category: 'photography',
    user: {
      name: 'Photo Pro',
      username: 'photopro',
      avatar: 'https://i.pravatar.cc/150?img=90',
      verified: true,
    },
    content: 'Capturing the perfect moment - long exposure photography at its best',
    media: 'https://source.unsplash.com/random/600x400?photography',
    time: '4d',
    likes: 23456,
    comments: 1234,
    shares: 3456,
    trending: true,
  },
  {
    id: 'e20',
    type: 'video',
    category: 'cooking',
    user: {
      name: 'Chef\'s Table',
      username: 'chefstable',
      avatar: 'https://i.pravatar.cc/150?img=23',
      verified: true,
    },
    content: 'Quick and easy pasta recipe that will impress your guests!',
    media: 'https://player.vimeo.com/video/484627918?h=6c109e263e&title=0&byline=0&portrait=0',
    thumbnail: 'https://source.unsplash.com/random/600x400?cooking',
    duration: '2:30',
    time: '5d',
    likes: 8765,
    comments: 543,
    shares: 987,
    trending: true,
  },
  {
    id: 'e21',
    type: 'gallery',
    category: 'fashion',
    user: {
      name: 'Fashion Week',
      username: 'fashionweek',
      avatar: 'https://i.pravatar.cc/150?img=45',
      verified: true,
    },
    content: 'Highlights from the latest fashion show - these looks are everything!',
    media: [
      'https://source.unsplash.com/random/600x400?fashion1',
      'https://source.unsplash.com/random/600x400?fashion2',
      'https://source.unsplash.com/random/600x400?fashion3'
    ],
    time: '6d',
    likes: 9876,
    comments: 456,
    shares: 789,
    trending: true,
  },
  {
    id: 'e22',
    type: 'short',
    category: 'comedy',
    user: {
      name: 'Funny Moments',
      username: 'funnymoments',
      avatar: 'https://i.pravatar.cc/150?img=67',
      verified: true,
    },
    content: 'When you try to be sneaky but fail miserably 😂',
    media: 'https://player.vimeo.com/video/559163669?h=78e7685dd2&title=0&byline=0&portrait=0',
    thumbnail: 'https://source.unsplash.com/random/600x400?funny',
    duration: '0:20',
    time: '7d',
    likes: 34567,
    comments: 2345,
    shares: 6789,
    trending: true,
  },
  {
    id: 'e23',
    type: 'audio',
    category: 'music',
    user: {
      name: 'Music Producer',
      username: 'musicproducer',
      avatar: 'https://i.pravatar.cc/150?img=89',
      verified: true,
    },
    content: 'New beat drop - perfect for your workout playlist!',
    media: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    duration: '3:15',
    visualizer: true,
    time: '8d',
    likes: 7654,
    comments: 321,
    shares: 987,
    trending: true,
  },
  {
    id: 'e24',
    type: 'note',
    category: 'motivation',
    user: {
      name: 'Success Mindset',
      username: 'successmindset',
      avatar: 'https://i.pravatar.cc/150?img=12',
      verified: true,
    },
    content: '💫 Success Tip 💫\n\nYour mindset determines your success. Think big, act bold, and never give up!',
    background: 'linear-gradient(120deg, #f093fb 0%, #f5576c 100%)',
    textColor: 'dark',
    time: '9d',
    likes: 12345,
    comments: 678,
    shares: 2345,
    trending: true,
  },
  {
    id: 'e25',
    type: 'image',
    category: 'travel',
    user: {
      name: 'Travel Diaries',
      username: 'traveldiaries',
      avatar: 'https://i.pravatar.cc/150?img=34',
      verified: true,
    },
    content: 'Hidden waterfall in the Amazon rainforest - nature at its finest!',
    media: 'https://source.unsplash.com/random/600x400?waterfall',
    time: '10d',
    likes: 23456,
    comments: 1234,
    shares: 3456,
    trending: true,
  },
  {
    id: 'e26',
    type: 'video',
    category: 'fitness',
    user: {
      name: 'Yoga Life',
      username: 'yogalife',
      avatar: 'https://i.pravatar.cc/150?img=56',
      verified: true,
    },
    content: 'Morning yoga routine to start your day with energy and focus',
    media: 'https://player.vimeo.com/video/484627918?h=6c109e263e&title=0&byline=0&portrait=0',
    thumbnail: 'https://source.unsplash.com/random/600x400?yoga',
    duration: '15:00',
    time: '11d',
    likes: 8765,
    comments: 543,
    shares: 987,
    trending: true,
  },
  {
    id: 'e27',
    type: 'gallery',
    category: 'art',
    user: {
      name: 'Art World',
      username: 'artworld',
      avatar: 'https://i.pravatar.cc/150?img=78',
      verified: true,
    },
    content: 'Street art that transforms ordinary walls into extraordinary masterpieces',
    media: [
      'https://source.unsplash.com/random/600x400?streetart1',
      'https://source.unsplash.com/random/600x400?streetart2',
      'https://source.unsplash.com/random/600x400?streetart3'
    ],
    time: '12d',
    likes: 9876,
    comments: 456,
    shares: 789,
    trending: true,
  },
  {
    id: 'e28',
    type: 'short',
    category: 'dance',
    user: {
      name: 'Dance Crew',
      username: 'dancecrew',
      avatar: 'https://i.pravatar.cc/150?img=90',
      verified: true,
    },
    content: 'Learn this trending dance move in 30 seconds!',
    media: 'https://player.vimeo.com/video/559163669?h=78e7685dd2&title=0&byline=0&portrait=0',
    thumbnail: 'https://source.unsplash.com/random/600x400?dance2',
    duration: '0:30',
    time: '13d',
    likes: 34567,
    comments: 2345,
    shares: 6789,
    trending: true,
  },
  {
    id: 'e29',
    type: 'audio',
    category: 'podcast',
    user: {
      name: 'Business Insights',
      username: 'businessinsights',
      avatar: 'https://i.pravatar.cc/150?img=23',
      verified: true,
    },
    content: 'How to build a successful startup in 2024 - expert advice',
    media: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    duration: '30:00',
    visualizer: true,
    time: '14d',
    likes: 7654,
    comments: 321,
    shares: 987,
    trending: true,
  },
  {
    id: 'e30',
    type: 'note',
    category: 'quotes',
    user: {
      name: 'Wisdom Daily',
      username: 'wisdomdaily',
      avatar: 'https://i.pravatar.cc/150?img=45',
      verified: true,
    },
    content: '✨ Daily Wisdom ✨\n\n"The journey of a thousand miles begins with a single step." - Lao Tzu',
    background: 'linear-gradient(120deg, #667eea 0%, #764ba2 100%)',
    textColor: 'dark',
    time: '15d',
    likes: 12345,
    comments: 678,
    shares: 2345,
    trending: true,
  },
  {
    id: 'e31',
    type: 'image',
    category: 'nature',
    user: {
      name: 'Nature Explorer',
      username: 'natureexplorer',
      avatar: 'https://i.pravatar.cc/150?img=67',
      verified: true,
    },
    content: 'Northern Lights in Iceland - a once in a lifetime experience!',
    media: 'https://source.unsplash.com/random/600x400?northernlights',
    time: '16d',
    likes: 23456,
    comments: 1234,
    shares: 3456,
    trending: true,
  },
  {
    id: 'e32',
    type: 'video',
    category: 'education',
    user: {
      name: 'Learn Fast',
      username: 'learnfast',
      avatar: 'https://i.pravatar.cc/150?img=89',
      verified: true,
    },
    content: 'Quick tips to improve your memory and learning ability',
    media: 'https://player.vimeo.com/video/484627918?h=6c109e263e&title=0&byline=0&portrait=0',
    thumbnail: 'https://source.unsplash.com/random/600x400?learning',
    duration: '4:00',
    time: '17d',
    likes: 8765,
    comments: 543,
    shares: 987,
    trending: true,
  },
  {
    id: 'e33',
    type: 'gallery',
    category: 'architecture',
    user: {
      name: 'Architecture Today',
      username: 'architecturetoday',
      avatar: 'https://i.pravatar.cc/150?img=12',
      verified: true,
    },
    content: 'Sustainable architecture that blends with nature',
    media: [
      'https://source.unsplash.com/random/600x400?sustainable1',
      'https://source.unsplash.com/random/600x400?sustainable2',
      'https://source.unsplash.com/random/600x400?sustainable3'
    ],
    time: '18d',
    likes: 9876,
    comments: 456,
    shares: 789,
    trending: true,
  },
  {
    id: 'e34',
    type: 'short',
    category: 'comedy',
    user: {
      name: 'Funny Vines',
      username: 'funnyvines',
      avatar: 'https://i.pravatar.cc/150?img=34',
      verified: true,
    },
    content: 'When you try to be cool but fail spectacularly 😂',
    media: 'https://player.vimeo.com/video/559163669?h=78e7685dd2&title=0&byline=0&portrait=0',
    thumbnail: 'https://source.unsplash.com/random/600x400?funny2',
    duration: '0:25',
    time: '19d',
    likes: 34567,
    comments: 2345,
    shares: 6789,
    trending: true,
  },
  {
    id: 'e35',
    type: 'audio',
    category: 'meditation',
    user: {
      name: 'Peaceful Mind',
      username: 'peacefulmind',
      avatar: 'https://i.pravatar.cc/150?img=56',
      verified: true,
    },
    content: 'Guided meditation for deep sleep and relaxation',
    media: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    duration: '20:00',
    visualizer: true,
    time: '20d',
    likes: 7654,
    comments: 321,
    shares: 987,
    trending: true,
  },
  {
    id: 'e36',
    type: 'note',
    category: 'poetry',
    user: {
      name: 'Poetic Soul',
      username: 'poeticsoul',
      avatar: 'https://i.pravatar.cc/150?img=78',
      verified: true,
    },
    content: '🌅 Morning Verse 🌅\n\nAs the sun rises,\nSo do our dreams,\nEach day a new beginning,\nEach moment a chance to shine.',
    background: 'linear-gradient(120deg, #f6d365 0%, #fda085 100%)',
    textColor: 'dark',
    time: '21d',
    likes: 12345,
    comments: 678,
    shares: 2345,
    trending: true,
  },
  {
    id: 'e37',
    type: 'image',
    category: 'photography',
    user: {
      name: 'Photo Artist',
      username: 'photoartist',
      avatar: 'https://i.pravatar.cc/150?img=90',
      verified: true,
    },
    content: 'Urban photography that captures the soul of the city',
    media: 'https://source.unsplash.com/random/600x400?urban',
    time: '22d',
    likes: 23456,
    comments: 1234,
    shares: 3456,
    trending: true,
  },
  {
    id: 'e38',
    type: 'video',
    category: 'cooking',
    user: {
      name: 'Master Chef',
      username: 'masterchef',
      avatar: 'https://i.pravatar.cc/150?img=23',
      verified: true,
    },
    content: '5-minute dessert that will impress your guests!',
    media: 'https://player.vimeo.com/video/484627918?h=6c109e263e&title=0&byline=0&portrait=0',
    thumbnail: 'https://source.unsplash.com/random/600x400?dessert',
    duration: '5:00',
    time: '23d',
    likes: 8765,
    comments: 543,
    shares: 987,
    trending: true,
  },
  {
    id: 'e39',
    type: 'gallery',
    category: 'fashion',
    user: {
      name: 'Fashion Forward',
      username: 'fashionforward',
      avatar: 'https://i.pravatar.cc/150?img=45',
      verified: true,
    },
    content: 'Sustainable fashion that doesn\'t compromise on style',
    media: [
      'https://source.unsplash.com/random/600x400?sustainablefashion1',
      'https://source.unsplash.com/random/600x400?sustainablefashion2',
      'https://source.unsplash.com/random/600x400?sustainablefashion3'
    ],
    time: '24d',
    likes: 9876,
    comments: 456,
    shares: 789,
    trending: true,
  },
  {
    id: 'e40',
    type: 'short',
    category: 'comedy',
    user: {
      name: 'Laugh Factory',
      username: 'laughfactory',
      avatar: 'https://i.pravatar.cc/150?img=67',
      verified: true,
    },
    content: 'When you try to multitask but end up failing at everything 😂',
    media: 'https://player.vimeo.com/video/559163669?h=78e7685dd2&title=0&byline=0&portrait=0',
    thumbnail: 'https://source.unsplash.com/random/600x400?funny3',
    duration: '0:35',
    time: '25d',
    likes: 34567,
    comments: 2345,
    shares: 6789,
    trending: true,
  },
  {
    id: 'e41',
    type: 'audio',
    category: 'music',
    user: {
      name: 'Music Maker',
      username: 'musicmaker',
      avatar: 'https://i.pravatar.cc/150?img=89',
      verified: true,
    },
    content: 'New lo-fi beat perfect for studying or relaxing',
    media: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    duration: '2:45',
    visualizer: true,
    time: '26d',
    likes: 7654,
    comments: 321,
    shares: 987,
    trending: true,
  },
  {
    id: 'e42',
    type: 'note',
    category: 'motivation',
    user: {
      name: 'Success Path',
      username: 'successpath',
      avatar: 'https://i.pravatar.cc/150?img=12',
      verified: true,
    },
    content: '🌟 Success Mantra 🌟\n\nBelieve in yourself, work hard, and never stop learning. Success will follow!',
    background: 'linear-gradient(120deg, #4facfe 0%, #00f2fe 100%)',
    textColor: 'dark',
    time: '27d',
    likes: 12345,
    comments: 678,
    shares: 2345,
    trending: true,
  },
  {
    id: 'e43',
    type: 'image',
    category: 'travel',
    user: {
      name: 'Travel Bug',
      username: 'travelbug',
      avatar: 'https://i.pravatar.cc/150?img=34',
      verified: true,
    },
    content: 'Sunset at Santorini - the most magical place on earth!',
    media: 'https://source.unsplash.com/random/600x400?santorini',
    time: '28d',
    likes: 23456,
    comments: 1234,
    shares: 3456,
    trending: true,
  },
  {
    id: 'e44',
    type: 'video',
    category: 'fitness',
    user: {
      name: 'Fitness Pro',
      username: 'fitnesspro',
      avatar: 'https://i.pravatar.cc/150?img=56',
      verified: true,
    },
    content: 'Quick HIIT workout you can do at home - no equipment needed!',
    media: 'https://player.vimeo.com/video/484627918?h=6c109e263e&title=0&byline=0&portrait=0',
    thumbnail: 'https://source.unsplash.com/random/600x400?hiit',
    duration: '12:00',
    time: '29d',
    likes: 8765,
    comments: 543,
    shares: 987,
    trending: true,
  },
  {
    id: 'e45',
    type: 'gallery',
    category: 'art',
    user: {
      name: 'Art Gallery',
      username: 'artgallery',
      avatar: 'https://i.pravatar.cc/150?img=78',
      verified: true,
    },
    content: 'Digital art that pushes the boundaries of creativity',
    media: [
      'https://source.unsplash.com/random/600x400?digitalart1',
      'https://source.unsplash.com/random/600x400?digitalart2',
      'https://source.unsplash.com/random/600x400?digitalart3'
    ],
    time: '30d',
    likes: 9876,
    comments: 456,
    shares: 789,
    trending: true,
  },
  {
    id: 'e46',
    type: 'short',
    category: 'dance',
    user: {
      name: 'Dance Life',
      username: 'dancelife',
      avatar: 'https://i.pravatar.cc/150?img=90',
      verified: true,
    },
    content: 'Learn this popular dance move in 20 seconds!',
    media: 'https://player.vimeo.com/video/559163669?h=78e7685dd2&title=0&byline=0&portrait=0',
    thumbnail: 'https://source.unsplash.com/random/600x400?dance3',
    duration: '0:20',
    time: '31d',
    likes: 34567,
    comments: 2345,
    shares: 6789,
    trending: true,
  },
  {
    id: 'e47',
    type: 'audio',
    category: 'podcast',
    user: {
      name: 'Tech Talk',
      username: 'techtalk',
      avatar: 'https://i.pravatar.cc/150?img=23',
      verified: true,
    },
    content: 'The future of technology in 2024 - expert predictions',
    media: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    duration: '35:00',
    visualizer: true,
    time: '32d',
    likes: 7654,
    comments: 321,
    shares: 987,
    trending: true,
  },
  {
    id: 'e48',
    type: 'note',
    category: 'quotes',
    user: {
      name: 'Daily Wisdom',
      username: 'dailywisdom',
      avatar: 'https://i.pravatar.cc/150?img=45',
      verified: true,
    },
    content: '✨ Today\'s Thought ✨\n\n"Success is not final, failure is not fatal: it is the courage to continue that counts." - Winston Churchill',
    background: 'linear-gradient(120deg, #a8edea 0%, #fed6e3 100%)',
    textColor: 'dark',
    time: '33d',
    likes: 12345,
    comments: 678,
    shares: 2345,
    trending: true,
  },
  {
    id: 'e49',
    type: 'image',
    category: 'nature',
    user: {
      name: 'Nature\'s Beauty',
      username: 'naturesbeauty',
      avatar: 'https://i.pravatar.cc/150?img=67',
      verified: true,
    },
    content: 'Rainbow over the mountains - nature\'s perfect painting!',
    media: 'https://source.unsplash.com/random/600x400?rainbow',
    time: '34d',
    likes: 23456,
    comments: 1234,
    shares: 3456,
    trending: true,
  },
  {
    id: 'e50',
    type: 'video',
    category: 'education',
    user: {
      name: 'Learn Quick',
      username: 'learnquick',
      avatar: 'https://i.pravatar.cc/150?img=89',
      verified: true,
    },
    content: '3-minute tutorial: How to improve your productivity',
    media: 'https://player.vimeo.com/video/484627918?h=6c109e263e&title=0&byline=0&portrait=0',
    thumbnail: 'https://source.unsplash.com/random/600x400?productivity',
    duration: '3:00',
    time: '35d',
    likes: 8765,
    comments: 543,
    shares: 987,
    trending: true,
  },
  {
    id: 'e51',
    type: 'gallery',
    category: 'streetfood',
    user: {
      name: 'Street Food Explorer',
      username: 'streetfoodexplorer',
      avatar: 'https://i.pravatar.cc/150?img=43',
      verified: true,
    },
    content: 'Street food markets in Asia that will blow your taste buds away 🌮🍜',
    media: [
      'https://source.unsplash.com/random/600x400?streetfood1',
      'https://source.unsplash.com/random/600x400?streetfood2',
      'https://source.unsplash.com/random/600x400?streetfood3'
    ],
    time: '24d',
    likes: 9876,
    comments: 456,
    shares: 789,
    trending: true,
  },
  {
    id: 'e52',
    type: 'short',
    category: 'lifehack',
    user: {
      name: 'Life Hacker',
      username: 'lifehacker',
      avatar: 'https://i.pravatar.cc/150?img=55',
      verified: true,
    },
    content: 'How to fold a fitted sheet perfectly in under 30 seconds! ✨',
    media: 'https://player.vimeo.com/video/559163669?h=78e7685dd2&title=0&byline=0&portrait=0',
    thumbnail: 'https://source.unsplash.com/random/600x400?housework',
    duration: '0:25',
    time: '25d',
    likes: 34567,
    comments: 2345,
    shares: 6789,
    trending: true,
  },
  {
    id: 'e53',
    type: 'image',
    category: 'art',
    user: {
      name: 'Art Gallery',
      username: 'artgallery',
      avatar: 'https://i.pravatar.cc/150?img=48',
      verified: true,
    },
    content: 'Contemporary art installation that plays with light and shadows',
    media: 'https://source.unsplash.com/random/600x400?contemporaryart',
    time: '1d',
    likes: 12543,
    comments: 783,
    shares: 2145,
    trending: true,
  },
  {
    id: 'e54',
    type: 'video',
    category: 'science',
    user: {
      name: 'Science Today',
      username: 'sciencetoday',
      avatar: 'https://i.pravatar.cc/150?img=62',
      verified: true,
    },
    content: 'Watch what happens when you mix these two chemicals together! 🧪',
    media: 'https://player.vimeo.com/video/484627918?h=6c109e263e&title=0&byline=0&portrait=0',
    thumbnail: 'https://source.unsplash.com/random/600x400?chemistry',
    duration: '3:45',
    time: '2d',
    likes: 9875,
    comments: 876,
    shares: 1432,
    trending: true,
  },
  {
    id: 'e55',
    type: 'note',
    category: 'philosophy',
    user: {
      name: 'Deep Thoughts',
      username: 'deepthoughts',
      avatar: 'https://i.pravatar.cc/150?img=39',
      verified: true,
    },
    content: '✨ Philosophical Question ✨\n\n"If a tree falls in a forest and no one is around to hear it, does it make a sound?"\n\nWhat are your thoughts?',
    background: 'linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)',
    textColor: 'dark',
    time: '3d',
    likes: 8765,
    comments: 1543,
    shares: 432,
    trending: true,
  },
  {
    id: 'e56',
    type: 'gallery',
    category: 'fashion',
    user: {
      name: 'Fashion Week',
      username: 'fashionweek',
      avatar: 'https://i.pravatar.cc/150?img=29',
      verified: true,
    },
    content: 'Top trends from this year\'s Paris Fashion Week 👗',
    media: [
      'https://source.unsplash.com/random/600x400?fashionshow1',
      'https://source.unsplash.com/random/600x400?fashionshow2',
      'https://source.unsplash.com/random/600x400?fashionshow3',
      'https://source.unsplash.com/random/600x400?fashionshow4'
    ],
    time: '4d',
    likes: 23456,
    comments: 876,
    shares: 1234,
    trending: true,
  },
  {
    id: 'e57',
    type: 'short',
    category: 'pets',
    user: {
      name: 'Pet Lovers',
      username: 'petlovers',
      avatar: 'https://i.pravatar.cc/150?img=14',
      verified: true,
    },
    content: 'This dog\'s reaction when his owner comes home after 6 months 😭',
    media: 'https://player.vimeo.com/video/559163669?h=78e7685dd2&title=0&byline=0&portrait=0',
    thumbnail: 'https://source.unsplash.com/random/600x400?dog',
    duration: '0:28',
    time: '5d',
    likes: 45678,
    comments: 3456,
    shares: 7654,
    trending: true,
  },
  {
    id: 'e58',
    type: 'audio',
    category: 'education',
    user: {
      name: 'Learn Daily',
      username: 'learndaily',
      avatar: 'https://i.pravatar.cc/150?img=22',
      verified: true,
    },
    content: 'Learn a new language in your sleep with these proven techniques',
    media: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
    duration: '22:15',
    visualizer: true,
    time: '6d',
    likes: 7654,
    comments: 987,
    shares: 1234,
    trending: true,
  },
  {
    id: 'e59',
    type: 'image',
    category: 'architecture',
    user: {
      name: 'Urban Planning',
      username: 'urbanplanning',
      avatar: 'https://i.pravatar.cc/150?img=33',
      verified: true,
    },
    content: 'Revolutionary sustainable building design that produces more energy than it consumes',
    media: 'https://source.unsplash.com/random/600x400?sustainable',
    time: '7d',
    likes: 12345,
    comments: 876,
    shares: 2345,
    trending: true,
  },
  {
    id: 'e60',
    type: 'video',
    category: 'DIY',
    user: {
      name: 'DIY Master',
      username: 'diymaster',
      avatar: 'https://i.pravatar.cc/150?img=42',
      verified: true,
    },
    content: 'How to build a stunning bookshelf from reclaimed wood in one weekend',
    media: 'https://player.vimeo.com/video/484627918?h=6c109e263e&title=0&byline=0&portrait=0',
    thumbnail: 'https://source.unsplash.com/random/600x400?woodworking',
    duration: '12:32',
    time: '8d',
    likes: 8765,
    comments: 1234,
    shares: 3456,
    trending: true,
  },
  {
    id: 'e61',
    type: 'note',
    category: 'motivation',
    user: {
      name: 'Motivation Coach',
      username: 'motivationcoach',
      avatar: 'https://i.pravatar.cc/150?img=53',
      verified: true,
    },
    content: '🔥 Daily Motivation 🔥\n\n"The only way to do great work is to love what you do." - Steve Jobs\n\nWhat are you passionate about?',
    background: 'linear-gradient(120deg, #ff9a9e 0%, #fad0c4 100%)',
    textColor: 'dark',
    time: '9d',
    likes: 34567,
    comments: 2345,
    shares: 6789,
    trending: true,
  },
  {
    id: 'e62',
    type: 'gallery',
    category: 'food',
    user: {
      name: 'Food Critic',
      username: 'foodcritic',
      avatar: 'https://i.pravatar.cc/150?img=32',
      verified: true,
    },
    content: 'Michelin star desserts that look too good to eat',
    media: [
      'https://source.unsplash.com/random/600x400?dessert1',
      'https://source.unsplash.com/random/600x400?dessert2',
      'https://source.unsplash.com/random/600x400?dessert3'
    ],
    time: '22d',
    likes: 23456,
    comments: 1234,
    shares: 3456,
    trending: true,
  },
  {
    id: 'e63',
    type: 'short',
    category: 'magic',
    user: {
      name: 'Magic Tricks',
      username: 'magictricks',
      avatar: 'https://i.pravatar.cc/150?img=42',
      verified: true,
    },
    content: 'The card trick that fooled the world\'s best magicians',
    media: 'https://player.vimeo.com/video/559163669?h=78e7685dd2&title=0&byline=0&portrait=0',
    thumbnail: 'https://source.unsplash.com/random/600x400?cards',
    duration: '0:38',
    time: '23d',
    likes: 56789,
    comments: 4321,
    shares: 8765,
    trending: true,
  },
  {
    id: 'e64',
    type: 'image',
    category: 'culture',
    user: {
      name: 'Cultural Insights',
      username: 'culturalinsights',
      avatar: 'https://i.pravatar.cc/150?img=52',
      verified: true,
    },
    content: 'Ancient traditions that are still practiced today in modern society',
    media: 'https://source.unsplash.com/random/600x400?tradition',
    time: '24d',
    likes: 12345,
    comments: 876,
    shares: 2345,
    trending: true,
  },
  {
    id: 'e65',
    type: 'video',
    category: 'dance',
    user: {
      name: 'Dance Evolution',
      username: 'danceevolution',
      avatar: 'https://i.pravatar.cc/150?img=63',
      verified: true,
    },
    content: 'Evolution of hip-hop dance from the 1970s to today in 5 minutes',
    media: 'https://player.vimeo.com/video/484627918?h=6c109e263e&title=0&byline=0&portrait=0',
    thumbnail: 'https://source.unsplash.com/random/600x400?hiphop',
    duration: '5:00',
    time: '25d',
    likes: 67890,
    comments: 5432,
    shares: 9876,
    trending: true,
  },
  {
    id: 'e66',
    type: 'audio',
    category: 'interview',
    user: {
      name: 'Celebrity Interviews',
      username: 'celebrityinterviews',
      avatar: 'https://i.pravatar.cc/150?img=19',
      verified: true,
    },
    content: 'Exclusive interview with the Oscar-winning actor about their upcoming film',
    media: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3',
    duration: '28:45',
    visualizer: true,
    time: '26d',
    likes: 89012,
    comments: 6543,
    shares: 12098,
    trending: true,
  },
  {
    id: 'e67',
    type: 'note',
    category: 'quotes',
    user: {
      name: 'Quotable',
      username: 'quotable',
      avatar: 'https://i.pravatar.cc/150?img=27',
      verified: true,
    },
    content: '🌠 Words of Wisdom 🌠\n\n"In the end, we will remember not the words of our enemies, but the silence of our friends." - Martin Luther King Jr.',
    background: 'linear-gradient(120deg, #a6c0fe 0%, #f68084 100%)',
    textColor: 'light',
    time: '27d',
    likes: 23456,
    comments: 1234,
    shares: 3456,
    trending: true,
  },
  {
    id: 'e68',
    type: 'gallery',
    category: 'photography',
    user: {
      name: 'Photo Artist',
      username: 'photoartist',
      avatar: 'https://i.pravatar.cc/150?img=38',
      verified: true,
    },
    content: 'Breathtaking photos taken at the exact right moment',
    media: [
      'https://source.unsplash.com/random/600x400?moment1',
      'https://source.unsplash.com/random/600x400?moment2',
      'https://source.unsplash.com/random/600x400?moment3',
      'https://source.unsplash.com/random/600x400?moment4'
    ],
    time: '28d',
    likes: 34567,
    comments: 2345,
    shares: 6789,
    trending: true,
  },
  {
    id: 'e69',
    type: 'short',
    category: 'animals',
    user: {
      name: 'Animal Facts',
      username: 'animalfacts',
      avatar: 'https://i.pravatar.cc/150?img=49',
      verified: true,
    },
    content: 'This endangered species was thought to be extinct until it was spotted last week! 🦊',
    media: 'https://player.vimeo.com/video/559163669?h=78e7685dd2&title=0&byline=0&portrait=0',
    thumbnail: 'https://source.unsplash.com/random/600x400?wildlife',
    duration: '0:32',
    time: '29d',
    likes: 45678,
    comments: 3456,
    shares: 7890,
    trending: true,
  },
  {
    id: 'e70',
    type: 'image',
    category: 'weather',
    user: {
      name: 'Weather Chasers',
      username: 'weatherchasers',
      avatar: 'https://i.pravatar.cc/150?img=60',
      verified: true,
    },
    content: 'Incredible supercell thunderstorm captured in the Great Plains yesterday',
    media: 'https://source.unsplash.com/random/600x400?thunderstorm',
    time: '30d',
    likes: 56789,
    comments: 4321,
    shares: 8765,
    trending: true,
  }
];

// Dummy data for notifications
const notifications = [
  {
    id: 'n1',
    type: 'like',
    user: {
      name: 'Alex Johnson',
      username: 'alexj',
      avatar: 'https://i.pravatar.cc/150?img=3',
    },
    content: 'liked your post',
    post: {
      text: 'Just launched our new product!',
      thumbnail: 'https://source.unsplash.com/random/100x100?tech'
    },
    time: '2m',
    isRead: false
  },
  {
    id: 'n2',
    type: 'comment',
    user: {
      name: 'Emily Chen',
      username: 'emilyc',
      avatar: 'https://i.pravatar.cc/150?img=5',
    },
    content: 'commented on your post',
    post: {
      text: 'This looks amazing! Can\'t wait to try it out.',
      thumbnail: null
    },
    time: '15m',
    isRead: false
  }
];

// Dummy data for saved posts
const savedPosts = [
  {
    id: 's1',
    type: 'article',
    title: 'The Future of Remote Work',
    source: 'TechCrunch',
    sourceIcon: 'https://i.pravatar.cc/150?img=50',
    thumbnail: 'https://source.unsplash.com/random/600x400?office',
    content: 'As companies adapt to the post-pandemic world, many are reimagining what work looks like...',
    url: '#',
    timeToRead: '8 min read',
    savedAt: '2023-09-15',
    categories: ['Career', 'Technology']
  },
  {
    id: 's2',
    type: 'post',
    user: {
      name: 'Nature Photography',
      username: 'naturephotos',
      avatar: 'https://i.pravatar.cc/150?img=12',
      verified: true,
    },
    content: 'The beauty of nature never ceases to amaze. Captured this sunset at Lake Tahoe.',
    media: 'https://source.unsplash.com/random/600x400?sunset',
    time: '3d ago',
    likes: 5204,
    comments: 189,
    shares: 1024,
    savedAt: '2023-09-12'
  }
];

// Dummy data for communities
const myCommunities = [
  {
    id: 'c1',
    name: 'React Developers',
    description: 'A community for React developers to share resources, ask questions, and collaborate on projects.',
    members: 125340,
    avatar: 'https://i.pravatar.cc/150?img=60',
    coverImage: 'https://source.unsplash.com/random/800x200?react',
    role: 'member',
    isPrivate: false,
    unreadPosts: 12,
    recentActivity: [
      {
        type: 'post',
        user: {
          name: 'React Admin',
          avatar: 'https://i.pravatar.cc/150?img=33'
        },
        content: 'Welcome to our weekly discussion: What new React features are you most excited about?',
        time: '2h'
      }
    ]
  },
  {
    id: 'c2',
    name: 'UX/UI Designers',
    description: 'Share your work, get feedback, and discuss the latest trends in UX/UI design.',
    members: 89420,
    avatar: 'https://i.pravatar.cc/150?img=61',
    coverImage: 'https://source.unsplash.com/random/800x200?design',
    role: 'moderator',
    isPrivate: false,
    unreadPosts: 5,
    recentActivity: [
      {
        type: 'event',
        title: 'Design Workshop: Creating Inclusive Interfaces',
        date: 'September 25, 2023',
        time: 'Tomorrow'
      }
    ]
  }
];

// Dummy user profile data
const userProfile = {
  id: 'user1',
  name: 'John Doe',
  username: 'johndoe',
  avatar: 'https://i.pravatar.cc/300?img=33',
  coverImage: 'https://source.unsplash.com/random/1200x400?gradient',
  bio: 'Software engineer, design enthusiast, and coffee lover. Building digital experiences that make a difference.',
  location: 'San Francisco, CA',
  website: 'johndoe.dev',
  joined: 'March 2020',
  following: 428,
  followers: 1253,
  posts: 216,
  accountType: 'Pro',
  subscription: {
    plan: 'Premium',
    renewDate: '2023-10-15',
    features: ['Ad-free experience', 'Enhanced privacy', 'Priority support']
  },
  badges: [
    { id: 'b1', name: 'Early Adopter', icon: 'FaStar' },
    { id: 'b2', name: 'Top Contributor', icon: 'FaTrophy' },
    { id: 'b3', name: 'Verified', icon: 'FaCheckCircle' }
  ],
  stats: {
    postsPerMonth: [12, 15, 10, 8, 20, 14, 16, 19, 22, 18, 25, 20],
    engagement: 84,
    topCategories: ['Technology', 'Design', 'Productivity']
  }
};

// Add stories data
const stories = [
  {
    id: 's1',
    user: {
      name: 'Your Story',
      username: 'you',
      avatar: 'https://i.pravatar.cc/150?img=33',
    },
    unread: false,
    isYourStory: true
  },
  {
    id: 's2',
    user: {
      name: 'Sarah Chen',
      username: 'sarahc',
      avatar: 'https://i.pravatar.cc/150?img=47',
    },
    unread: true
  },
  {
    id: 's3',
    user: {
      name: 'Alex Morgan',
      username: 'alexm',
      avatar: 'https://i.pravatar.cc/150?img=19',
    },
    unread: true
  },
  {
    id: 's4',
    user: {
      name: 'Taylor Swift',
      username: 'taylorswift',
      avatar: 'https://i.pravatar.cc/150?img=5',
      verified: true
    },
    unread: true
  },
  {
    id: 's5',
    user: {
      name: 'David Kim',
      username: 'davidk',
      avatar: 'https://i.pravatar.cc/150?img=65',
    },
    unread: true
  },
  {
    id: 's6',
    user: {
      name: 'Emma Watson',
      username: 'emmaw',
      avatar: 'https://i.pravatar.cc/150?img=9',
      verified: true
    },
    unread: true
  },
  {
    id: 's7',
    user: {
      name: 'Michael B',
      username: 'michaelb',
      avatar: 'https://i.pravatar.cc/150?img=22',
    },
    unread: false
  },
  {
    id: 's8',
    user: {
      name: 'Jessica Alba',
      username: 'jessicaa',
      avatar: 'https://i.pravatar.cc/150?img=25',
      verified: true
    },
    unread: false
  }
];

// Add sidebar options
const sidebarOptions = [
  { id: 'feed', icon: FaHome, label: 'Home', view: 'feed' },
  { id: 'explore', icon: FaHashtag, label: 'Explore', view: 'explore' },
  { id: 'notifications', icon: FaBell, label: 'Notifications', view: 'notifications', badge: '5' },
  { id: 'messages', icon: FaEnvelope, label: 'Messages', view: 'messages', badge: '3' },
  { id: 'saved', icon: FaBookmark, label: 'Saved', view: 'saved' },
  { id: 'communities', icon: FaUsers, label: 'Communities', view: 'communities' },
  { id: 'profile', icon: FaUser, label: 'Profile', view: 'profile' },
  { id: 'premium', icon: FaStar, label: 'Premium', view: 'premium' },
  { id: 'settings', icon: FaCog, label: 'Settings', view: 'settings' },
  { id: 'logout', icon: FaSignOutAlt, label: 'Logout', view: 'logout', action: true }
];

const UserHomePageNew = ({ onSignOut }) => {
  const navigate = useNavigate();
  const { colorMode, toggleColorMode } = useColorMode();
  const { themeVariant } = useThemeVariant();
  
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
  
  // Disclosure hooks for modals
  const { isOpen: isComposeOpen, onOpen: onComposeOpen, onClose: onComposeClose } = useDisclosure();
  const { isOpen: isChatOpen, onOpen: onChatOpen, onClose: onChatClose } = useDisclosure();
  const { isOpen: isMediaViewerOpen, onOpen: onMediaViewerOpen, onClose: onMediaViewerClose } = useDisclosure();
  
  // Color values that adapt to theme variant and color mode
  const bgColor = useColorModeValue('white', 'gray.800');
  const textColor = useColorModeValue('gray.800', 'white');
  const borderColor = useColorModeValue('gray.200', 'gray.700');
  const navHoverBg = useColorModeValue('gray.100', 'gray.700');
  const secondaryBg = useColorModeValue('gray.50', 'gray.900');
  const cardBg = useColorModeValue('white', 'gray.700');
  const subtleText = useColorModeValue('gray.500', 'gray.400');
  
  // Theme variant specific colors
  const primaryColor = {
    default: 'blue.500',
    neonFuture: 'cyan.400',
    pixelPlayground: 'purple.500',
    otakuRealm: 'pink.400',
    vintageSepia: 'orange.400',
    forestHarmony: 'green.500',
    oceanBreeze: 'teal.400',
    desertOasis: 'yellow.500'
  }[themeVariant] || 'blue.500';
  
  const secondaryColor = {
    default: 'teal.400',
    neonFuture: 'pink.400',
    pixelPlayground: 'green.400',
    otakuRealm: 'purple.400',
    vintageSepia: 'brown.400',
    forestHarmony: 'yellow.400',
    oceanBreeze: 'blue.400',
    desertOasis: 'orange.400'
  }[themeVariant] || 'teal.400';
  
  // Gradient background based on theme
  const gradientBg = {
    default: 'linear(to-r, blue.400, teal.300)',
    neonFuture: 'linear(to-r, cyan.300, pink.300)',
    pixelPlayground: 'linear(to-r, purple.400, green.300)',
    otakuRealm: 'linear(to-r, pink.300, purple.300)',
    vintageSepia: 'linear(to-r, orange.300, yellow.200)',
    forestHarmony: 'linear(to-r, green.400, yellow.300)',
    oceanBreeze: 'linear(to-r, teal.300, blue.300)',
    desertOasis: 'linear(to-r, yellow.400, orange.300)'
  }[themeVariant] || 'linear(to-r, blue.400, teal.300)';

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

  return (
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
              color={colorMode === 'dark' ? `var(--chakra-colors-${primaryColor.split('.')[0]}-300)` : `var(--chakra-colors-${primaryColor.split('.')[0]}-500)`} 
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
                bg={activeView === item.view ? useColorModeValue(`${primaryColor.split('.')[0]}.50`, `${primaryColor.split('.')[0]}.900`) : 'transparent'}
                fontWeight={activeView === item.view ? 'bold' : 'normal'}
                onClick={() => item.action ? handleLogout() : setActiveView(item.view)}
                _hover={{ bg: useColorModeValue(`${primaryColor.split('.')[0]}.50`, `${primaryColor.split('.')[0]}.900`) }}
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
              colorScheme={primaryColor.split('.')[0]}
              borderRadius="lg"
              size="md"
              leftIcon={<Icon as={FaFeatherAlt} />}
              onClick={onComposeOpen}
              mt={4}
              display={{ md: 'none', lg: 'flex' }}
            >
              Create
            </Button>
            
            <IconButton
              icon={<Icon as={FaFeatherAlt} />}
              colorScheme={primaryColor.split('.')[0]}
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
                  <Avatar size="md" src="https://i.pravatar.cc/150?img=33" name="John Doe" />
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
                {dummyPosts.map((post) => (
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
                          colorScheme={activeTab === 'all' ? primaryColor.split('.')[0] : 'gray'} 
                          variant={activeTab === 'all' ? 'solid' : 'ghost'}
                          onClick={() => setActiveTab('all')}
                          borderRadius="full"
                        >
                          All
                        </Button>
                        <Button 
                          flex={1} 
                          size="sm" 
                          colorScheme={activeTab === 'personal' ? primaryColor.split('.')[0] : 'gray'} 
                          variant={activeTab === 'personal' ? 'solid' : 'ghost'}
                          onClick={() => setActiveTab('personal')}
                          borderRadius="full"
                        >
                          Personal
                        </Button>
                        <Button 
                          flex={1} 
                          size="sm" 
                          colorScheme={activeTab === 'groups' ? primaryColor.split('.')[0] : 'gray'} 
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
                                useColorModeValue(`${primaryColor.split('.')[0]}.50`, `${primaryColor.split('.')[0]}.900`) : 
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
                          icon={<Icon as={FaPhone} />}
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
                          colorScheme={primaryColor.split('.')[0]}
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
                boxShadow="lg"
              >
                {/* Cover Photo with Gradient Overlay */}
                <Box 
                  h={{ base: "180px", md: "280px" }} 
                  position="relative"
                  bgImage={`url(${userProfile.coverImage})`}
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
                  
                  <Box 
                    position="absolute" 
                    bottom={{ base: "-50px", md: "-60px" }} 
                    left={{ base: "50%", md: "80px" }} 
                    transform={{ base: "translateX(-50%)", md: "translateX(0)" }}
                    zIndex="1"
                  >
                    <Box 
                      position="relative" 
                      display="inline-block"
                      p="3px"
                      bg={`linear-gradient(45deg, ${primaryColor}, purple.500)`}
                      borderRadius="full"
                    >
                      <Avatar 
                        size={{ base: "xl", md: "2xl" }} 
                        src={userProfile.avatar} 
                        name={userProfile.name} 
                        borderWidth="4px" 
                        borderColor={cardBg}
                        boxShadow="lg"
                      />
                      <Box 
                        position="absolute"
                        bottom="8px"
                        right="8px"
                        bg={primaryColor}
                        borderRadius="full"
                        w="26px"
                        h="26px"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        color="white"
                        fontSize="xs"
                        fontWeight="bold"
                        boxShadow="md"
                        borderWidth="2px"
                        borderColor={cardBg}
                      >
                        <Icon as={FaCrown} boxSize={3.5} />
                      </Box>
                    </Box>
                  </Box>
                  
                  <HStack position="absolute" top="4" right="4" spacing={2}>
                    <Button 
                      leftIcon={<Icon as={FaEdit} />}
                      size="sm"
                      colorScheme={primaryColor.split('.')[0]}
                      variant="solid"
                      boxShadow="md"
                      borderRadius="full"
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
                      size="sm"
                      colorScheme={primaryColor.split('.')[0]}
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
                <Box 
                  pl={{ base: "0", md: "280px" }} 
                  pt={{ base: "60px", md: "30px" }} 
                  pb="6" 
                  px={{ base: "4", md: "6" }}
                  textAlign={{ base: "center", md: "left" }}
                >
                  <Flex 
                    direction={{ base: "column", md: "row" }} 
                    justify="space-between" 
                    align={{ base: "center", md: "flex-start" }}
                  >
                    <Box mb={{ base: 4, md: 0 }}>
                      <HStack spacing={2} justifyContent={{ base: "center", md: "flex-start" }} mb={1}>
                        <Heading size="lg" bgGradient={`linear(to-r, ${primaryColor}, purple.500)`} bgClip="text">
                          {userProfile.name}
                        </Heading>
                        <Icon as={FaCheckCircle} color={primaryColor} />
                      </HStack>
                      
                      <HStack spacing={2} justifyContent={{ base: "center", md: "flex-start" }} mb={4}>
                        <Text color={subtleText} fontSize="md">@{userProfile.username}</Text>
                        <Badge colorScheme={primaryColor.split('.')[0]} variant="subtle" px={2} py={0.5} borderRadius="full">
                          {userProfile.accountType}
                        </Badge>
                      </HStack>
                      
                      <Text mb={4} fontSize="md" maxW="600px" lineHeight="1.6">
                        {userProfile.bio}
                      </Text>
                    </Box>
                    
                    {/* User Stats Cards */}
                    <Flex 
                      wrap="wrap" 
                      justify={{ base: "center", md: "flex-end" }}
                      gap={4}
                    >
                      <Box 
                        borderWidth="1px"
                        borderColor={borderColor}
                        borderRadius="xl"
                        p={4}
                        bg={useColorModeValue("white", "gray.700")}
                        width={{ base: "30%", sm: "auto" }}
                        minW={{ sm: "120px" }}
                        textAlign="center"
                        boxShadow="sm"
                        _hover={{ 
                          transform: "translateY(-2px)",
                          boxShadow: "md"
                        }}
                        transition="all 0.2s"
                      >
                        <Text fontSize="2xl" fontWeight="bold" bgGradient={`linear(to-r, ${primaryColor}, purple.500)`} bgClip="text">
                          {userProfile.posts}
                        </Text>
                        <Text fontSize="sm" color={subtleText} fontWeight="medium">Posts</Text>
                      </Box>
                      
                      <Box 
                        borderWidth="1px"
                        borderColor={borderColor}
                        borderRadius="xl"
                        p={4}
                        bg={useColorModeValue("white", "gray.700")}
                        width={{ base: "30%", sm: "auto" }}
                        minW={{ sm: "120px" }}
                        textAlign="center"
                        boxShadow="sm"
                        _hover={{ 
                          transform: "translateY(-2px)",
                          boxShadow: "md"
                        }}
                        transition="all 0.2s"
                      >
                        <Text fontSize="2xl" fontWeight="bold" bgGradient={`linear(to-r, ${primaryColor}, purple.500)`} bgClip="text">
                          {userProfile.following}
                        </Text>
                        <Text fontSize="sm" color={subtleText} fontWeight="medium">Following</Text>
                      </Box>
                      
                      <Box 
                        borderWidth="1px"
                        borderColor={borderColor}
                        borderRadius="xl"
                        p={4}
                        bg={useColorModeValue("white", "gray.700")}
                        width={{ base: "30%", sm: "auto" }}
                        minW={{ sm: "120px" }}
                        textAlign="center"
                        boxShadow="sm"
                        _hover={{ 
                          transform: "translateY(-2px)",
                          boxShadow: "md"
                        }}
                        transition="all 0.2s"
                      >
                        <Text fontSize="2xl" fontWeight="bold" bgGradient={`linear(to-r, ${primaryColor}, purple.500)`} bgClip="text">
                          {userProfile.followers}
                        </Text>
                        <Text fontSize="sm" color={subtleText} fontWeight="medium">Followers</Text>
                      </Box>
                    </Flex>
                  </Flex>
                  
                  <Divider my={5} />
                  
                  <HStack spacing={6} wrap="wrap" justify={{ base: "center", md: "flex-start" }}>
                    {userProfile.location && (
                      <HStack spacing={2}>
                        <Icon as={FaMapMarkerAlt} color={primaryColor} />
                        <Text fontSize="sm">{userProfile.location}</Text>
                      </HStack>
                    )}
                    
                    {userProfile.website && (
                      <HStack spacing={2}>
                        <Icon as={FaLink} color={primaryColor} />
                        <Text fontSize="sm" color={primaryColor} textDecoration="underline" fontWeight="medium">
                          {userProfile.website}
                        </Text>
                      </HStack>
                    )}
                    
                    <HStack spacing={2}>
                      <Icon as={FaCalendarAlt} color={primaryColor} />
                      <Text fontSize="sm">Joined {userProfile.joined}</Text>
                    </HStack>
                    
                    <HStack spacing={2}>
                      <Icon as={FaChartLine} color={primaryColor} />
                      <Text fontSize="sm">{userProfile.stats.engagement}% Engagement</Text>
                    </HStack>
                  </HStack>
                </Box>
              </Box>
              
              {/* User Profile Tabs */}
              <Box mb={6}>
                <Tabs colorScheme={primaryColor.split('.')[0]} variant="soft-rounded">
                  <TabList mb={6} overflowX="auto" py={2} css={{
                    '&::-webkit-scrollbar': {
                      display: 'none',
                    }
                  }}>
                    <Tab _selected={{ color: "white", bg: primaryColor }}>Posts</Tab>
                    <Tab _selected={{ color: "white", bg: primaryColor }}>Media</Tab>
                    <Tab _selected={{ color: "white", bg: primaryColor }}>Likes</Tab>
                    <Tab _selected={{ color: "white", bg: primaryColor }}>Highlights</Tab>
                    <Tab _selected={{ color: "white", bg: primaryColor }}>Analytics</Tab>
                  </TabList>
                  
                  <TabPanels>
                    <TabPanel px={0}>
                      {/* User Posts Tab */}
                      <VStack spacing={6} align="stretch">
                        {dummyPosts.slice(0, 3).map((post) => (
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
            <Box>
              {/* Explore categories */}
              <Box mb={6} overflowX="auto" pb={2}>
                <HStack spacing={3}>
                  {exploreCategories.map((category) => (
                    <Button 
                      key={category.id}
                      leftIcon={<Icon as={category.icon} />}
                      size="sm"
                      borderRadius="full"
                      minW="auto"
                      colorScheme={primaryColor.split('.')[0]}
                      variant="outline"
                    >
                      {category.name}
                    </Button>
                  ))}
                </HStack>
              </Box>

              {/* Explore posts grid */}
              <Grid templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(3, 1fr)", lg: "repeat(3, 1fr)" }} gap={4}>
                {explorePosts.map((post) => (
                  <Box
                    key={post.id}
                    borderRadius="md"
                    overflow="hidden"
                    position="relative"
                    cursor="pointer"
                    transition="all 0.2s"
                    _hover={{ transform: "translateY(-2px)", boxShadow: "lg" }}
                    onClick={() => setViewingPost(post)}
                  >
                    <Image
                      src={post.thumbnail || (Array.isArray(post.media) ? post.media[0] : post.media)}
                      alt={post.content}
                      width="100%"
                      height="250px"
                      objectFit="cover"
                    />
                    {post.type === 'video' && (
                      <Box position="absolute" top="10px" right="10px" bg="blackAlpha.700" borderRadius="md" px={2} py={1}>
                        <Text fontSize="xs" color="white">{post.duration}</Text>
                      </Box>
                    )}
                    <Box
                      position="absolute"
                      bottom="0"
                      left="0"
                      right="0"
                      bg="blackAlpha.600"
                      p={2}
                      color="white"
                    >
                      <HStack spacing={3}>
                        <HStack spacing={1}>
                          <Icon as={FaHeart} />
                          <Text fontSize="sm">{post.likes}</Text>
                        </HStack>
                        <HStack spacing={1}>
                          <Icon as={FaComment} />
                          <Text fontSize="sm">{post.comments}</Text>
                        </HStack>
                      </HStack>
                    </Box>
                  </Box>
                ))}
              </Grid>
            </Box>
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
      
      {/* Compose Post Modal */}
      <Modal isOpen={isComposeOpen} onClose={onComposeClose} size="xl">
        <ModalOverlay backdropFilter="blur(5px)" />
        <ModalContent borderRadius="lg">
          <ModalHeader>Create a post</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <HStack spacing={3} align="start">
              <Avatar src="https://i.pravatar.cc/150?img=33" name="John Doe" />
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
        leastDestructiveRef={null}
        onClose={() => setShowLogoutConfirm(false)}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Logout Confirmation
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure you want to logout? You will need to login again to access your account.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button onClick={() => setShowLogoutConfirm(false)}>
                Cancel
              </Button>
              <Button colorScheme="red" onClick={confirmLogout} ml={3}>
                Logout
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </Box>
  );
};

export default UserHomePageNew; 