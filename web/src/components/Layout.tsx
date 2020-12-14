import React, { useEffect } from "react";
import { Navbar } from "../components/Navbar";
import { Body } from "./Body";
import { SideBar } from "../components/SideBar";
import { Flex } from "@chakra-ui/react";
import { Community } from "../generated/graphql";
import { CommunityHeader } from "./CommunityHeader";
interface LayoutProps {
  hideSidebar?: true | false;
  community?: Community;
}

export const Layout: React.FC<LayoutProps> = ({
  children,
  hideSidebar = false,
  community,
}) => {
  return (
    <>
      <Navbar />
      {community ? <CommunityHeader community={community} /> : null}
      <Flex justify="center">
        {hideSidebar ? null : <SideBar community={community} />}
        <Body>{children}</Body>
      </Flex>
    </>
  );
};
