import { render, screen } from '@testing-library/react'
import Home from '../pages/index'
import '@testing-library/jest-dom'

describe('Visitor arrives at Home page', () => {
  it('renders a heading', () => {
    render(<Home />)

    const heading = screen.getByRole('heading', {
      name: /bienvenido a la app asesores/i,
    })

    expect(heading).toBeInTheDocument()
  })
  it('renders a login link', () => {
    render(<Home />)

    const link_login = screen.getByRole('link', {
      name: /iniciar sesión/i,
    })

    expect(link_login).toBeInTheDocument()
  })
})