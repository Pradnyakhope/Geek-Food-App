
const Header = () => {
    return(
    <header className="navContainer">
        <div className="div1 flex">
          <a href="/" className="">
            <img src="https://flowbite.com/docs/images/logo.svg" alt="Flowbite logo" />
            <span className="logo-text">GeekFoods</span>
          </a>
        </div>
        <div className="div2 flex">
          <ul className="menuList">
            <li className="menu active">Home</li>
            <li>Quote</li>
            <li>Restaurents</li>
            <li>Foods</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="div3 flex">
          <button className="btn">Get started</button>
        </div> 
      </header>
    )
};

export default Header;