import React, { useState } from 'react';
import { NextSeo } from 'next-seo';
import {
  Heading,
  Text,
  Flex,
  Stack,
  Input,
  InputGroup,
  InputRightElement,
  Icon
} from '@chakra-ui/react';

import Container from '@/components/Container';
import PostBox from '@/components/PostBox';

const url = 'https://rgllm.com/blog';
const title = 'Blog – Rogério Moreira';
const description =
  'Thoughts on the software engineering, programming, tech, and my personal life.';

import { getAllPosts } from '@/lib/processPosts'

const Blog = ({ allPosts }) => {
  const [searchValue, setSearchValue] = useState('');
  const filteredBlogPosts = allPosts
    .sort(
      (a, b) =>
        Number(new Date(b.date)) - Number(new Date(a.date))
    )
    .filter((post) =>
      post.title.toLowerCase().includes(searchValue.toLowerCase())
    );

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={url}
        openGraph={{
          url,
          title,
          description
        }}
      />
      <Container>
        <Stack
          as="main"
          spacing={8}
          justifyContent="center"
          alignItems="flex-start"
          m="0 auto 4rem auto"
          maxWidth="700px"
        >
          <Flex
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            maxWidth="700px"
          >
            <Heading letterSpacing="tight" mb={2} as="h1" size="2xl">
              Blog
            </Heading>
            <Text color="black">
              {`I've been writing online since 2014, mostly about web development and tech careers.
                In total, I've written ${allPosts.length} articles on this site.
                Use the search below to filter by title.`}
            </Text>
            <InputGroup my={4} mr={4} w="100%">
              <Input
                aria-label="Search articles"
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder="Search articles"
              />
              <InputRightElement>
                <Icon name="search" color="gray.300" />
              </InputRightElement>
            </InputGroup>
          </Flex>
          <Flex
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            maxWidth="700px"
            mt={8}
          >
            {!filteredBlogPosts.length && 'No posts found.'}
            {filteredBlogPosts.map((post) => (
              <PostBox key={post.title} {...post} />
            ))}
          </Flex>
        </Stack>
      </Container>
    </>
  )
}

export default Blog;

export async function getStaticProps() {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'excerpt',
    'content',
  ])

  return {
    props: { allPosts },
  }
}