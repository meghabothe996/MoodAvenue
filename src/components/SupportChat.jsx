import {
  Box,
  VStack,
  HStack,
  Text,
  Input,
  IconButton,
  Avatar,
  useColorModeValue,
  CloseButton,
  Flex,
  Spacer
} from '@chakra-ui/react'
import { useState } from 'react'
import { FaPaperPlane } from 'react-icons/fa'

const SupportChat = ({ isOpen, onClose }) => {
  const [messages] = useState([
    {
      id: 1,
      type: 'bot',
      text: 'Hello! 👋 Welcome to MoodAvenue support. How can I help you today?',
      time: '12:00'
    },
    {
      id: 2,
      type: 'bot',
      text: 'You can ask me about:\n• Getting started\n• Account issues\n• Features and pricing\n• Technical support',
      time: '12:01'
    }
  ])

  const bgColor = useColorModeValue('white', 'gray.800')
  const headerBg = useColorModeValue('primary.500', 'primary.500')
  const borderColor = useColorModeValue('gray.200', 'gray.700')

  return (
    <Box
      position="fixed"
      bottom={24}
      right={8}
      width="350px"
      height="500px"
      bg={bgColor}
      borderRadius="lg"
      boxShadow="xl"
      display={isOpen ? "flex" : "none"}
      flexDirection="column"
      zIndex={100}
      border="1px"
      borderColor={borderColor}
      overflow="hidden"
    >
      {/* Header */}
      <Flex
        bg={headerBg}
        p={4}
        color="white"
        alignItems="center"
      >
        <Avatar
          size="sm"
          name="Support Bot"
          src="/support-avatar.png"
          bg="white"
        />
        <Text ml={3} fontWeight="bold">Support Chat</Text>
        <Spacer />
        <CloseButton onClick={onClose} />
      </Flex>

      {/* Chat Messages */}
      <VStack
        flex={1}
        overflowY="auto"
        p={4}
        spacing={4}
        alignItems="stretch"
        css={{
          '&::-webkit-scrollbar': {
            width: '4px',
          },
          '&::-webkit-scrollbar-track': {
            width: '6px',
          },
          '&::-webkit-scrollbar-thumb': {
            background: useColorModeValue('gray.300', 'gray.600'),
            borderRadius: '24px',
          },
        }}
      >
        {messages.map((message) => (
          <Box
            key={message.id}
            alignSelf={message.type === 'bot' ? 'flex-start' : 'flex-end'}
            maxW="80%"
          >
            <Box
              bg={message.type === 'bot' 
                ? useColorModeValue('gray.100', 'gray.700')
                : 'primary.500'
              }
              color={message.type === 'bot'
                ? useColorModeValue('gray.800', 'white')
                : 'white'
              }
              borderRadius="lg"
              px={4}
              py={2}
            >
              <Text whiteSpace="pre-wrap">{message.text}</Text>
            </Box>
            <Text
              fontSize="xs"
              color="gray.500"
              mt={1}
              textAlign={message.type === 'bot' ? 'left' : 'right'}
            >
              {message.time}
            </Text>
          </Box>
        ))}
      </VStack>

      {/* Input Area */}
      <HStack p={4} borderTop="1px" borderColor={borderColor}>
        <Input
          placeholder="Type your message..."
          variant="filled"
          bg={useColorModeValue('gray.100', 'gray.700')}
          _hover={{ bg: useColorModeValue('gray.200', 'gray.600') }}
          _focus={{ 
            bg: useColorModeValue('gray.200', 'gray.600'),
            borderColor: 'primary.500'
          }}
        />
        <IconButton
          icon={<FaPaperPlane />}
          colorScheme="primary"
          aria-label="Send message"
        />
      </HStack>
    </Box>
  )
}

export default SupportChat 