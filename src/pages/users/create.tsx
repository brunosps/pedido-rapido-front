import { Box, Flex, Heading, Divider, VStack, SimpleGrid, HStack, Button } from "@chakra-ui/react";
import Link from "next/link";
import { Input } from "../../components/Form/input";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm, SubmitHandler } from 'react-hook-form'
import * as yup from 'yup';

type CreateUserFormData = {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
}

const createUserFormSchema = yup.object().shape({
    name: yup.string().required('Nome Obrigatório'),
    email: yup.string().required('E-Mail Obrigatório').email('E-Mail Inválido'),
    password: yup.string().required('Senha Obrigatória').min(6, 'No mínimo 6 caracteres'),
    password_confirmation: yup.string().oneOf([
        null, yup.ref('password')
    ], 'As senhas precisam ser iguais.'),
})

export default function CreateUser() {
    const { register, handleSubmit, formState, errors } = useForm({
        resolver: yupResolver(createUserFormSchema)
    })

    const handleCreateUser: SubmitHandler<CreateUserFormData> = async (values) => {
        await new Promise(resolve => setTimeout(resolve, 2000))

        console.log(values)
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
                    <Heading size='lg' fontWeight='normal'>Criar Usuários</Heading>

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