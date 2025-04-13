import React from 'react';
import { Box, VStack, Text, Image, HStack, Avatar, Icon, useColorModeValue } from '@chakra-ui/react';
import { FaHeart, FaComment, FaShare, FaBookmark } from 'react-icons/fa';

const FeedPosts = ({ posts }) => {
  const bgColor = useColorModeValue('white', 'gray.800');
  const textColor = useColorModeValue('gray.800', 'white');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  return (
    <VStack spacing={6} width="100%">
      {posts.map((post, index) => (
        <Box
          key={index}
          bg={bgColor}
          borderRadius="lg"
          overflow="hidden"
          boxShadow="sm"
          borderWidth="1px"
          borderColor={borderColor}
          width="100%"
        >
          {/* Post Header */}
          <HStack p={4} spacing={3}>
            <Avatar size="sm" name={post.author} src={post.authorAvatar} />
            <Text fontWeight="bold" color={textColor}>{post.author}</Text>
          </HStack>

          {/* Post Image */}
          <Image
            src={post.image}
            alt={post.caption}
            width="100%"
            objectFit="cover"
          />

          {/* Post Actions */}
          <HStack p={4} spacing={4}>
            <Icon as={FaHeart} color="red.500" cursor="pointer" />
            <Icon as={FaComment} color={textColor} cursor="pointer" />
            <Icon as={FaShare} color={textColor} cursor="pointer" />
            <Box flex={1} />
            <Icon as={FaBookmark} color={textColor} cursor="pointer" />
          </HStack>

          {/* Post Caption */}
          <Box p={4} pt={0}>
            <Text color={textColor}>
              <Text as="span" fontWeight="bold">{post.author}</Text> {post.caption}
            </Text>
            <Text color="gray.500" fontSize="sm" mt={2}>
              {post.likes} likes • {post.comments} comments
            </Text>
          </Box>
        </Box>
      ))}
    </VStack>
  );
};

export default FeedPosts; 