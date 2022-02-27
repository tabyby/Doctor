import { Route, Routes, Navigate } from "react-router-dom";
import './App.css';
import Blog from './Components/Blog';
import ClassicalCalendar from './Components/ClassicalCalendar';
function App() {
  return (
// const [user,setUser]=useState("")
    <Routes>
      {/* {<Route path="/login" exact element={<Main />} />} */}
      <Route path="/calendar" element={<ClassicalCalendar />} />
      {/* <UserContext.Provider> */}
      {/* <Route path="/Profil" element={<Profil />} />
      <Route path="/AboutUs" element={<AboutUs />} />
      <Route path="/PostBlogs" element={<PostBlogs />} />
      <Route path="/signup" exact element={<Signup />} />
      <Route path="/" exact element={<Login />} /> */}
      {/* </UserContext.Provider> */}
      <Route path="/" element={<Navigate replace to="/login" />} />
    </Routes>
  );
}

export default App;
