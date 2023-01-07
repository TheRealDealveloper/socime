import { Box } from "@chakra-ui/react";

export default function User({user}) {
  return (
    <Box>{user?.username}</Box>
  )
}
