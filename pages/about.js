import React from 'react';
import { NextSeo } from 'next-seo';
import {
  Heading,
  Flex,
  Stack
} from '@chakra-ui/react';

import Container from '../components/Container';

const url = 'https://rgllm.com/about';
const title = 'About Me – Rogério Moreira';

const About = () => {

  return (
    <>
      <NextSeo
        title={title}
        canonical={url}
        openGraph={{
          url,
          title
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
              About Me
            </Heading>
          </Flex>
        </Stack>
      </Container>
    </>
  );
};

export default About;