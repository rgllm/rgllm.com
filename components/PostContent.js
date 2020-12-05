import parse from 'html-react-parser';
import { Box } from '@chakra-ui/react';

export default function PostBody({ content }) {
  return (
    <Box>{parse(content)}</Box>
  )
}