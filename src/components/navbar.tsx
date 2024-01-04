'use client'

import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Img,
} from '@chakra-ui/react'
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons'
import ColorModeToggle from './nightMode'
import { signIn, signOut, useSession } from 'next-auth/react'
import { log } from 'console'
import LoginButton from './buttonLogin'
import LogoutButton from './buttonLogout'
import Link from 'next/link'

export default function WithSubnavigation() {
  const { isOpen, onToggle } = useDisclosure()
  const { data: Session } = useSession();

  return (
    <Box>
      <Flex
        bg={useColorModeValue('white', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}>
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}>
          <IconButton
            onClick={onToggle}
            icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
          <img width={100} src="img/LOGO_HELHa.png" alt="Logo Helha"/>
          <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={6}>
          <ColorModeToggle />
          <LoginOrNot />
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
      </Collapse>
    </Box>
  )
}

const DesktopNav = () => {
  const linkColor = useColorModeValue('gray.600', 'gray.200')
  const linkHoverColor = useColorModeValue('gray.800', 'white')
  const { data: Session } = useSession();

  const allowedUsers = ['lelekara']; //ajout user ici
  const currentUser = Session?.user?.name;

  const NAV_ITEMS: Array<NavItem> = [
    {
      label: 'Accueil',
      href: '/',
    },
    {
      label: 'Données',
      href: '/dataDirect',
      visible: !!Session,
    },
    {
      label: 'Paramètres',
      href: '/setting',
      visible: !!Session && allowedUsers.includes(currentUser),
    },
  ];

  return (
    <Stack direction={'row'} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        navItem.visible !== false && (
          <Box key={navItem.label}>
            <Popover trigger={'hover'} placement={'bottom-start'}>
              <PopoverTrigger>
                <Box
                  as={Link}
                  p={2}
                  href={navItem.href ?? '#'}
                  fontSize={'sm'}
                  fontWeight={500}
                  color={linkColor}
                  _hover={{
                    textDecoration: 'none',
                    color: linkHoverColor,
                  }}>
                  {navItem.label}
                </Box>
              </PopoverTrigger>
            </Popover>
          </Box>
        )
      ))}
    </Stack>
  )
}

interface NavItem {
  label: string
  href?: string
  visible?: boolean
}

const LoginOrNot = () => {
    const { data: Session } = useSession();
    return (
        <div>
            {Session ? <LogoutButton/> : <LoginButton /> }
        </div>
    )
}
