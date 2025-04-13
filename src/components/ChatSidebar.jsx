import React, { useState } from 'react';
import {
  Box,
  VStack,
  HStack,
  Text,
  Avatar,
  Input,
  InputGroup,
  InputLeftElement,
  Badge,
  useColorModeValue,
  Flex,
  Divider
} from '@chakra-ui/react';
import { FaSearch } from 'react-icons/fa';
import { useThemeVariant } from '../context/ThemeContext';

const ChatSidebar = ({ chats, selectedChat, onChatSelect }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const { themeVariant } = useThemeVariant();
  
  // Get theme colors
  const hoverBg = useColorModeValue('gray.100', 'gray.700');
  const selectedBg = useColorModeValue('gray.200', 'gray.600');
  const borderColor = useColorModeValue('gray.200', 'gray.700');
  
  // Filter chats based on search query
  const filteredChats = chats.filter(chat => 
    chat.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  return (
    <Box 
      w={{ base: 'full', md: '300px' }} 
      h="full" 
      borderRight="1px" 
      borderColor={borderColor}
      overflow="hidden"
      display="flex"
      flexDirection="column"
    >
      <Box p={4} borderBottom="1px" borderColor={borderColor}>
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <FaSearch color="gray.300" />
          </InputLeftElement>
          <Input 
            placeholder="Search chats..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            borderRadius="full"
          />
        </InputGroup>
      </Box>
      
      <VStack 
        spacing={0} 
        align="stretch" 
        overflowY="auto" 
        flex="1"
        divider={<Divider />}
      >
        {filteredChats.length > 0 ? (
          filteredChats.map(chat => (
            <Box
              key={chat.id}
              onClick={() => onChatSelect(chat)}
              bg={selectedChat?.id === chat.id ? selectedBg : 'transparent'}
              _hover={{ bg: hoverBg }}
              transition="background 0.2s"
              cursor="pointer"
              p={3}
            >
              <HStack spacing={3} align="center">
                <Box position="relative">
                  <Avatar size="md" name={chat.name} src={chat.avatar} />
                  {chat.online && (
                    <Box
                      position="absolute"
                      bottom="2px"
                      right="2px"
                      w="10px"
                      h="10px"
                      bg="green.400"
                      borderRadius="full"
                      border="2px solid"
                      borderColor={useColorModeValue('white', 'gray.800')}
                    />
                  )}
                </Box>
                <Flex flex={1} direction="column">
                  <HStack justify="space-between">
                    <Text fontWeight="semibold" isTruncated>{chat.name}</Text>
                    {chat.unreadCount > 0 && (
                      <Badge 
                        borderRadius="full" 
                        colorScheme="primary" 
                        px={2}
                      >
                        {chat.unreadCount}
                      </Badge>
                    )}
                  </HStack>
                  <Text fontSize="sm" color="gray.500" isTruncated>
                    {chat.lastMessage}
                  </Text>
                </Flex>
              </HStack>
            </Box>
          ))
        ) : (
          <Box p={4} textAlign="center">
            <Text color="gray.500">No chats found</Text>
          </Box>
        )}
      </VStack>
    </Box>
  );
};

export default ChatSidebar; 