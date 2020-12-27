import React from 'react'
import { Flex, Heading, Link, Stack, Text, useColorMode } from '@chakra-ui/react'

const ProjectBox = ({ title, description, href, icon }) => {
	const { colorMode } = useColorMode()

	return (
		<Link
			mb={4}
			href={href}
			title={title}
			isExternal
			_hover={{
				boxShadow: colorMode === 'light' ? '0px 4px 20px rgba(0, 0, 0, 0.05)' : '0px 4px 20px rgba(#fff, 0.05)',
				textDecoration: 'none',
			}}
			width="100%">
			<Flex
				align="center"
				border="1px solid"
				borderColor={colorMode === 'light' ? 'gray.300' : 'white'}
				borderRadius={4}
				p={4}>
				{icon}
				<Stack>
					<Heading
						as="h3"
						fontSize="1.25rem"
						fontWeight={600}
						letterSpacing="tighter"
						color={colorMode === 'light' ? 'gray.900' : 'white'}
						mb="0">
						{title}
					</Heading>
					<Text
						fontSize="1.125rem"
						lineHeight="1.5"
						fontWeight={400}
						color={colorMode === 'light' ? 'gray.900' : 'white'}>
						{description}
					</Text>
				</Stack>
			</Flex>
		</Link>
	)
}

export default ProjectBox
