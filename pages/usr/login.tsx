import { useState } from "react";
import {User as UserType} from '../api/user'
import Link from 'next/link';
import { TextInput, PasswordInput, Button } from '@mantine/core';
import { User } from 'tabler-icons-react';
import { useForm } from '@mantine/form';

const Login = () => {
  const [ errorMsg, setErrorMsg ] = useState('')
  const form = useForm({
    initialValues: {
      username: '',
      password: '',
    },
    validate: {
      username: (value) => (/^[a-z\d_\-\.]+$/.test(value) ? null : 'Invalid user'),
    },
  });

  const handleSubmit = async (values : UserType) => {
    console.log({values})
    const res = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values),
    })

    if (res.status === 200) {
      const userObj = await res.json()
      console.log("Se logeo y todo en orden, el usuario: ",userObj)
      // set user to useSWR state
      //mutate(userObj)
    } else {
      setErrorMsg('Incorrect username or password. Try better!')
    }
  }

  return (
    <div>
      <h1>Ingresa a la App aquí</h1>
      <form onSubmit={form.onSubmit(handleSubmit)}>  
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
          className="w-1/2"
          {...form.getInputProps('password')}
        />
        <Button color="teal" size="md" compact type="submit">
          Login
        </Button>
      </form>
      { errorMsg && <p>{errorMsg}</p>}
      <p>
        <Link href="/usr/signup">
          <a>Regístrate Aquí</a>
        </Link>
      </p>
    </div>
  )
}

export default Login