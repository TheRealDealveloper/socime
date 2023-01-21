import { Text } from "@chakra-ui/react";
import ChatroomEntry from "./ChatroomEntry";

export default function ChatroomList({chatrooms}) {
    return (
        <div>
           {chatrooms?.length === 0 ? (
                <Text textAlign="center" fontSize="xl">
                No rooms... Feeling a little lonely here.
                </Text>
            ) : (
                chatrooms?.map((chatroom) => <ChatroomEntry key={chatroom.id} chatroom={chatroom} />)
            )}
        </div>
    )
}