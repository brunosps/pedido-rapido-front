import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
    colors: {
        textColor: {
            "100": "#464646",
        }
    },
    fonts: {
        body: 'Encode Sans SC',
        heading: 'Encode Sans SC',
    },
    styles: {
        global: {
            body: {
                bg: 'gray.200',
                color: 'gray.700'
            }
        }
    }
})