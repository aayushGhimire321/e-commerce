import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import swal from 'sweetalert';
import axios from 'axios';

const ProductDetails = ({ baseURL, products, categories }) => {
  const [product, setProduct] = useState({});
  const [category, setCategory] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [wishListString, setWishListString] = useState('Add to wishlist');
  const [token, setToken] = useState('');
  const { id } = useParams();

  useEffect(() => {
    const getProductDetails = async () => {
      try {
        const selectedProduct = products.find(prod => prod.id === id);
        setProduct(selectedProduct);
        const selectedCategory = categories.find(cat => cat.id === selectedProduct.categoryId);
        setCategory(selectedCategory);
        const userToken = localStorage.getItem('token');
        setToken(userToken);
      } catch (error) {
        console.error('Error fetching product details: ', error);
      }
    };

    getProductDetails();
  }, [id, products, categories]);

  const addToWishlist = () => {
    if (!token) {
      swal({
        text: 'Please login to add item to wishlist',
        icon: 'error',
      });
      return;
    }

    axios.post(`${baseURL}/wishlist/add?token=${token}`, { id: product.id })
      .then((res) => {
        if (res.status === 201) {
          setWishListString('Added to Wishlist');
          swal({
            text: 'Added to Wishlist',
            icon: 'success',
          });
        }
      })
      .catch((err) => {
        console.error('Error adding to wishlist: ', err);
      });
  };

  const addToCart = () => {
    if (!token) {
      swal({
        text: 'Please login to add item to cart',
        icon: 'error',
      });
      return;
    }

    axios.post(`${baseURL}/cart/add?token=${token}`, { productId: id, quantity })
      .then((res) => {
        if (res.status === 201) {
          swal({
            text: 'Product added to cart',
            icon: 'success',
          });
        }
      })
      .catch((err) => {
        console.error('Error adding to cart: ', err);
      });
  };

  return (
    <div className="container">
      <div className="row pt-5">
        <div className="col-md-1"></div>
        <div className="col-md-4 col-12">
          <img src={product.imageURL} className="img-fluid" alt={product.name} />
        </div>
        <div className="col-md-6 col-12 pt-3 pt-md-0">
          <h4>{product.name}</h4>
          <h6 className="category font-italic">{category.categoryName}</h6>
          <h6 className="font-weight-bold">$ {product.price}</h6>
          <p>{product.description}</p>
          <div className="d-flex flex-row justify-content-between">
            <div className="input-group col-md-3 col-4 p-0">
              <div className="input-group-prepend">
                <span className="input-group-text">Quantity</span>
              </div>
              <input type="number" className="form-control" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
            </div>
            <div className="input-group col-md-3 col-4 p-0">
              <button className="btn" type="button" id="add-to-cart-button" onClick={addToCart}>
                Add to Cart
              </button>
            </div>
          </div>
          <div className="features pt-3">
            <h5><strong>Features</strong></h5>
            <ul>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
              <li>Officia quas, officiis eius magni error magnam voluptatem</li>
              <li>nesciunt quod! Earum voluptatibus quaerat dolorem doloribus</li>
              <li>molestias ipsum ab, ipsa consectetur laboriosam soluta et</li>
              <li>ut doloremque dolore corrupti, architecto iusto beatae.</li>
            </ul>
          </div>
          <button id="wishlist-button" className="btn mr-3 p-1 py-0" onClick={addToWishlist}>
            {wishListString}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
