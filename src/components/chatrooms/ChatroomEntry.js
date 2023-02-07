import { Box, Text } from '@chakra-ui/react';
import { useUser } from 'hooks/users'
import React from 'react'
import Header from './Header';

export default function ChatroomEntry({chatroom}) {
    const { user, isLoading } = useUser(chatroom.uid);
  if (isLoading) return "Loading...";
  return (
    <Box p="2" maxW="600px" textAlign="left">
      <Box border="2px solid" borderColor="gray.100" borderRadius="md">
        <Header chatroom={chatroom} />

        <Box p="2" minH="100px">
          <Text wordBreak="break-word" fontSize="md">
            {user.username}
          </Text>
        </Box>

        {/* <Actions post={post} /> */}
      </Box>
    </Box>
  )
}