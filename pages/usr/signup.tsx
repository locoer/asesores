import { useState } from 'react'
import Router from 'next/router'
import {User as UserType} from '../api/user'
import { Container, Center } from '@mantine/core';
import { TextInput, PasswordInput, Checkbox, Button } from '@mantine/core';
import { User, Mail } from 'tabler-icons-react';
import { useForm } from '@mantine/form';

const Signup = () => {
  //useUser({ redirectTo: '/tablero', redirectIfFound: true }) //Por hacer hook, revisa si hay un usuario logeado y lo redirecciona al tablero
  
  const [errorMsg, setErrorMsg] = useState('')

  const form = useForm({
    initialValues: {
      username: '',
      password: '',
      email: '',
      termsConditions : false
    },
    validate: {
      username: (value) => (/^[a-z\d_\-\.]+$/.test(value) ? null : 'Usuario inválido, sólo se aceptan letras, números, ".", "-" y "_"'),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Dirección email inválida'),
    },
  });

  const submitForm = async (values : UserType  ) => {
    console.log({values})
    try {
      const res = await fetch('/api/user', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      })
      if (res.status === 200) {
        Router.push('/tablero')
      } else {
        throw new Error(await res.text())
      }
    } catch (error) {
      console.error('Oucrrió el siguiente error:', error)
      setErrorMsg(error.message)
    }
  }

  return (
    <Container>
        <div className='text-center' >
          <h1>Regístrate Aquí</h1>
          <p>Ingresa tus datos para registrarte en la App.</p>
        </div>
        <Center>
          <div>
            <form onSubmit={form.onSubmit( submitForm )}>
              <TextInput
                placeholder="correo@asesores.com"
                label="Ingresa tu Correo Electrónico"
                name="email"
                aria-label="email"
                required
                icon={<Mail size={14} />}
                {...form.getInputProps('email')}
              />
              <TextInput
                placeholder="usuario"
                label="Ingresa tu Usuario"
                name="username"
                aria-label="user"
                required
                icon={<User size={14} />}
                {...form.getInputProps('username')}
              />
              <PasswordInput
                placeholder="Password"
                label="Password"
                description="El password debe de incluir al menos 1 número y un caracter especial"
                required
                {...form.getInputProps('password')}
              />
              <Checkbox
                label="Estoy de acuerdo con los Términos y Condiciones"
                aria-label='Términos y Condiciones'
                required
                {...form.getInputProps('termsConditions')}
              />
              <Button color="teal" size="md" compact type="submit">
                Crear Usuario
              </Button>
            </form>
          </div>
        </Center>
        { errorMsg && <div>{errorMsg}</div> }
    </Container>
  )
}

export default Signup