import parse from 'html-react-parser';
import { Box, useStyleConfig } from '@chakra-ui/react';

export default function PostBody({ content }) {
  const styles = useStyleConfig('PostContent', {});

  return (
    <Box sx={styles}>{parse(content)}</Box>
  )
}