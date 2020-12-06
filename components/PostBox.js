import React from 'react';
import NextLink from 'next/link';
import { Heading, Text, Flex, Box, Link } from '@chakra-ui/react';

const BlogPost = ( post ) => {
  const { title, excerpt, slug } = post;

  return (
    <NextLink href={`blog/${slug}`} passHref>
      <Link w="100%" _hover={{ textDecoration: 'none' }}>
        <Box mb={8} display="block" width="100%">
          <Flex
            width="100%"
            align="flex-start"
            justifyContent="space-between"
            flexDirection={['column', 'row']}
          >
            <Heading size="md" as="h3" mb={2} fontWeight="medium" color="black">
              {title}
            </Heading>
          </Flex>
          <Text color="gray.700">{excerpt}</Text>
        </Box>
      </Link>
    </NextLink>
  );

};

export default BlogPost;