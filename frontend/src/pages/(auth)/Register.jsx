import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useState } from "react";

const Register = () => {
    const [showSuccess, setShowSuccess] = useState("");

  const validationSchema = Yup.object().shape({
    Username: Yup.string().required("Username is required"),
    userFirstName: Yup.string().required("First name is required"),
    userLastName: Yup.string().required("Last name is required"),
    Email: Yup.string().email("Invalid email").required("Email is required"),
    Password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });


  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  // Submit handler
  const createUser = async (data) => {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/register/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      console.log("Success:", result);
      setShowSuccess("Registration successful!");

      reset();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="box">
      <h1>Register</h1>
      {
        showSuccess
      }
      <form onSubmit={handleSubmit(createUser)} className="form-box">
        <input
          type="text"
          placeholder="Username"
          {...register("Username")}
        />
        <p className="error">{errors.Username?.message}</p>

        <input
          type="text"
          placeholder="First name"
          {...register("userFirstName")}
        />
        <p className="error">{errors.userFirstName?.message}</p>

        <input
          type="text"
          placeholder="Last name"
          {...register("userLastName")}
        />
        <p className="error">{errors.userLastName?.message}</p>

        <input
          type="email"
          placeholder="Email"
          {...register("Email")}
        />
        <p className="error">{errors.Email?.message}</p>

        <input
          type="password"
          placeholder="Password"
          {...register("Password")}
        />
        <p className="error">{errors.Password?.message}</p>

        <button type="submit">Register</button>
      </form>

      <p>
        Already have an account? <Link to="/login">Login here</Link>
      </p>
    </div>
  );
};

export default Register;
