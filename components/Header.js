import React from 'react';
import NextLink from 'next/link';
import { Button, Flex, Box } from '@chakra-ui/react';

const Header = () => {
  return(
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
          <Button as="a" variant="ghost" fontWeight="normal" p={[1, 4]}>
            Home
          </Button>
        </NextLink>
        <NextLink href="/about" passHref>
          <Button as="a" variant="ghost" fontWeight="normal" p={[1, 4]}>
            About
          </Button>
        </NextLink>
        <NextLink href="/blog" passHref>
          <Button as="a" variant="ghost" fontWeight="normal" p={[1, 4]}>
            Blog
          </Button>
        </NextLink>
        <NextLink href="/uses" passHref>
          <Button as="a" variant="ghost" fontWeight="normal" p={[1, 4]}>
            Uses
          </Button>
        </NextLink>
        <NextLink href="/books" passHref>
          <Button as="a" variant="ghost" fontWeight="normal" p={[1, 4]}>
            Books
          </Button>
        </NextLink>
      </Box>
    </Flex>
  );
}

export default Header;