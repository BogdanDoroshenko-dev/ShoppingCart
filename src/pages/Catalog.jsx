import { useEffect, useState } from "react"
import {useCart} from  '../context/CartContext.jsx'
import './Catalog.css'
const Catalog=()=>{
  const [products, setProducts]=useState([]);
  const [quantities, setQuantities]=useState({});

  const { addToCart } = useCart()

  useEffect(()=>{
    const fetchProducts=async()=>{
     const responce= await fetch('https://fakestoreapi.com/products')
     const data = await responce.json();
     setProducts(data);
    }
    fetchProducts()
  }


,[])

const handleAddToCart=(product)=>{
addToCart({
id:product.id,
title:product.title,
price:product.price,
image:product.image,
quantity:quantities[product.id]||1
})
}

  const increment = (id) => {
    setQuantities(prev=>({...prev,[id]:(prev[id]||1) + 1}))
  }

  const decrement = (id) => {
    setQuantities(prev => ({ ...prev, [id]: Math.max(1, (prev[id] || 1) - 1) }))
  }

return (
    <div className="catalog">
        <h1>Catalog</h1>
        <div className="products-grid">
            {products.map(product => (
                <div key={product.id} className="product-card">
                    <img src={product.image} alt={product.title} />
                    <h3>{product.title}</h3>
                    <p className="price">${product.price}</p>

                    <div className="quantity-controls">
                        <button className="glass-btn" onClick={() => decrement(product.id)}>-</button>
                        <input
                            type="number"
                            value={quantities[product.id] || 1}
                            onChange={e => setQuantities(prev => ({
                                ...prev,
                                [product.id]: Math.max(1, parseInt(e.target.value) || 1)
                            }))}
                        />
                        <button className="glass-btn" onClick={() => increment(product.id)}>+</button>
                    </div>

                    <button className="glass-btn primary" onClick={() => handleAddToCart(product)}>
                        Add to Cart
                    </button>
                </div>
            ))}
        </div>
    </div>
)

}
export default Catalog