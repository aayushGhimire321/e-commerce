import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import axios from 'axios';

const App = () => {
  const baseURL = 'https://limitless-lake-55070.herokuapp.com/';
  const [products, setProducts] = useState(null);
  const [categories, setCategories] = useState(null);
  const [cartCount, setCartCount] = useState(0);
  const token = localStorage.getItem('token');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const categoriesResponse = await axios.get(baseURL + 'category/');
      setCategories(categoriesResponse.data);

      const productsResponse = await axios.get(baseURL + 'product/');
      setProducts(productsResponse.data);

      if (token) {
        const cartResponse = await axios.get(`${baseURL}cart/?token=${token}`);
        const result = cartResponse.data;
        setCartCount(result.cartItems.length);
      }
    } catch (error) {
      console.log('Error:', error);
    }
  };

  const resetCartCount = () => {
    setCartCount(0);
  };

  return (
    <div>
      <Navbar cartCount={cartCount} resetCartCount={resetCartCount} />
      {categories && products && (
        <router-view
          style={{ minHeight: '60vh' }}
          baseURL={baseURL}
          categories={categories}
          products={products}
          fetchData={fetchData}
        />
      )}
      <Footer />
    </div>
  );
};

export default App;
