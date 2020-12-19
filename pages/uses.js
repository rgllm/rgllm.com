/* eslint-disable jsx-a11y/accessible-emoji */

import React from 'react';
import { NextSeo } from 'next-seo';
import {
  Flex,
  Divider,
  ListItem,
  Stack,
  Text,
  Heading,
  UnorderedList,
} from '@chakra-ui/react';

import Container from '@/components/Container';

const url = 'https://rgllm.com/uses';
const title = 'Uses – Rogério Moreira';

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
            <Heading mb={4} as="h1" fontSize="3rem">
              Uses
            </Heading>
            <Text marginBottom="1.5rem">
              {'Make sure to check out uses.tech for a list of everyone\'s /uses pages!'}
            </Text>
            <Heading letterSpacing="tight" fontSize="2rem" fontWeight={600} mb={4} cursor="pointer">
              Editor + Terminal
            </Heading>
            <UnorderedList>
              <ListItem fontSize="1.125rem">Visual Studio Code is my current editor of choice.</ListItem>
            </UnorderedList>
            <Divider color="gray.300" my="40px" />
            <Heading letterSpacing="tight" fontSize="2rem" fontWeight={600} mb={4} cursor="pointer">
              Desktop Apps
            </Heading>
            <UnorderedList>
              <ListItem fontSize="1.125rem">Meeter.</ListItem>
            </UnorderedList>
            <Divider color="gray.300" my="40px" />
            <Heading letterSpacing="tight" fontSize="2rem" fontWeight={600} mb={4} cursor="pointer">
              Desk Setup
            </Heading>
            <UnorderedList>
              <ListItem fontSize="1.125rem">MacBook Pro.</ListItem>
            </UnorderedList>
            <Divider color="gray.300" my="40px" />
            <Heading letterSpacing="tight" fontSize="2rem" fontWeight={600} mb={4} cursor="pointer">
              Other Gear
            </Heading>
            <UnorderedList>
              <ListItem fontSize="1.125rem">Canon 600D</ListItem>
            </UnorderedList>
            <Divider color="gray.300" my="40px" />
          </Flex>
        </Stack>
      </Container>
    </>
  );
};

export default About;
