import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "./Form.css";

function Form() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const created_by = sessionStorage.getItem('username');

  const onSubmit = async (formData) => {
    const requestData = {
      ...formData,
      created_by: created_by // Adding created_by to the formData
    };

    try {
      const response = await axios.post("https://s55-least-chosen-courses.onrender.com/add", requestData);
      sessionStorage.setItem("registrationSuccess", "true");
      navigate("/");
      console.log(response.data); // Log response data for debugging
    } catch (error) {
      console.error("Error:", error.response); // Log detailed error information
      if (error.response.status === 400) {
        // Handle specific error, e.g., display error message to the user
      }
    }
  };

  return (
    <div className="body-img">
      <div className="form-container">
        <div className="heading">
          <h2>ADD A COURSE</h2>
        </div>
      
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <label>Name:</label>
          <input
            type="text"
            {...register("name", { required: true })}
          />
          {errors.name && <p className="error">Name is required</p>}

          <label>Duration:</label>
          <input
            type="text"
            {...register("duration", { required: true })}
          />
          {errors.duration && <p className="error">required</p>}

          <label>Ratings:</label>
          <input
            type="text"
            {...register("ratings", { required: true, min: 1, max: 10 })}
          />
          {errors.ratings && <p className="error">Ratings must be between 1 and 10</p>}

          <label>Image URL:</label>
          <input
            type="text"
            {...register("imageLink", { required: true, pattern: /^https?:\/\/.+/ })}
          />
          {errors.imageLink && <p className="error">Valid url starts with "http://" or "https://"</p>}

          <button type="submit" className="button">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Form;
