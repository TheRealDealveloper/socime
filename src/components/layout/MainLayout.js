import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import classes from './MainLayout.module.css'

export default function MainLayout() {
  return (
    <div className={classes.page_body}>
        <Navbar />
        <Flex pt="16" pb="12" mx="auto" w="full" maxW="1200px">
            <Box w="900px">
                <Outlet />
            </Box>
        </Flex>
    </div>
  )
}
