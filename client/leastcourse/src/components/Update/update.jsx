import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';


function Update() {
    const { register, handleSubmit, setValue, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        axios.get(`https://s55-least-chosen-courses.onrender.com/course/`+ id)
            .then(res => {
                const courseData = res.data;
                console.log(res.data)
                setValue('name', courseData.name);
                setValue('duration', courseData.duration);
                setValue('ratings', courseData.ratings);
                setValue('imageLink', courseData.imageLink);
            })
            .catch(error => console.error(error));
    }, [id, setValue]);

    const onSubmit = async formData => {
        axios.put(`https://s55-least-chosen-courses.onrender.com/updateCourse/` +id,formData)
            .then(() => {
                navigate("/"); 
                console.log(formData)
            })
            .catch(error => {
                console.error(error);
            });
    };

    return (
        <div className="form-container">

            <h2>Edit Course</h2>
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
                {errors.age && <p className="error">Age is required</p>}

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
                    Update Course
                </button>
            </form>
        </div>
    );
}

export default Update;