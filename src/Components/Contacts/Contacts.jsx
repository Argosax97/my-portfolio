import React from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import "./Contacts.scss";
import emailjs from "@emailjs/browser";

const schema = yup.object().shape({
  username: yup.string().min(2).required(),
  email: yup
    .string()
    .email()
    .matches(/^(?!.*@[^,]*,)/)
    .required(),
  message: yup.string().min(10).required(),
});

const Contacts = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    emailjs
      .send("service_tme6oqh", "template_8vvsuti", data, "n8LApHZPaKmWEShHo")
      .then((result) => console.log("results", result));
  };

  return (
    <section className="contact-section">
      <div className="contact-title">
        <h1>Reach out! Let's start something together.</h1>
      </div>
      <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
        <div className={"inputContainer"}>
          <label>NAME</label>
          <input
            type="text"
            placeholder="Enter your name"
            {...register("username")}
          />
          <span>{errors.username?.message}</span>
        </div>
        <div className={"inputContainer"}>
          <label>EMAIL ADDRESS</label>
          <input
            type="text"
            placeholder="Enter your email address"
            {...register("email")}
          />
          <span>{errors.email?.message}</span>
        </div>
        <div className={"inputContainer"}>
          <label>MESSAGE</label>
          <textarea placeholder="Write something" {...register("message")} />
          <span>{errors.message?.message}</span>
        </div>

        <div className="submit-btn">
          <button type="submit" onClick={handleSubmit(onSubmit)}>
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};

export default Contacts;