import { useEffect, useState } from "react"
import {useCart} from  '../context/CartContext.jsx'

const Catalog=()=>{
  const [products, setProducts]=useState([]);
  const [quantities, setQuantities]=useState({});


  useEffect(()=>{
    const fetchProducts=async()=>{
     const responce= await fetch('https://fakestoreapi.com/products')
     const data = await responce.json();
     setProducts(data);
    }
    fetchProducts()
  }


,[])

  const increment = (id) => {
    setQuantities(prev=>({...prev,[id]:(prev[id]||1) + 1}))
  }

  const decrement = (id) => {
    setQuantities(prev => ({ ...prev, [id]: Math.max(1, (prev[id] || 1) - 1) }))
  }

return(<>
{products.map(product=>(
<div key={product.id}>
<img src={product.image} alt= {product.title} />
<h3>{product.title}</h3>
<p>{product.price}</p>

    <div>
        <button onClick={() => decrement(product.id)}>-</button>
        <input 
            type="number"
            value={quantities[product.id] || 1}
            onChange={e => setQuantities(prev => ({ 
                ...prev, 
                [product.id]: Math.max(1, parseInt(e.target.value) || 1) 
            }))}
        />
        <button onClick={() => increment(product.id)}>+</button>
    </div>


<button>Add to cart</button>
</div>
))
}
  </>)

}
export default Catalog