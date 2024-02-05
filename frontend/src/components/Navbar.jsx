import React from 'react';
import { Link } from 'react-router-dom';

const AppNavbar = ({ cartCount, resetCartCount }) => {
  const token = localStorage.getItem('token');

  const signout = () => {
    localStorage.removeItem('token');
    resetCartCount();
    alert('Logged you out. Visit again');
    // Assuming this.props.history.push is available when using React Router for navigation
    this.props.history.push('/Home');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/Home">
        <img id="logo" src="../assets/icon.png" alt="Logo" />
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <form className="form-inline ml-auto mr-auto">
          <div className="input-group">
            <input
              size="100"
              type="text"
              className="form-control"
              placeholder="Search Items"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
            <div className="input-group-prepend">
              <span className="input-group-text" id="search-button-navbar">
                {/* SVG icon */}
              </span>
            </div>
          </div>
        </form>
        <ul className="navbar-nav ml-auto">
          {/* Dropdown for browse */}
          {/* Dropdown for account */}
          <li className="nav-item">
            <div id="cart" style={{ position: 'relative' }}>
              <span id="nav-cart-count">{cartCount}</span>
              <Link className="text-light" to="/Cart">
                <i className="fa fa-shopping-cart" style={{ fontSize: '36px' }}></i>
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default AppNavbar;
