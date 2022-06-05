import { NavLink } from 'react-router-dom';
import Logo from '../../assets/images/logo.png';

const Header: React.FC<{}> = () => {
  return (
    <header className="m-[auto] flex w-[80%] items-center justify-between pt-10">
      <img src={Logo} alt="" />
      <nav>
        <ul className="flex font-poppins text-lg text-white">
          <NavLink to="" className="nav-link">
            Home
          </NavLink>
          <NavLink to="" className="nav-link">
            Products
          </NavLink>
          <NavLink to="" className="nav-link">
            Contact
          </NavLink>
          <NavLink to="" className="nav-link">
            About Us
          </NavLink>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
