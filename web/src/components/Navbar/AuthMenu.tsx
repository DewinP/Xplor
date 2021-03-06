import { useApolloClient } from "@apollo/client";
import {
  Menu,
  MenuButton,
  Button,
  MenuList,
  MenuItem,
  MenuDivider,
} from "@chakra-ui/react";
import React from "react";
import { FiChevronDown, FiLogOut } from "react-icons/fi";
import { useLogoutMutation, User } from "../../generated/graphql";

interface AuthMenuProps {
  user?: User;
}

export const AuthMenu: React.FC<AuthMenuProps> = ({ user }) => {
  const [logout] = useLogoutMutation();
  const apolloClient = useApolloClient();
  return (
    <Menu>
      <MenuButton as={Button} variant="link" rightIcon={<FiChevronDown />}>
        {user.username}
      </MenuButton>
      <MenuList>
        <MenuItem minH="40px" fontWeight="bold">
          My Profile
        </MenuItem>
        <MenuItem minH="40px" fontWeight="bold">
          User Settings
        </MenuItem>
        <MenuDivider />
        <MenuItem
          minH="40px"
          fontWeight="bold"
          onClick={async () => {
            await logout();
            await apolloClient.cache.reset();
          }}
        >
          <FiLogOut />
          Logout
        </MenuItem>
      </MenuList>
    </Menu>
  );
};
