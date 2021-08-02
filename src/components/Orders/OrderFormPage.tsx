import React from "react";
import { Box, Button, Flex, FormControl, FormHelperText, FormLabel, Heading, Text, Icon, Input, Link, NumberInput, NumberInputField, SimpleGrid, Stack, StackDivider, VStack, Spacer, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper, IconButton, useToast } from "@chakra-ui/react";
import OrderForm from "./Form";
import { SubmitHandler, useFieldArray, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { OrderFormSchema } from "./Schema/OrderFormSchema";
import { OrderFormData } from "../../dtos/OrderFormData";

import { useRouter } from "next/router";
import Employee from "../../dtos/Employee";
import AuthState from "../../dtos/AuthState";
import { useSelector } from "react-redux";
import ProductList from "./Form/ProductList";
import { CreateOrderService } from "../../services/orders";


const initialValues = {};

const OrderFormPage = (/*initialValues*/) => {
    const toast = useToast()
    const router = useRouter();
    const loggedEmployee: Employee = useSelector((state: AuthState) => state.auth.loggedEmployee);

    const {
        control,
        register,
        handleSubmit,
        getValues,
        reset,
        formState,
        setValue
    } = useForm({
        defaultValues: initialValues,
        resolver: yupResolver(OrderFormSchema)
    });

    const { fields, append, remove, prepend } = useFieldArray({
        control,
        name: "order_items"
    });

    const handleSaveOrder: SubmitHandler<OrderFormData> = async (values) => {
        await new Promise(resolve => setTimeout(resolve, 1))
        console.log("data", values)
        
        values.employee_id = loggedEmployee.id;

        CreateOrderService(values).then(response => {
            if (response.isAxiosError) {
                toast({
                    title: "Erro ao enviar pedido",
                    description: response.message, 
                    status: "error",
                    duration: 9000,
                    isClosable: true,
                });
            } else {
                toast({
                    title: "Pedido Enviado",
                    status: "success",
                    duration: 9000,
                    isClosable: true,
                });
                router.push('/')
            }
        }).catch(error => {
            toast({
                title: "Erro ao enviar pedido",
                status: "error",
                duration: 9000,
                isClosable: true,
            });
        });
    }

    const submitForm = () => {
        handleSubmit(handleSaveOrder)()
    }

    return (
        <>
            <Flex w='100%' mt='6' maxwidth={1480} mx='auto' px='6'>
                <Box flex='1' witdh="100%" borderRadius='8' bg='gray.300' p='4'>
                    <Flex justify='space-between' align='center'>
                        <Heading size='lg' fontWeight='normal'>
                            Novo Pedido
                        </Heading>

                        <Stack direction="row" spacing={4} align="center">
                            <Link href="/Attendance" colorScheme="white" variant="outline">
                                Cancelar
                            </Link>
                            <Button colorScheme="yellow" variant="solid" onClick={submitForm} >
                                Confirmar
                            </Button>
                        </Stack>
                    </Flex>
                </Box>
            </Flex>
            <Flex w='100%' maxwidth={1480} mx='auto' px='6'>
                <Box flex='2' bg='white' p='8'>
                    <OrderForm {...{ handleSubmit, handleSaveOrder, formState, control, register, getValues, setValue, fields, append, remove, prepend }} />
                </Box>
                <Box flex='1' bg='gray.300' px='2'>
                    <ProductList preAppendTargetList={append}/>
                </Box>
            </Flex>
        </>
    );
}

export default OrderFormPage;


