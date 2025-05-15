import grayLogo from './gray-logo.png';
import './navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <img className="gray-logo" alt="Gray logo" src={grayLogo} />
      <div className="frame">
        <div className="text-wrapper">Home</div>
        <div className="text-wrapper">About</div>
        <div className="text-wrapper">Features</div>
      </div>
    </div>
  );
};

export default Navbar;
