import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext.jsx'
function Navbar() {
    const {cart} = useCart()
    const itemCount=cart.reduce((total,item)=>total+item.quantity,0)
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/catalog">Catalog</Link>
            <Link to="/cart">
                Cart {itemCount > 0 && `(${itemCount})`}
            </Link>
        </nav>
    )
}

export default Navbar