import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { AddCard } from "../../schema/AddCard";
import axios from "axios";
import "./add.css";

const Add = () => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(AddCard),
  });

  const postData = async () => {
    // e.preventDefault();
    const values = getValues();
    console.log("clicked");
    await axios.post("http://localhost:8080/trading", {
      image: values.image,
      title: values.title,
      description: values.description,
    });
  };
  return (
    <section className="add-page">
      <div className="container">
        <div className="form-row">
          <form onSubmit={handleSubmit(postData)} action="">
            <input {...register("image")} type="text" placeholder="Image" />
            {errors.image ? (
              <p style={{ color: "red" }}>{errors?.image.message}</p>
            ) : (
              <></>
            )}

            <input {...register("title")} type="text" placeholder="Title" />
            {errors.title ? (
              <p style={{ color: "red" }}>{errors?.title.message}</p>
            ) : (
              <></>
            )}

            <input
              {...register("description")}
              type="text"
              placeholder="Description"
            />
            {errors.description ? (
              <p style={{ color: "red" }}>{errors?.description.message}</p>
            ) : (
              <></>
            )}

            <button type="submit" className="submit-btn">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Add;
