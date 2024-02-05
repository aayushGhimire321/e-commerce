import React, { useState, useEffect } from 'react';
import axios from 'axios';

const WishList = ({ baseURL }) => {
  const [token, setToken] = useState('');
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchWishList = async () => {
      try {
        const userToken = localStorage.getItem('token');
        setToken(userToken);
        const response = await axios.get(`${baseURL}wishlist/${userToken}`);
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching wishlist: ', error);
      }
    };

    fetchWishList();
  }, [baseURL]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 text-center">
          <h4 className="pt-3">Your WishList</h4>
        </div>
      </div>

      <div className="row">
        {products.map(product => (
          <div key={product.id} className="col-md-6 col-xl-4 col-12 pt-3 justify-content-around d-flex">
            {/* Display Product Details */}
            <div>
              <h5>{product.name}</h5>
              <p>Description: {product.description}</p>
              <p>Price: ${product.price}</p>
              {/* Add more details here as needed */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WishList;
