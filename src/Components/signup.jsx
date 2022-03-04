import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./login.css";
// 644746242624-2ucis9hcf3c6lq19v97lncjd3ajtd18r.apps.googleusercontent.com
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
      const url = "http://localhost:3000/doctor/signup";
      const { data: res } = await axios.post(url, data);
      navigate("/");
      console.log(res.message, "hhhhh");
    } catch (err) {
      console.log(err, "no");
    }
  };

  return (
    <div>
      {/* <div className="signupContainer">
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
      </div> */}
      <div>
        <div className="maincontainer">
          <div class="container-fluid">
            <div class="row no-gutter">
              <div class="col-md-6 d-none d-md-flex bg-image"></div>

              <div class="col-md-6 bg-light">
                <div class="login d-flex align-items-center py-5">
                  <div class="container">
                    <div class="row">
                      <div class="col-lg-10 col-xl-7 mx-auto">
                        <h3 class="display-4">Join our community!</h3>
                        <p class="text-muted mb-4">
                          Please fill this form with the exact informations.
                        </p>
                        <form onSubmit={handleSubmit}>
                          <div class="mb-3">
                            <input
                              id="inputEmail"
                              type="text"
                              placeholder="First name"
                              required=""
                              autofocus=""
                              class="form-control rounded-pill border-0 shadow-sm px-4"
                              type="text"
                              placeholder="First Name"
                              name="firstName"
                              onChange={handleChange}
                              value={data.firstName}
                              required
                            />
                          </div>
                          <div class="mb-3">
                            <input
                              id="inputEmail"
                              type="text"
                              placeholder="Last name"
                              required=""
                              autofocus=""
                              class="form-control rounded-pill border-0 shadow-sm px-4"
                              type="text"
                              placeholder="Last Name"
                              name="lastName"
                              onChange={handleChange}
                              value={data.lastName}
                              required
                            />
                          </div>
                          <div class="mb-3">
                            <input
                              id="inputEmail"
                              type="email"
                              placeholder="Email address"
                              required=""
                              autofocus=""
                              class="form-control rounded-pill border-0 shadow-sm px-4"
                              type="email"
                              placeholder="Email"
                              name="email"
                              onChange={handleChange}
                              value={data.email}
                              required
                            />
                          </div>
                          <div class="mb-3">
                            <input
                              id="inputPassword"
                              type="password"
                              placeholder="Password"
                              required=""
                              class="form-control rounded-pill border-0 shadow-sm px-4 text-primary"
                              type="password"
                              placeholder="Password"
                              name="password"
                              onChange={handleChange}
                              value={data.password}
                              required
                            />
                          </div>
                          <div class="mb-3">
                            <input
                              id="inputEmail"
                              type="text"
                              placeholder="Phone number"
                              required=""
                              autofocus=""
                              class="form-control rounded-pill border-0 shadow-sm px-4"
                              type="phoneNumber"
                              placeholder="phoneNumber"
                              name="phoneNumber"
                              onChange={handleChange}
                              value={data.phoneNumber}
                              required
                            />
                          </div>
                          <div class="mb-3">
                            <input
                              id="inputEmail"
                              type="text"
                              placeholder="Field"
                              required=""
                              autofocus=""
                              class="form-control rounded-pill border-0 shadow-sm px-4"
                              type="phoneNumber"
                              type="field"
                              placeholder="field"
                              name="field"
                              onChange={handleChange}
                              value={data.field}
                              required
                            />
                          </div>
                          <div class="mb-3">
                            <input
                              id="inputEmail"
                              type="text"
                              placeholder="Location"
                              required=""
                              autofocus=""
                              class="form-control rounded-pill border-0 shadow-sm px-4"
                              type="phoneNumber"
                              type="location"
                              placeholder="location"
                              name="location"
                              onChange={handleChange}
                              value={data.location}
                              required
                            />
                          </div>
                          <div class="mb-3">
                            <input
                              id="inputEmail"
                              type="text"
                              placeholder="Profile picture"
                              required=""
                              autofocus=""
                              class="form-control rounded-pill border-0 shadow-sm px-4"
                              type="phoneNumber"
                              type="profilePicture"
                              placeholder="ProfilePicture"
                              name="profilePicture"
                              onChange={handleChange}
                              value={data.profilePicture}
                              required
                            />
                          </div>
                          <div class="mb-3">
                            <input
                              id="inputEmail"
                              type="text"
                              placeholder="Description"
                              required=""
                              autofocus=""
                              class="form-control rounded-pill border-0 shadow-sm px-4"
                              type="phoneNumber"
                              type="description"
                              placeholder="description"
                              name="description"
                              onChange={handleChange}
                              value={data.description}
                              required
                            />
                          </div>
                          <div class="form-check">
                            <input
                              id="customCheck1"
                              type="checkbox"
                              checked
                              class="form-check-input"
                            />
                            <label for="customCheck1" class="form-check-label">
                              Remember password
                            </label>
                          </div>
                          <Link to="/Calendar">
                            {/* <Link to="/login"> */}
                            <div class="d-grid gap-2 mt-2">
                              <button
                                type="submit"
                                class="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm"
                                onClick={handleSubmit}
                              >
                                Sign up
                              </button>
                              <button>google signup</button>
                            </div>
                          </Link>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
