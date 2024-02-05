import React, { useState, useEffect } from 'react';
import axios from 'axios';
import swal from 'sweetalert';

const EditProduct = ({ baseURL, categories, products, history, match }) => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const productId = match.params.id;
    const foundProduct = products.find(product => product.id === productId);
    setProduct(foundProduct);
  }, [match.params.id, products]);

  const editProduct = async () => {
    try {
      await axios.post(`${baseURL}product/update/${product.id}`, product);
      history.push('/AdminProduct');
      swal({
        text: 'Product has been updated successfully',
        icon: 'success'
      });
    } catch (err) {
      console.log('err', err);
    }
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 text-center">
          <h4>Edit Product</h4>
        </div>
      </div>
      <div className="row">
        <div className="col-3"></div>
        <div className="col-6">
          <form>
            <div className="form-group">
              <label>Category</label>
              <select className="form-control" value={product.categoryId} onChange={(e) => setProduct({ ...product, categoryId: e.target.value })} required>
                {categories.map(category => (
                  <option key={category.id} value={category.id}>{category.categoryName}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label>Name</label>
              <input type="text" className="form-control" value={product.name} onChange={(e) => setProduct({ ...product, name: e.target.value })} required />
            </div>
            <div className="form-group">
              <label>Description</label>
              <input type="text" className="form-control" value={product.description} onChange={(e) => setProduct({ ...product, description: e.target.value })} required />
            </div>
            <div className="form-group">
              <label>Image URL</label>
              <input type="text" className="form-control" value={product.imageURL} onChange={(e) => setProduct({ ...product, imageURL: e.target.value })} required />
            </div>
            <div className="form-group">
              <label>Price</label>
              <input type="number" className="form-control" value={product.price} onChange={(e) => setProduct({ ...product, price: e.target.value })} required />
            </div>
            <button type="button" className="btn btn-primary" onClick={editProduct}>Submit</button>
          </form>
        </div>
        <div className="col-3"></div>
      </div>
    </div>
  );
};

export default EditProduct;
