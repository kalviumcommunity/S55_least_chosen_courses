import { useState,useEffect } from 'react'
import './Home.css'
import cover from '../assets/school.png'
import logo from '../assets/classmates.png'
import axios from 'axios';
import { Link } from "react-router-dom";

function App() {
  const [state, setState] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://s55-least-chosen-courses.onrender.com/course');
        setState(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
  

  return (
    <>
      <div className='nav'>
        <div className="name">

            <img className='logo' src={logo} alt="" /><h1>StudyDotCom</h1>
        </div>
        

        <div>
          <Link to="/insert">Add course</Link>
        </div>
        <div className='search-btn'>
            <input 
              type='text' 
              className='search' 
              placeholder='Search Courses Name' 
            />
            <button className='s-btn'>Search</button>
        </div>
    </div>

      <div id="header-image-menu">
       
        <h2 id="image-text">
            
        </h2>
    </div>

    <div className="des">
    <img className='img' src={cover} />
    <h2>Least Chosen University Courses</h2>
        <p className='intro'>A website that shows the List of courses that are hardly pursued in universities and colleges. Less number of graduates and Pass-outs in a particular course and which course has low market demands are listed on this website.</p>
    </div>

    <div className="cards">

    

    

    <div className='content'>
      {state.map((course, index) => (
        <div className={`card custom-card card-${index + 1}`} key={course._id}>
          <div className='images'>
            <img src={course.imageLink} alt={course.name} />
          </div>

          <div className='info'>
            <div className='flav'>
              <h2>{course.name}</h2>
            </div>

            <div className='taste-color'>
              <p>Duration: {course.duration}</p>
              <p>Rating: {course.ratings}</p>
            </div>
          </div>
        </div>
      ))}
    </div>

    </div>



    

    


    </>
  )
}
       
 

export default App
