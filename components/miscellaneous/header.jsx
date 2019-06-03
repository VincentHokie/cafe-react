import React from 'react';
// import '../../static/styles/components/header.css';

const Header = () => (
  <div className="column is-12" style={{ padding: '0', paddingBottom: '0.75rem' }}>
    <nav
      className="navbar is-transparent"
      style={{
        borderBottom: '2px solid #eee',
      }}
    >
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          <img src="/static/images/docker_logo.png" alt="Docker Dashboard: quick, easy insight" style={{ height: '70px', padding: '10px 20px' }} />
        </a>
        <div className="navbar-burger burger" data-target="navbarExampleTransparentExample">
          <span />
          <span />
          <span />
        </div>
      </div>
    </nav>
  </div>
);

export default Header;
