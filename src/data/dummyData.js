// Dummy data for the chat application

// User data
export const currentUser = {
  id: 'user1',
  name: 'You',
  avatar: 'https://i.pravatar.cc/150?img=1',
  status: 'online',
};

// Chat data
export const chats = [
  // Personal Chats
  {
    id: 'chat3',
    name: 'John Doe',
    type: 'personal',
    participants: ['user1', 'user7'],
    lastMessage: {
      text: 'Thanks for the help!',
      sender: 'user7',
      timestamp: 'Yesterday',
    },
    unreadCount: 1,
    avatar: 'https://i.pravatar.cc/150?img=7',
  },
  {
    id: 'chat5',
    name: 'Alice Smith',
    type: 'personal',
    participants: ['user1', 'user11'],
    lastMessage: {
      text: 'Can you send me that document?',
      sender: 'user11',
      timestamp: 'Monday',
    },
    unreadCount: 0,
    avatar: 'https://i.pravatar.cc/150?img=11',
  },
  {
    id: 'chat6',
    name: 'Mike Johnson',
    type: 'personal',
    participants: ['user1', 'user2'],
    lastMessage: {
      text: 'Are you coming to the meetup tonight?',
      sender: 'user2',
      timestamp: '11:42 AM',
    },
    unreadCount: 2,
    avatar: 'https://i.pravatar.cc/150?img=2',
  },
  {
    id: 'chat8',
    name: 'Sarah Williams',
    type: 'personal',
    participants: ['user1', 'user3'],
    lastMessage: {
      text: 'Check out this song I found!',
      sender: 'user3',
      timestamp: '9:15 AM',
    },
    unreadCount: 1,
    avatar: 'https://i.pravatar.cc/150?img=3',
  },
  {
    id: 'chat10',
    name: 'Lisa Anderson',
    type: 'personal',
    participants: ['user1', 'user8'],
    lastMessage: {
      text: 'The new design looks amazing, great work!',
      sender: 'user1',
      timestamp: 'Yesterday',
    },
    unreadCount: 0,
    avatar: 'https://i.pravatar.cc/150?img=8',
  },
  {
    id: 'chat12',
    name: 'James Taylor',
    type: 'personal',
    participants: ['user1', 'user9'],
    lastMessage: {
      text: 'Let me know when you finish the report',
      sender: 'user9',
      timestamp: 'Sunday',
    },
    unreadCount: 0,
    avatar: 'https://i.pravatar.cc/150?img=9',
  },
  
  // Group Chats
  {
    id: 'chat1',
    name: 'General Chat',
    type: 'group',
    participants: ['user1', 'user2', 'user3', 'user4', 'user5'],
    lastMessage: {
      text: 'Has anyone seen the latest project update?',
      sender: 'user3',
      timestamp: '10:30 AM',
    },
    unreadCount: 3,
    avatar: 'https://i.pravatar.cc/150?img=10',
  },
  {
    id: 'chat2',
    name: 'Team Alpha',
    type: 'group',
    participants: ['user1', 'user2', 'user6'],
    lastMessage: {
      text: 'Meeting at 2 PM today',
      sender: 'user2',
      timestamp: '9:45 AM',
    },
    unreadCount: 0,
    avatar: 'https://i.pravatar.cc/150?img=11',
  },
  {
    id: 'chat4',
    name: 'Design Team',
    type: 'group',
    participants: ['user1', 'user8', 'user9', 'user10'],
    lastMessage: {
      text: 'New design mockups are ready for review',
      sender: 'user8',
      timestamp: 'Yesterday',
    },
    unreadCount: 5,
    avatar: 'https://i.pravatar.cc/150?img=12',
  },
  {
    id: 'chat7',
    name: 'Gaming Crew',
    type: 'group',
    participants: ['user1', 'user2', 'user7', 'user10'],
    lastMessage: {
      text: 'Who\'s up for some Fortnite tonight?',
      sender: 'user7',
      timestamp: '3:20 PM',
    },
    unreadCount: 8,
    avatar: 'https://i.pravatar.cc/150?img=15',
  },
  {
    id: 'chat9',
    name: 'Project Quantum',
    type: 'group',
    participants: ['user1', 'user3', 'user5', 'user8', 'user10'],
    lastMessage: {
      text: 'The client loved our presentation!',
      sender: 'user5',
      timestamp: 'Yesterday',
    },
    unreadCount: 0,
    avatar: 'https://i.pravatar.cc/150?img=17',
  },
  {
    id: 'chat11',
    name: 'Lunch Club',
    type: 'group',
    participants: ['user1', 'user2', 'user4', 'user6', 'user9'],
    lastMessage: {
      text: 'Are we going to that new Italian place tomorrow?',
      sender: 'user4',
      timestamp: 'Yesterday',
    },
    unreadCount: 2,
    avatar: 'https://i.pravatar.cc/150?img=19',
  },

  // Community Chats
  {
    id: 'community1',
    name: 'Tech Enthusiasts',
    type: 'community',
    participants: ['user1', 'user2', 'user3', 'user4', 'user5', 'user6', 'user7', 'user8', 'user9', 'user10'],
    lastMessage: {
      text: 'Check out this new React hook for state management!',
      sender: 'user4',
      timestamp: '11:15 AM',
    },
    unreadCount: 5,
    avatar: 'https://i.pravatar.cc/150?img=20',
    memberCount: '15K+',
    description: 'Discuss the latest in technology, programming, and digital innovation'
  },
  {
    id: 'community2',
    name: 'Creative Corner',
    type: 'community',
    participants: ['user1', 'user2', 'user5', 'user8', 'user11', 'user12'],
    lastMessage: {
      text: 'Just finished my new digital art piece, what do you think?',
      sender: 'user11',
      timestamp: '10:45 AM',
    },
    unreadCount: 2,
    avatar: 'https://i.pravatar.cc/150?img=21',
    memberCount: '8K+',
    description: 'Share your art, music, and creative projects with fellow artists'
  },
  {
    id: 'community3',
    name: 'Gaming Squad',
    type: 'community',
    participants: ['user1', 'user3', 'user6', 'user7', 'user9', 'user13', 'user14'],
    lastMessage: {
      text: 'Who\'s up for some Fortnite tonight?',
      sender: 'user13',
      timestamp: '9:30 AM',
    },
    unreadCount: 7,
    avatar: 'https://i.pravatar.cc/150?img=22',
    memberCount: '25K+',
    description: 'Connect with gamers, share strategies, and find gaming buddies'
  }
];

// Users data
export const users = [
  {
    id: 'user2',
    name: 'Mike Johnson',
    avatar: 'https://i.pravatar.cc/150?img=2',
    status: 'online',
  },
  {
    id: 'user3',
    name: 'Sarah Williams',
    avatar: 'https://i.pravatar.cc/150?img=3',
    status: 'offline',
  },
  {
    id: 'user4',
    name: 'David Brown',
    avatar: 'https://i.pravatar.cc/150?img=4',
    status: 'online',
  },
  {
    id: 'user5',
    name: 'Emily Davis',
    avatar: 'https://i.pravatar.cc/150?img=5',
    status: 'away',
  },
  {
    id: 'user6',
    name: 'Robert Wilson',
    avatar: 'https://i.pravatar.cc/150?img=6',
    status: 'online',
  },
  {
    id: 'user7',
    name: 'John Doe',
    avatar: 'https://i.pravatar.cc/150?img=7',
    status: 'offline',
  },
  {
    id: 'user8',
    name: 'Lisa Anderson',
    avatar: 'https://i.pravatar.cc/150?img=8',
    status: 'online',
  },
  {
    id: 'user9',
    name: 'James Taylor',
    avatar: 'https://i.pravatar.cc/150?img=9',
    status: 'offline',
  },
  {
    id: 'user10',
    name: 'Jennifer Martinez',
    avatar: 'https://i.pravatar.cc/150?img=10',
    status: 'online',
  },
  {
    id: 'user11',
    name: 'Alice Smith',
    avatar: 'https://i.pravatar.cc/150?img=11',
    status: 'away',
  },
];

// Messages data
export const messages = {
  // Personal Chat Messages
  chat3: [
    {
      id: 'msg1',
      text: 'Hi, can you help me with the React component?',
      sender: 'user7',
      timestamp: 'Yesterday, 2:00 PM',
      type: 'text',
    },
    {
      id: 'msg2',
      text: 'Sure, what do you need help with?',
      sender: 'user1',
      timestamp: 'Yesterday, 2:05 PM',
      type: 'text',
    },
    {
      id: 'msg3',
      text: 'I\'m having trouble with state management',
      sender: 'user7',
      timestamp: 'Yesterday, 2:10 PM',
      type: 'text',
    },
    {
      id: 'msg4',
      text: 'Here\'s a code example that might help',
      sender: 'user1',
      timestamp: 'Yesterday, 2:30 PM',
      type: 'code',
      code: {
        language: 'javascript',
        content: `import { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    document.title = \`You clicked \${count} times\`;
  });
  
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}`,
      },
    },
    {
      id: 'msg5',
      text: 'Thanks for the help!',
      sender: 'user7',
      timestamp: 'Yesterday, 3:00 PM',
      type: 'text',
    },
  ],
  chat5: [
    {
      id: 'msg1',
      text: 'Can you send me that document?',
      sender: 'user11',
      timestamp: 'Monday, 3:00 PM',
      type: 'text',
    },
    {
      id: 'msg2',
      text: 'Sure, here it is',
      sender: 'user1',
      timestamp: 'Monday, 3:05 PM',
      type: 'file',
      file: {
        name: 'Project_Proposal.docx',
        type: 'doc',
        size: '1.2 MB',
        url: 'https://example.com/files/Project_Proposal.docx',
      },
    },
    {
      id: 'msg3',
      text: 'Thanks!',
      sender: 'user11',
      timestamp: 'Monday, 3:10 PM',
      type: 'text',
    },
  ],
  chat6: [
    {
      id: 'msg1',
      text: 'Hey, are you coming to the meetup tonight?',
      sender: 'user2',
      timestamp: '11:40 AM',
      type: 'text',
    },
    {
      id: 'msg2',
      text: 'What time does it start again?',
      sender: 'user1',
      timestamp: '11:41 AM',
      type: 'text',
    },
    {
      id: 'msg3',
      text: '7:30 PM at The Hub. Here\'s the event link:',
      sender: 'user2',
      timestamp: '11:42 AM',
      type: 'text',
    },
    {
      id: 'msg4',
      text: 'https://meetup.com/tech-talk-central/events/123456/',
      sender: 'user2',
      timestamp: '11:42 AM',
      type: 'text',
    },
  ],
  chat8: [
    {
      id: 'msg1',
      text: 'Morning! How was your weekend?',
      sender: 'user3',
      timestamp: '9:00 AM',
      type: 'text',
    },
    {
      id: 'msg2',
      text: 'It was great! Went hiking in the mountains',
      sender: 'user1',
      timestamp: '9:05 AM',
      type: 'text',
    },
    {
      id: 'msg3',
      text: 'That sounds amazing! Any pictures?',
      sender: 'user3',
      timestamp: '9:07 AM',
      type: 'text',
    },
    {
      id: 'msg4',
      text: 'Just a few',
      sender: 'user1',
      timestamp: '9:10 AM',
      type: 'media',
      media: [
        {
          type: 'image',
          url: 'https://picsum.photos/id/29/300/200',
          caption: 'Summit view',
        },
        {
          type: 'image',
          url: 'https://picsum.photos/id/28/300/200',
          caption: 'Forest trail',
        },
      ],
    },
    {
      id: 'msg5',
      text: 'Check out this song I found!',
      sender: 'user3',
      timestamp: '9:15 AM',
      type: 'file',
      file: {
        name: 'awesome_song.mp3',
        type: 'audio',
        size: '4.8 MB',
        url: 'https://example.com/files/awesome_song.mp3',
      },
    },
  ],
  chat10: [
    {
      id: 'msg1',
      text: 'How\'s the new website design coming along?',
      sender: 'user1',
      timestamp: 'Yesterday, 1:00 PM',
      type: 'text',
    },
    {
      id: 'msg2',
      text: 'I\'ve finished the homepage and product pages',
      sender: 'user8',
      timestamp: 'Yesterday, 1:05 PM',
      type: 'text',
    },
    {
      id: 'msg3',
      text: 'Here\'s what I\'ve got so far',
      sender: 'user8',
      timestamp: 'Yesterday, 1:10 PM',
      type: 'media',
      media: [
        {
          type: 'image',
          url: 'https://picsum.photos/id/24/300/200',
          caption: 'Homepage - Light Mode',
        },
        {
          type: 'image',
          url: 'https://picsum.photos/id/25/300/200',
          caption: 'Homepage - Dark Mode',
        },
      ],
    },
    {
      id: 'msg4',
      text: 'The new design looks amazing, great work!',
      sender: 'user1',
      timestamp: 'Yesterday, 1:15 PM',
      type: 'text',
    },
  ],
  chat12: [
    {
      id: 'msg1',
      text: 'Have you started on the quarterly report?',
      sender: 'user9',
      timestamp: 'Sunday, 6:00 PM',
      type: 'text',
    },
    {
      id: 'msg2',
      text: 'Yes, I\'ve got the first draft ready',
      sender: 'user1',
      timestamp: 'Sunday, 6:30 PM',
      type: 'text',
    },
    {
      id: 'msg3',
      text: 'Here\'s what I have so far',
      sender: 'user1',
      timestamp: 'Sunday, 6:32 PM',
      type: 'file',
      file: {
        name: 'Q2_Report_Draft.xlsx',
        type: 'spreadsheet',
        size: '3.4 MB',
        url: 'https://example.com/files/Q2_Report_Draft.xlsx',
      },
    },
    {
      id: 'msg4',
      text: 'Let me know when you finish the report',
      sender: 'user9',
      timestamp: 'Sunday, 7:00 PM',
      type: 'text',
    },
  ],
  
  // Group Chat Messages
  chat1: [
    {
      id: 'msg1',
      text: 'Hello everyone!',
      sender: 'user3',
      timestamp: '10:00 AM',
      type: 'text',
    },
    {
      id: 'msg2',
      text: 'Hi there!',
      sender: 'user1',
      timestamp: '10:01 AM',
      type: 'text',
    },
    {
      id: 'msg3',
      text: 'How is everyone doing?',
      sender: 'user4',
      timestamp: '10:05 AM',
      type: 'text',
    },
    {
      id: 'msg4',
      text: 'I\'m good, thanks!',
      sender: 'user2',
      timestamp: '10:10 AM',
      type: 'text',
    },
    {
      id: 'msg5',
      text: 'Has anyone seen the latest project update?',
      sender: 'user3',
      timestamp: '10:30 AM',
      type: 'text',
    },
    {
      id: 'msg6',
      text: 'I shared it in the team drive',
      sender: 'user5',
      timestamp: '10:35 AM',
      type: 'text',
    },
    {
      id: 'msg7',
      text: 'Here\'s the presentation I was talking about',
      sender: 'user4',
      timestamp: '10:40 AM',
      type: 'file',
      file: {
        name: 'Project_Presentation.pdf',
        type: 'pdf',
        size: '2.5 MB',
        url: 'https://example.com/files/Project_Presentation.pdf',
      },
    },
    {
      id: 'msg8',
      text: 'Thanks for sharing!',
      sender: 'user1',
      timestamp: '10:45 AM',
      type: 'text',
    },
  ],
  chat2: [
    {
      id: 'msg1',
      text: 'Good morning team!',
      sender: 'user2',
      timestamp: '9:00 AM',
      type: 'text',
    },
    {
      id: 'msg2',
      text: 'Morning!',
      sender: 'user1',
      timestamp: '9:05 AM',
      type: 'text',
    },
    {
      id: 'msg3',
      text: 'Meeting at 2 PM today',
      sender: 'user2',
      timestamp: '9:45 AM',
      type: 'text',
    },
    {
      id: 'msg4',
      text: 'I\'ll prepare the slides',
      sender: 'user6',
      timestamp: '10:00 AM',
      type: 'text',
    },
    {
      id: 'msg5',
      text: 'Here are some images for the presentation',
      sender: 'user6',
      timestamp: '10:15 AM',
      type: 'media',
      media: [
        {
          type: 'image',
          url: 'https://picsum.photos/id/1/300/200',
          caption: 'Product screenshot',
        },
        {
          type: 'image',
          url: 'https://picsum.photos/id/10/300/200',
          caption: 'User interface',
        },
      ],
    },
  ],
  chat4: [
    {
      id: 'msg1',
      text: 'New design mockups are ready for review',
      sender: 'user8',
      timestamp: 'Yesterday, 11:00 AM',
      type: 'text',
    },
    {
      id: 'msg2',
      text: 'Great! Can you share them?',
      sender: 'user9',
      timestamp: 'Yesterday, 11:05 AM',
      type: 'text',
    },
    {
      id: 'msg3',
      text: 'Here they are',
      sender: 'user8',
      timestamp: 'Yesterday, 11:10 AM',
      type: 'media',
      media: [
        {
          type: 'image',
          url: 'https://picsum.photos/id/20/300/200',
          caption: 'Homepage design',
        },
        {
          type: 'image',
          url: 'https://picsum.photos/id/21/300/200',
          caption: 'Product page',
        },
        {
          type: 'image',
          url: 'https://picsum.photos/id/22/300/200',
          caption: 'Checkout flow',
        },
      ],
    },
    {
      id: 'msg4',
      text: 'I like the new color scheme',
      sender: 'user10',
      timestamp: 'Yesterday, 11:30 AM',
      type: 'text',
    },
    {
      id: 'msg5',
      text: 'I\'ve also recorded a walkthrough video',
      sender: 'user8',
      timestamp: 'Yesterday, 12:00 PM',
      type: 'media',
      media: [
        {
          type: 'video',
          url: 'https://example.com/videos/design-walkthrough.mp4',
          thumbnail: 'https://picsum.photos/id/23/300/200',
          duration: '2:30',
        },
      ],
    },
  ],
  chat7: [
    {
      id: 'msg1',
      text: 'Hey gamers!',
      sender: 'user7',
      timestamp: '3:00 PM',
      type: 'text',
    },
    {
      id: 'msg2',
      text: 'Hi John!',
      sender: 'user2',
      timestamp: '3:02 PM',
      type: 'text',
    },
    {
      id: 'msg3',
      text: 'Anyone seen the new Fortnite update?',
      sender: 'user10',
      timestamp: '3:05 PM',
      type: 'text',
    },
    {
      id: 'msg4',
      text: 'Yeah, the new map is amazing!',
      sender: 'user7',
      timestamp: '3:10 PM',
      type: 'text',
    },
    {
      id: 'msg5',
      text: 'Check out my new gaming setup:',
      sender: 'user2',
      timestamp: '3:15 PM',
      type: 'media',
      media: [
        {
          type: 'image',
          url: 'https://picsum.photos/id/96/300/200',
          caption: 'New gaming setup',
        },
      ],
    },
    {
      id: 'msg6',
      text: 'That looks awesome!',
      sender: 'user1',
      timestamp: '3:17 PM',
      type: 'text',
    },
    {
      id: 'msg7',
      text: 'Who\'s up for some Fortnite tonight?',
      sender: 'user7',
      timestamp: '3:20 PM',
      type: 'text',
    },
  ],
  chat9: [
    {
      id: 'msg1',
      text: 'Team, the client presentation is tomorrow',
      sender: 'user8',
      timestamp: 'Yesterday, 9:00 AM',
      type: 'text',
    },
    {
      id: 'msg2',
      text: 'I\'ve finished the executive summary',
      sender: 'user3',
      timestamp: 'Yesterday, 9:10 AM',
      type: 'file',
      file: {
        name: 'Executive_Summary.pdf',
        type: 'pdf',
        size: '1.8 MB',
        url: 'https://example.com/files/Executive_Summary.pdf',
      },
    },
    {
      id: 'msg3',
      text: 'Great job, Sarah!',
      sender: 'user5',
      timestamp: 'Yesterday, 9:15 AM',
      type: 'text',
    },
    {
      id: 'msg4',
      text: 'Here\'s the final slide deck',
      sender: 'user10',
      timestamp: 'Yesterday, 10:00 AM',
      type: 'file',
      file: {
        name: 'Client_Presentation_Final.pptx',
        type: 'ppt',
        size: '5.2 MB',
        url: 'https://example.com/files/Client_Presentation_Final.pptx',
      },
    },
    {
      id: 'msg5',
      text: 'Just got out of the presentation',
      sender: 'user5',
      timestamp: 'Yesterday, 3:30 PM',
      type: 'text',
    },
    {
      id: 'msg6',
      text: 'The client loved our presentation!',
      sender: 'user5',
      timestamp: 'Yesterday, 3:31 PM',
      type: 'text',
    },
  ],
  chat11: [
    {
      id: 'msg1',
      text: 'Lunch today?',
      sender: 'user4',
      timestamp: 'Yesterday, 10:00 AM',
      type: 'text',
    },
    {
      id: 'msg2',
      text: 'I\'m in!',
      sender: 'user2',
      timestamp: 'Yesterday, 10:05 AM',
      type: 'text',
    },
    {
      id: 'msg3',
      text: 'Me too',
      sender: 'user1',
      timestamp: 'Yesterday, 10:07 AM',
      type: 'text',
    },
    {
      id: 'msg4',
      text: 'Where should we go?',
      sender: 'user6',
      timestamp: 'Yesterday, 10:10 AM',
      type: 'text',
    },
    {
      id: 'msg5',
      text: 'How about that new Italian place?',
      sender: 'user9',
      timestamp: 'Yesterday, 10:15 AM',
      type: 'text',
    },
    {
      id: 'msg6',
      text: 'Looks delicious!',
      sender: 'user1',
      timestamp: 'Yesterday, 10:20 AM',
      type: 'media',
      media: [
        {
          type: 'image',
          url: 'https://picsum.photos/id/292/300/200',
          caption: 'Restaurant menu',
        },
      ],
    },
    {
      id: 'msg7',
      text: 'Are we going to that new Italian place tomorrow?',
      sender: 'user4',
      timestamp: 'Yesterday, 5:00 PM',
      type: 'text',
    },
  ],

  // Community Chat Messages
  community1: [
    {
      id: 'msg1',
      text: 'Hey everyone! Just discovered a new React hook for state management',
      sender: 'user4',
      timestamp: '11:00 AM',
      type: 'text',
    },
    {
      id: 'msg2',
      text: 'Oh nice! Can you share the link?',
      sender: 'user1',
      timestamp: '11:05 AM',
      type: 'text',
    },
    {
      id: 'msg3',
      text: 'Here it is - it\'s called useReducer with context',
      sender: 'user4',
      timestamp: '11:10 AM',
      type: 'code',
      code: {
        language: 'javascript',
        content: `import { useReducer, createContext, useContext } from 'react';

const StateContext = createContext();

function StateProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <StateContext.Provider value={{ state, dispatch }}>
      {children}
    </StateContext.Provider>
  );
}`,
      },
    },
    {
      id: 'msg4',
      text: 'This looks really useful! Thanks for sharing',
      sender: 'user2',
      timestamp: '11:12 AM',
      type: 'text',
    },
    {
      id: 'msg5',
      text: 'Check out this new React hook for state management!',
      sender: 'user4',
      timestamp: '11:15 AM',
      type: 'text',
    },
  ],
  community2: [
    {
      id: 'msg1',
      text: 'Just finished my new digital art piece',
      sender: 'user11',
      timestamp: '10:30 AM',
      type: 'text',
    },
    {
      id: 'msg2',
      text: 'Can\'t wait to see it!',
      sender: 'user1',
      timestamp: '10:35 AM',
      type: 'text',
    },
    {
      id: 'msg3',
      text: 'Here it is!',
      sender: 'user11',
      timestamp: '10:40 AM',
      type: 'media',
      media: [
        {
          type: 'image',
          url: 'https://picsum.photos/id/1015/300/200',
          caption: 'Digital Landscape - 2024',
        },
      ],
    },
    {
      id: 'msg4',
      text: 'The colors are amazing!',
      sender: 'user5',
      timestamp: '10:42 AM',
      type: 'text',
    },
    {
      id: 'msg5',
      text: 'Just finished my new digital art piece, what do you think?',
      sender: 'user11',
      timestamp: '10:45 AM',
      type: 'text',
    },
  ],
  community3: [
    {
      id: 'msg1',
      text: 'Anyone playing Fortnite tonight?',
      sender: 'user13',
      timestamp: '9:00 AM',
      type: 'text',
    },
    {
      id: 'msg2',
      text: 'I\'m in! What time?',
      sender: 'user1',
      timestamp: '9:05 AM',
      type: 'text',
    },
    {
      id: 'msg3',
      text: 'How about 8 PM?',
      sender: 'user13',
      timestamp: '9:10 AM',
      type: 'text',
    },
    {
      id: 'msg4',
      text: 'Perfect! I\'ll be there',
      sender: 'user6',
      timestamp: '9:15 AM',
      type: 'text',
    },
    {
      id: 'msg5',
      text: 'Who\'s up for some Fortnite tonight?',
      sender: 'user13',
      timestamp: '9:30 AM',
      type: 'text',
    },
  ],
};

// Notifications data
export const notifications = [
  {
    id: 'notif1',
    type: 'message',
    chatId: 'chat1',
    sender: 'user3',
    text: 'Sarah sent you a message in General Chat',
    timestamp: '10:30 AM',
    read: false,
  },
  {
    id: 'notif2',
    type: 'mention',
    chatId: 'chat1',
    sender: 'user4',
    text: 'David mentioned you in General Chat',
    timestamp: '10:25 AM',
    read: false,
  },
  {
    id: 'notif3',
    type: 'file',
    chatId: 'chat1',
    sender: 'user4',
    text: 'David shared a file in General Chat',
    timestamp: '10:40 AM',
    read: false,
  },
  {
    id: 'notif4',
    type: 'group',
    chatId: 'chat4',
    sender: 'user8',
    text: 'Lisa added you to Design Team',
    timestamp: 'Yesterday, 10:00 AM',
    read: true,
  },
  {
    id: 'notif5',
    type: 'message',
    chatId: 'chat3',
    sender: 'user7',
    text: 'John sent you a message',
    timestamp: 'Yesterday, 3:00 PM',
    read: true,
  },
  {
    id: 'notif6',
    type: 'message',
    chatId: 'chat6',
    sender: 'user2',
    text: 'Mike sent you a message about the meetup',
    timestamp: '11:42 AM',
    read: false,
  },
  {
    id: 'notif7',
    type: 'media',
    chatId: 'chat8',
    sender: 'user3',
    text: 'Sarah shared media in your chat',
    timestamp: '9:15 AM',
    read: false,
  },
  {
    id: 'notif8',
    type: 'message',
    chatId: 'chat7',
    sender: 'user7',
    text: 'New messages in Gaming Crew',
    timestamp: '3:20 PM',
    read: false,
  },
];

// Shared media data
export const sharedMedia = {
  chat1: [
    {
      id: 'media1',
      type: 'file',
      file: {
        name: 'Project_Presentation.pdf',
        type: 'pdf',
        size: '2.5 MB',
        url: 'https://example.com/files/Project_Presentation.pdf',
      },
      sender: 'user4',
      timestamp: '10:40 AM',
    },
  ],
  chat2: [
    {
      id: 'media2',
      type: 'image',
      url: 'https://picsum.photos/id/1/300/200',
      caption: 'Product screenshot',
      sender: 'user6',
      timestamp: '10:15 AM',
    },
    {
      id: 'media3',
      type: 'image',
      url: 'https://picsum.photos/id/10/300/200',
      caption: 'User interface',
      sender: 'user6',
      timestamp: '10:15 AM',
    },
  ],
  chat3: [
    {
      id: 'media4',
      type: 'code',
      code: {
        language: 'javascript',
        content: `import { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    document.title = \`You clicked \${count} times\`;
  });
  
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}`,
      },
      sender: 'user1',
      timestamp: 'Yesterday, 2:30 PM',
    },
  ],
  chat4: [
    {
      id: 'media5',
      type: 'image',
      url: 'https://picsum.photos/id/20/300/200',
      caption: 'Homepage design',
      sender: 'user8',
      timestamp: 'Yesterday, 11:10 AM',
    },
    {
      id: 'media6',
      type: 'image',
      url: 'https://picsum.photos/id/21/300/200',
      caption: 'Product page',
      sender: 'user8',
      timestamp: 'Yesterday, 11:10 AM',
    },
    {
      id: 'media7',
      type: 'image',
      url: 'https://picsum.photos/id/22/300/200',
      caption: 'Checkout flow',
      sender: 'user8',
      timestamp: 'Yesterday, 11:10 AM',
    },
    {
      id: 'media8',
      type: 'video',
      url: 'https://example.com/videos/design-walkthrough.mp4',
      thumbnail: 'https://picsum.photos/id/23/300/200',
      duration: '2:30',
      sender: 'user8',
      timestamp: 'Yesterday, 12:00 PM',
    },
  ],
  chat5: [
    {
      id: 'media9',
      type: 'file',
      file: {
        name: 'Project_Proposal.docx',
        type: 'doc',
        size: '1.2 MB',
        url: 'https://example.com/files/Project_Proposal.docx',
      },
      sender: 'user1',
      timestamp: 'Monday, 3:05 PM',
    },
  ],
  chat6: [],
  chat7: [
    {
      id: 'media10',
      type: 'image',
      url: 'https://picsum.photos/id/96/300/200',
      caption: 'New gaming setup',
      sender: 'user2',
      timestamp: '3:15 PM',
    },
  ],
  chat8: [
    {
      id: 'media11',
      type: 'image',
      url: 'https://picsum.photos/id/29/300/200',
      caption: 'Summit view',
      sender: 'user1',
      timestamp: '9:10 AM',
    },
    {
      id: 'media12',
      type: 'image',
      url: 'https://picsum.photos/id/28/300/200',
      caption: 'Forest trail',
      sender: 'user1',
      timestamp: '9:10 AM',
    },
    {
      id: 'media13',
      type: 'file',
      file: {
        name: 'awesome_song.mp3',
        type: 'audio',
        size: '4.8 MB',
        url: 'https://example.com/files/awesome_song.mp3',
      },
      sender: 'user3',
      timestamp: '9:15 AM',
    },
  ],
  chat9: [
    {
      id: 'media14',
      type: 'file',
      file: {
        name: 'Executive_Summary.pdf',
        type: 'pdf',
        size: '1.8 MB',
        url: 'https://example.com/files/Executive_Summary.pdf',
      },
      sender: 'user3',
      timestamp: 'Yesterday, 9:10 AM',
    },
    {
      id: 'media15',
      type: 'file',
      file: {
        name: 'Client_Presentation_Final.pptx',
        type: 'ppt',
        size: '5.2 MB',
        url: 'https://example.com/files/Client_Presentation_Final.pptx',
      },
      sender: 'user10',
      timestamp: 'Yesterday, 10:00 AM',
    },
  ],
  chat10: [
    {
      id: 'media16',
      type: 'image',
      url: 'https://picsum.photos/id/24/300/200',
      caption: 'Homepage - Light Mode',
      sender: 'user8',
      timestamp: 'Yesterday, 1:10 PM',
    },
    {
      id: 'media17',
      type: 'image',
      url: 'https://picsum.photos/id/25/300/200',
      caption: 'Homepage - Dark Mode',
      sender: 'user8',
      timestamp: 'Yesterday, 1:10 PM',
    },
  ],
  chat11: [
    {
      id: 'media18',
      type: 'image',
      url: 'https://picsum.photos/id/292/300/200',
      caption: 'Restaurant menu',
      sender: 'user1',
      timestamp: 'Yesterday, 10:20 AM',
    },
  ],
  chat12: [
    {
      id: 'media19',
      type: 'file',
      file: {
        name: 'Q2_Report_Draft.xlsx',
        type: 'spreadsheet',
        size: '3.4 MB',
        url: 'https://example.com/files/Q2_Report_Draft.xlsx',
      },
      sender: 'user1',
      timestamp: 'Sunday, 6:32 PM',
    },
  ],
}; 