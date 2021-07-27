import { Text } from '@chakra-ui/react'


export function Logo() {
    return (
        <Text
            fontSize='3xl'
            fontWeight='bold'
            letterSpacing='tight'
            w='64'
            color='#413E7A'

        >
            PEDIDO RÁPIDO
            <Text
                color='teal.300'
                as='span'
                fontSize='40'
            >
                .
            </Text>

        </Text>
    )
}