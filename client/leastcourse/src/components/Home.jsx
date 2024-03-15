import React, { useState, useEffect } from "react";
import "./Home.css";
import cover from "../assets/school.png";
import logo from "../assets/classmates.png";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import edit from "../assets/edit.png";
import deleteIcon from "../assets/bin.png";

function Home() {
  const [courses, setCourses] = useState([]);
  const [showSignupSuccessMessage, setShowSignupSuccessMessage] = useState(false);
  const [showLoginSuccessMessage, setShowLoginSuccessMessage] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [searchText, setSearchText] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://s55-least-chosen-courses.onrender.com/course");
        setCourses(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const signupSuccess = sessionStorage.getItem('signupSuccess');
    if (signupSuccess) {
      setShowSignupSuccessMessage(true);
      setTimeout(() => {
        setShowSignupSuccessMessage(false);
        sessionStorage.removeItem('signupSuccess');
      }, 3000);
    }

    const loginSuccess = sessionStorage.getItem('loginSuccess');
    if (loginSuccess) {
      setShowLoginSuccessMessage(true);
      setTimeout(() => {
        setShowLoginSuccessMessage(false);
        sessionStorage.removeItem('loginSuccess');
      }, 3000);
    }

    const loginStatus = sessionStorage.getItem("login");
    setIsLoggedIn(loginStatus === "true");
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://s55-least-chosen-courses.onrender.com/delete/${id}`);
      const response = await axios.get("https://s55-least-chosen-courses.onrender.com/course");
      setCourses(response.data);
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem("login");
    setIsLoggedIn(false);
    navigate("/"); 
  };

  const handleSearch = () => {
    setSearchText(searchInput);
  };

  const filteredCourses = courses.filter(course =>
    course.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <>
      <div className="nav">
        <div className="name">
          <img className="logo" src={logo} alt="" />
          <h1>StudyDotCom</h1>
        </div>

        {isLoggedIn ? (
          <div>
            <button className="signup" onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <>
            <div>
              <Link to="/signup"><button className="signup">Sign Up</button></Link>
            </div>
            <div>
              <Link to="/login"><button className="login">Login</button></Link>
            </div>
          </>
        )}

        <div>
          <Link to="/insert" className="btn-course">
            Add course
          </Link>
        </div>

        <div className="search-btn">
          <input
            type="text"
            className="search"
            placeholder="Search Courses Name"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <button className="s-btn" onClick={handleSearch}>Search</button>
        </div>
      </div>

      <div id="header-image-menu">
        <h2 id="image-text"></h2>
      </div>

      <div className="des">
        <img className="img" src={cover} alt="Cover" />
        <h2>Least Chosen University Courses</h2>
        <p className="intro">
          A website that shows the List of courses that are hardly pursued in
          universities and colleges. Less number of graduates and Pass-outs in a
          particular course and which course has low market demands are listed
          on this website.
        </p>
      </div>

      <div className="cards">
        <div className="content">
          {filteredCourses.map((course, index) => (
            <div
              className={`card custom-card card-${index + 1}`}
              key={course._id}
            >
              <div className="images">
                <img src={course.imageLink} alt={course.name} />
              </div>

              <div className="info">
                <div className="fl">
                  <h2>{course.name}</h2>
                </div>

                <div className="sub-heading">
                  <p>Duration: {course.duration}</p>
                  <p>Rating: {course.ratings}</p>
                </div>
                <div className="actions">
                  {isLoggedIn && (
                    <>
                      <div>
                        <Link to={`/update/${course._id}`}>
                          <button className="update">
                            <img src={edit} alt="edit logo" height={20} />
                          </button>
                        </Link>
                      </div>
                      <div>
                        <button
                          className="delete"
                          onClick={() => handleDelete(course._id)}
                        >
                          <img src={deleteIcon} alt="delete Icon" height={20} />
                        </button>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
