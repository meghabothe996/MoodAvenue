import React from 'react';
import { Box, Grid, HStack, Button, Icon, Text, Image } from '@chakra-ui/react';
import { FaHeart, FaComment, FaPlay } from 'react-icons/fa';
import { combinedExplorePosts } from './ExplorePosts';

// This component can be used to replace or enhance the existing explore section
const ExploreSection = ({ explorePosts = [], exploreCategories = [], primaryColor = "blue.500", setViewingPost }) => {
  // Combine all posts - now just using the combinedExplorePosts and any explorePosts passed in
  const allExplorePosts = [...explorePosts, ...combinedExplorePosts];
  const primaryColorScheme = primaryColor.split('.')[0];
  
  return (
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
              colorScheme={primaryColorScheme}
              variant="outline"
            >
              {category.name}
            </Button>
          ))}
        </HStack>
      </Box>

      {/* Explore posts grid */}
      <Grid templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(3, 1fr)", lg: "repeat(3, 1fr)" }} gap={4}>
        {allExplorePosts.map((post) => (
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
  );
};

export default ExploreSection; 