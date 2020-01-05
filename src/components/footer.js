import React from "react";

const footer = {
    background: '#e9ecef',
    fontSize: '15px',
    padding: '15px 0'
};

const Footer = () => {
  return (
    <div className="footer" style={footer}>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
  <p style={{marginBottom: 0}}>Rctz {new Date().getFullYear()}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
