import React from 'react';
import NextLink from 'next/link';
import { Button, Flex, Box } from '@chakra-ui/react';

import Footer from './Footer';

const Container = ({ children }) => {
  return (
    <>
      <Flex
        flexDirection="row"
        justifyContent="flex-end"
        alignItems="center"
        maxWidth="900px"
        width="100%"
        background="white"
        as="nav"
        p={8}
        mt={[0, 8]}
        mb={8}
        mx="auto"
      >
        <Box display="inline-block">
          <NextLink href="/" passHref>
            <Button as="a" variant="ghost" p={[1, 4]}>
              Home
            </Button>
          </NextLink>
          <NextLink href="/about" passHref>
            <Button as="a" variant="ghost" p={[1, 4]}>
              About
            </Button>
          </NextLink>
          <NextLink href="/blog" passHref>
            <Button as="a" variant="ghost" p={[1, 4]}>
              Blog
            </Button>
          </NextLink>
        </Box>
      </Flex>
      <Flex
        as="main"
        justifyContent="center"
        flexDirection="column"
        bg="white"
        color="black"
        px={8}
      >
        {children}
        <Footer />
      </Flex>
    </>
  );
};

export default Container;