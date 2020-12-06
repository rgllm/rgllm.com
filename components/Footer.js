import React from 'react';
import { Icon, Flex, Link } from '@chakra-ui/react';
import { FiTwitter, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const Footer = () => (
  <Flex align="center" mb={4} direction="column">
    <div>
      <Link href="https://twitter.com/rgllm" title="Twitter" isExternal>
        <Icon as={FiTwitter} w={5} h={5} color="gray.700" marginRight={6} />
      </Link>
      <Link href="https://github.com/rgllm" title="GitHub" isExternal>
        <Icon as={FiGithub} w={5} h={5} color="gray.700" marginRight={6} />
      </Link>
      <Link
        href="https://www.linkedin.com/in/rgllm"
        title="LinkedIn"
        isExternal
      >
        <Icon as={FiLinkedin} w={5} h={5} color="gray.700" marginRight={6} />
      </Link>
      <Link href="mailto:r@rgllm.com" title="Email" isExternal>
        <Icon as={FiMail} w={5} h={5} color="gray.700"/>
      </Link>
    </div>
  </Flex>
);

export default Footer;