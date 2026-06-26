import { useEffect, useState } from "react"
import {useCart} from  '../context/CartContext.jsx'

const Catalog=()=>{
  const [products, setProducts]=useState([]);

  useEffect(()=>{
    const fetchProducts=async()=>{
     const responce= await fetch('https://fakestoreapi.com/products')
     const data = await responce.json();
     setProducts(data);
    }
    fetchProducts()
  }


,[])
return(<>
{products.map(product=>(
<div key={product.id}>
<img src={product.image} alt= {product.title} />
<h3>{product.title}</h3>
<p>{product.price}</p>
<button>Add to cart</button>
</div>
))
}
  </>)

}
export default Catalog