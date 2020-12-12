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
            <Heading  as="h3" fontSize="1.25rem" fontWeight={700} mb={2} color="gray.900">
              {title}
            </Heading>
          </Flex>
          <Text fontSize="1.125rem" lineHeight="1.5" fontWeight={500}>{excerpt}</Text>
        </Box>
      </Link>
    </NextLink>
  );

};

export default BlogPost;