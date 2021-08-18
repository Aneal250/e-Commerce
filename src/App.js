import React, { useState, useEffect} from 'react'
import './App.css';
import Cart from './components/Cart/Cart';
import Navbar from './components/NavBar/Navbar';
import Products from './components/Products/Products';
import { commerce } from './lib/commerce'



function App() {

const [product, setProduct] = useState([]);
const [ cart, setCart ] = useState({});

const fetchProducts = async () => {
  const { data } = await commerce.products.list();
    setProduct(data);

}

const fetchCart = async () => {
  setCart(await commerce.cart.retrieve());
}

const handleAddToCart = async (productId, quantity) => {
  const item = await commerce.cart.add(productId, quantity);

  setCart(item.cart);
};

useEffect(() => {
  fetchProducts();
  fetchCart();
}, [])

console.log(cart)


  return (
    <div>
      <h1>E-Commerce</h1>
      <Navbar totalItems={cart.total_items}/>
      {/* <Products product={product} addToCart={handleAddToCart}/> */}
     <Cart cart={cart}/>
    </div>
  );
}

export default App;
