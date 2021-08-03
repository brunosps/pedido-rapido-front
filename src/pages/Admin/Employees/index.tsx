import { Text, Box, Flex, Heading, Button, Icon, Table, Thead, Tr, Td, Th, Tbody, Spinner } from "@chakra-ui/react";
import { Header } from "../../../components/Header";
import { Sidebar } from "../../../components/Sidebar";
import { RiAddLine, RiCloseCircleFill } from 'react-icons/ri'
import { HiOutlineUsers } from "react-icons/hi";
import { Pagination } from "../../../components/Pagination";
import Link from "next/link";
import { FaUsersCog } from "react-icons/fa";
import { useUsers } from "../../../services/hooks/useUsers";
import employee from "../../../components/dtos/employee";
import withAuth from "../../../components/withAuth";
import api from "../../../services/api";
import { useState } from "react";


function UserList() {
    const [page, setPage] = useState(1)
    const { data, isLoading, error, isFetching } = useUsers(page)








    return (
        <Box>
            <Header />
            <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
                <Sidebar />

                <Box flex='1' borderRadius='8' bg='gray.300' p='8'>
                    <Flex mb='8' justify='space-between' align='center'>
                        <Heading size='lg' fontWeight='normal'>
                            Funcionários
                            {!isLoading && isFetching && <Spinner size='sm' color='gray.500' ml='4' />}
                        </Heading>

                        <Link href='/users/create'>
                            <Button as='a' colorScheme='yellow' leftIcon={<Icon as={RiAddLine} fontSize='20' />} >
                                Criar Novo Funcionário
                            </Button>
                        </Link>
                    </Flex>
                    {isLoading ? (
                        <Flex justify='center'>
                            <Spinner />
                        </Flex>

                    ) : error ? (

                        <Flex justify='center'>
                            <Text>Falha ao obter dados do funcionários.</Text>
                        </Flex>

                    ) : (

                        <>
                            <Table colorScheme='black' >
                                <Thead>
                                    <Tr>
                                        <Th px='6' color='gray.700' width='8' />
                                        <Th>Funcionario</Th>
                                        <Th>Tipo</Th>
                                        <Th />
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    {

                                        data?.employees.map((employee: employee) => {
                                            return (


                                                <Tr key={employee.id}>


                                                    <Td>
                                                        {employee.occupation === 'admin' ? (
                                                            <Icon as={FaUsersCog} fontSize='35' justifyContent='center' />) : (
                                                            <Icon as={HiOutlineUsers} fontSize='40' />
                                                        )}

                                                    </Td>
                                                    <Td>
                                                        <Box>
                                                            <Text fontWeight='bold'>{employee.name}</Text>
                                                            <Text fontSize='sm' >{employee.email}</Text>
                                                        </Box>
                                                    </Td>

                                                    <Td>{employee.occupation}</Td>
                                                    <Td isNumeric>
                                                        {employee.occupation === 'admin' ? (<Button
                                                            as='a'
                                                            size='sm'
                                                            fontSize='sm'
                                                            colorScheme='red'
                                                            color='gray.700'
                                                            disabled
                                                            leftIcon={<Icon as={RiCloseCircleFill} fontSize='20'

                                                            />}
                                                        >
                                                            Apagar
                                                        </Button>) : (
                                                            <Button
                                                                size='sm'
                                                                fontSize='sm'
                                                                colorScheme='red'
                                                                color='gray.700'
                                                                leftIcon={<Icon as={RiCloseCircleFill} fontSize='20'

                                                                />}

                                                            >
                                                                Apagar
                                                            </Button>
                                                        )}
                                                    </Td>
                                                </Tr>

                                            )
                                        })}
                                </Tbody>
                            </Table>
                            <Pagination
                                total_pages={Number(data?.total_pages)}
                                page={page}
                                onPageChange={setPage}
                                total={data?.total}
                            />
                        </>
                    )}
                </Box>
            </Flex>

        </Box >
    )
}

export default withAuth(UserList);

