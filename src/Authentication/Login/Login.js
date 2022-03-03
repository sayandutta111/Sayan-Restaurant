import React from "react";
import axios from "axios";
import "./login.css";
import { useFormik } from "formik";
import { useNavigate, Link } from "react-router-dom";
import { Nav } from "react-bootstrap";

const ValidateForm = (formValue) => {
  const errors = {};
  const reg_exp = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2.4}$/;
  const validatePassword = RegExp(
    "^(?=.*[@!#$])(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,15}$"
  );

  if (!formValue.password) {
    errors.password = "please enter password";
  } else if (validatePassword.test(formValue.password)) {
    errors.password = "invalid password";
  }
  if (!formValue.email) {
    errors.username = "please enter email";
  } else if (reg_exp.test(formValue.email)) {
    errors.username = "invalid email";
  }
  console.log("Error:", errors);
  return errors;
};
function Login() {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate: ValidateForm,
    onSubmit: (values) => {
      console.log("recieved values:", values);
      axios
        .post("https://nodeprojectapi.herokuapp.com/login", values)
        .then((res) => {
          console.log("Axios Res: ", res.data);
          window.localStorage.setItem("Token", res.data.data.token);
          window.sessionStorage.setItem("Token", res.data.data.token);
          alert("You have successfully logged in");
          navigate("/book-table");
        })
        .catch((err) => {
          console.log("Error in Axios: ", err);
        });
    },
  });
  return (
    <div className="login-main">
      <br></br>
      <h1 className="user-heading">User Login</h1>
      <div className="log">
        <form className="login-form" onSubmit={formik.handleSubmit}>
          Email:{" "}
          <input
            type="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          <br></br>
          Password:{" "}
          <input
            type="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
          />
          <button type="submit" style={{ fontSize: "16px" }}>
            Login
          </button>
        </form>
      </div>
      <div>
        <p className="reg-tag">
          Don't have an account yet? Register
          <Nav.Link as={Link} to="/registration">
            Here.
          </Nav.Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
