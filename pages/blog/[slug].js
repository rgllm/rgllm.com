import React from 'react';
import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import { parseISO, format } from 'date-fns';
import {
  Heading,
  Text,
  Flex,
  Stack
} from '@chakra-ui/react';

import { getPostBySlug, getAllPosts } from '@/lib/processPosts';
import Container from '@/components/Container';
import mdToHtml from '@/lib/mdToHtml';
import PostContent from '@/components/PostContent';
import PostSeo from '@/components/PostSeo';

export default function Post({ post }) {
  const router = useRouter()
	
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <Container>
      <PostSeo url={`https://rgllm.com/blog/${post.slug}`} {...post} />
      <Stack
        as="article"
        spacing={8}
        justifyContent="center"
        alignItems="flex-start"
        m="0 auto 4rem auto"
        maxWidth="700px"
        w="100%"
      >
        <Flex
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          maxWidth="700px"
          w="100%"
        >
          <Heading letterSpacing="tight" mb={2} as="h1" size="2xl" fontWeight={800}>
            {post.title}
          </Heading>
          <Flex
            justify="space-between"
            align={['initial', 'center']}
            direction={['column', 'row']}
            mt={2}
            w="100%"
            mb={4}
          >
            <Flex align="center">
              <Text fontSize="sm" color="black">
                {'Rogério Moreira / '}
                {format(parseISO(post.date), 'MMMM dd, yyyy')}
              </Text>
            </Flex>
          </Flex>
        </Flex>
        <PostContent content={post.content} />
      </Stack>
    </Container>
  )
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'content',
  ])
  const content = await mdToHtml(post.content || '')

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}