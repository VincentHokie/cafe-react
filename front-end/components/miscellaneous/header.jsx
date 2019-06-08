import React from 'react';
// import '../../static/styles/components/header.css';

const Header = () => (
  <div className="column is-12" style={{ padding: '0', paddingBottom: '0.75rem' }}>
    <nav
      className="navbar is-transparent"
      style={{
        borderBottom: '2px solid #eee',
        padding: '20px',
        backgroundColor: '#fff',
        fontWeight: 'bold',
      }}
    >
      CAFE REACT
    </nav>
  </div>
);

export default Header;
