import React from 'react'
import {Navbar} from '../components/Navbar'
import {Body} from './Body'
import { SideBar} from "../components/SideBar";
import { Flex } from '@chakra-ui/react';
interface LayoutProps {

}

export const Layout: React.FC<LayoutProps> = ({children}) => {
        return (
            <Flex 
            flexDir='column'
            w="100%"
            >
            <Navbar/>
            <Flex mx="auto" >
                <SideBar/>
                <Body>
                    {children}
                </Body>
            </Flex>
            </Flex>
        );
}