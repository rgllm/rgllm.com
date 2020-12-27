/* eslint-disable jsx-a11y/accessible-emoji */

import React from 'react'
import { NextSeo } from 'next-seo'
import { UnorderedList, useColorMode, Flex, Heading, Link, ListItem, Stack, Text } from '@chakra-ui/react'

import Container from '@/components/Container'

const url = 'https://rgllm.com/books'
const title = 'Books – Rogério Moreira'

const About = () => {
	const { colorMode } = useColorMode()

	return (
		<>
			<NextSeo
				title={title}
				canonical={url}
				openGraph={{
					url,
					title,
				}}
			/>
			<Container>
				<Stack
					as="main"
					spacing={8}
					justifyContent="center"
					alignItems="flex-start"
					m="0 auto 4rem auto"
					maxWidth="700px"
					w="100%">
					<Flex
						flexDirection="column"
						justifyContent="flex-start"
						alignItems="flex-start"
						maxWidth="700px"
						textAlign="left">
						<Heading mb={4} as="h1" fontSize="3rem">
							Books
						</Heading>
						<Text marginBottom="1.5rem" color={colorMode === 'light' ? 'gray.900' : 'white'}>
							Some of the books (🇬🇧 and 🇵🇹) I’ve recently read. Each book is rated on a 5-star scale.
						</Text>
						<UnorderedList>
							<ListItem fontSize="1.125rem">
								<Link
									href="https://www.goodreads.com/book/show/25541028-elon-musk/"
									title="Elon Musk: Tesla, SpaceX, and the Quest for a Fantastic Future by Ashlee Vance"
									isExternal>
									Elon Musk: Tesla, SpaceX, and the Quest for a Fantastic Future by Ashlee Vance
								</Link>{' '}
								⭐️⭐️⭐️
							</ListItem>

							<ListItem fontSize="1.125rem">
								<Link
									href="https://www.goodreads.com/book/show/6085903-a-bolsa-para-iniciados/"
									title=" A Bolsa para Iniciados"
									isExternal>
									{' '}
									A Bolsa para Iniciados
								</Link>{' '}
								⭐️⭐️⭐️
							</ListItem>

							<ListItem fontSize="1.125rem">
								<Link
									href="https://www.goodreads.com/book/show/38900866-it-doesn-t-have-to-be-crazy-at-work/"
									title="It Doesn't Have to Be Crazy at Work"
									isExternal>
									{"It Doesn't Have to Be Crazy at Work"}
								</Link>{' '}
								⭐️⭐️⭐️⭐️⭐️
							</ListItem>

							<ListItem fontSize="1.125rem">
								<Link href="https://www.goodreads.com/book/show/6732019-rework/" title="Rework" isExternal>
									Rework
								</Link>{' '}
								⭐️⭐️⭐️⭐️
							</ListItem>

							<ListItem fontSize="1.125rem">
								<Link
									href="https://www.goodreads.com/book/show/41210713-money/"
									title="Money: User Guide by Laura Whateley"
									isExternal>
									Money: User Guide by Laura Whateley
								</Link>{' '}
								⭐️⭐️⭐️⭐️
							</ListItem>
						</UnorderedList>
					</Flex>
				</Stack>
			</Container>
		</>
	)
}

export default About
