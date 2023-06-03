import '../style/pages/home.css'

import personTyping from '../assets/typing.jpg'
import avenueImage from '../assets/avenue.jpg'

const Home = () => {
  return (
    <>
    <h1 className='h1 h1__home h1__home--centralized'>Welcome to our Blog!</h1>
        
    <img src={personTyping} alt="person typing" height='200px' width='300px' className='img img__typing'/>
    <p className='p p__home p__home--margin-right'> <pre style={{display: 'inline'}}>&#9;</pre>
        At our blog, we aim to provide you with valuable insights, informative articles, and captivating stories on a wide range of topics. Whether you're a seasoned enthusiast or a curious learner, our blog is the perfect destination to satisfy your hunger for knowledge.
        <br/>
        <pre style={{display: 'inline'}}>&#9;</pre> Explore our collection of thought-provoking blog posts written by experts in their respective fields. From technology and science to art and culture, we cover diverse subjects to cater to a broad audience.
        <br/>
        </p>
    <p className='p p__home p__home--no-margin'>
        <pre style={{display: 'inline'}}>&#9;</pre> Stay up-to-date with the latest trends, discoveries, and advancements by diving into our engaging content. Our team of passionate writers ensures that every article is well-researched, informative, and presented in an engaging manner.
        <br/>
        <pre style={{display: 'inline'}}>&#9;</pre> Feel free to browse through our extensive archive of blog posts, where you'll find a treasure trove of information. Uncover hidden gems and gain new perspectives as you embark on your reading journey.
        <br/>
        <pre style={{display: 'inline'}}>&#9;</pre> We encourage interaction and value your thoughts. Share your insights, feedback, and questions by leaving comments on our blog posts. We believe in fostering a community where knowledge is shared, and conversations flourish.
        <br/>
        <pre style={{display: 'inline'}}>&#9;</pre> Whether you're here for educational purposes, seeking inspiration, or simply looking to unwind with a good read, our blog is here to accompany you on your quest for knowledge and enlightenment.
        <br/>
        <pre style={{display: 'inline'}}>&#9;</pre> Start exploring our blog today and embark on a fascinating adventure of ideas, stories, and discoveries!
        <br/>
        <br/>
        <br/>
        Happy reading!
        <br/>
        <pre style={{display: 'inline'}}>&#9;</pre><pre style={{display: 'inline'}}>&#9;</pre>ClientSide Team
      </p>  
      <h1 className="h1 h1__home--centralized">Enjoy!!</h1>
      {/* <div className="container container_img"> */}
        {/* <img src={avenueImage} alt="avenue" height='200px' width='300px' className='img img__avenue'/> */}
      {/* </div> */}
    </>
  );
}

export default Home
