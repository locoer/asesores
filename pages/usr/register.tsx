import { Container, Center } from '@mantine/core';
import { TextInput, PasswordInput, Checkbox, Button } from '@mantine/core';
import { User, Mail } from 'tabler-icons-react';
import { useForm } from '@mantine/form';

const Register = () => {
  
  const form = useForm({
    initialValues: {
      user: '',
      psswd: '',
      email: '',
      termsConditions : true
    },
    validate: {
      user: (value) => (/^[a-z\d_\-\.]+$/.test(value) ? null : 'Usuario inválido'),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Dirección email inválida'),
    },
  });

  return (
    <Container>
        <div className='text-center' >
          <h1>Regístrate Aquí</h1>
          <p>Ingresa tus datos para registrarte en la App.</p>
        </div>
        <Center>
          <div>
            <form onSubmit={form.onSubmit((values) => console.log(values))}>
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
                name="user"
                aria-label="user"
                required
                icon={<User size={14} />}
                {...form.getInputProps('user')}
              />
              <PasswordInput
                placeholder="Password"
                label="Password"
                description="El password debe de incluir al menos 1 número y un caracter especial"
                required
                {...form.getInputProps('psswd')}
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

    </Container>
  )
}

export default Register