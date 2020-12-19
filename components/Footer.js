import React from 'react';
import { Box, Icon, Flex, Link, useColorMode } from '@chakra-ui/react';
import { FiTwitter, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const Footer = () => {
  const { colorMode } = useColorMode();
	
  return(
    <Flex align="center" mb={4} direction="column">
      <Box>
        <Link href="https://twitter.com/rgllm" title="Twitter" isExternal>
          <Icon as={FiTwitter} w={4} h={4} color={colorMode === 'light' ? 'gray.600' : 'white'}  marginRight={6} />
        </Link>
        <Link href="https://github.com/rgllm" title="GitHub" isExternal>
          <Icon as={FiGithub} w={4} h={4} color={colorMode === 'light' ? 'gray.600' : 'white'}  marginRight={6} />
        </Link>
        <Link
          href="https://www.linkedin.com/in/rgllm"
          title="LinkedIn"
          isExternal
        >
          <Icon as={FiLinkedin} w={4} h={4} color={colorMode === 'light' ? 'gray.600' : 'white'}  marginRight={6} />
        </Link>
        <Link href="mailto:r@rgllm.com" title="Email" isExternal>
          <Icon as={FiMail} w={4} h={4} color={colorMode === 'light' ? 'gray.600' : 'white'} />
        </Link>
      </Box>
    </Flex>
  )};

export default Footer;