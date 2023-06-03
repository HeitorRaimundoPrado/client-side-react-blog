
import '../style/components/Navbar.css'

const Navbar = () => {
  return (
    <>
      <nav>
        <ul className="links">
          <li><a href="/">Home</a></li>
          <div className="container container__navbar-right">
            <li><a href="/about">About Us</a></li>
            <li><a href="/signup">Sign Up</a></li>
            <li><a href="/blog">Blog</a></li>
          </div>
        </ul>
      </nav>
    </>
  )
}
export default Navbar
