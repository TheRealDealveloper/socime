import { Box, Flex, Text } from "@chakra-ui/react";
import Avatar from "components/profile/Avatar";
import UsernameButton from "components/profile/UsernameButton";
import { formatDistanceToNow } from "date-fns";
import { useUser } from "hooks/users";

export default function Header({ chatroom }) {
    const { uid, date } = chatroom;
    const { user, isLoading } = useUser(uid);
  
    if (isLoading) return "Loading...";
  
    return (
      <Flex
        borderBottom="2px solid"
        borderColor="teal.100"
        p="3"
        bg="gray.50"
      >
        <Flex>
            <Avatar user={user} size="md" />
        </Flex>
        <Flex>
            <Box ml="4">
            <UsernameButton user={user} />
            <Text fontSize="sm" color="gray.500">
                {formatDistanceToNow(date)} ago
            </Text>
            </Box>
        </Flex>
      </Flex>
    );
  }