import { Heading, Text, Flex, Box, Link, useColorMode } from '@chakra-ui/react';
import NextLink from 'next/link';
import React from 'react';

const BlogPost = ( post ) => {
  const { title, excerpt, slug } = post;
  const { colorMode } = useColorMode();

  return (
    <NextLink href={`/blog/${slug}`} passHref>
      <Link w="100%" _hover={{ textDecoration: 'none' }}>
        <Box mb={8} display="block" width="100%">
          <Flex
            width="100%"
            align="flex-start"
            justifyContent="space-between"
            flexDirection={['column', 'row']}
          >
            <Heading  as="h3" fontSize="1.25rem" fontWeight={600} mb={2} color={colorMode === 'light' ? 'gray.900' : 'white'}>
              {title}
            </Heading>
          </Flex>
          <Text fontSize="1.125rem" lineHeight="1.5" fontWeight={400} color={colorMode === 'light' ? 'gray.900' : 'white'}>{excerpt}</Text>
        </Box>
      </Link>
    </NextLink>
  );

};

export default BlogPost;