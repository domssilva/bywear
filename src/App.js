import React, {useState, useEffect} from 'react';
import {Switch, Route, withRouter} from 'react-router-dom';

import Home from './pages/Home/';
import Location from './pages/Location/';
import Store from './pages/Store/';
import Checkout from './pages/Checkout/';
import Error from './pages/Error/';

// this data will be fetched from contentful
import merchList from './data/Product.data';
// this data will be fetched from contentful

function App() {

  const [cart, setCart] = useState({});
  const [total, setTotal] = useState(0);
  const [merch, setMerchList] = useState(merchList);

  const removeProduct = (id) => {
      let newCart = cart;

      for (const [productId, value] of Object.entries(cart)) {
          if (productId === id) {
              delete newCart[productId];
          }
        }
      
      setCart(newCart);
      calculateTotalCartPrice();

      if (Object.keys(cart).length === 0) {
          setCart({});
          setTotal(0);
      }
  }

  const calculateTotalCartPrice = () => {
      let prodQtd, prodPrice;
      let newTotal = 0;

      Object.keys(cart).map(id => {
          merch.forEach(prod => {
              if (prod.id === id) {
                  prodPrice = prod.price;
                  prodQtd = cart[id];
                  newTotal += prodPrice * prodQtd;
              }
          });
      });
  
      setTotal(newTotal);
  }

  const editProductQtd = (productId, operation = '+') => {
    
    (operation === '+') ? cart[productId] += 1 : cart[productId] -= 1;

    if (cart[productId] <= 0) {
      removeProduct(productId);
    }

    setCart({...cart});
  }

  useEffect(() => {
      calculateTotalCartPrice();
  }, [cart]);

  return (
    <Switch>
      <Route exact path="/">
        <Home
            cart={cart}
            setCart={setCart}
            total={total}
            setTotal={setTotal}
            merch={merch}
            editProductQtd={editProductQtd}
            removeProduct={removeProduct}
          />
      </Route>
      <Route exact path='/location'>
        <Location
          cart={cart}
          setCart={setCart}
          total={total}
          setTotal={setTotal}
          merch={merch}
          editProductQtd={editProductQtd}
          removeProduct={removeProduct}
        />
      </Route>
      <Route exact path='/store'>
        <Store
            cart={cart}
            setCart={setCart}
            total={total}
            setTotal={setTotal}
            merch={merch}
            editProductQtd={editProductQtd}
            removeProduct={removeProduct}
          />
      </Route>
      <Route exact path='/checkout'>
        <Checkout
            cart={cart}
            setCart={setCart}
            total={total}
            setTotal={setTotal}
            merch={merch}
            editProductQtd={editProductQtd}
            removeProduct={removeProduct}
          />
      </Route>
      <Route path='/' component={Error}/>

    </Switch>

  );
}

export default withRouter(App);
