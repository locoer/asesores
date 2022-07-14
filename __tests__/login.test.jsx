import { render, screen } from '@testing-library/react'
import Login from '../pages/login'
import '@testing-library/jest-dom'
import { isTypedArray } from 'util/types'

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
    
    const bttn_login = screen.getByRole('button', {
      name: /login/i,
    })

    expect(input_user).toBeInTheDocument()
    expect(input_psswd).toBeInTheDocument()
  })
  it('has link to register a new user', () => {
    render(<Login />)

    const link = screen.getByRole('link', {
      name: /regístrate aquí/i,
    })

    expect(link).toBeInTheDocument()
  })
})