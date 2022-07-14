import { useState } from "react"
import Link from 'next/link';

const Login = () => {

  const [ user, setUser ] = useState('');
  const [ psswd, setPsswd ] = useState('');

  return (
    <div>
      <h1>Ingresa a la App aquí</h1>
      <form>
        <label htmlFor="user">Usuario</label>
        <input type="text" name="user" aria-label="user" value={user} onChange={ (e) => { setUser( e.currentTarget.value ) } } />
        <input type="password" name="password" aria-label="password" value={psswd} onChange={ (e) => { setPsswd( e.currentTarget.value ) } } />
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