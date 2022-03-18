import { useState } from "react";
import axios from "axios";
// import { Link, useNavigate } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.min.js";
// import "./login.css";
// import useGeolocation from "react-hook-geolocation";

// // 644746242624-2ucis9hcf3c6lq19v97lncjd3ajtd18r.apps.googleusercontent.com
// const PersonalProfile = () => {
//   const [data, setData] = useState({
//     geolocation: [],
//     field: "",
//     location: "",
//     university: "",
//     latitude: null,
//     longitude: null,
//     yearsofexperience: "",
//     cnam: "",
//   });
//   const ComponentWithGeolocation = () => {
//     const geolocation = useGeolocation();

//     return !geolocation.error ? (
//       <ul>
//         <li>Latitude: {geolocation.latitude}</li>
//         <li>Longitude: {geolocation.longitude}</li>
//         <li>Location accuracy: {geolocation.accuracy}</li>
//         <li>Altitude: {geolocation.altitude}</li>
//         <li>Altitude accuracy: {geolocation.altitudeAccuracy}</li>
//         <li>Heading: {geolocation.heading}</li>
//         <li>Speed: {geolocation.speed}</li>
//         <li>Timestamp: {geolocation.timestamp}</li>
//         {console.log(geolocation.altitude, "location found!")}
//       </ul>
//     ) : (
//       <p>No geolocation, sorry.</p>
//     );
//   };
//   const error = "";
//   const navigate = useNavigate();
//   const handleChange = ({ currentTarget: input }) => {
//     setData({ ...data, [input.name]: input.value });
//     console.log("====>", data);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const url = "http://localhost:3000/doctor/signup";
//       const { data: res } = await axios.post(url, data);
//       navigate("/");
//       console.log(res.message, "hhhhh");
//     } catch (err) {
//       console.log(err, "no");
//     }
//   };

//   return (
//     <div>
//       <div>
//         <div className="maincontainer">
//           <div class="container-fluid">
//             <div class="row no-gutter">
//               <div class="col-md-6 d-none d-md-flex bg-image"></div>
//               <div class="col-md-6 bg-light">
//                 <div class="login d-flex align-items-center py-5">
//                   <div class="container">
//                     <div class="row">
//                       <div class="col-lg-10 col-xl-7 mx-auto">
//                         <h3 class="display-4">Join TABYBY community!</h3>
//                         <p class="text-muted mb-4">
//                           Please fill this form with the exact informations.
//                         </p>
//                         <form onSubmit={handleSubmit}>
//                           <div class="mb-3">
//                             <input
//                               id="inputEmail"
//                               autofocus=""
//                               class="form-control rounded-pill border-0 shadow-sm px-4"
//                               type="text"
//                               placeholder="field"
//                               name="field"
//                               onChange={handleChange}
//                               value={data.field}
//                               required
//                             />
//                           </div>
//                           <div class="mb-3">
//                             <input
//                               id="inputEmail"
//                               autofocus=""
//                               class="form-control rounded-pill border-0 shadow-sm px-4"
//                               type="text"
//                               placeholder="location"
//                               name="location"
//                               onChange={handleChange}
//                               value={data.location}
//                               required
//                             />
//                           </div>
//                           <div class="mb-3">
//                             <input
//                               id="inputEmail"
//                               autofocus=""
//                               class="form-control rounded-pill border-0 shadow-sm px-4"
//                               type="text"
//                               placeholder="university"
//                               name="university"
//                               onChange={handleChange}
//                               value={data.university}
//                               required
//                             />
//                           </div>
//                           <div class="mb-3">
//                             <input
//                               id="inputEmail"
//                               autofocus=""
//                               class="form-control rounded-pill border-0 shadow-sm px-4"
//                               type="text"
//                               placeholder="yearsofexperience"
//                               name="yearsofexperience"
//                               onChange={handleChange}
//                               value={data.yearsofexperience}
//                               required
//                             />
//                           </div>
//                           <div class="mb-3">
//                             <input
//                               id="inputEmail"
//                               autofocus=""
//                               class="form-control rounded-pill border-0 shadow-sm px-4"
//                               type="text"
//                               placeholder="cnam"
//                               name="cnam"
//                               onChange={handleChange}
//                               value={data.cnam}
//                               required
//                             />
//                           </div>
//                           <div class="form-check">
//                             <input
//                               id="customCheck1"
//                               type="checkbox"
//                               checked
//                               class="form-check-input"
//                             />
//                             <label for="customCheck1" class="form-check-label">
//                               Remember password
//                             </label>
//                           </div>

//                           <Link to="/Calendar">
//                             {/* <Link to="/login"> */}
//                             <div class="d-grid gap-2 mt-2">
//                               <button
//                                 type="submit"
//                                 class="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm"
//                                 onClick={handleSubmit}
//                               >
//                                 Sign up
//                               </button>
//                               <button>google signup</button>
//                             </div>
//                           </Link>
//                           <button OnClick={ComponentWithGeolocation}>
//                             {" "}
//                             your cabinet location
//                           </button>
//                         </form>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PersonalProfile;
