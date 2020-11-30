import React from 'react';
import NextLink from 'next/link';
import { Icon, Flex, Link } from '@chakra-ui/react';
import { FiTwitter, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const Footer = () => (
  <Flex align="center" mb={4} direction="column">
    <div>
      <Link href="https://twitter.com/rgllm" title="Twitter" isExternal>
        <Icon as={FiTwitter} w={6} h={6} marginRight={3} />
      </Link>
      <Link href="https://github.com/rgllm" title="GitHub" isExternal>
        <Icon as={FiGithub} w={6} h={6} marginRight={3} />
      </Link>
      <Link
        href="https://www.linkedin.com/in/rgllm"
        title="LinkedIn"
        isExternal
      >
        <Icon as={FiLinkedin} w={6} h={6} marginRight={3} />
      </Link>
      <Link href="mailto:r@rgllm.com" title="Email" isExternal>
        <Icon as={FiMail} w={6} h={6}/>
      </Link>
    </div>
    <div>
      <NextLink href="/uses" passHref>
        <Link
          fontSize="sm"
          minWidth="100px"
          mr={2}
          title="Uses"
        >
          /uses
        </Link>
      </NextLink>
      <NextLink href="/books" passHref>
        <Link
          fontSize="sm"
          minWidth="100px"
          mr={2}
          title="Books"
        >
          /books
        </Link>
      </NextLink>
    </div>
  </Flex>
);

export default Footer;