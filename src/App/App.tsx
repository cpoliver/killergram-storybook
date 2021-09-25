import { Container, Flex, Stack } from "@chakra-ui/react"
import React from "react"

import { AppBar, Post, ProfileSwitcher } from "components"
import posts from "data/posts.json"

const FollowedList = Flex
const SuggestionList = Flex

export const App: React.FC = () => (
  <Stack bottom={0} flex={1} left={0} pos="absolute" right={0} spacing={0} top={0}>
    <AppBar />
    <Flex bg="gray.50" flex={1}>
      <Container flex={1} maxW="container.lg" minH="100vh" my={20} overflow="auto">
        <Stack bg="rgba(0,0,0,.2)" direction="row" flex={1} spacing={8}>
          <Content />
          <Aside />
        </Stack>
      </Container>
    </Flex>
  </Stack>
)

const Content: React.FC = () => (
  <Stack as="main" flex={2} spacing={8}>
    <FollowedList />
    {posts.map((post) => (
      <Post key={post.date.date} {...post} />
    ))}
  </Stack>
)

const Aside: React.FC = () => (
  <Flex flex={1}>
    <ProfileSwitcher />
    <SuggestionList />
  </Flex>
)
