import { Button, Flex, Link } from "@chakra-ui/react";
import { ABOUT, CHATROOMS, DASHBOARD, IMPRESSUM, LANDINGPAGE, LOGIN } from "lib/routes";
import { Link as RouterLink } from "react-router-dom";
import { useAuth, useLogout } from "hooks/auth";

export default function Navbar() {
  const { logout, isLoading } = useLogout();
  const { user } = useAuth();

  return (
    <Flex
      shadow="sm"
      pos="fixed"
      width="full"
      borderTop="6px solid"
      borderTopColor="teal.400"
      height="16"
      zIndex="3"
      justify="center"
      bg="white"
    >
      { user ? (<Flex px="4" w="full" align="center" maxW="1200px">
        <Link color="teal" as={RouterLink} to={DASHBOARD} fontWeight="bold">
          Home
        </Link>
        <Link color="teal" as={RouterLink} to={CHATROOMS} fontWeight="bold">
          <span> Chat</span>
        </Link>
        <Button
          ml="auto"
          colorScheme="teal"
          size="sm"
          onClick={logout}
          isLoading={isLoading}
        >
          Logout
        </Button>
      </Flex>) : (
      <Flex px="4" w="full" align="center" maxW="1200px">
        
        
        <Link mx="2" color="teal" as={RouterLink} to={LANDINGPAGE} fontWeight="bold">
          Landing Page
        </Link>
        <Link mx="2" color="teal" as={RouterLink} to={ABOUT} fontWeight="bold">
          About
        </Link>
        <Link mx="2" color="teal" as={RouterLink} to={IMPRESSUM} fontWeight="bold">
          Impressum
        </Link>
        <Link mx="2" color="teal" as={RouterLink} to={IMPRESSUM} fontWeight="bold">
          My Projects
        </Link>

        <Button
          as={RouterLink}
          to={LOGIN}
          ml="auto"
          colorScheme="teal"
          size="sm"
          isLoading={isLoading}
        >
          Login
        </Button>
      </Flex>) }

      
    </Flex>
  );
}