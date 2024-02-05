import React, { useState } from 'react';
import axios from 'axios';
import swal from 'sweetalert';

const SignInPage = ({ baseURL, fetchData, history }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${baseURL}user/signIn`, { email, password });
      localStorage.setItem('token', res.data.token);
      swal({
        text: 'Login successful',
        icon: 'success',
      });
      fetchData();
      history.push('/home');
    } catch (err) {
      console.log('err', err);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 justify-content-center d-flex flex-row pt-5">
          <div id="signin" className="flext-item border">
            <h2 className="pt-4">Sign-In</h2>
            <form onSubmit={signin} className="form-group pt-4 pl-4 pr-4">
              <div className="form-group">
                <label>Email </label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" />
              </div>
              <div className="form-group">
                <label>Password </label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="form-control" />
              </div>
              <button type="submit" className="btn btn-primary mt-2 py-0">Continue</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
