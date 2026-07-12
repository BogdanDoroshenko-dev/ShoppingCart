import { useEffect, useState } from "react"
import {useCart} from  '../context/CartContext.jsx'
import ProductCard from '../components/ProductCard'
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
                <ProductCard
                    key={product.id}
                    product={product}
                    quantity={quantities[product.id] || 1}
                    onIncrement={() => increment(product.id)}
                    onDecrement={() => decrement(product.id)}
                    onQuantityChange={e => setQuantities(prev => ({
                        ...prev,
                        [product.id]: Math.max(1, parseInt(e.target.value) || 1)
                    }))}
                    onAddToCart={() => handleAddToCart(product)}
                />
            ))}
        </div>
    </div>
)

}
export default Catalog