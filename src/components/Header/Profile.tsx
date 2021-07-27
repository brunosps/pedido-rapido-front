import { Box, Flex, Text, Avatar } from '@chakra-ui/react';

export function Profile() {
    return (
        <Flex align='center'>
            <Box mr='4' textAlign='right'>
                <Text>Vicenzo Giuseppe</Text>
                <Text color='gray.700' fontSize='sm'>vicenzogiuseppe@gmail.com</Text>
            </Box>

            <Avatar size='md' src="https://pbs.twimg.com/profile_images/1389566094839537672/0IAfexqQ_400x400.jpg" />
        </Flex>
    )
}