import { BrowserRouter, Routes, Route}
    from 'react-router-dom';

import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Signup from './pages/Signup.jsx'
import Blog from './pages/Blog.jsx'
import Navbar from './components/Navbar.jsx'
import './style/pages/all.css'


function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
        <div id="page">
          <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route exact path='/about' element={<About/>}/>
            <Route exact path='/signup' element={<Signup/>}/>
            <Route exact path='/blog' element={<Blog/>}/>
          </Routes>
        </div>
    </BrowserRouter>
    </>
  )
}

export default App
