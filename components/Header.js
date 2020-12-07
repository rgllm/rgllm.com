import React from 'react';
import NextLink from 'next/link';
import { Avatar, Button, Flex, Box, Text } from '@chakra-ui/react';

const Header = () => {
  return(
    <Flex
      flexDirection="row"
      justifyContent="space-between"
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
      <NextLink href="/" passHref>
        <Flex flexDirection="row" alignItems="center" cursor="pointer">
          <Avatar
            size="sm"
            bg="white"
            name="Rogério Moreira"
            src="/static/images/avatar.jpg"
            mr={2}
          />
          <Text mr={2} as="span" fontSize="1.10rem" fontWeight="bold" >
            Rogério Moreira
          </Text>
        </Flex>
      </NextLink>


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
            Writing
          </Button>
        </NextLink>
      </Box>
    </Flex>
  );
}

export default Header;