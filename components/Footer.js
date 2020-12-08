import React from 'react';
import { Box, Icon, Flex, Link } from '@chakra-ui/react';
import { FiTwitter, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const Footer = () => (
  <Flex align="center" mb={4} direction="column">
    <Box>
      <Link href="https://twitter.com/rgllm" title="Twitter" isExternal>
        <Icon as={FiTwitter} w={4} h={4} color="gray.600" marginRight={6} />
      </Link>
      <Link href="https://github.com/rgllm" title="GitHub" isExternal>
        <Icon as={FiGithub} w={4} h={4} color="gray.600" marginRight={6} />
      </Link>
      <Link
        href="https://www.linkedin.com/in/rgllm"
        title="LinkedIn"
        isExternal
      >
        <Icon as={FiLinkedin} w={4} h={4} color="gray.600" marginRight={6} />
      </Link>
      <Link href="mailto:r@rgllm.com" title="Email" isExternal>
        <Icon as={FiMail} w={4} h={4} color="gray.600"/>
      </Link>
    </Box>
  </Flex>
);

export default Footer;