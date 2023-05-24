
import '../style/components/Navbar.css'

const Navbar = () => {
  return (
    <>
      <nav>
        <ul id="links">
          <li><a href="/about">About Us</a></li>
          <li><a href="/">Home</a></li>
          <li><a href="/signup">Sign Up</a></li>
          <li><a href="/blog">Blog</a></li>
        </ul>
      </nav>
    </>
  )
}
export default Navbar
