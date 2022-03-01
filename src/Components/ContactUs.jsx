import React from "react";
import { Link, useNavigate } from "react-router-dom";
import './contact.css'

export default class contactUs extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div>
                <div className="parent">
                    <div>
                        <br /><br /><br />
                        <div className="div1 center">
                            <form id="contact-form" className="form">
                                <h1>Contact us!</h1>
                                <br />
                                <h5>If you are facing a problem or you want to ask some questions, please don't hesitate to contact us.</h5>
                                <br />
                                <div className="form-group">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Email address</label>
                                    <input type="email" className="form-control" aria-describedby="emailHelp" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="message">Message</label>
                                    <textarea className="form-control" rows="5"></textarea>
                                </div>
                                <br />
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>
                    <div className="div2">
                        <div class="wrapper">
                            <div class="sidebar">
                                <div class="profile">
                                    <img src="https://media.discordapp.net/attachments/936015556287528980/947614190263210035/cc93f1595f4ec18589d585e5d9910c2f.jpg?width=473&height=473" alt="profile_picture" />
                                    <h3>Dr Mortadha</h3>
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
                                    <li>
                                        <a >
                                            <span className="item">Blogs</span>
                                        </a>
                                    </li>
                                    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                                    <li>
                                        <a className="active">
                                            <span className="item">contact us</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a>
                                            <span className="item">Log out</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}