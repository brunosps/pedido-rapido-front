import { Badge, Box, StackDivider, VStack, Text } from "@chakra-ui/react";
import React from "react";
import { useFieldArray } from "react-hook-form";

import OrderListItem from "./Item";


export default function ListItems({ control, register, setValue, getValues, fields, append, remove, prepend }) {
    return (!fields.length ? emptyList() : filledList(fields, control, register, remove))
}

function filledList(items: any[], control: any, register: any, remove: any) {
    return (
        <VStack
            divider={<StackDivider borderColor="gray.200" />}
            spacing={2}
            align="stretch"
        >
            {renderItems(items, control, register, remove)}
        </VStack>
    )
}

function renderItems(items: any[], control: any, register: any, remove: any) {
    return (
        items.map((item, index) => {
            return (
                <OrderListItem key={item.id} nestIndex={index} {...{ control, register, item, remove }} />
            )
        })
    )
}

function emptyList() {
    return (
        <Box p='2' align='center'>
            <Badge
                colorScheme="purple"
                variant="outline"
                borderRadius="4"
                p='4' m='5'
            >No items</Badge>
        </Box>
    )
}