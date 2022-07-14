import { useState } from "react";
import Link from 'next/link';
import Input from '../components/Input';

const Login = () => {

  const [ user, setUser ] = useState('');
  const [ psswd, setPsswd ] = useState('');

  return (
    <div>
      <h1>Ingresa a la App aquí</h1>
      <form>
        <label htmlFor="user">Usuario</label>
        <Input type="text" name="user" value={user} handleChange={ (e) => { setUser( e.currentTarget.value ) } } autoComplete="on" required={true} isFocused={true} />
        <Input type="password" name="password" value={psswd} handleChange={ (e) => { setPsswd( e.currentTarget.value ) } } autoComplete="off" required={true} isFocused={false}  />
        <button type="submit" >Login</button>
      </form>
      <p>
        <Link href="/register">
          <a>Regístrate Aquí</a>
        </Link>
      </p>
    </div>
  )
}

export default Login