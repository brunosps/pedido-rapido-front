interface InputProps extends ChakraInputProps {
    name: string,
    label?: string,
}

import { FormLabel, FormControl, Input as ChakraInput, InputProps as ChakraInputProps } from '@chakra-ui/react'

export function Input({ name, label, ...rest }: InputProps) {
    return (
        <FormControl>
            {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
            <ChakraInput
                name={name}
                id={name}
                type='email'
                focusBorderColor='teal.100'
                bgColor='gray.900'
                variant='filled'
                _hover={{
                    bgColor: 'gray.900'
                }}
                size='lg'
                {...rest}
            />
        </FormControl>
    )
}