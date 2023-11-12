import { Avatar, Box, HStack, Menu, MenuButton, MenuDivider, MenuItem, MenuList, VStack, useColorModeValue } from "@chakra-ui/react";
import { signOut, useSession } from "next-auth/react";
import { FiChevronDown } from "react-icons/fi";


export default function LogoutButton() {
    const { data: Session } = useSession();
    return (
        <Menu>
        <MenuButton py={2} transition="all 0.3s" _focus={{ boxShadow: 'none' }}>
          <HStack>
            <Avatar
              size={'sm'}
              border={'1px solid black'}
              src={Session?.user?.image}
            />
            <VStack
              display={{ base: 'none', md: 'flex' }}
              alignItems="flex-start"
              spacing="1px"
              ml="2">
            </VStack>
            <Box display={{ base: 'none', md: 'flex' }}>
              <FiChevronDown />
            </Box>
          </HStack>
        </MenuButton>
        <MenuList
          bg={useColorModeValue('white', 'gray.900')}
          borderColor={useColorModeValue('gray.200', 'gray.700')}>
          <MenuItem>Profile</MenuItem>
          <MenuItem>Réglages</MenuItem>
          <MenuDivider />
          <MenuItem onClick={() => signOut()}>déconnection</MenuItem>
        </MenuList>
      </Menu>
    )
}