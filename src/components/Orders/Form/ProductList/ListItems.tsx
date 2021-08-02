import { Badge, Box, StackDivider, VStack, Text } from "@chakra-ui/react";
import React from "react";
import { useFieldArray } from "react-hook-form";


import ItemList from "./ItemList";


export default function ListItems({ items, addFunction }) {
    return (!items.length ? emptyList() : filledList(items, addFunction))
}

function filledList(items: any[], addFunction) {
    return (
        <VStack
            divider={<StackDivider borderColor="gray.200" />}
            spacing={2}
            align="stretch"
        >
            {renderItems(items, addFunction)}
        </VStack>
    )
}

function renderItems(items: any[], addFunction) {
    return (
        items.map((item, index) => {
            return (
                <ItemList key={index} {...{item, addFunction}} />
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
            >No Product</Badge>
        </Box>
    )
}