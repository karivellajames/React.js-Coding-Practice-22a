// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <div className="header-container">
    <div className="header-logo-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
        className="header-logo"
      />
      <h1 className="header-logo-text">Wave</h1>
    </div>
    <ul className="header-options">
      <li>
        <Link to="/" className="options">
          Home
        </Link>
      </li>
      <li>
        <Link to="/about" className="options">
          About
        </Link>
      </li>
      <li>
        <Link to="/contact" className="options">
          Contact
        </Link>
      </li>
    </ul>
  </div>
)

export default Header
