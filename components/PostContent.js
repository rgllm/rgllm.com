import parse from 'html-react-parser';
import { Box } from '@chakra-ui/react';

const PostBody = ({ content }) => {
  return (
    <Box className="markdown-post">{parse(content)}</Box>
  );
};

export default PostBody;