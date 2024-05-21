function Card(){

    return(
        <>
          <div className="nav">
        <div className="name">
          <img className="logo" src={logo} alt="" />
          <h1>StudyDotCom</h1>
        </div>
        <div className="search-btn">
          <input
            type="text"
            className="search"
            placeholder="Search Courses Name"
          />
          <button className="s-btn">Search</button>
        </div>
      </div>

      <div id="header-image-menu">
        <h2 id="image-text"></h2>
      </div>

      <div className="des">
        <img className="img" src={cover} />
        <h2>Least Chosen University Courses</h2>
        <p className="intro">
          A website that shows the List of courses that are hardly pursued in
          universities and colleges. Less number of graduates and Pass-outs in a
          particular course and which course has low market demands are listed
          on this website.
        </p>
      </div>

      <div className="cards">
        <div className="course-cards">
          <h2>Public Policy Course</h2>
          <img className="course1" src={course1} alt="" />

          <h4>Duration: 2 years</h4>

          <h5>Ratings: 8/10</h5>
        </div>
      </div>
        </>
    )
}

export default Card;