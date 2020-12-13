import { Button, Flex, Stack,  } from '@chakra-ui/react';
import React from 'react'

interface SideBarProps {

}

export const SideBar: React.FC<SideBarProps> = ({}) => {
        return (
            <Flex
            w="300px"
            minW="150px"
            minH="500px"
            bgColor="#eff8ff"
            mr={6}
            >
                <Stack
                ml="10px"
                spacing={3} direction="column" align="flex-start">
                    <Button colorScheme="teal" size="sm" variant="ghost">
                        Home
                    </Button>
                    <Button colorScheme="teal" size="sm" variant="ghost">
                        Popular
                    </Button>
                    <Button colorScheme="teal" size="sm" variant="ghost">
                        All
                    </Button>
                </Stack>
            </Flex>
        );
}