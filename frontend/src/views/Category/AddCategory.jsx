import React, { useState } from 'react';
import axios from 'axios';
import swal from 'sweetalert';

const AddCategory = () => {
  const [categoryName, setCategoryName] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const addCategory = () => {
    const newCategory = {
      categoryName,
      description,
      imageUrl,
    };

    const baseURL = 'https://limitless-lake-55070.herokuapp.com';

    axios({
      method: 'post',
      url: `${baseURL}/category/create`,
      data: JSON.stringify(newCategory),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(() => {
        swal({
          text: 'Category added successfully',
          icon: 'success',
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 text-center">
          <h3 className="pt-3">Add Category</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-3"></div>
        <div className="col-6">
          <form>
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                className="form-control"
                value={categoryName}
                onChange={(e) => setCategoryName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Description</label>
              <textarea
                type="text"
                className="form-control"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Image</label>
              <input
                type="text"
                className="form-control"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
              />
            </div>
            <button type="button" className="btn btn-primary" onClick={addCategory}>
              Submit
            </button>
          </form>
        </div>
        <div className="col-3"></div>
      </div>
    </div>
  );
};

export default AddCategory;
