
import { Flex, Text, Icon, HStack, Box, Avatar } from '@chakra-ui/react'
import { RiNotificationLine } from 'react-icons/ri'

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

            <Text
                fontSize='3xl'
                fontWeight='bold'
                letterSpacing='tight'
                w='64'

            >
                PEDIDO PRONTO
                <Text color='pink.500' as='span' fontSize='40' >.</Text>

            </Text>




            <Flex
                align='center'
                ml='auto'
            >

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

                <Flex align='center'>
                    <Box mr='4' textAlign='right'>
                        <Text>Vicenzo Giuseppe</Text>
                        <Text color='gray.700' fontSize='sm'>vicenzogiuseppe@gmail.com</Text>
                    </Box>

                    <Avatar size='md' src="https://pbs.twimg.com/profile_images/1389566094839537672/0IAfexqQ_400x400.jpg" />
                </Flex>
            </Flex>

        </Flex>
    )
}