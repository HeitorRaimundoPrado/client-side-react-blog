import '../style/components/Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <ul className="ul__footer">
        <h2>Get In Touch</h2>
        <p>heitorrdpp@gmail.com</p>
      </ul>
      <ul className="ul__footer">
        <h2>Connect</h2>
        <a href="https://github.com/HeitorRaimundoPrado">Heitor</a>
      </ul>
      <ul className="ul__footer">
        <h2><a href="/about">About Us</a></h2>
      </ul>
    </footer>
  )
}

export default Footer;

