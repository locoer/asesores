import {rest} from 'msw'
import {setupServer} from 'msw/node'
import { render, screen, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import Register from '../pages/usr/register'

describe( 'Visitor creates a new user in register page', () => {
  
  const server = setupServer(
    rest.post('/api/user', (req, res, ctx) => {
      return res(ctx.status(200), ctx.json({ success: true, message: 'created new user' }))
      /*res.status = 301
      res.headers.set('Location', '/tablero')
      return res()*/
    }),
  )
  
  beforeAll(() => server.listen())
  afterEach(() => server.resetHandlers())
  afterAll(() => server.close())

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
    
    await user.type(email, 'prueba@asesores.com')
    await user.type(usr, 'prueba_usr')
    await user.type(pswd, 'prueba_pswd')
    await user.click(tyc)

    expect(email).toHaveValue('prueba@asesores.com')
    expect(usr).toHaveValue('prueba_usr')
    expect(pswd).toHaveValue('prueba_pswd')
    expect(tyc).toBeChecked()

  })

  it('Registers user and Redirects to Dashboard with user data', async () => {
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

    await user.click(btn)

    await waitFor( () => screen.getByRole('heading', { name: /dashboard/i }) )
    
    expect(screen.getByRole('heading', { name: /dashboard/i })).toBeInTheDocument()
    
  })

  test( 'That input validations work', ()=> {

  })

})