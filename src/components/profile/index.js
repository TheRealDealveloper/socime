import { Badge, Box, Flex, Text } from "@chakra-ui/react";
import { useUser } from "hooks/users";
import { useParams } from "react-router-dom";
import Avatar from "./Avatar";

export default function Profile() {
    const { id } = useParams();
    const { user, userIsLoading } = useUser(id)

    if (userIsLoading || !user) {
        return <div>loading...</div>
    }
    return (
        <>
            <Box backgroundColor="teal.100">
                <Box maxW="600px" mx="auto" py="10">
                    <Flex>
                        <Avatar user={user} size="md" />
                        <Box ml='3'>
                            <Text fontWeight='bold'>
                            {user?.username}
                            <Badge ml='1' colorScheme='green'>
                                {user?.username}
                            </Badge>
                            </Text>
                            <Text fontSize='sm'>
                                {user?.username}
                            </Text>
                        </Box>
                    </Flex>

                </Box>
            </Box>
            <Box backgroundColor="teal.800">
                "Hello World!"
            </Box>
        </>
    )
}
