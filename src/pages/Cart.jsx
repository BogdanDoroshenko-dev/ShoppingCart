import { useCart } from '../context/CartContext.jsx'
import './Cart.css'

const Cart = () => {
    const { cart, removeFromCart, updateQuantity } = useCart()
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

    if (cart.length === 0) {
        return (
            <div className="cart">
                <h1>Your Cart</h1>
                <p className="cart-empty">Your cart is empty - go find something you like!</p>
            </div>
        )
    }

    return (
        <div className="cart">
            <h1>Your Cart</h1>
            <div className="cart-items">
                {cart.map(item => (
                    <div key={item.id} className="cart-item">
                        <img src={item.image} alt={item.title} />
                        <div className="cart-item-info">
                            <h3>{item.title}</h3>
                            <p>${(item.price * item.quantity).toFixed(2)}</p>
                        </div>
                        <div className="cart-item-controls">
                            <button className="glass-btn" onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                            <span>{item.quantity}</span>
                            <button className="glass-btn" onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                            <button className="glass-btn danger" onClick={() => removeFromCart(item.id)}>Remove</button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="cart-total">
                Total: <span>${total.toFixed(2)}</span>
            </div>
        </div>
    )
}

export default Cart