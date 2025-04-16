// Mock data for the chat application
import {
  FaChartBar,
  FaRocket,
  FaPalette,
  FaHeartbeat,
  FaMusic,
  FaGamepad,
  FaFlask,
  FaUtensils,
  FaHome,
  FaHashtag,
  FaBell,
  FaEnvelope,
  FaBookmark,
  FaUsers,
  FaUser,
  FaStar,
  FaCog,
  FaSignOutAlt
} from 'react-icons/fa';
import userProfilePicture from '../assets/userprofilepicture.jpg';

// Dummy data for posts - updated with diverse media types
export const dummyPosts = [
  {
    id: 1,
    type: 'image',
    user: {
      name: 'Abhi P.',
      username: 'abhi_p',
      avatar: 'https://i.pravatar.cc/300?img=33',
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
export const trendingTopics = [
  { id: 1, topic: 'Technology', posts: '125K' },
  { id: 2, topic: '#ArtificialIntelligence', posts: '98K' },
  { id: 3, topic: 'SpaceX', posts: '82K' },
  { id: 4, topic: '#WebDevelopment', posts: '67K' },
  { id: 5, topic: 'Climate Change', posts: '54K' },
];

// Dummy data for who to follow
export const whoToFollow = [
  { id: 1, name: 'TechCrunch', username: 'techcrunch', avatar: 'https://i.pravatar.cc/150?img=50' },
  { id: 2, name: 'NASA', username: 'nasa', avatar: 'https://i.pravatar.cc/150?img=51' },
  { id: 3, name: 'Design Weekly', username: 'designweekly', avatar: 'https://i.pravatar.cc/150?img=52' },
];

// Dummy data for communities
export const communities = [
  { id: 1, name: 'React Developers', members: '125K', avatar: 'https://i.pravatar.cc/150?img=60' },
  { id: 2, name: 'UX/UI Designers', members: '89K', avatar: 'https://i.pravatar.cc/150?img=61' },
  { id: 3, name: 'Data Scientists', members: '76K', avatar: 'https://i.pravatar.cc/150?img=62' },
];

// Dummy data for chats (personal, groups, communities)
export const chats = [
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
export const exploreCategories = [
  { id: 'trending', name: 'Trending', icon: FaChartBar },
  { id: 'tech', name: 'Technology', icon: FaRocket },
  { id: 'arts', name: 'Arts & Culture', icon: FaPalette },
  { id: 'health', name: 'Health & Fitness', icon: FaHeartbeat },
  { id: 'music', name: 'Music', icon: FaMusic },
  { id: 'gaming', name: 'Gaming', icon: FaGamepad },
  { id: 'science', name: 'Science', icon: FaFlask },
  { id: 'food', name: 'Food & Cooking', icon: FaUtensils },
];

// Explore posts data is very large, so I'm including just a sample
export const explorePosts = [
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
  // Add more posts as needed...
];

// Dummy data for notifications
export const notifications = [
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
export const savedPosts = [
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
export const myCommunities = [
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
export const userProfile = {
  id: 'user1',
  name: 'Abhi P.',
  username: 'abhi_p',
  avatar: 'https://i.pravatar.cc/300?img=33',
  coverImage: 'https://source.unsplash.com/random/1200x400?gradient',
  bio: 'Analytics professional building data analytics products for businesses spanning People/HR Analytics, Healthcare, Pharmaceuticals background!',
  location: 'New York, NY',
  website: 'ap947.dev',
  joined: 'April 2018',
  following: 235,
  followers: 356,
  posts: 1,
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
export const stories = [
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
export const sidebarOptions = [
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