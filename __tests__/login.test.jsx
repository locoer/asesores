import { render, screen } from '@testing-library/react'
import Login from '../pages/usr/login'
import '@testing-library/jest-dom'

describe( 'Visitor arrives at Login page', () => {
  it('renders a heading', () => {
    render(<Login />)

    const heading = screen.getByRole('heading', {
      name: /Ingresa a la app/i,
    })

    expect(heading).toBeInTheDocument()
  })
  it('renders a login form', () => {
    render(<Login />)

    const input_user = screen.getByRole('textbox', {
      name: /user/i,
    })
    const input_psswd = screen.getByLabelText( /password/i )
    
    const btn_login = screen.getByRole('button', {
      name: /login/i,
    })

    expect(input_user).toBeInTheDocument()
    expect(input_psswd).toBeInTheDocument()
    expect(btn_login).toBeInTheDocument()
  })
  it('has link to register a new user', () => {
    render(<Login />)

    const link = screen.getByRole('link', {
      name: /regístrate aquí/i,
    })

    expect(link).toBeInTheDocument()
  })
})