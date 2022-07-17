import { render, screen } from '@testing-library/react'
import Register from '../pages/usr/register'
import '@testing-library/jest-dom'

describe( 'Visitor creates a new user in register page', () => {
  
  it('Renders a Heading and instructions', () => {
    render(<Register />)

    const heading = screen.getByRole('heading', {
      name: /regístrate aquí/i,
    })

    const instructions = screen.getByText( /^(ingresa)[\w\s]*(datos)[\w\s]*(registrarte)[\w\s]*/i )

    expect(heading).toBeInTheDocument()
  })
  
  it('Renders a new user registry form', () => {
    render(<Register />)

    const input_user = screen.getByRole('textbox', {
      name: /user/i,
    })
    
    const input_psswd = screen.getByLabelText( /password/i )
    
    const input_email = screen.getByRole('textbox', {
      name: /email/i,
    })

    const input_tyc = screen.getByRole('checkbox', {
      name: /términos y condiciones/i,
    })

    const btn_register = screen.getByRole('button', {
      name: /crear usuario/i,
    })
    
    expect(input_user).toBeInTheDocument()
    expect(input_psswd).toBeInTheDocument()
    expect(input_email).toBeInTheDocument()
    expect(input_tyc).toBeInTheDocument()
    expect(btn_register).toBeInTheDocument()
  })

  it('Creates a new user', () => {
    render(<Register />)
    const usr = screen.getByRole('textbox', { name: /user/i })
    const pswd = screen.getByLabelText(/password/i)
    const email = screen.getByRole('textbox', { name: /email/i })
    const tyc = screen.getByRole('checkbox', { name: /términos y condiciones/i })
    
    fireEvent.change(
      usr, {target: {value: 'usr_prueba'}}
    )
    fireEvent.change(
      pswd , {target: {value: 'psswd_prueba'}}
    )
    fireEvent.change(
      email , {target: {value: 'email@prueba.com'}}
    )
    fireEvent.change(
      tyc , {target: {checked: true}}
    )
    fireEvent(
      screen.getByRole('button', { name: /crear usuario/i }),
      new MouseEvent('click', {
        user: usr.value,
        psswd: pswd.value,
        email: email.value,
        terms: tyc.checked
      }),
    )
  })

  it('Redirects to Dashboard with new user logged in', () => {
    
  })

  test( 'That input validations work', ()=> {

  })

})