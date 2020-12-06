import React from 'react';
import {
  Flex,
  Link,
  Heading,
  Text,
  Stack } from '@chakra-ui/react';

const ProjectBox = ({ title, description, href, icon }) => {
  return (
    <Link
      mb={4}
      href={href}
      title={title}
      isExternal
      _hover={{
        boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.05)',
        textDecoration: 'none'
      }}
      width="100%"
    >
      <Flex
        align="center"
        border="1px solid"
        borderColor="gray.200"
        borderRadius={4}
        p={4}
      >
        {icon}
        <Stack>
          <Heading
            as="h4"
            size="md"
            fontWeight="bold"
            letterSpacing="tighter"
            color="black"
            mb="0"
          >
            {title}
          </Heading>
          <Text lineHeight="1.3">{description}</Text>
        </Stack>
      </Flex>
    </Link>
  );
};

export default ProjectBox;