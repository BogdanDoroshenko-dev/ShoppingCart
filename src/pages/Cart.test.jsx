import { render, screen } from '@testing-library/react'
import { CartProvider } from '../context/CartContext'
import Cart from './Cart'

const renderWithCart = (ui) => {
    return render(<CartProvider>{ui}</CartProvider>)
}

describe('Cart',()=>{
    test('shows empty message when cart is empty',()=>{
        renderWithCart(<Cart/>)
        expect(screen.getByText(/your cart is empty/i)).toBeInTheDocument()
    })
})