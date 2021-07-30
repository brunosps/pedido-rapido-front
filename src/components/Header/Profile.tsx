import { Box, Flex, Text } from '@chakra-ui/react';
import { parseCookies } from 'nookies';



export function Profile() {
    const cookies = parseCookies()
    return (
        <Flex align='center'>
            <Box mr='4' textAlign='right'>
                <Text>{cookies.userName}</Text>
                <Text color='gray.700' fontSize='sm'>{cookies.userEmail}</Text>
            </Box>
        </Flex>
    )
}