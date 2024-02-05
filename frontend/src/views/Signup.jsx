import React, { useState } from 'react';
import axios from 'axios';
import swal from 'sweetalert';

function SignUpPage({ baseURL }) {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const signup = async (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      const user = {
        email,
        firstName,
        lastName,
        password,
      };

      try {
        await axios.post(`${baseURL}user/signup`, user);
        swal({
          text: 'User signup successful, please login',
          icon: 'success',
        });
        // Redirect or perform any other action after successful signup
      } catch (err) {
        console.log('err', err);
      }
    } else {
      swal({
        text: 'Passwords do not match',
        icon: 'error',
      });
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 text-center pt-3">
          {/* Display logo */}
        </div>
      </div>

      {/* Header */}

      <div className="row">
        <div className="col-12 justify-content-center d-flex pt-3">
          <div id="signup" className="flex-item border">
            <h2 className="pt-4 pl-4">Create Account</h2>
            <form onSubmit={signup} className="pt-4 pl-4 pr-4">
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-control"
                  required
                />
              </div>
              <div className="form-row">
                <div className="col">
                  <div className="form-group">
                    <label>First Name</label>
                    <input
                      type="text"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className="form-control"
                      required
                    />
                  </div>
                </div>
                <div className="col">
                  <div className="form-group">
                    <label>Last Name</label>
                    <input
                      type="text"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      className="form-control"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Password */}
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="form-control"
                  required
                />
              </div>

              {/* Confirm Password */}
              <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="form-control"
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary mt-2">Create Account</button>
            </form>
          </div>
        </div>
      </div>

      {/* Form */}
    </div>
  );
}

export default SignUpPage;
