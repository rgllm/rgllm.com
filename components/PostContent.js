import { Box } from '@chakra-ui/react'
import parse from 'html-react-parser'

const PostBody = ({ content }) => {
	return <Box className="markdown-post">{parse(content)}</Box>
}

export default PostBody
