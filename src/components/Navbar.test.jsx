import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { CartProvider } from '../context/CartContext'
import Navbar from './Navbar'

const renderNavbar=()=>{
    render(
        <MemoryRouter>
            <CartProvider>
                <Navbar/>
            </CartProvider>
        </MemoryRouter>
    )
}

describe('Navbar',()=>{
    test('renders navigation links',()=>{
        renderNavbar()
        expect(screen.getByText('Home')).toBeInTheDocument()
        expect(screen.getByText('Catalog')).toBeInTheDocument()
    })

    test('shows no count when cart is empty',()=>{
        renderNavbar();
        expect(screen.queryByText(/\(\d+\)/)).not.toBeInTheDocument()
    })
})
