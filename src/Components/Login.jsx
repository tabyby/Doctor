import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [data, setData] = useState({ email: "", password: "" });
  const [user, setUser] = useState("");

  const error = "";

  const navigate = useNavigate();
  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
    console.log(data);
  };
  useEffect(() => {
    localStorage.setItem("hello", user);
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:3000/doctor/login";
      await axios.post(url, data).then((response) => {
        if (
          response.data === "Invalid Password" ||
          response.data === "Invalid Email or Password"
        ) {
          alert("Invalid Password");
          navigate.push("/login");
        } else if (response.data === "logged in successfully")
          setUser(data.email);
        navigate("/profil");
        // console.log('user',user)
      });
    } catch (error) {
      console.log(error);
    }
  };    
  return (
    <div className="styleslogincontainer">
      <div className="styleslogincontainer">
        <div className="styleslogincontainer">
          <form className="styleslogincontainer" onSubmit={handleSubmit}>
            <h1>Login to Your Account</h1>
            <div> {console.log("user", user)}</div>
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
              value={data.email}
              required
              className="styleslogincontainer"
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
              value={data.password}
              required
              className="styleslogincontainer"
            />
            {error && <div className="styleslogincontainer">{error}</div>}

            <button onclick={()=>{handleSubmit()}} type="submit" className="styleslogincontainer">
              Sing In
            </button>
          </form>
        </div>
        <div className="styleslogincontainer">
          <h1>New Here ?</h1>
          <Link to="/signup">
            <button type="button" className="styleslogincontainer">
              Sing Up
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
