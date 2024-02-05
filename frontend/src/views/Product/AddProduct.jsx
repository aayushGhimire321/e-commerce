import React, { useState } from 'react';
import axios from 'axios';
import swal from 'sweetalert';

const AddProduct = ({ baseURL, categories, history }) => {
  const [categoryId, setCategoryId] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [imageURL, setImageURL] = useState('');
  const [price, setPrice] = useState('');

  const addProduct = async () => {
    try {
      const newProduct = {
        categoryId,
        description,
        name,
        imageURL,
        price
      };

      await axios.post(`${baseURL}/product/add`, newProduct);
      history.push('/AdminProduct');
      swal({
        text: 'Product added',
        icon: 'success'
      });
    } catch (err) {
      console.log('err', err);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 text-center">
          <h4>Add New Product</h4>
        </div>
      </div>
      <div className="row">
        <div className="col-3"></div>
        <div className="col-6">
          <form>
            <div className="form-group">
              <label>Category</label>
              <select className="form-control" value={categoryId} onChange={(e) => setCategoryId(e.target.value)} required>
                {categories.map(category => (
                  <option key={category.id} value={category.id}>{category.categoryName}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label>Name</label>
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-control" />
            </div>
            <div className="form-group">
              <label>Description</label>
              <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} className="form-control" />
            </div>
            <div className="form-group">
              <label>Image Url</label>
              <input type="text" value={imageURL} onChange={(e) => setImageURL(e.target.value)} className="form-control" />
            </div>
            <div className="form-group">
              <label>Price</label>
              <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} className="form-control" />
            </div>
            <button type="button" className="btn btn-primary" onClick={addProduct}>Add Product</button>
          </form>
        </div>
        <div className="col-3"></div>
      </div>
    </div>
  );
};

export default AddProduct;
