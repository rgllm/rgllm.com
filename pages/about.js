/* eslint-disable jsx-a11y/accessible-emoji */

import React from 'react';
import { NextSeo } from 'next-seo';
import {
  Flex,
  Heading,
  Divider,
  Stack,
  Text,
  useColorMode
} from '@chakra-ui/react';
import Image from 'next/image'

import Container from '@/components/Container';
import Item from '@/components/Item';
import Link from '@/components/Link';

const url = 'https://rgllm.com/about';
const title = 'About Me – Rogério Moreira';

const About = () => {
  const { colorMode } = useColorMode();

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
            <div style={{ marginBottom: '3rem' }}>
              <Image
                layout="intrinsic"
                objectFit="cover"
                src="/static/images/rogerio-full.jpg"
                alt="Rogério Moreira"
                width={800}
                height={500}
                priority
              />
            </div>
            <Text marginBottom="1.5rem" color={colorMode === 'light' ? 'gray.900' : 'white'}>
              👋 I’m a software engineer, writer, and maker, currently living in Braga, Portugal.
            </Text>
            <Text marginBottom="1.5rem" color={colorMode === 'light' ? 'gray.900' : 'white'}>
              Right now I work for <Link href="https://mindera.com">Mindera</Link> where I help developing <Link href="https://trainline.com">Trainline</Link>, the biggest rail-ticketing company in Europe.  Before, I worked at <Link href="https://pixelmatters.com">Pixelmatters</Link> in the development of web applications and websites in various business domains with US-based companies like Rubrik and DocSend (acquired by Dropbox).
            </Text>
            <Text marginBottom="1.5rem" color={colorMode === 'light' ? 'gray.900' : 'white'}>
              I also help to maintain <Link href="https://ominho.pt">OMinho</Link> one of the biggest Portuguese online newspapers and ocasionally write about tech and Apple at <Link href="https://iclub.pt">iClub</Link>.
            </Text>
            <Text marginBottom="1.5rem" color={colorMode === 'light' ? 'gray.900' : 'white'}>
              You can find me on <Link href="https://twitter.com/rgllm">Twitter</Link> where I talk about development or on  <Link href="https://github.com/rgllm">GitHub</Link> where I’m building in the open, or on <Link href="https://linkedin.com/in/rgllm">LinkedIn</Link> if you want to know more about me.
            </Text>

            <Divider color={colorMode === 'light' ? 'gray.300' : 'white'} my="40px" />

            <Heading as="h4" fontSize="1.25rem" fontWeight={600} lineHeight="1.75rem" color={colorMode === 'light' ? 'black' : 'white'}>Projects</Heading>
            <Text marginBottom="1.5rem" fontSize="1.125rem" lineHeight="1.75rem" mb="20px" color={colorMode === 'light' ? 'gray.900' : 'white'}>Weekend hacks for fun and learning.</Text>
            <Item linkTitle="Awesome Portugal Data" linkUrl="https://github.com/rgllm/awesome-portugal-data/" description="Curated list of Portuguese datasets and open APIs." />
            <Item linkTitle="Serverless Portuguese Utils" linkUrl="https://github.com/rgllm/serverless-portuguese-utils/" description="A set of useful utils to validate Portuguese data using Cloudflare Workers." />
            <Item linkTitle="XNATUM" linkUrl="https://pypi.org/project/xnatum/" description="Python client to interact with XNAT" />

            <Divider color={colorMode === 'light' ? 'gray.300' : 'white'} my="40px" />

            <Heading as="h4" fontSize="1.25rem" fontWeight={600} lineHeight="1.75rem" color={colorMode === 'light' ? 'black' : 'white'}>Speaking and interviews</Heading>
            <Text marginBottom="1.5rem" fontSize="1.125rem" lineHeight="1.75rem" mb="20px" color={colorMode === 'light' ? 'gray.900' : 'white'}>{'Some of the articles I\'ve written outside this website or I\'ve contributed to.'}</Text>
            <Item linkTitle="Identificado primeiro problema na aplicação Stayaway Covid. Código já está a ser escrutinado" linkUrl="https://visao.sapo.pt/exameinformatica/noticias-ei/software/2020-07-30-identificado-problema-aplicacao-stayaway-covid/" description="An interview I did about the Portuguese COVID tracing app" />
            <Item linkTitle="WordPress workshop for NEEGIUM" linkUrl="https://www.facebook.com/events/429278770844403/" description="An introductory workshop about WordPress" />
            <Item linkTitle="Building an imagining-based research platform for the implementation of experiments with brain connectivity data " linkUrl="https://repositorium.sdum.uminho.pt/" description="MSc. thesis dissertation" />

            <Divider color={colorMode === 'light' ? 'gray.300' : 'white'} my="40px" />

            <Heading as="h4" fontSize="1.25rem" fontWeight={600} lineHeight="1.75rem" color={colorMode === 'light' ? 'black' : 'white'}>Miscellaneous</Heading>
            <Text marginBottom="1.5rem" fontSize="1.125rem" lineHeight="1.75rem" mb="20px" color={colorMode === 'light' ? 'gray.900' : 'white'}>{'Other pages on the site that don\'t fit anywhere else.'}</Text>
            <Item linkTitle="Books" linkUrl="/books" description="Books that I read or I'm currently reading" />
            <Divider color={colorMode === 'light' ? 'gray.300' : 'white'} my="40px" />
          </Flex>
        </Stack>
      </Container>
    </>
  );
};

export default About;
