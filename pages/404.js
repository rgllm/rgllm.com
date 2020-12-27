import React from 'react'
import NextLink from 'next/link'
import { useColorMode, Heading, Text, Flex, Stack, Button } from '@chakra-ui/react'

import Container from '@/components/Container'

const Error = () => {
	const { colorMode } = useColorMode()

	return (
		<Container>
			<Stack
				as="main"
				spacing={8}
				justifyContent="center"
				alignItems="center"
				m="0 auto 4rem auto"
				maxWidth="700px"
				w="100%">
				<Flex
					flexDirection="column"
					justifyContent="flex-start"
					alignItems="center"
					maxWidth="700px"
					textAlign="center">
					<Heading mb={4} as="h1" fontSize="3rem" color={colorMode === 'light' ? 'black' : 'white'}>
						404 - Not Found
					</Heading>
					<Text marginBottom="1.5rem" color={colorMode === 'light' ? 'gray.900' : 'white'}>
						This page could not be found.
					</Text>
					<NextLink href="/" passHref>
						<Button as="a" p={[1, 4]} w="250px" fontWeight="bold" m="3rem auto 0">
							Return Home
						</Button>
					</NextLink>
				</Flex>
			</Stack>
		</Container>
	)
}

export default Error
