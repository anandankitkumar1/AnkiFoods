import React from "react";

const Footer = () => {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <div className="footer  footer-dark bg-success position-fixed" style={{ position: "fixed",  width: "100%", bottom: "0", textAlign:"center" }}>
      Copyright © {year} Ankit Kumar. All Rights reserved.
      
    </div>
    
  );
};

export default Footer;
