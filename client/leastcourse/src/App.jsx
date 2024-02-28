import { useState } from 'react'
import './Home.css'

function App() {
  

  return (
    <>
      <div className='nav'>
        <div className="name">
            <h1>StudyDotCom</h1>
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
      <h2>Least Chosen University Courses</h2>
        <p className='intro'>A website that shows the List of courses that are hardly pursued in universities and colleges. Less number of graduates and Pass-outs in a particular course and which course has low market demands are listed on this website.</p>
    </div>

    </>
  )
}
       
 

export default App
