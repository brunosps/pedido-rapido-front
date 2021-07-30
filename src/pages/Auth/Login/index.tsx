import { SubmitHandler, useForm } from 'react-hook-form'
import { Flex, Button, Stack, useToast } from '@chakra-ui/react'
import { Input } from '../../../components/Form/input'
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthContext';
import api from '../../../services/api';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { setLoggedEmployee } from '../../../store/modules/auth/reducer';


type SignInFormData = {
    email: string,
    password: string,
}

const signInFormSchema = yup.object().shape({
    email: yup.string().required('E-Mail Obrigatório').email('E-Mail Inválido'),
    password: yup.string().required('Senha Obrigatório'),
})


export default function Sign() {
    const router = useRouter();
    const dispatch = useDispatch();
    const toast = useToast()

    const { register, handleSubmit, formState, errors } = useForm({
        resolver: yupResolver(signInFormSchema),
    })

    const handleSignIn: SubmitHandler<SignInFormData> = async (values) => {
        const email = values.email;
        const password = values.password;

        try {
            const auth = await api.post('/auth/v1/employee/sign_in', {
                email,
                password,
            })

            const employee = auth.data.data;

            dispatch(setLoggedEmployee(employee));
            toast({
                title: "Login realizado com sucesso!",
                status: "success",
                duration: 9000,
                isClosable: true,
            });

            if (router.query.callback && router.query.callback !== "/") {
                router.push(decodeURIComponent(router.query.callback.toString()));
            } else {
                router.push('/')
            }
        } catch (err) {
            toast({
                title: 'E-mail ou senha inválidos!',
                status: "error",
                duration: 9000,
                isClosable: true,
            });
        }
    }

    return (
        <Flex
            w='100vw'
            h='100vh'
            align='center'
            justify='center'
        >

            <Flex
                as='form'
                w='100%'
                maxW={360}
                bg='gray.300'
                p='8'
                borderRadius={8}
                flexDir='column'
                onSubmit={handleSubmit(handleSignIn)}
            >

                <Stack spacing='4'>
                    <Input
                        type='email'
                        name='email'
                        label='E-Mail'
                        error={errors.email}
                        ref={register}
                    />
                    <Input
                        type='password'
                        name='password'
                        label='Senha'
                        error={errors.password}
                        ref={register} />
                </Stack>


                <Button
                    type='submit'
                    mt='6'
                    colorScheme='yellow'
                    size='lg'
                    isLoading={formState.isSubmitting}
                >
                    Entrar
                </Button>


            </Flex>
        </Flex>
    )
}
