/* eslint-disable jsx-a11y/accessible-emoji */

import React from 'react';
import { NextSeo } from 'next-seo';
import {
  Flex,
  Heading,
  Divider,
  Image,
  Link,
  Stack,
  Text
} from '@chakra-ui/react';

import Container from '@/components/Container';

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
          w="100%"
        >
          <Flex
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            maxWidth="700px"
            textAlign="left"
          >
            <Image
              objectFit="cover"
              src="/static/images/rogerio-full.jpg"
              borderRadius="0.5rem"
              alt="Rogério Moreira"
              marginBottom="3rem"
            />
            <Text marginBottom="1.5rem">
              👋 I’m a software engineer, writer, and maker, currently living in Braga, Portugal.
            </Text>
            <Text marginBottom="1.5rem">
              Right now I work for <Link href="https://mindera.com">Mindera</Link> where I help developing <Link href="https://trainline.com">Trainline</Link>, the biggest rail-ticketing company in Europe.  Before, I worked at <Link href="https://pixelmatters.com">Pixelmatters</Link> in the development of web applications and websites in various business domains, including some US based companies like Rubrik and DocSend.
            </Text>
            <Text marginBottom="1.5rem">
              I also help maintaining and scaling <Link href="https://ominho.pt">OMinho</Link> one of the biggest Portuguese online newspapers and ocasionally write about tech and Apple at <Link href="https://iclub.pt">iClub</Link>.
            </Text>
            <Text marginBottom="1.5rem">
              You can find me on <Link href="https://twitter.com/rgllm">Twitter</Link> where I talk about development or on  <Link href="https://github.com/rgllm">GitHub</Link> where I’m building in the open, or on <Link href="https://linkedin.com/in/rgllm">LinkedIn</Link> if you want to know more about me.
            </Text>
            <Divider color="gray.300" my="40px" />
            <Heading as="h4" fontSize="1.25rem" fontWeight="700" lineHeight="1.75rem">Projects</Heading>
            <Link href="https://github.com/rgllm/awesome-portugal-data/">Awesome Portugal Data</Link>
            <Link href="https://github.com/rgllm/serverless-portuguese-utils/">Serverless Portuguese Utils</Link>
            <Link href="https://pypi.org/project/xnatum/">XNATUM</Link>
            <Text marginBottom="1.5rem" fontSize="1.125rem" lineHeight="1.75rem" mb="20px">Weekend hacks for fun and learning.</Text>
            <Divider color="gray.300" my="40px" />
            <Heading as="h4" fontSize="1.25rem" fontWeight="700" lineHeight="1.75rem">Speaking and interviews</Heading>
            <Text marginBottom="1.5rem" fontSize="1.125rem" lineHeight="1.75rem" mb="20px">{'Some of the articles I\'ve written outside this website or I\'ve contributed to.'}</Text>
            <Link href="https://visao.sapo.pt/exameinformatica/noticias-ei/software/2020-07-30-identificado-problema-aplicacao-stayaway-covid/">Identificado primeiro problema na aplicação Stayaway Covid. Código já está a ser escrutinado</Link>
            <Divider color="gray.300" my="40px" />
            <Heading as="h4" fontSize="1.25rem" fontWeight="700" lineHeight="1.75rem">Publications</Heading>
            <Text marginBottom="1.5rem" fontSize="1.125rem" lineHeight="1.75rem" mb="20px">{'Scientific papers I\'ve published'}</Text>
            <Divider color="gray.300" my="40px" />
            <Heading as="h4" fontSize="1.25rem" fontWeight="700" lineHeight="1.75rem">Accomplishments</Heading>
          </Flex>
        </Stack>
      </Container>
    </>
  );
};

export default About;
