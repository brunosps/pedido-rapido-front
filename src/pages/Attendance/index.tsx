import { Box, Button, Flex, Heading, Icon, Link, Spinner, Text } from "@chakra-ui/react";
import React from "react";
import { RiAddLine } from "react-icons/ri";
import { Header } from "../../components/Header";
import OrderTablePage from "../../components/Orders/OrderTablePage";
import withAuth from "../../components/withAuth";
import { useOrders } from "../../services/hooks/useOrders";

function AttendanceIndexPage() {
    const { data, isLoading, error, isFetching, refetch } = useOrders()

    return (
        <Box>
            <Header />
            <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
                <Box flex='1' borderRadius='8' bg='gray.300' p='8'>
                    <Flex mb='8' justify='space-between' align='center'>
                        <Heading size='lg' fontWeight='normal'>
                            Lista de Pedidos
                            {!isLoading && isFetching && <Spinner size='sm' color='gray.500' ml='4' />}
                        </Heading>

                        <Link href='/Attendance/Orders/Create'>
                            <Button as='a' colorScheme='yellow' leftIcon={<Icon as={RiAddLine} fontSize='20' />} >
                                Novo Pedido
                            </Button>
                        </Link>
                    </Flex>
                    {isLoading ? (
                        <Flex justify='center'>
                            <Spinner />
                        </Flex>

                    ) : error ? (

                        <Flex justify='center'>
                            <Text>Falha ao obter dados do pedidos.</Text>
                        </Flex>

                    ) : (
                        <OrderTablePage data={data} refetch={refetch} />
                    )}
                </Box>
            </Flex>

        </Box>
    )
}

export default withAuth(AttendanceIndexPage, "waiter");