import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ShoppingCart = ({ baseURL }) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalCost, setTotalCost] = useState(0);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await axios.get(`${baseURL}cart/?token=${token}`);
        const { cartItems: fetchedCartItems, totalCost: fetchedTotalCost } = response.data;
        setCartItems(fetchedCartItems);
        setTotalCost(fetchedTotalCost);
      } catch (error) {
        console.error('Error fetching cart items:', error);
      }
    };

    const tokenFromLocalStorage = localStorage.getItem('token');
    setToken(tokenFromLocalStorage);

    if (tokenFromLocalStorage) {
      fetchCartItems();
    }
  }, [baseURL, token]);

  const deleteItem = async (itemId) => {
    try {
      const response = await axios.delete(`${baseURL}cart/delete/${itemId}/?token=${token}`);
      if (response.status === 200) {
        // Refresh the cart items after deleting
        setCartItems([]);
        setTotalCost(0);
      }
    } catch (error) {
      console.error('Error deleting item from cart:', error);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 text-center">
          <h3 className="pt-3">Shopping cart</h3>
        </div>
      </div>

      {cartItems.map((cartItem) => (
        <div key={cartItem.id} className="row mt-2 pt-3 justify-content-around">
          <div className="col-2"></div>
          <div className="col-md-3 embed-responsive embed-responsive-16by9">
            <img src={cartItem.product.imageURL} alt="" className="w-100 card-image-top embed-responsive-item" style={{ objectFit: 'cover' }} />
          </div>
          <div className="col-md-5 px-3">
            <div className="card-block px-3">
              <h6 className="card-title">
                <Link to={`/product/show/${cartItem.product.id}`}>{cartItem.product.name}</Link>
              </h6>
              <p className="mb-0 font-weight-bold" id="item-price">
                $ {cartItem.product.price} per unit
              </p>
              <p className="mb-0" style={{ float: 'left' }}>Quantity: {cartItem.quantity}</p>
            </div>
            <p className="mb-0" style={{ float: 'right' }}>Total: <span className="font-weight-bold">$ {cartItem.product.price * cartItem.quantity}</span></p>
            <br />
            <a href="#" className="text-right" onClick={() => deleteItem(cartItem.id)}>Remove from cart</a>
          </div>
          <div className="col-2"></div>
          <div className="col-12"><hr /></div>
        </div>
      ))}

      <div className="total-cost pt-2 text-right">
        <h5>Total : $ {totalCost.toFixed(2)}</h5>
      </div>
    </div>
  );
};

export default ShoppingCart;
