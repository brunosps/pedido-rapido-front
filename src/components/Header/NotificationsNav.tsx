import { RiNotificationLine } from 'react-icons/ri'
import { HStack, Icon } from '@chakra-ui/react'

export function NavigationBar() {
    return (
        <HStack
            spacing='8'
            mx='8'
            pr='8'
            py='1'
            color='gray.700'
            borderRightWidth={1}
            borderColor='gray.700'
        >
            <Icon as={RiNotificationLine} fontSize='20' />
        </HStack>

    )
}