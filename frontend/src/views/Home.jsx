import React from 'react';
import { Link } from 'react-router-dom';
import CategoryBox from '../components/Category/CategoryBox';
import ProductBox from '../components/ProductBox';

const HomePage = ({ categories, products }) => {
  const categorySize = Math.min(6, categories.length);
  const productSize = Math.min(8, products.length);

  return (
    <div id="home">
      <div id="background-div" className="page-holder bg-cover">
        <div className="container py-5">
          <header className="text-left text-white py-5">
            <h3 className="mb-4 rounded" id="heading">
              <Link to="#Welcome!" className="bg-white px-2 py-2 rounded"> Welcome!!!</Link>
            </h3>
            <p className="lead mb-0 bg-dark p-1 rounded"> Demo Ecommerce</p>
          </header>
        </div>
        <hr />
      </div>

      {/* Display categories */}
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <h2 className="pt-3"> Top Categories</h2>
          </div>
        </div>
        <div className="row">
          {Array.from({ length: categorySize }, (_, index) => (
            <div key={index} className="col-md-6 col-xl-4 col-12 pt-3 justify-content-around d-flex">
              <CategoryBox category={categories[index]} />
            </div>
          ))}
        </div>
      </div>

      {/* Display top products */}
      <div className="container py-2">
        <div className="row">
          <div className="col-12 text-center">
            <h2 className="pt-3"> Top Products</h2>
          </div>
        </div>

        {/* Display products */}
        <div className="row">
          {Array.from({ length: productSize }, (_, index) => (
            <div key={index} className="col-md-6 col-xl-4 col-12 pt-3 justify-content-around d-flex">
              <ProductBox product={products[index]} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
