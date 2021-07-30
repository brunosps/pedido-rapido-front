import { FormLabel, FormControl, Select as ChakraSelect, SelectProps as ChakraSelectProps, FormErrorMessage } from '@chakra-ui/react'
import { FieldError } from 'react-hook-form'
import { forwardRef, ForwardRefRenderFunction } from 'react'

interface SelectProps extends ChakraSelectProps {
    name: string,
    label?: string,
    error?: FieldError,
}

const SelectBase: ForwardRefRenderFunction<HTMLSelectElement, SelectProps>
    = ({ name, label, error = null, ...rest }, ref) => {
        return (
            <FormControl isInvalid={!!error}>
                {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
                <ChakraSelect
                    name={name}
                    id={name}
                    focusBorderColor='teal.100'
                    bgColor='gray.400'
                    variant='filled'
                    _hover={{
                        bgColor: 'gray.900'
                    }}
                    size='lg'
                    ref={ref}
                    {...rest}
                >

                </ChakraSelect>

                {!!error && (
                    <FormErrorMessage>
                        {error.message}
                    </FormErrorMessage>)}
            </FormControl>
        )
    }

export const Select = forwardRef(SelectBase);