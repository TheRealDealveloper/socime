import { Box } from "@chakra-ui/react";
import { useUsers } from "hooks/users"
import User from "./User";

export default function AllUsers() {
    const { users, userIsLoading } = useUsers();

    if (userIsLoading) {
        return <div>loading...</div>
    }

    return (
        <Box>
            {users?.map((user) => (<User key={user.id} user={user}/>))}
        </Box>
    )
}
