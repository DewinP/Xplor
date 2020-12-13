import { Box, Text, Flex, Heading, Button, Link } from '@chakra-ui/react';
import NextLink from 'next/link'
import React from 'react'

interface NavbarProps {

}

export const Navbar: React.FC<NavbarProps> = ({}) => {


        return (
            <Flex 
            h="50px"
            boxShadow="0 2px 10px -10px black"
            flexDir="row"
            zIndex={0}
            position="sticky"
            top="0"
            mb={5}
            >
                <Flex 
                w="100%"
                mx="25px"
                my="auto"
                justify="space-between"
                >
                    <Flex >
                        <Heading>
                            Xplor
                        </Heading>
                    </Flex>
                    <Flex align="center">
                        <NextLink href="/login">
                            <Button marginRight="20px" size="sm" colorScheme="teal">LOGIN</Button>
                        </NextLink>
                        <NextLink href='/signup'>
                        <Button colorScheme="blue" size="sm">SIGNUP</Button>
                        </NextLink>
                    </Flex>
                </Flex>
            </Flex>
        );
}