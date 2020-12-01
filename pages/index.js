import React from 'react';
import NextLink from 'next/link';
import { Stack, Flex, Heading, Text } from '@chakra-ui/react';

import Container from '@/components/Container'
import ProjectBox from '@/components/ProjectBox';


function Index() {
  return <Container>
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
        textAlign="left"
      >
        <Heading mb={2} as="h1" size="2xl">
          Hey, I’m Rogério Moreira
        </Heading>
        <Text>
          I’m a developer, writer, and maker. I work at Mindera as a Software Engineer.
          You’ve found my personal slice of the internet – everything you want to know and more is here.
        </Text>
      </Flex>
      <Flex
        flexDirection="column"
        justifyContent="flex-start"
        alignItems="flex-start"
        maxWidth="700px"
        mt={8}
      >
        <NextLink href="/blog" passHref>
          <Heading letterSpacing="tight" mb={4} size="xl" fontWeight={700} mr={4} cursor="pointer">
            Latest Posts
          </Heading>
        </NextLink>
      </Flex>
      <Flex
        flexDirection="column"
        justifyContent="flex-start"
        alignItems="flex-start"
        maxWidth="700px"
        width="100%"
      >
        <Heading letterSpacing="tight" mb={4} size="xl" fontWeight={700}>
          Projects
        </Heading>
        <ProjectBox
          title="Awesome Portugal Data"
          description="Curated list of Portuguese datasets and open APIs."
          href="https://github.com/rgllm/awesome-portugal-data/"
        />
        <ProjectBox
          title="Serverless Portuguese Utils"
          description="A set of useful utils to validate Portuguese data using Cloudflare Workers."
          href="https://github.com/rgllm/serverless-portuguese-utils/"
        />
        <ProjectBox
          title="XNATUM"
          description="Python client to interact with XNAT"
          href="https://pypi.org/project/xnatum/"
        />
      </Flex>
    </Stack>
  </Container>
}

export default Index
