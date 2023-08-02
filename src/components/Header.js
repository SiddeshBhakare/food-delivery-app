export const Title = () => {
  <img
    className="logo"
    alt="logo"
    src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"
  />;
};

const Header = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
