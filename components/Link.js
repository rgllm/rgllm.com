import NextLink from 'next/link'
import { Link as ChakraLink } from '@chakra-ui/react'

const Link = ( props ) => {
  const { children, href, ...rest } = props;

  return (
    <NextLink href={href} passHref>
      <ChakraLink {...rest}>{children}</ChakraLink>
    </NextLink>
  );

};

export default Link;