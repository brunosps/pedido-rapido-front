import { Text, Box, Flex, Heading, Button, Icon, Table, Thead, Tr, Td, Th, Checkbox, Tbody } from "@chakra-ui/react";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { RiAddLine, RiCloseCircleFill } from 'react-icons/ri'
import { Pagination } from "../../components/Pagination";
import Link from "next/link";


export default function UserList() {
    return (
        <Box>
            <Header />

            <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
                <Sidebar />

                <Box flex='1' borderRadius='8' bg='gray.300' p='8'>
                    <Flex mb='8' justify='space-between' align='center'>
                        <Heading size='lg' fontWeight='normal'>Usuários</Heading>

                        <Link href='/users/create'>
                            <Button as='a' colorScheme='yellow' leftIcon={<Icon as={RiAddLine} fontSize='20' />} >
                                Criar Novo
                            </Button>
                        </Link>
                    </Flex>
                    <Table colorScheme='black' >
                        <Thead>
                            <Tr>
                                <Th px='6' color='gray.700' width='8' />
                                <Th>Usuario</Th>
                                <Th>Data de Cadastro</Th>
                                <Th>Tipo</Th>
                                <Th />
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td>

                                </Td>
                                <Td>
                                    <Box>
                                        <Text fontWeight='bold'>Vicenzo Giuseppe</Text>
                                        <Text fontSize='sm' >vicenzogiuseppe@gmail.com</Text>
                                    </Box>
                                </Td>
                                <Td>04 de Abril, 2021</Td>
                                <Td>Admin</Td>
                                <Td isNumeric>
                                    <Button
                                        as='a'
                                        size='sm'
                                        fontSize='sm'
                                        colorScheme='red'
                                        color='gray.700'
                                        leftIcon={<Icon as={RiCloseCircleFill} fontSize='20' />}
                                        disabled
                                    >
                                        Apagar
                                    </Button>
                                </Td>
                            </Tr>
                            <Tr>
                                <Td>

                                </Td>
                                <Td>
                                    <Box>
                                        <Text fontWeight='bold'>Vicenzo Giuseppe</Text>
                                        <Text fontSize='sm' >vicenzogiuseppe@gmail.com</Text>
                                    </Box>
                                </Td>
                                <Td>04 de Abril, 2021</Td>
                                <Td>Cozinha</Td>
                                <Td isNumeric>
                                    <Button
                                        as='a'
                                        size='sm'
                                        fontSize='sm'
                                        colorScheme='red'
                                        color='gray.700'
                                        leftIcon={<Icon as={RiCloseCircleFill} fontSize='20' />}
                                    >
                                        Apagar
                                    </Button>
                                </Td>
                            </Tr>
                            <Tr>
                                <Td>

                                </Td>
                                <Td>
                                    <Box>
                                        <Text fontWeight='bold'>Vicenzo Giuseppe</Text>
                                        <Text fontSize='sm' >vicenzogiuseppe@gmail.com</Text>
                                    </Box>
                                </Td>
                                <Td>04 de Abril, 2021</Td>
                                <Td>Atendente</Td>
                                <Td isNumeric>
                                    <Button
                                        as='a'
                                        size='sm'
                                        fontSize='sm'
                                        colorScheme='red'
                                        color='gray.700'
                                        leftIcon={<Icon as={RiCloseCircleFill} fontSize='20' />}
                                    >
                                        Apagar
                                    </Button>
                                </Td>
                            </Tr>
                            <Tr>
                                <Td>

                                </Td>
                                <Td>
                                    <Box>
                                        <Text fontWeight='bold'>Vicenzo Giuseppe</Text>
                                        <Text fontSize='sm' >vicenzogiuseppe@gmail.com</Text>
                                    </Box>
                                </Td>
                                <Td>04 de Abril, 2021</Td>
                                <Td>Atendente</Td>
                                <Td isNumeric>
                                    <Button
                                        as='a'
                                        size='sm'
                                        fontSize='sm'
                                        colorScheme='red'
                                        color='gray.700'
                                        leftIcon={<Icon as={RiCloseCircleFill} fontSize='20' />}
                                    >
                                        Apagar
                                    </Button>
                                </Td>
                            </Tr>
                            <Tr>
                                <Td>

                                </Td>
                                <Td>
                                    <Box>
                                        <Text fontWeight='bold'>Vicenzo Giuseppe</Text>
                                        <Text fontSize='sm' >vicenzogiuseppe@gmail.com</Text>
                                    </Box>
                                </Td>
                                <Td>04 de Abril, 2021</Td>
                                <Td>Cozinha</Td>
                                <Td isNumeric>
                                    <Button
                                        as='a'
                                        size='sm'
                                        fontSize='sm'
                                        colorScheme='red'
                                        color='gray.700'
                                        leftIcon={<Icon as={RiCloseCircleFill} fontSize='20' />}
                                    >
                                        Apagar
                                    </Button>
                                </Td>
                            </Tr>
                            <Tr>
                                <Td>

                                </Td>
                                <Td>
                                    <Box>
                                        <Text fontWeight='bold'>Vicenzo Giuseppe</Text>
                                        <Text fontSize='sm' >vicenzogiuseppe@gmail.com</Text>
                                    </Box>
                                </Td>
                                <Td>04 de Abril, 2021</Td>
                                <Td>Atendente</Td>
                                <Td isNumeric>
                                    <Button
                                        as='a'
                                        size='sm'
                                        fontSize='sm'
                                        colorScheme='red'
                                        color='gray.700'
                                        leftIcon={<Icon as={RiCloseCircleFill} fontSize='20' />}
                                    >
                                        Apagar
                                    </Button>
                                </Td>
                            </Tr>

                        </Tbody>
                    </Table>

                    <Pagination />
                </Box>
            </Flex>

        </Box >
    )
}