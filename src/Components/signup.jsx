import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phoneNumber: "",
    field: "",
    location: "",
    profilePicture: "",
    description: "",
  });
  const error = "";
  const navigate = useNavigate();

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
    console.log("====>", data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "localhost:3000/doctor/signup";
      const { data: res } = await axios.post(url, data);
      navigate("/");
      console.log(res.message);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="signupContainer">
      <div className="signupFormContainer">
        <div className="styling">
          <h1>Welcome Back</h1>
          <Link to="/login">
            <button type="button" className="whiteStyle">
              Sing in
            </button>
          </Link>
        </div>
        <div className="rightStyle">
          <form className="styler form container" onSubmit={handleSubmit}>
            <h1>Create Account</h1>
            <input
              type="text"
              placeholder="First Name"
              name="firstName"
              onChange={handleChange}
              value={data.firstName}
              required
              className="styleinput"
            />
            <input
              type="text"
              placeholder="Last Name"
              name="lastName"
              onChange={handleChange}
              value={data.lastName}
              required
              className="stylesinput"
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
              value={data.email}
              required
              className="styleInput"
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
              value={data.password}
              required
              className="stylesInput"
            />
            <input
              type="phoneNumber"
              placeholder="phoneNumber"
              name="phoneNumber"
              onChange={handleChange}
              value={data.phoneNumber}
              required
              className="stylesInput"
            />
            <input
              type="field"
              placeholder="field"
              name="field"
              onChange={handleChange}
              value={data.field}
              required
              className="stylesInput"
            />
            <input
              type="location"
              placeholder="location"
              name="location"
              onChange={handleChange}
              value={data.location}
              required
              className="stylesInput"
            />
            <input
              type="profilePicture"
              placeholder="ProfilePicture"
              name="profilePicture"
              onChange={handleChange}
              value={data.profilePicture}
              required
              className="stylesInput"
            />
            <input
              type="description"
              placeholder="description"
              name="description"
              onChange={handleChange}
              value={data.description}
              required
              className="stylesInput"
            />
            {error && <div className="errorstyleMessage">{error}</div>}
            <button type="submit" className="styles green">
              Sing Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
