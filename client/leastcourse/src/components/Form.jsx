import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "./Form.css";


function Form() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (formData) => {
    axios.post("https://s55-least-chosen-courses.onrender.com/add", formData)
      .then(() => {
        sessionStorage.setItem("registrationSuccess", "true");
        navigate("/");
        console.log(formData)
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="form-container">
      {/* <div className="bg">
        <img src={bgIMG} alt="" className="bgIMG"/>
      </div> */}
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
  );
}

export default Form;