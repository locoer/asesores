import { render, screen } from '@testing-library/react'
import Register from '../pages/usr/register'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'

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

  it('Allows new user to type its data', async () => {
    const user = userEvent.setup()
    render(<Register />)

    const email = screen.getByRole('textbox', { name: /email/i })
    const usr = screen.getByRole('textbox', { name: /user/i })
    const pswd = screen.getByLabelText(/password/i)
    const tyc = screen.getByRole('checkbox', { name: /términos y condiciones/i })
    const btn = screen.getByRole('button', { name: /crear usuario/i })
    
    await user.type(email, 'prueba@asesores.com')
    await user.type(usr, 'prueba_usr')
    await user.type(pswd, 'prueba_pswd')
    await user.click(tyc)
    //await user.click(btn)

    expect(email.value).toBe('prueba@asesores.com')
    expect(usr.value).toBe('prueba_usr')
    expect(pswd.value).toBe('prueba_pswd')
    expect(tyc.value).toBe('true')

  })

  it('Redirects to Dashboard with new user logged in', () => {
    
  })

  test( 'That input validations work', ()=> {

  })

})