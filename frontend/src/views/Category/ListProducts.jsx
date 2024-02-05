import React, { useState, useEffect } from 'react';
import ProductBox from '../../components/ProductBox';

const Category = ({ categories, match }) => {
  const [id, setId] = useState(null);
  const [category, setCategory] = useState({});
  const [msg, setMsg] = useState('');

  useEffect(() => {
    setId(match.params.id);
    const foundCategory = categories.find(category => category.id == match.params.id);
    setCategory(foundCategory);
    if (foundCategory.products.length === 0) {
      setMsg('No products found');
    } else if (foundCategory.products.length === 1) {
      setMsg('Only 1 product found');
    } else {
      setMsg(`${foundCategory.products.length} products found`);
    }
  }, [categories, match.params.id]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 text-center">
          <h4 className="pt-3">{category.categoryName}</h4>
          <h5 style={{ fontWeight: 300, color: '#686868' }}>{msg}</h5>
        </div>
      </div>
      <div className="row">
        {category.products.map(product => (
          <div key={product.id} className="col-md-6 col-xl-4 col-12 pt-3 justify-content-around d-flex">
            <ProductBox product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
