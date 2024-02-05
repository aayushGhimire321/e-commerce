import React from 'react';
import { Link } from 'react-router-dom';
import CategoryBox from '../../components/Category/CategoryBox';

const CategoryView = ({ categories }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 text-center">
          <h3 className="pt-3">Our Categories</h3>
          <Link to="/AddCategory">
            <button className="btn" style={{ float: 'right' }}>
              Add Category
            </button>
          </Link>
        </div>
      </div>
      <div className="row">
        {categories.map((category) => (
          <div key={category.id} className="col-xl-4 col-md-6 col-12 pt-3 d-flex">
            <CategoryBox category={category} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryView;
