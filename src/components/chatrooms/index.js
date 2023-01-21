import { Box, Button, useToast  } from "@chakra-ui/react";
import { GetChatrooms } from "hooks/chatrooms"
import ChatroomList from "./ChatroomList";
import { uuidv4 } from "@firebase/util";
import { useState } from "react";
import { doc, setDoc } from "firebase/firestore";
import { db } from "lib/firebase";
import { useAuth } from "hooks/auth";

export default function Chatrooms() {
    const { chatrooms, isLoading : roomsIsLoading } = GetChatrooms();
    const [isLoading, setLoading] = useState(false);
    
    const { user: authUser } = useAuth();

    const toast = useToast();

    if (roomsIsLoading) return "Loading...";

    async function addChatroom() {
        setLoading(true);
        const id = uuidv4();
        await setDoc(doc(db, "chatrooms", id), {
            id,
            date: Date.now(),
            userids: [authUser.id],
            uid: authUser.id,
        });
        toast({
            title: "Chatroom created successfully!",
            status: "success",
            isClosable: true,
            position: "top",
            duration: 5000,
        });
        setLoading(false);
    }

    return (
        <Box align="center" pt="50">
            <Button
                onClick={addChatroom}
                ml="auto"
                colorScheme="teal"
                size="sm"
                isLoading={isLoading}
            >Add Chatroom</Button>
            <ChatroomList chatrooms={chatrooms} />
        </Box>
  );
}