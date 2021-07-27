import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
    fonts: {
        body: 'Encode Sans SC',
        heading: 'Encode Sans SC',
    },
    styles: {
        global: {
            body: {
                bg: 'gray.100',
                color: 'gray.800'
            }
        }
    }
})