import './navbar.scss';
import logo from '../../assets/logo.png';
import profile from '../../assets/profile.webp';
import { ArrowDropDown, Notifications, Search } from '@material-ui/icons';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="left">
          <img src={logo} alt="Netflix Logo" />
          <span>Homepage</span>
          <span>Series</span>
          <span>Movies</span>
          <span>New & Popular</span>
          <span>My List</span>
        </div>
        <div className="right">
          <Search className="icon" />
          <span>KID</span>
          <Notifications className="icon" />
          <img src={profile} alt="Profile" />
          <ArrowDropDown className="icon" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
