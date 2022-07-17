import { useState } from "react";
import Link from 'next/link';
import { TextInput, PasswordInput, Button } from '@mantine/core';
import { User } from 'tabler-icons-react';
import { useForm } from '@mantine/form';

const Login = () => {
  const form = useForm({
    initialValues: {
      user: '',
      psswd: '',
    },
    validate: {
      user: (value) => (/^[a-z\d_\-\.]+$/.test(value) ? null : 'Invalid user'),
    },
  });

  return (
    <div>
      <h1>Ingresa a la App aquí</h1>
      <form onSubmit={form.onSubmit((values) => console.log(values))}>  
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
          className="w-1/2"
          {...form.getInputProps('psswd')}
        />
        <Button color="teal" size="md" compact type="submit">
          Login
        </Button>
      </form>
      <p>
        <Link href="/usr/register">
          <a>Regístrate Aquí</a>
        </Link>
      </p>
    </div>
  )
}

export default Login