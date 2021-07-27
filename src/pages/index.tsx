import { SubmitHandler, useForm } from 'react-hook-form'
import { Flex, Button, Stack } from '@chakra-ui/react'
import { Input } from '../components/Form/input'
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'

type SignInFormData = {
  email: string,
  password: string,
}

const signInFormSchema = yup.object().shape({
  email: yup.string().required('E-Mail Obrigatório').email('E-Mail Inválido'),
  password: yup.string().required('Senha Obrigatório'),
})

export default function signIn() {
  const { register, handleSubmit, formState, errors } = useForm({
    resolver: yupResolver(signInFormSchema),
  })

  const handleSignIn: SubmitHandler<SignInFormData> = async (values) => {
    await new Promise(resolve => setTimeout(resolve, 2000))

    console.log(values)
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
