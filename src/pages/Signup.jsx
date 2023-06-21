import '../style/pages/signup.css'

const Signup = () => {
  return (
    <div className="signup-page">
      <h2>Sign Up</h2>
      <form>
        <div className='container username-container'>
          <label htmlFor="username">Username</label>
          <input type="text" name='username'/>
        </div>
        <div className='container password-container'>
          <label htmlFor="password">Password</label>
          <input type="password" name='password'/>
        </div>
        <input type="submit" value="Sign Up"/>
      </form>
    </div>
  )
}

export default Signup;
