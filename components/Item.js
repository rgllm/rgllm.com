import React from 'react';
import { Flex, Link, Text } from '@chakra-ui/react';

const Item = ({ linkTitle, linkUrl, description }) => {
  return (
    <Flex
      flexDirection="column"
      justifyContent="flex-start"
      marginBottom="1rem"
    >
      <Link href={linkUrl} title={linkTitle} isExternal={linkUrl.startsWith('/') ? false : true } fontSize="1.1rem">
        {linkTitle}
      </Link>
      <Text fontSize="1rem">{description}</Text>
    </Flex>
  );
};

export default Item;