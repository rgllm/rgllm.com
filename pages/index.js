import React from 'react'
import NextLink from 'next/link'
import { useColorMode, Stack, Flex, Heading, Text, Icon } from '@chakra-ui/react'
import { GiPortugal } from 'react-icons/gi'
import { SiServerless } from 'react-icons/si'
import { FaHospitalAlt } from 'react-icons/fa'

import Container from '@/components/Container'
import ProjectBox from '@/components/ProjectBox'
import PostBox from '@/components/PostBox'
import { getAllPosts } from '@/lib/processPosts'

const Index = ({ allPosts }) => {
	const latestThreePosts = allPosts.slice(0, 3)
	const { colorMode } = useColorMode()

	return (
		<Container>
			<Stack
				as="main"
				spacing={8}
				justifyContent="center"
				alignItems="flex-start"
				m="0 auto 4rem auto"
				maxWidth="700px">
				<Flex
					flexDirection="column"
					justifyContent="flex-start"
					alignItems="flex-start"
					maxWidth="700px"
					textAlign="left">
					<Heading mb={4} as="h1" fontSize="3rem" color={colorMode === 'light' ? 'black' : 'white'}>
						Hey, I’m Rogério Moreira
					</Heading>
					<Text fontSize="1.125rem" lineHeight="1.5" color={colorMode === 'light' ? 'black' : 'white'}>
						I’m a software engineer, writer, and maker. I work at Mindera as a Software Engineer. You’ve found my
						personal slice of the internet – everything you want to know and more is here.
					</Text>
				</Flex>
				<Flex flexDirection="column" justifyContent="flex-start" alignItems="flex-start" maxWidth="700px" mt={8}>
					<NextLink href="/blog" passHref>
						<Heading
							letterSpacing="tight"
							fontSize="2rem"
							fontWeight={600}
							mb={4}
							cursor="pointer"
							color={colorMode === 'light' ? 'black' : 'white'}>
							Latest Posts
						</Heading>
					</NextLink>
					{!latestThreePosts.length && 'No posts found.'}
					{latestThreePosts.map((post) => (
						<PostBox key={post.title} {...post} />
					))}
				</Flex>
				<Flex flexDirection="column" justifyContent="flex-start" alignItems="flex-start" maxWidth="700px" width="100%">
					<Heading
						letterSpacing="tight"
						mb={4}
						fontSize="2rem"
						fontWeight={600}
						color={colorMode === 'light' ? 'black' : 'white'}>
						Projects
					</Heading>
					<ProjectBox
						icon={
							<Icon
								as={GiPortugal}
								aria-label="Awesome Portugal Data"
								color={colorMode === 'light' ? 'gray.900' : 'white'}
								w="32px"
								h="32px"
								ml={2}
								mr={4}
							/>
						}
						title="Awesome Portugal Data"
						description="Curated list of Portuguese datasets and open APIs."
						href="https://github.com/rgllm/awesome-portugal-data/"
					/>
					<ProjectBox
						icon={
							<Icon
								as={SiServerless}
								aria-label="Serverless Portuguese Utils"
								color={colorMode === 'light' ? 'gray.900' : 'white'}
								w="32px"
								h="32px"
								ml={2}
								mr={4}
							/>
						}
						title="Serverless Portuguese Utils"
						description="A set of useful utils to validate Portuguese data using Cloudflare Workers."
						href="https://github.com/rgllm/serverless-portuguese-utils/"
					/>
					<ProjectBox
						icon={
							<Icon
								as={FaHospitalAlt}
								aria-label="XNATUM"
								color={colorMode === 'light' ? 'gray.900' : 'white'}
								w="32px"
								h="32px"
								ml={2}
								mr={4}
							/>
						}
						title="XNATUM"
						description="Python client to interact with XNAT"
						href="https://pypi.org/project/xnatum/"
					/>
				</Flex>
			</Stack>
		</Container>
	)
}

export default Index

export async function getStaticProps() {
	const allPosts = getAllPosts(['title', 'date', 'slug', 'excerpt', 'content'])

	return {
		props: { allPosts },
	}
}
