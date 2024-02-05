import React from 'react';
import { Link } from 'react-router-dom';
import ProductBox from '../../components/ProductBox';

const ProductView = ({ products }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 text-center">
          <h4>Our Products</h4>
          <Link to="/AddProduct" style={{ float: 'right' }}>
            <button className="btn">Add Product</button>
          </Link>
        </div>
      </div>
      <div className="row">
        {products.map(product => (
          <div key={product.id} className="col-md-6 col-xl-4 col-12 pt-3 d-flex">
            <ProductBox product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductView;
