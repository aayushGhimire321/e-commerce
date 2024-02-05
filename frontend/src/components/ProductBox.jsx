import React from 'react';
import { Link } from 'react-router-dom';

const ProductBox = ({ product }) => {
  return (
    <div className="card h-100 w-100">
      <div className="embed-responsive embed-responsive-16by9">
        <img
          className="card-img-top embed-responsive-item"
          src={product.imageURL}
          alt="Card image cap"
        />
      </div>
      <div className="card-body">
        <Link to={`/ShowDetails/${product.id}`}>
          <h5 className="card-title">{product.name}</h5>
        </Link>
        <p className="card-text">{product.description.substring(0, 65)}...</p>
        {window.location.pathname === '/AdminProduct' && (
          <Link to={`/EditProduct/${product.id}`}>
            <button className="btn btn-primary">Edit</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default ProductBox;
