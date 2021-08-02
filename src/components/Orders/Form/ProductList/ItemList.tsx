import { AddIcon } from "@chakra-ui/icons";
import { Flex, Heading, IconButton, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, Spacer, Text, useMediaQuery } from "@chakra-ui/react";
import React, { useState } from "react";
import NumberFormat from "react-number-format";

function currencyFormatter(value) {
    if (!Number(value)) return "";

    const amount = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(value / 100);

    return `${amount}`;
}

const ItemList = ({ item, addFunction }) => {
    const [quantity, setQuantity] = useState(1);
    const handleChange = (value) => setQuantity(value)
    const [isLargerThan1280] = useMediaQuery("(min-width: 1280px)")

    return (
        <Flex p='2'>
            <IconButton
                textAlign={['left', 'center']}
                colorScheme="green"
                aria-label="Search database"
                onClick={() => addFunction(item, quantity)}
                icon={<AddIcon />}
            />
            {
                (isLargerThan1280) ?
                    <NumberInput mx='2' flex='1' value={quantity} onChange={handleChange}>
                        <NumberInputField />

                        <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                        </NumberInputStepper>
                    </NumberInput>
                    : null
            }
            <Text flex='3' p='2' as="h4" size="md" isTruncated >{item.name}</Text>
            <Text textAlign={['right', 'center']} flex='1' p='2' as="h6" size="sm" >

                <NumberFormat value={item.price}
                    displayType={'text'}
                    format={currencyFormatter}
                />

            </Text>
        </Flex>
    )
}

export default ItemList;