import { Link, Box } from "@chakra-ui/react";
import { LOGIN } from "lib/routes";
import { Link as RouterLink } from "react-router-dom"

export default function LandingPage() {
  return (
    <div>
        <Box>
            <Link
                as={RouterLink} 
                to={LOGIN} 
                color="teal.800" 
                fontWeight={"medium"} 
                _hover={{background: "teal.100"}}>
                Log In
            </Link>
        </Box>
    </div>
  )
}
