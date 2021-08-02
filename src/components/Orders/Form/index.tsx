

import React from 'react';
import { Box, Button, Flex, FormControl, FormLabel, Heading, HStack, Input, NumberInput, NumberInputField } from '@chakra-ui/react';
import ListItems from './List';


const OrderForm = ({handleSubmit, handleSaveOrder, formState, control, register, getValues, setValue, fields, append, remove, prepend}) => {
    return (
        <Box
            as='form'
            flex='1'
            bg='white'
            onSubmit={handleSubmit(handleSaveOrder)}
        >
            <Flex justify='space-between' align='center'>
                <FormControl flex='5' id="name" mx='2'>
                    <FormLabel>Nome</FormLabel>
                    <Input
                        name='name'
                        label='Nome'
                        {...register('name')} />
                </FormControl>
                <FormControl flex='1' id="mesa" mx='2'>
                    <FormLabel>Mesa</FormLabel>
                    <NumberInput>
                        <NumberInputField
                            name='table_number'
                            label='Número da mesa'
                            {...register('table_number')} />
                    </NumberInput>
                </FormControl>
            </Flex>
            <Heading mt='4' size='sm' fontWeight='bold'>
                Items
            </Heading>
            <Box p='2'>
                <ListItems {...{ control, register, getValues, setValue, fields, append, remove, prepend }} />
            </Box>
        </Box>
    )
}

export default OrderForm;