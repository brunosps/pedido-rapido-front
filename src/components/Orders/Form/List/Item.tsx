import { DeleteIcon } from "@chakra-ui/icons";
import { Flex, IconButton, Input, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, Spacer, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import NumberFormat from 'react-number-format';

function currencyFormatter(value) {
    if (!Number(value)) return "";

    const amount = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(value / 100);

    return `${amount}`;
}

export default function OrderListItem({ nestIndex, control, register, item, remove }) {
    const [price, setPrice] = useState(item.price);
    const [quantity, setQuantity] = useState(item.quantity);
    const handleChange = (value) => {
        setQuantity(parseFloat(value.target.value))
        setPrice(parseFloat(value.target.value) * parseFloat(item.price))
    }

    return (
        <Flex justify='space-between' align='center'>
            <Input hidden={true} {...register(`order_items.${nestIndex}.product_id`)} />
            <Input hidden={true} {...register(`order_items.${nestIndex}.price`)} />
            <Text flex='3'>{item.product_name}</Text>
            <NumberInput flex='1'>
                <NumberInputField  {...register(`order_items.${nestIndex}.quantity`)} onChange={handleChange} />
                <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                </NumberInputStepper>
            </NumberInput>
            <Text flex='1' mx='6' textAlign='right'>
                <NumberFormat value={price}
                    displayType={'text'}
                    format={currencyFormatter}
                />
            </Text>
            <Input flex='2' {...register(`order_items.${nestIndex}.comment`)} placeholder="Observação" />
            <IconButton mx='2'
                onClick={() => remove(nestIndex)}
                variant="solid"
                colorScheme="red"
                aria-label="Remover Item"
                icon={<DeleteIcon />}
            />
        </Flex>
    )
}
