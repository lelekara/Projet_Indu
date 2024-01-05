'use client'

import {
  Heading,
  Avatar,
  Box,
  Center,
  Text,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react'
import { useSession } from 'next-auth/react';

export default function SocialProfileSimple() {
    const { data: Session } = useSession();
    const allowedUsers = ['lelekara','jakela','the0_o']; //ajout user ici
    const currentUser = Session?.user?.name;
  return (
    <Center py={6}>
      <Box
        maxW={'320px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'lg'}
        p={6}
        textAlign={'center'}>
        <Avatar
          size={'xl'}
          src={Session?.user?.image}
          mb={4}
          pos={'relative'}
          _after={{
            content: '""',
            w: 4,
            h: 4,
            bg: 'green.300',
            border: '2px solid white',
            rounded: 'full',
            pos: 'absolute',
            bottom: 0,
            right: 3,
          }}
        />
        <Heading fontSize={'2xl'} fontFamily={'body'}>
            {Session?.user?.name}
        </Heading>
        <Text fontWeight={600} color={'gray.500'} mb={4}>
          {Session?.user?.email}
          {allowedUsers.includes(currentUser) ? ( 
            <Text fontWeight={600} color={'gray.500'} mb={4}>
             Rôle : Admin
            </Text>
          ) : (
            <Text fontWeight={600} color={'gray.500'} mb={4}>
              Rôle : User
            </Text>
          )}
        </Text>
        <Stack mt={8} direction={'row'} spacing={4}>
        </Stack>
      </Box>
    </Center>
  )
}