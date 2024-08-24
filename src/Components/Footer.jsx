function Footer() {
  return (
    <footer className="footer">
      <div className="footerElement">
        <h4>About us</h4>
        <p>
          Makicks has been providing unique footwear to express your style since
          2009. Our mission is to curate an unforgettable experience for the
          trendsetters, fitness enthusiasts, or anyone who appreciates the
          classNameic footwear that complements your lifestyle.
        </p>
      </div>

      <div className="footerElement">
        <h4>Operating Hours</h4>
        <p>Monday - Saturday</p>
        <p>9:00 am - 8:00pm</p>
      </div>

      <div className="footerElement">
        <h4>Contact Us</h4>
        <p>0704232370 | 0745914437</p>
      </div>
      <div className="footerElement">
        <h4>Follow us</h4>
        <div className="socialIcons">
          <i className="fa-brands fa-facebook fa-2xl pointer"></i>
          <i className="fa-brands fa-x-twitter fa-2xl pointer"></i>
          <i className="fa-brands fa-square-instagram fa-2xl pointer"></i>
          <i className="fa-brands fa-whatsapp fa-2xl pointer"></i>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
