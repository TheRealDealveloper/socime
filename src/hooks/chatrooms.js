import { useToast } from "@chakra-ui/react";
import { uuidv4 } from "@firebase/util";
import { collection, doc, setDoc } from "firebase/firestore";
import { db } from "lib/firebase";
import { useState } from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";

export function GetChatrooms(){
    const [chatrooms, isLoading, error] = useCollectionData(collection(db, "chatrooms"));
    const toast = useToast();

    if(error){
        toast({
            title: "Error",
            description: error.message,
            status: "error",
            isClosable: true,
            position: "top",
            duration: 5000,
          });
    }
    return { chatrooms, isLoading };
}

export function useChatroom(){
    const [isLoading, setLoading] = useState(false);
  const toast = useToast();

  async function addChatroom() {
    setLoading(true);
    const id = uuidv4();
    await setDoc(doc(db, "chatrooms", id), {
      id,
      date: Date.now(),
      userids: [],
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

  return { addChatroom, isLoading };
}