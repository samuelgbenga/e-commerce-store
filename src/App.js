import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Products, Navbar, Cart } from "./components";
import { commerce } from "./lib/commerce";
import "./App.css";
function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  const fetchProducts = async () => {
    try {
      const { data } = await commerce?.products.list();
      console.log(data);
      setProducts(data);
    } catch (e) {
      console.log("this is the error", e);
    }
  };
  const fetchCart = async () => {
    try {
      const cart = await commerce.cart.retrieve();
      setCart(cart);
    } catch (e) {
      console.log("this is the error", e);
    }
  };
  const handleAddToCart = async (productId, quantity) => {
    try {
      const { cart } = await commerce.cart.add(productId, quantity);
      setCart(cart);
    } catch (e) {
      console.log("add to cart error", e);
    }
  };
  const handleUpdateCartQty = async (productId, quantity) => {
    try {
      const { cart } = await commerce.cart.update(productId, { quantity });
      setCart(cart);
    } catch (e) {
      console.log("update Error", e);
    }
  };
  const handleRemoveFromCart = async (productId) => {
    try {
      const { cart } = await commerce.cart.remove(productId);
      setCart(cart);
    } catch (e) {
      console.log("handleRemoveFromCart Error", e);
    }
  };
  const handleEmptyCart = async () => {
    try {
      const { cart } = await commerce.cart.empty();
      setCart(cart);
    } catch (e) {
      console.log("handleEmptyCart Error", e);
    }
  };

  return (
    <Router>
      <Navbar quantity={cart.total_items} />
      <Switch>
        <Route exact path="/e-commerce-store">
          {products.length === 0 ? (
            <p className="loading">Loading...</p>
          ) : (
            <Products products={products} handleAddToCart={handleAddToCart} />
          )}
        </Route>
        <Route exact path="/cart">
          <Cart
            cart={cart}
            empty={handleEmptyCart}
            remove={handleRemoveFromCart}
            update={handleUpdateCartQty}
          />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
