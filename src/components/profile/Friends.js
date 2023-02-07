import { Box, Flex } from "@chakra-ui/react";
import { useFriends } from "hooks/users"
import { useParams } from "react-router-dom";
import Avatar from "./Avatar";

export default function Friends() {
    const { id } = useParams();
    const { friends, isLoading : isFriendsLoading} = useFriends(id);
    if (isFriendsLoading || !friends) {
        return <div>loading...</div>
    }

    return (
        <Box maxW="600px" mx="auto" py="10">
            {friends.length > 0 ? (friends?.map((friend) => (
                <Flex 
                    alignItems="center"
                    borderBottom="2px solid"
                    borderColor="teal.100"
                    p="3"
                    bg="gray.50" _hover={ { cursor: "pointer", transform: "scale(1.02)"}}>
                    <Avatar user={friend} size="md"></Avatar>
                    <Box my="2" py="2" ml={4}>
                        {friend.username}
                    </Box>
                    {/* <Box bg={"teal.100"} my="2" py="2" ml="auto">
                        {friend.username}
                    </Box> */}
                </Flex>
            ))) : "No friends yet"}
        </Box>
    )
}
