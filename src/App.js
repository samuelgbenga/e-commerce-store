import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Products, Navbar, Cart, Checkout, Footer } from "./components";
import { commerce } from "./lib/commerce";
import "./App.css";
import loading from "./assets/loading.svg";

function App() {
  const [products, setProducts] = useState([]);
  const [order, setOrder] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  const [cart, setCart] = useState({});

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  const fetchProducts = async () => {
    try {
      const { data } = await commerce.products.list();

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
  const refreshCart = async () => {
    const newCart = await commerce.cart.refresh();
    setCart(newCart);
  };
  const handleCheckoutCapture = async (checkoutTokenId, newOrder) => {
    try {
      const incomingOrder = await commerce.checkout.capture(
        checkoutTokenId,
        newOrder
      );
      setOrder(incomingOrder);
      refreshCart();
    } catch (error) {
      setErrorMessage(error.data.error.message);
      console.log("[checkout capture error]", error);
    }
  };

  return (
    <div className="body">
      <Router>
        <Navbar quantity={cart.total_items} />
        <Switch>
          <Route exact path="/e-commerce-store">
            {products.length === 0 ? (
              <div className="loading">
                <img src={loading} alt="loading" />
              </div>
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
          <Route path="/checkout">
            <Checkout
              cart={cart}
              order={order}
              capture={handleCheckoutCapture}
              error={errorMessage}
            />
          </Route>
        </Switch>
        <Footer />
      </Router>
      {console.log(order, errorMessage)}
    </div>
  );
}

export default App;
