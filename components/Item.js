import React from 'react';
import { Flex, Link, Text, useColorMode } from '@chakra-ui/react';
import NextLink from 'next/link';

const Item = ({ linkTitle, linkUrl, description }) => {
  const { colorMode } = useColorMode();

  return (
    <Flex
      flexDirection="column"
      justifyContent="flex-start"
      marginBottom="1rem"
    >
      {linkUrl.startsWith('/')  && <Link href={linkUrl} title={linkTitle} isExternal={true} fontSize="1.1rem" fontWeight={600}>{linkTitle}</Link>}
      {!linkUrl.startsWith('/') && <NextLink href={linkUrl} passHref><Text fontSize="1.1rem" fontWeight={600} cursor="pointer">{linkTitle}</Text></NextLink>}
      <Text fontSize="1rem" color={colorMode === 'light' ? 'gray.900' : 'white'}>{description}</Text>
    </Flex>
  );
};

export default Item;