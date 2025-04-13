import React, { useState, useRef, useEffect } from 'react';
import {
  Box,
  VStack,
  HStack,
  Text,
  Avatar,
  Input,
  InputGroup,
  InputRightElement,
  IconButton,
  Flex,
  useColorModeValue,
  Heading,
  Divider
} from '@chakra-ui/react';
import { FaPaperPlane, FaSmile, FaPaperclip } from 'react-icons/fa';
import { useThemeVariant } from '../context/ThemeContext';

const ChatWindow = ({ chat }) => {
  const [message, setMessage] = useState('');
  const endOfMessagesRef = useRef(null);
  const { themeVariant } = useThemeVariant();

  // Get theme colors
  const headerBg = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');
  const messageBgMine = useColorModeValue('blue.100', 'blue.800');
  const messageBgOthers = useColorModeValue('gray.100', 'gray.700');
  
  // Scroll to bottom of messages when chat changes or new messages arrive
  useEffect(() => {
    scrollToBottom();
  }, [chat]);
  
  const scrollToBottom = () => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const handleSendMessage = () => {
    if (message.trim() === '') return;
    
    // In a real app, you would send this message to your backend
    console.log(`Sending message: ${message}`);
    
    // Clear the input field
    setMessage('');
    
    // Scroll to bottom after sending
    setTimeout(scrollToBottom, 100);
  };
  
  if (!chat) {
    return (
      <Flex 
        flex={1} 
        justify="center" 
        align="center" 
        h="full" 
        bg={useColorModeValue('gray.50', 'gray.900')}
      >
        <Text color="gray.500">Select a chat to start messaging</Text>
      </Flex>
    );
  }
  
  return (
    <Flex 
      flex={1} 
      direction="column" 
      h="full"
      overflow="hidden"
    >
      {/* Chat header */}
      <Box 
        py={3} 
        px={4} 
        borderBottom="1px" 
        borderColor={borderColor} 
        bg={headerBg}
        position="sticky"
        top={0}
        zIndex={1}
      >
        <HStack spacing={3}>
          <Box position="relative">
            <Avatar size="sm" name={chat.name} src={chat.avatar} />
            {chat.online && (
              <Box
                position="absolute"
                bottom="0"
                right="0"
                w="8px"
                h="8px"
                bg="green.400"
                borderRadius="full"
                border="1px solid"
                borderColor={useColorModeValue('white', 'gray.800')}
              />
            )}
          </Box>
          <Flex flex={1} direction="column">
            <Heading size="sm">{chat.name}</Heading>
            <Text fontSize="xs" color="gray.500">
              {chat.online ? 'Online' : 'Offline'}
            </Text>
          </Flex>
        </HStack>
      </Box>
      
      {/* Chat messages */}
      <VStack 
        flex={1} 
        spacing={4} 
        p={4} 
        overflowY="auto" 
        align="stretch"
        bg={useColorModeValue('gray.50', 'gray.900')}
      >
        {chat.messages && chat.messages.map((msg, index) => (
          <Flex 
            key={index} 
            justify={msg.sender === 'me' ? 'flex-end' : 'flex-start'}
          >
            {msg.sender !== 'me' && (
              <Avatar size="sm" name={chat.name} src={chat.avatar} mr={2} />
            )}
            <Box
              maxW="70%"
              p={3}
              borderRadius="lg"
              bg={msg.sender === 'me' ? messageBgMine : messageBgOthers}
            >
              <Text>{msg.text}</Text>
              <Text fontSize="xs" color="gray.500" textAlign="right" mt={1}>
                {msg.time}
              </Text>
            </Box>
          </Flex>
        ))}
        <div ref={endOfMessagesRef} />
      </VStack>
      
      {/* Message input */}
      <Box p={4} borderTop="1px" borderColor={borderColor} bg={headerBg}>
        <InputGroup>
          <Input
            placeholder="Type a message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            pr="4.5rem"
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                handleSendMessage();
              }
            }}
          />
          <InputRightElement width="4.5rem">
            <HStack spacing={1}>
              <IconButton
                aria-label="Attach file"
                icon={<FaPaperclip />}
                size="sm"
                variant="ghost"
              />
              <IconButton
                aria-label="Send message"
                icon={<FaPaperPlane />}
                size="sm"
                colorScheme="blue"
                onClick={handleSendMessage}
                isDisabled={message.trim() === ''}
              />
            </HStack>
          </InputRightElement>
        </InputGroup>
      </Box>
    </Flex>
  );
};

export default ChatWindow; 