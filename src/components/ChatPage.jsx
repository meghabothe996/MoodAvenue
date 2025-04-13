import React, { useState } from 'react';
import {
  Box,
  Flex,
  useColorModeValue
} from '@chakra-ui/react';
import ChatSidebar from './ChatSidebar';
import ChatWindow from './ChatWindow';
import ChatNavbar from './ChatNavbar';
import { useThemeVariant } from '../context/ThemeContext';

// Dummy data for testing
const chats = [
  {
    id: '1',
    name: 'John Doe',
    avatar: 'https://bit.ly/dan-abramov',
    lastMessage: 'Hey, how are you doing?',
    unreadCount: 3,
    online: true,
    messages: [
      { sender: 'other', text: 'Hey there!', time: '10:00 AM' },
      { sender: 'me', text: 'Hi! How are you?', time: '10:02 AM' },
      { sender: 'other', text: 'I\'m good, thanks for asking. How about you?', time: '10:05 AM' },
      { sender: 'me', text: 'Doing well! Just working on some code.', time: '10:10 AM' },
      { sender: 'other', text: 'That\'s great! What are you building?', time: '10:15 AM' },
      { sender: 'me', text: 'A chat application with React and Chakra UI. It\'s coming along nicely!', time: '10:20 AM' },
      { sender: 'other', text: 'Sounds awesome! Can\'t wait to see it.', time: '10:25 AM' },
    ],
  },
  {
    id: '2',
    name: 'Jane Smith',
    avatar: 'https://bit.ly/ryan-florence',
    lastMessage: 'The meeting is at 3 PM tomorrow.',
    unreadCount: 0,
    online: false,
    messages: [
      { sender: 'other', text: 'Hi there!', time: 'Yesterday' },
      { sender: 'me', text: 'Hello! How can I help you?', time: 'Yesterday' },
      { sender: 'other', text: 'I wanted to remind you about our meeting.', time: 'Yesterday' },
      { sender: 'me', text: 'Oh, thanks for the reminder. When is it?', time: 'Yesterday' },
      { sender: 'other', text: 'The meeting is at 3 PM tomorrow.', time: 'Yesterday' },
      { sender: 'me', text: 'Got it, thanks!', time: 'Yesterday' },
    ],
  },
];

const ChatPage = ({ onSignOut }) => {
  const [selectedChat, setSelectedChat] = useState(null);
  const { themeVariant } = useThemeVariant();
  
  // Get theme colors
  const bg = useColorModeValue('gray.50', 'gray.900');
  
  const handleChatSelect = (chat) => {
    setSelectedChat(chat);
  };
  
  return (
    <Flex direction="column" h="100vh" overflow="hidden">
      <ChatNavbar onSignOut={onSignOut} />
      
      <Flex flex={1} overflow="hidden">
        <ChatSidebar 
          chats={chats} 
          selectedChat={selectedChat} 
          onChatSelect={handleChatSelect} 
        />
        <ChatWindow chat={selectedChat} />
      </Flex>
    </Flex>
  );
};

export default ChatPage; 