import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav
      style={{
        display: 'flex',
        justifyContent: 'center',  // or 'space-around' / 'space-between'
        padding: '10px',
        backgroundColor: '#333',
      }}
    >
      <Link to="/" style={{ color: 'white', marginRight: '15px', textDecoration: 'none' }}>
        Home
      </Link>
      <Link to="/about" style={{ color: 'white', marginRight: '15px', textDecoration: 'none' }}>
        About
      </Link>
      <Link to="/services" style={{ color: 'white', marginRight: '15px', textDecoration: 'none' }}>
        Services
      </Link>
      <Link to="/contact" style={{ color: 'white', textDecoration: 'none' }}>
        Contact
      </Link>
    </nav>
  );
}

export default Navbar;
