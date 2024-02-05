import React from 'react';
import { Link } from 'react-router-dom';

const AdminPanel = () => {
  return (
    <div className="container py-4">
      <Link to="/admin/category">
        <button className="btn btn-primary btn-lg">Admin Category</button>
      </Link>
      <br />
      <Link to="/admin/product">
        <button className="btn btn-primary btn-lg">Admin Product</button>
      </Link>
    </div>
  );
};

export default AdminPanel;
