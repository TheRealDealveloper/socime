import { Box, Button, Center, FormControl, FormErrorMessage, FormLabel,Text, Heading, Input, Link } from "@chakra-ui/react";
import { useLogin } from "hooks/auth";
import { DASHBOARD, REGISTER } from "lib/routes";
import { useForm } from "react-hook-form";
import { Link as RouterLink } from "react-router-dom"
import { emailValidate, passwordValidate } from "utils/form-validate";

export default function Login() {
    const {login, isLoading} = useLogin();
    const {register, handleSubmit, reset, formState:{errors}} = useForm();

    async function handleLogin(data){
        console.log(data.email);
        const succeeded = await login(data.email, data.password, DASHBOARD);

        if(succeeded) reset();
    }

    return (
        <Center w="100%" h="100vh">
            <Box mx="1" maxW="md" p="9" borderWidth="1px" borderRadius="lg">
                <Heading mb="4" size="lg" textAlign="center">Log In</Heading>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <FormControl isInvalid={true} py="2">
                        <FormLabel>Email</FormLabel>
                        <Input 
                            type="email" 
                            placeholder="user@email.com" 
                            {...register('email', emailValidate)}>
                        </Input>
                        <FormErrorMessage>{errors.email && errors.email.message}</FormErrorMessage>
                    </FormControl>
                    <FormControl 
                        isInvalid={true} 
                        py="2">
                        <FormLabel>Password</FormLabel>
                        <Input 
                            type="password" 
                            placeholder="password123" 
                            {...register('password', passwordValidate)}
                        ></Input>
                        <FormErrorMessage>{errors.password && errors.password.message}</FormErrorMessage>
                    </FormControl>
                    <Button 
                        mt="4" 
                        type="submit" 
                        colorScheme={"teal"} 
                        size="md" 
                        isLoading={isLoading} 
                        loadingText="Logging In" 
                        w={"full"}>
                        Log In
                    </Button>
                </form>
                <Text fontSize={"xlg"} align="center" mt="6">
                    Don't have an account?{" "}
                    <Link 
                        as={RouterLink} 
                        to={REGISTER} 
                        color="teal.800" 
                        fontWeight={"medium"} 
                        _hover={{background: "teal.100"}}>
                        Register
                    </Link>
                </Text>
            </Box>
        </Center>
    )
}