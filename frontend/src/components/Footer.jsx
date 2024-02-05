import React from 'react';

const AppFooter = () => {
  return (
    <footer style={{ marginTop: '100px', backgroundColor: '#232F3E', fontSize: '16px' }}>
      <div className="container pt-5">
        <div className="row">
          <div className="col-md-3 col-6">
            <ul style={{ listStyleType: 'none' }}>
              <li className="text-light font-weight-bold pb-2">Get to know us</li>
              <li><a className="footer-link font-weight-light" href="#">About us</a></li>
              <li><a className="footer-link font-weight-light" href="#">Android App</a></li>
              <li><a className="footer-link font-weight-light" href="#">Ios App</a></li>
            </ul>
          </div>
          {/* Repeat the structure for the other columns */}
        </div>
      </div>
    </footer>
  );
};

export default AppFooter;
