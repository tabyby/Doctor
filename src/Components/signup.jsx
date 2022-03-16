import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./login.css";
// import PersonalProfile from "./PersonalProfile";
// 644746242624-2ucis9hcf3c6lq19v97lncjd3ajtd18r.apps.googleusercontent.com
var latitude = null;
var longtitude = null;
const Signup = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phoneNumber: "",
    field: "",
    profilePicture: "",
    university: "",
    yearsofexperience: "",
    cnam: "",
    latitude: 0,
    longtitude: 0,
    categoryId:"0",
  });
  
  useEffect(() => {
    const getLocation = () => {
      if (!navigator.geolocation) {
        console.log("Geolocation is not supported by your browser");
      } else {
        console.log("Locating...");
        navigator.geolocation.getCurrentPosition(
          (position) => {
            latitude = position.coords.latitude;
            longtitude = position.coords.longitude;
            console.log(null);
            console.log(position.coords.latitude);
            console.log(position.coords.longitude);
          },
          () => {
            console.log("Unable to retrieve your location");
          }
        );
      }
    };

    getLocation();
  }, []);
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
      const {
        data: res,
        latitude: latitude,
        longitude: longitude,
      } = await axios.post(url, data);
      navigate("/");
      console.log(res.message, "hhhhh");
    } catch (err) {
      console.log(err.response.data, "no");
    }
  };

  return (
    <div>
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
                        <h3 class="display-4">Join TABYBY community!</h3>
                        <p class="text-muted mb-4">
                          Please fill this form with the exact informations.
                        </p>
                        <form onSubmit={handleSubmit}>
                          <div class="mb-3">
                            <input
                              id="inputEmail"
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
                              autofocus=""
                              class="form-control rounded-pill border-0 shadow-sm px-4"
                              type="text"
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
                              autofocus=""
                              class="form-control rounded-pill border-0 shadow-sm px-4"
                              type="text"
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
                              autofocus=""
                              class="form-control rounded-pill border-0 shadow-sm px-4"
                              type="text"
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
                              autofocus=""
                              class="form-control rounded-pill border-0 shadow-sm px-4"
                              type="text"
                              placeholder="university"
                              name="university"
                              onChange={handleChange}
                              value={data.university}
                              required
                            />
                          </div>
                          <div class="mb-3">
                            <input
                              id="inputEmail"
                              autofocus=""
                              class="form-control rounded-pill border-0 shadow-sm px-4"
                              type="text"
                              placeholder="yearsofexperience"
                              name="yearsofexperience"
                              onChange={handleChange}
                              value={data.yearsofexperience}
                              required
                            />
                          </div>
                          <div class="mb-3">
                            <input
                              id="inputEmail"
                              autofocus=""
                              class="form-control rounded-pill border-0 shadow-sm px-4"
                              type="text"
                              placeholder="cnam"
                              name="cnam"
                              onChange={handleChange}
                              value={data.cnam}
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
                          {/* <Link to="/Calendar"> */}
                            {/* <Link to="/login"> */}
                            <div class="d-grid gap-2 mt-2">
                              <button
                                type="submit"
                                class="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm"
                                onClick={handleSubmit}
                              >
                                signup
                              </button>
                            </div>
                          {/* </Link> */}
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
