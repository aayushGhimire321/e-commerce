import React from 'react';
import { Link } from 'react-router-dom';

const CategoryBox = ({ category }) => {
  return (
    <div className="card w-100 h-100" style={{ marginTop: '10px' }}>
      <div className="embed-responsive embed-responsive-16by9">
        <img
          className="card-img-top embed-responsive-item"
          src={category.imageUrl}
          alt="Card image cap"
        />
      </div>
      <div className="card-body">
        <Link to={{ pathname: '/ListProducts', state: { id: category.id } }}>
          <h5 className="card-title">{category.categoryName}</h5>
        </Link>
        <p className="card-text">{category.description}</p>
        {window.location.pathname === '/Category' && (
          <Link to={{ pathname: '/EditCategory', state: { id: category.id } }}>
            <button className="btn btn-primary">Edit</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default CategoryBox;
