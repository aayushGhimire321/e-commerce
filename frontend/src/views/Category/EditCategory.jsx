import React, { useState, useEffect } from 'react';
import axios from 'axios';
import swal from 'sweetalert';

const EditCategory = ({ baseURL, categories, fetchData, history, match }) => {
  const [category, setCategory] = useState(null);
  const [id, setId] = useState(null);

  useEffect(() => {
    setId(match.params.id);
    setCategory(categories.find(category => category.id == match.params.id));
  }, [categories, match.params.id]);

  const editCategory = async () => {
    try {
      delete category.products;
      await axios.post(`${baseURL}/category/update/${id}`, category);
      fetchData();
      history.push('/Category');
      swal({
        text: 'Category has been updated successfully',
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
          <h4 className="pt-3">Edit Category</h4>
        </div>
      </div>
      <div className="row">
        <div className="col-3"></div>
        <div className="col-6">
          <form>
            <div className="form-group">
              <label>Category Name</label>
              <input
                type="text"
                className="form-control"
                value={category ? category.categoryName : ''}
                onChange={(e) => setCategory({ ...category, categoryName: e.target.value })}
                required
              />
            </div>
            <div className="form-group">
              <label>Description</label>
              <input
                type="text"
                className="form-control"
                value={category ? category.description : ''}
                onChange={(e) => setCategory({ ...category, description: e.target.value })}
                required
              />
            </div>
            <div className="form-group">
              <label>Image URL</label>
              <input
                type="text"
                className="form-control"
                value={category ? category.imageUrl : ''}
                onChange={(e) => setCategory({ ...category, imageUrl: e.target.value })}
                required
              />
            </div>
            <button type="button" className="btn btn-primary" onClick={editCategory}>
              Submit
            </button>
          </form>
        </div>
        <div className="col-3"></div>
      </div>
    </div>
  );
};

export default EditCategory;
