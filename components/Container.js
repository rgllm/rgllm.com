import React from 'react';
import { Flex } from '@chakra-ui/react';

import Header from './Header';
import Footer from './Footer';

const Container = ({ children }) => {
  return (
    <Flex
      as="main"
      justifyContent="center"
      flexDirection="column"
      bg="white"
      color="gray.700"
      px={8}
    >
      <Header />
      {children}
      <Footer />
    </Flex>
  );
};

export default Container;