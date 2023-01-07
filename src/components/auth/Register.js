import { Box, Button, Center, FormControl, FormErrorMessage, FormLabel,Text, Heading, Input, Link } from "@chakra-ui/react";
import { useRegister } from "hooks/auth";
import { DASHBOARD, LOGIN } from "lib/routes";
import { useForm } from "react-hook-form";
import { Link as RouterLink } from "react-router-dom"
import { emailValidate, passwordValidate, usernameValidate } from "utils/form-validate";

export default function Register() {
    const {register : signup, isLoading} = useRegister();
    const {register, handleSubmit, formState:{errors}} = useForm();

    async function handleRegister(data){
        await signup({
          username: data.username,
          email: data.email,
          password: data.password,
          redirectTo: DASHBOARD,
        });
    }

    return (
        <Center w="100%" h="100vh">
            <Box mx="1" maxW="md" p="9" borderWidth="1px" borderRadius="lg">
                <Heading mb="4" size="lg" textAlign="center">Register</Heading>
                <form onSubmit={handleSubmit(handleRegister)}>
                <FormControl isInvalid={errors.username} py="2">
                        <FormLabel>Username</FormLabel>
                        <Input 
                            placeholder="username" 
                            {...register('username', usernameValidate)}>
                        </Input>
                        <FormErrorMessage>{errors.username && errors.username.message}</FormErrorMessage>
                    </FormControl>
                    <FormControl isInvalid={errors.password} py="2">
                        <FormLabel>Email</FormLabel>
                        <Input 
                            type="email" 
                            placeholder="user@email.com" 
                            {...register('email', emailValidate)}>
                        </Input>
                        <FormErrorMessage>{errors.email && errors.email.message}</FormErrorMessage>
                    </FormControl>
                    <FormControl 
                        isInvalid={errors.password}
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
                        loadingText="Signing Up..." 
                        w={"full"}>
                        Register
                    </Button>
                </form>
                <Text fontSize={"xlg"} align="center" mt="6">
                    Already have an account?{" "}
                    <Link 
                        as={RouterLink} 
                        to={LOGIN} 
                        color="teal.800" 
                        fontWeight={"medium"} 
                        _hover={{background: "teal.100"}}>
                        Log In
                    </Link>
                </Text>
            </Box>
        </Center>
    )
}