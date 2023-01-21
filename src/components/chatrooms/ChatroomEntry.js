import { useUser } from 'hooks/users'
import React from 'react'

export default function ChatroomEntry({chatroom}) {
    const { user, isLoading } = useUser(chatroom.uid);
  if (isLoading) return "Loading...";
  return (
    <div>created by {user.username}</div>
  )
}