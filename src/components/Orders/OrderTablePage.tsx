import { Badge, Button, ButtonGroup, Table, TableCaption, Tbody, Td, Tfoot, Th, Thead, Tr, useToast } from "@chakra-ui/react";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import AuthState from "../../dtos/AuthState";
import Employee from "../../dtos/Employee";
import { OrderFormData } from "../../dtos/OrderFormData";
import { useOrders } from "../../services/hooks/useOrders";
import { UpdateOrderStatusService } from "../../services/orders";

const BadgeColor = (status) => {
    let colorStatus = "";

    switch (status) {
        case "completed": {
            colorStatus = "green";
            break;
        }
        case "canceled": {
            colorStatus = "purple";
            break;
        }
        case "pending": {
            colorStatus = "red";
            break;
        }
        case "preparation": {
            colorStatus = "yellow";
            break;
        }
    }
    return (colorStatus)
}

const OrderTablePage = ({ data, refetch }) => {
    const toast = useToast()
    const [refreshKey, setRefreshKey] = useState(0);

    const loggedEmployee: Employee = useSelector((state: AuthState) => state.auth.loggedEmployee);

    const CheckVisibleAction = (action: string) => {
        let isVisible = true;

        if (loggedEmployee.occupation === "waiter" && action == "preparation") {
            isVisible = false;
        } else if (loggedEmployee.occupation === "cooker" && action == "canceled") {
            isVisible = false;
        }


        return isVisible;
    }

    const renderButton = (orderId, status, action, colorScheme, text) => {
        const haveAccess = CheckVisibleAction(action);
        const isPending = status !== "completed" && status !== "canceled"

        return (
            (haveAccess && isPending && status !== action) ?
                <Button onClick={() => UpdateOrderStatus(orderId, action)} colorScheme={colorScheme}>{text}</Button> :
                null
        )
    }

    const UpdateOrderStatus = (orderId, status) => {
        UpdateOrderStatusService(orderId, status).then(response => {
            if (response.isAxiosError) {
                toast({
                    title: "Erro ao atualizar status do pedido",
                    description: response.message,
                    status: "error",
                    duration: 9000,
                    isClosable: true,
                });
            } else {
                toast({
                    title: "Pedido Atualizado",
                    status: "success",
                    duration: 9000,
                    isClosable: true,
                });
            }
        }).catch(error => {
            toast({
                title: "Erro ao atualizar status do pedido",
                status: "error",
                duration: 9000,
                isClosable: true,
            });
        });
        refetch();
    }
    return (
        <>
            <Table colorScheme='black'>
                <Thead>
                    <Tr>
                        <Th>Status</Th>
                        <Th>Cliente</Th>
                        <Th>Mesa</Th>
                        <Th></Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {
                        data?.map((order: OrderFormData) => {
                            return (
                                <Tr key={order.id}>
                                    <Td w="10%"><Badge colorScheme={BadgeColor(order.status)}>{order.status}</Badge></Td>
                                    <Td w="60%">{order.name}</Td>
                                    <Td w="10%">{order.table_number}</Td>
                                    <Td textAlign='right' w="20%">
                                        <ButtonGroup variant="outline" spacing="6">
                                            {renderButton(order.id, order.status, "preparation", "yellow", "Preparar")}
                                            {renderButton(order.id, order.status, "completed", "green", "Concluir")}
                                            {renderButton(order.id, order.status, "canceled", "red", "Cancelar")}
                                        </ButtonGroup>
                                    </Td>
                                </Tr>
                            )
                        })
                    }
                </Tbody>
            </Table>
        </>
    )
}



export default OrderTablePage;