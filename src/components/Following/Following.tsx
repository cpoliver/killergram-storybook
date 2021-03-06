import { Stack } from "@chakra-ui/react"
import React from "react"

import { ErrorMessage } from "../ErrorMessage/ErrorMessage"
import { FollowingProfile, FollowingProfileSkeleton } from "./FollowingProfile"
import { Profile, useGetProfiles } from "api"

export const Following: React.FC = () => {
  const { data = [], error, isLoading, refetch } = useGetProfiles()

  if (isLoading) return <FollowingLoading />

  if (error) return <ErrorMessage {...error.response?.data} onRetry={refetch} />

  return <FollowingLoaded profiles={data} />
}

const FollowingLoaded: React.FC<{ profiles: Profile[] }> = ({ profiles }) => (
  <Stack
    as="section"
    bg="mode.backgroundAlt"
    borderColor="mode.border"
    borderWidth="1px"
    direction="row"
    overflow="hidden"
    px={2}
    py={4}
  >
    {profiles.map((profile) => (
      <FollowingProfile key={profile.profile_name} {...profile} />
    ))}
  </Stack>
)

const PLACEHOLDER_COUNT = 8

const FollowingLoading: React.FC = () => (
  <Stack
    as="section"
    bg="mode.backgroundAlt"
    borderColor="mode.border"
    borderWidth="1px"
    direction="row"
    layerStyle="loading"
    overflow="hidden"
    px={2}
    py={4}
  >
    {new Array(PLACEHOLDER_COUNT).fill(0).map((_, i) => (
      <FollowingProfileSkeleton key={i} />
    ))}
  </Stack>
)
