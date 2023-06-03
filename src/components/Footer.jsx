import '../style/components/Footer.css'
import githubSVG from '../assets/square-github.svg'

const Footer = () => {
  return (
    <footer className="footer">
      <ul className="ul__footer">
        <h2>Get In Touch</h2>
        <p>heitorrdpp@gmail.com</p>
      </ul>
      <ul className="ul__footer">
        <h2>Connect</h2>
        <a href="https://github.com/HeitorRaimundoPrado">Heitor <img src={githubSVG} alt="github" height='20px' width='20px' className="img img__svg"/></a>
      </ul>
      <ul className="ul__footer">
        <h2><a href="/about">About Us</a></h2>
      </ul>
    </footer>
  )
}

export default Footer;

