import { Avatar, Button, useColorMode, Flex, Box, Text } from '@chakra-ui/react';
import NextLink from 'next/link';
import React from 'react';

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return(
    <Flex
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      maxWidth="900px"
      width="100%"
      as="nav"
      p={8}
      mt={[0, 8]}
      mb={8}
      mx="auto"
    >
      <Flex flexDirection="row" alignItems="center" cursor="pointer">
        <Avatar
          size="sm"
          bg={colorMode === 'light' ? 'white' : 'black'}
          name="Rogério Moreira"
          src="/static/images/avatar.jpg"
          mr={2}
          onClick={toggleColorMode}
        />
        <NextLink href="/" passHref>
          <Text  display={{ base: 'none', md: 'block' }} mr={2} as="span" fontSize="1.06rem" fontWeight="bold" color={colorMode === 'light' ? 'gray.900' : 'white'}>
            Rogério Moreira
          </Text>
        </NextLink>
      </Flex>


      <Box display="inline-block">
        <NextLink href="/" passHref>
          <Button as="a" variant="ghost" fontWeight={400} p={[1, 4]}>
            Home
          </Button>
        </NextLink>
        <NextLink href="/about" passHref>
          <Button as="a" variant="ghost" fontWeight={400} p={[1, 4]}>
            About
          </Button>
        </NextLink>
        <NextLink href="/blog" passHref>
          <Button as="a" variant="ghost" fontWeight={400} p={[1, 4]}>
            Blog
          </Button>
        </NextLink>
      </Box>
    </Flex>
  );
}

export default Header;