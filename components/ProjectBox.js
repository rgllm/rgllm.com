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
        borderColor="gray.300"
        borderRadius={4}
        p={4}
      >
        {icon}
        <Stack>
          <Heading
            as="h3"
            fontSize="1.25rem"
            fontWeight={700}
            letterSpacing="tighter"
            color="gray.700"
            mb="0"
          >
            {title}
          </Heading>
          <Text fontSize="1.125rem" lineHeight="1.5" fontWeight={500}>{description}</Text>
        </Stack>
      </Flex>
    </Link>
  );
};

export default ProjectBox;