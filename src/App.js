import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import Signup from "./Components/signup";
import ClassicalCalendar from "./Components/ClassicalCalendar";
import Login from "./Components/Login";
import Patients from "./Components/Patients";
function App() {
  return (
    <div>
      <Routes>
        {<Route path="/login" exact element={<Login />} />}
        <Route path="/Patients" element={<Patients />} />
        <Route path="/PostBlogs" element={<ClassicalCalendar />} />
        <Route path="/signup" exact element={<Signup />} />
        <Route path="/" exact element={<Login />} />
        {/* </UserContext.Provider> */}
        <Route path="/" element={<Navigate replace to="/login" />} />
      </Routes>
    </div>
  );
}

export default App;
