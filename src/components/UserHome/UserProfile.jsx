import React from 'react';
import { Box, Flex, Text, Avatar, Button, HStack, Icon, useColorModeValue } from '@chakra-ui/react';
import { FaEdit, FaCog, FaSignOutAlt } from 'react-icons/fa';

const UserProfile = ({ user, onEditProfile, onSettings, onSignOut }) => {
  const bgColor = useColorModeValue('white', 'gray.800');
  const textColor = useColorModeValue('gray.800', 'white');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  return (
    <Box bg={bgColor} borderRadius="lg" p={4} boxShadow="sm" borderWidth="1px" borderColor={borderColor}>
      <Flex justify="space-between" align="center" mb={4}>
        <HStack spacing={4}>
          <Avatar
            size="lg"
            name={user.name}
            src={user.avatar}
          />
          <Box>
            <Text fontSize="xl" fontWeight="bold" color={textColor}>{user.name}</Text>
            <Text color="gray.500">@{user.username}</Text>
          </Box>
        </HStack>
        
        <HStack spacing={6}>
          <Box textAlign="center">
            <Text fontWeight="bold" color={textColor}>{user.posts}</Text>
            <Text fontSize="sm" color="gray.500">Posts</Text>
          </Box>
          <Box textAlign="center">
            <Text fontWeight="bold" color={textColor}>{user.followers}</Text>
            <Text fontSize="sm" color="gray.500">Followers</Text>
          </Box>
          <Box textAlign="center">
            <Text fontWeight="bold" color={textColor}>{user.following}</Text>
            <Text fontSize="sm" color="gray.500">Following</Text>
          </Box>
        </HStack>
      </Flex>

      <HStack spacing={2} width="100%">
        <Button
          leftIcon={<Icon as={FaEdit} />}
          colorScheme="blue"
          variant="outline"
          flex={1}
          onClick={onEditProfile}
        >
          Edit Profile
        </Button>
        <Button
          leftIcon={<Icon as={FaCog} />}
          colorScheme="gray"
          variant="outline"
          flex={1}
          onClick={onSettings}
        >
          Settings
        </Button>
        <Button
          leftIcon={<Icon as={FaSignOutAlt} />}
          colorScheme="red"
          variant="outline"
          flex={1}
          onClick={onSignOut}
        >
          Sign Out
        </Button>
      </HStack>
    </Box>
  );
};

export default UserProfile; 