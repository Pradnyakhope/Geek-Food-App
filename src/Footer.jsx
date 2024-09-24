
const Footer = () => {
    return(
      <div>
        <footer className="footerContainer">
          <h3 className="footHead">logoipsum</h3>
          <p className="footPara">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint mollitia nulla necessitatibus, repellendus odio maiores magnam cum odit assumenda maxime expedita exercitationem fuga amet totam, optio enim minima minus laudantium.</p>
          <ul className="footInfo">
            <li className="footLink"><a href="/" >About</a></li>
            <li className="footLink"><a href="/">Career</a></li>
            <li className="footLink"><a href="/">History</a></li>
            <li className="footLink"><a href="/" >Services</a></li>
            <li className="footLink"><a href="/" >Projects</a></li>
            <li className="footLink"><a href="/" >Blog</a></li>
          </ul>
          <div className="social_Media">
            <a href="/" className="social_media_icon"><i className="fa-brands fa-facebook"></i></a>
            <a href="/" className="social_media_icon"><i className="fa-brands fa-twitter"></i></a>
            <a href="/" className="social_media_icon"><i className="fa-brands fa-square-instagram"></i></a>
            <a href="/" className="social_media_icon"><i className="fa-brands fa-linkedin"></i></a>
          </div>
        </footer>
      </div>  
    );
};

export default Footer;