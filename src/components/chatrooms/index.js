import { Box  } from "@chakra-ui/react";
import { GetChatrooms } from "hooks/chatrooms"
import ChatroomList from "./ChatroomList";

export default function Chatrooms() {
    const { chatrooms, isLoading } = GetChatrooms();

    if (isLoading) return "Loading...";
    else{
        console.log(chatrooms);
    }
    return (
        <Box align="center" pt="50">
            <ChatroomList chatrooms={chatrooms} />
        </Box>
  );
}