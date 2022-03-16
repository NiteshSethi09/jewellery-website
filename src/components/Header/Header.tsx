import Logo from '../../assets/images/logo.png';

const Header: React.FC<{}> = () => {
  return (
    <header className="m-[auto] flex w-[80%] items-center justify-between pt-10">
      <img src={Logo} alt="" />
      <nav>
        <ul className="flex font-poppins text-lg text-white">
          <li className="m-5 cursor-pointer uppercase transition-all duration-300 hover:text-black">
            Home
          </li>
          <li className="m-5 cursor-pointer uppercase transition-all duration-300 hover:text-black">
            Products
          </li>
          <li className="m-5 cursor-pointer uppercase transition-all duration-300 hover:text-black">
            Contact
          </li>
          <li className="m-5 cursor-pointer uppercase transition-all duration-300 hover:text-black">
            About Us
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
