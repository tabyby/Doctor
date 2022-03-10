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
                              autofocus=""
                              class="form-control rounded-pill border-0 shadow-sm px-4"
                              name="firstName"
                              onChange={handleChange}
                              value={data.firstName}
                            />
                          </div>
                          <div class="mb-3">
                            <input
                              id="inputEmail"
                              autofocus=""
                              class="form-control rounded-pill border-0 shadow-sm px-4"
                              name="lastName"
                              onChange={handleChange}
                              value={data.lastName}
                            />
                          </div>
                          <div class="mb-3">
                            <input
                              id="inputEmail"
                              autofocus=""
                              class="form-control rounded-pill border-0 shadow-sm px-4"
                              name="email"
                              onChange={handleChange}
                              value={data.email}
                            />
                          </div>
                          <div class="mb-3">
                            <input
                              id="inputPassword"
                              class="form-control rounded-pill border-0 shadow-sm px-4 text-primary"
                              name="password"
                              onChange={handleChange}
                              value={data.password}
                            />
                          </div>
                          <div class="mb-3">
                            <input
                              id="inputEmail"
                              autofocus=""
                              class="form-control rounded-pill border-0 shadow-sm px-4"
                              name="phoneNumber"
                              onChange={handleChange}
                              value={data.phoneNumber}
                            />
                          </div>
                          <div class="mb-3">
                            <input
                              id="inputEmail"
                              autofocus=""
                              class="form-control rounded-pill border-0 shadow-sm px-4"
                              name="field"
                              onChange={handleChange}
                              value={data.field}
                            />
                          </div>
                          <div class="mb-3">
                            <input
                              id="inputEmail"
                              autofocus=""
                              class="form-control rounded-pill border-0 shadow-sm px-4"
                              name="location"
                              onChange={handleChange}
                              value={data.location}
                            />
                          </div>
                          <div class="mb-3">
                            <input
                              id="inputEmail"
                              autofocus=""
                              class="form-control rounded-pill border-0 shadow-sm px-4"
                              name="profilePicture"
                              onChange={handleChange}
                              value={data.profilePicture}
                            />
                          </div>
                          <div class="mb-3">
                            <input
                              id="inputEmail"
                              autofocus=""
                              class="form-control rounded-pill border-0 shadow-sm px-4"
                              name="description"
                              onChange={handleChange}
                              value={data.description}
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
