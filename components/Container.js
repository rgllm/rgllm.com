import { Flex, useColorMode } from '@chakra-ui/react';
import React from 'react';

import Footer from './Footer';
import Header from './Header';

const Container = ({ children }) => {
  const { colorMode } = useColorMode();
	
  return (
    <Flex
      as="main"
      justifyContent="center"
      flexDirection="column"
      bg={colorMode === 'light' ? 'white' : 'black'}
      color={colorMode === 'light' ? 'gray.900' : 'white'}
      px={8}
    >
      <Header />
      {children}
      <Footer />
    </Flex>
  );
};

export default Container;