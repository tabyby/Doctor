import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import Signup from "./Components/signup";
import ClassicalCalendar from "./Components/ClassicalCalendar";
import Login from "./Components/Login";
import Patients from "./Components/Patients";
import Contact from "./Components/ContactUs"
import Blog from "./Components/Blog"
import GmailLogin from "./Components/Gmaillogin";
import BlogLink from "./Components/BlogLink";
import GetPatientsInfo from "./Components/GetPatientsInfo";
function App() {
  return (
    <div>
      <Routes>

        {<Route path="/login" exact element={<Login />} />}
         <Route path="/Infos" element={<GetPatientsInfo />} />
        <Route path="/Patients" element={<Patients />} />
        <Route path="/Calendar" element={<ClassicalCalendar />} />
        <Route path="/signup" exact element={<Signup />} />
        <Route path="/calendar" exact element={<ClassicalCalendar />} />
        <Route path="/" exact element={<Login />} />
        <Route path="/PostBlog" element={<Blog/>} />
        <Route path="/contactUs" element={<Contact/>} />
        <Route path="/" element={<Navigate replace to="/login" />} />
        <Route path="/gmailsignin"  element={<GmailLogin />} />
        <Route path="/BlogLink"  element={<BlogLink />} />
      </Routes>
    </div>
  );
}

export default App;