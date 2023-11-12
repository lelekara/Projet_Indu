'use client'

import {
  Box,
  Container,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import Image from 'next/image'

const Logo = (props: any) => {
  return (
    <img width={100} src="img/LOGO_HELHa.png" alt="Logo Helha"/>
  )
}


export default function SmallWithLogoLeft() {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}>
        <Logo />
        <Text>© Groupe 3. All rights reserved</Text>
        <Stack direction={'row'} spacing={6}>
        </Stack>
      </Container>
    </Box>
  )
}