import { Box } from "@chakra-ui/react";
import { useFriends, useUsers } from "hooks/users"
import { useParams } from "react-router-dom";
import User from "./User";

export default function Friends() {
    const { id } = useParams();
    const { friends, isLoading : isFriendsLoading} = useFriends(id);
    if (isFriendsLoading || !friends) {
        return <div>loading...</div>
    }

    return (
        <Box maxW="600px" mx="auto" py="10">
            {friends.length > 0 ? (friends?.map((friend) => (friend.username))) : "No friends yet"}
        </Box>
    )
}
