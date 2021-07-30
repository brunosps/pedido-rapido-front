import { Box, Flex, Table, Thead, Tr, Th, Tbody, Td, } from "@chakra-ui/react";
import { Header } from '../components/Header'
import { Sidebar } from '../components/Sidebar'

export default function OrderList() {
    return (
        <Box>
            <Header />

            <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">

                <Sidebar />


                <Table width="100%" border='0 0.5rem'>
                    <Thead>
                        <Tr>
                            <Th p='1rem 2rem' textAlign='left' lineHeight='1.5rem'>Pedido</Th>
                            <Th p='1rem 2rem' textAlign='left' lineHeight='1.5rem'>Mesa</Th>
                            <Th p='1rem 2rem' textAlign='left' lineHeight='1.5rem'>Categoria</Th>
                            <Th p='1rem 2rem' textAlign='left' lineHeight='1.5rem'>Data de criação</Th>
                        </Tr>
                    </Thead>

                    <Tbody>
                        <Tr>
                            <Td p='1rem 2rem' border='0' border-radius='0.25rem'>id</Td>
                            <Td p='1rem 2rem' border='0' border-radius='0.25rem'>table</Td>
                            <Td p='1rem 2rem' border='0' border-radius='0.25rem'>data do pedido</Td>
                            <Td p='1rem 2rem' border='0' border-radius='0.25rem'>categoria</Td>
                        </Tr>
                        <Tr>
                            <Td p='1rem 2rem' border='0' border-radius='0.25rem'>id</Td>
                            <Td p='1rem 2rem' border='0' border-radius='0.25rem'>table</Td>
                            <Td p='1rem 2rem' border='0' border-radius='0.25rem'>data do pedido</Td>
                            <Td p='1rem 2rem' border='0' border-radius='0.25rem'>categoria</Td>
                        </Tr>
                        <Tr>
                            <Td p='1rem 2rem' border='0' border-radius='0.25rem'>id</Td>
                            <Td p='1rem 2rem' border='0' border-radius='0.25rem'>table</Td>
                            <Td p='1rem 2rem' border='0' border-radius='0.25rem'>data do pedido</Td>
                            <Td p='1rem 2rem' border='0' border-radius='0.25rem'>categoria</Td>
                        </Tr>
                        <Tr>
                            <Td p='1rem 2rem' border='0' border-radius='0.25rem'>id</Td>
                            <Td p='1rem 2rem' border='0' border-radius='0.25rem'>table</Td>
                            <Td p='1rem 2rem' border='0' border-radius='0.25rem'>data do pedido</Td>
                            <Td p='1rem 2rem' border='0' border-radius='0.25rem'>categoria</Td>
                        </Tr>
                    </Tbody>
                </Table>
            </Flex>
        </Box>
    )
}