
import { Flex } from '@chakra-ui/react'
import { Logo } from './Logo'
import { NavigationBar } from './NotificationsNav'
import { Profile } from './Profile'

export function Header() {
    return (
        <Flex
            w='100%'
            as='header'
            maxW={1480}
            h='20'
            mx='auto'
            mt='4'
            px='6'
            align='center'
        >

            <Logo />

            <Flex align='center' ml='auto'>

                <NavigationBar />
                <Profile />

            </Flex>
        </Flex>
    )
}