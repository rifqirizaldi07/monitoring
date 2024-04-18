import React from 'react'
import './style.css'

const Layout = ({ children }) => {
  return (
    <div className="main-layout">
      {children}
    </div>
  );
};

export default Layout;