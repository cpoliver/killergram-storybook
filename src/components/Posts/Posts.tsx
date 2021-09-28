import { Stack } from "@chakra-ui/react"
import React from "react"

import { ErrorMessage } from "../ErrorMessage/ErrorMessage"
import { Post } from "./Post"
import { PostSkeleton } from "./PostSkeleton"
import { Post as PostProps, useGetPosts } from "api"

export const Posts: React.FC = () => {
  const { data = [], error, isLoading } = useGetPosts()

  if (isLoading) return <PostsLoading />

  if (error) return <ErrorMessage {...error} />

  return <PostsLoaded posts={data} />
}

export const PostsLoaded: React.FC<{ posts: PostProps[] }> = ({ posts }) => (
  <Stack>
    {posts.map((post) => (
      <Post key={post.date.date} {...post} />
    ))}
  </Stack>
)

const PLACEHOLDER_COUNT = 12

export const PostsLoading: React.FC = () => (
  <Stack>
    {new Array(PLACEHOLDER_COUNT).fill(0).map((_, i) => (
      <PostSkeleton key={i} />
    ))}
  </Stack>
)