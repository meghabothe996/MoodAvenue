import React from 'react';
import { Box, Flex, Text, Avatar, Button, VStack, HStack, Icon, useColorModeValue } from '@chakra-ui/react';
import { FaUser, FaEdit, FaCog, FaSignOutAlt } from 'react-icons/fa';

const UserProfile = ({ user, onEditProfile, onSettings, onSignOut }) => {
  const bgColor = useColorModeValue('white', 'gray.800');
  const textColor = useColorModeValue('gray.800', 'white');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  return (
    <Box bg={bgColor} borderRadius="lg" p={6} boxShadow="sm" borderWidth="1px" borderColor={borderColor}>
      <Flex direction="column" align="center" mb={6}>
        <Avatar
          size="2xl"
          name={user.name}
          src={user.avatar}
          mb={4}
        />
        <Text fontSize="2xl" fontWeight="bold" color={textColor}>{user.name}</Text>
        <Text color="gray.500" mb={4}>@{user.username}</Text>
        <Text textAlign="center" color={textColor} mb={6}>{user.bio}</Text>
        
        <HStack spacing={4} mb={6}>
          <VStack>
            <Text fontWeight="bold" color={textColor}>{user.followers}</Text>
            <Text color="gray.500">Followers</Text>
          </VStack>
          <VStack>
            <Text fontWeight="bold" color={textColor}>{user.following}</Text>
            <Text color="gray.500">Following</Text>
          </VStack>
          <VStack>
            <Text fontWeight="bold" color={textColor}>{user.posts}</Text>
            <Text color="gray.500">Posts</Text>
          </VStack>
        </HStack>

        <VStack spacing={3} width="100%">
          <Button
            leftIcon={<Icon as={FaEdit} />}
            colorScheme="blue"
            variant="outline"
            width="100%"
            onClick={onEditProfile}
          >
            Edit Profile
          </Button>
          <Button
            leftIcon={<Icon as={FaCog} />}
            colorScheme="gray"
            variant="outline"
            width="100%"
            onClick={onSettings}
          >
            Settings
          </Button>
          <Button
            leftIcon={<Icon as={FaSignOutAlt} />}
            colorScheme="red"
            variant="outline"
            width="100%"
            onClick={onSignOut}
          >
            Sign Out
          </Button>
        </VStack>
      </Flex>
    </Box>
  );
};

export default UserProfile; 