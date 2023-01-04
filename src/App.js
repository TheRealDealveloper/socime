import { RouterProvider } from "react-router-dom";
import {router} from "lib/routes"
import { ChakraProvider } from "@chakra-ui/react";

export default function App() {
  return (
  <ChakraProvider>
    <RouterProvider router={router}></RouterProvider>
  </ChakraProvider>);
}

