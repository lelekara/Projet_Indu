import { Button } from "@chakra-ui/react";
import { signIn } from "next-auth/react";


export default function LoginButton() {
    return (
        <Button fontSize={'sm'} fontWeight={400} variant={'solid'}  onClick={()=>signIn('discord')}>Sign In</Button>
    )
}