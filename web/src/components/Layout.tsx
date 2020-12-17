import React, { useEffect } from "react";
import { Navbar } from "./Navbar/Navbar";
import { Body } from "./Body";
import { SideBar } from "./Sidebar/SideBar";
import { Flex } from "@chakra-ui/react";
import { Community, useMeQuery } from "../generated/graphql";
import { CommunityHeader } from "./CommunityHeader";
import { isServer } from "../utils/isServer";
interface LayoutProps {
  hideSidebar?: true | false;
  community?: Community;
}

export const Layout: React.FC<LayoutProps> = ({
  children,
  hideSidebar = false,
  community,
}) => {
  const { data, loading } = useMeQuery({
    skip: isServer(),
  });
  let user;
  if (data?.me) {
    user = data.me;
  }
  return (
    <>
      <Navbar user={user} />
      {community ? <CommunityHeader community={community} /> : null}
      <Flex justify="center">
        {hideSidebar ? null : <SideBar community={community} user={user} />}
        <Body>{children}</Body>
      </Flex>
    </>
  );
};
