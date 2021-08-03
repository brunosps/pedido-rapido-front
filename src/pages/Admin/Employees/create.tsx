import { Box, Flex, Heading, Divider, VStack, SimpleGrid, HStack, Button } from "@chakra-ui/react";
import { Input } from "../../../components/Form/input"
import { Header } from "../../../components/Header";
import { Sidebar } from "../../../components/Sidebar";
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm, SubmitHandler } from 'react-hook-form'

import * as yup from 'yup';
import { Select } from "../../../components/Form/select";
import { RiCodeFill } from "react-icons/ri";
import Router from "next/router";
import api from "../../../services/api";

type CreateUserFormData = {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
    occupation: string,
}

const createUserFormSchema = yup.object().shape({
    name: yup.string().required('Nome Obrigatório'),
    email: yup.string().required('E-Mail Obrigatório').email('E-Mail Inválido'),
    password: yup.string().required('Senha Obrigatória').min(6, 'No mínimo 6 caracteres'),
    password_confirmation: yup.string().oneOf([
        null, yup.ref('password')
    ], 'As senhas precisam ser iguais.'),
    occupation: yup.string().required("Selecione uma opção")
})



export default function CreateUser() {

    async function Create({ name, email, password, password_confirmation, occupation }: CreateUserFormData) {
        try {
            const response = api.post('/auth/v1/employee', {
                name,
                email,
                password,
                password_confirmation,
                occupation
            }).then((response: any) => {
                console.log(response)
            })


            Router.push('/users')
        } catch (err) {
            console.log(err)
        }
    }

    const { register, handleSubmit, formState, errors } = useForm({
        resolver: yupResolver(createUserFormSchema)
    })

    const handleCreateUser: SubmitHandler<CreateUserFormData> = async (values) => {
        await new Promise(resolve => setTimeout(resolve, 2000))

        Create(values)
    }



    return (
        <Box>
            <Header />

            <Flex w='100%' my='6' maxwidth={1480} mx='auto' px='6'>
                <Sidebar />

                <Box
                    as='form'
                    flex='1'
                    borderRadius={8}
                    bg="gray.300"
                    p='8'
                    onSubmit={handleSubmit(handleCreateUser)}
                >
                    <Heading size='lg' fontWeight='normal'>Funcionário</Heading>

                    <Divider my='6' borderColor='gray.700' />

                    <VStack spacing='8'>
                        <SimpleGrid minChildWidth='240px' spacing='8' w='100%'>
                            <Input
                                name='name'
                                label='Nome Completo'
                                error={errors.name}
                                ref={register} />

                            <Input
                                name='email'
                                type='email'
                                label='E-Mail'
                                error={errors.email}
                                ref={register}
                            />
                        </SimpleGrid>

                        <SimpleGrid minChildWidth='240px' spacing='8' w='100%'>
                            <Input
                                name='password'
                                type='password'
                                label='Senha'
                                error={errors.password}
                                ref={register} />

                            <Input
                                name='password_confirmation'
                                type='password'
                                label='Confirme sua senha'
                                error={errors.password_confirmation}
                                ref={register} />
                        </SimpleGrid>

                        <Select
                            name='occupation'
                            label='Ocupação'
                            placeholder="Selecione: "
                            ref={register}
                            error={errors.occupation}
                            icon={< RiCodeFill />}
                        >
                            <option value='waiter'>Atendente</option>
                            <option value='cooker'>Cozinha</option>
                        </Select>
                    </VStack>

                    <Flex mt='8' justify='flex-end'>
                        <HStack spacing='4'>
                            <Button
                                type='submit'
                                colorScheme='yellow'
                                isLoading={formState.isSubmitting}
                            >Salvar</Button>
                        </HStack>
                    </Flex>
                </Box>
            </Flex>
        </Box>
    )
}