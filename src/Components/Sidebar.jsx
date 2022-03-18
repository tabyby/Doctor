import "./grid.css";
import { Link, useNavigate } from "react-router-dom";
import GoogleMap from "./GoogleMap";
const Sidebar = () => {
  return (
    <div className="parent">
      <div className="div2">
        <div class="wrapper">
          <div class="sidebar">
            <div class="profile">
              <img
                src="https://media.discordapp.net/attachments/936015556287528980/947614190263210035/cc93f1595f4ec18589d585e5d9910c2f.jpg?width=473&height=473"
                alt="profile_picture"
              />
              <h3>Dr Oussama</h3>
              <p>Dentist</p>
            </div>
            <ul>
              <li>
                <Link to="/Calendar">
                  <span className="item">Calendar</span>
                </Link>
              </li>
              <li>
                <Link to="/PostBlog">
                  <span className="item">Post blogs</span>
                </Link>
              </li>
              {/* <li>
                  Google mapss
                <Link to="/googlemaps">
                  <GoogleMap />
                </Link>
              </li> */}
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <li>
                <Link to="/contactUs">
                  <span className="item">contact us</span>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <span onClick={() => this.logout()} className="item">
                    Log out
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
