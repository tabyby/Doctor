import React, { Component } from "react";
import { Link, useNavigate } from "react-router-dom";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import data from "./fakeData";
import Patients from './Patients'
import './grid.css'
import { AdvancedImage } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen"

export default class ClassicalCalendar extends Component {
    constructor() {
        super();
        this.state = {
            selectedDate: new Date(),
            view: "all",
        }
    }
    backToAll = () => {
        this.setState({
            view:'all',
        })
    }
    handleViews = s => {
        this.setState({
            view: s,
        });
        
    }
    handleChange = (date) => {
        this.setState({ selectedDate: date });
    }
    render() {
        let sortedData = [];

            sortedData = data.filter(patient => parseInt(patient.dateOfAp[0]) === this.state.selectedDate.getDate());
        

        return (
            <div>
                <div>

                    <div>

                    </div>
                    <div class="parent">
                        <div class="div1">
                            <div>
                                <br /><br /> 
                                <h6 className="center">Hello doctor, these are your appointements, you only have to select a date on the calendar</h6>
                                <br />
                                <div className="center" >
                                    <Calendar  onChange={this.handleChange} />
                                </div>
                                <br />
                                    <div className="center">
                                        <div > you have {sortedData.length} appointments on </div><br />
                                        <div> {this.state.selectedDate.toDateString()}</div><br />

                                    </div>
                                        <div className="center ">
                                        {/* <button onClick={()=>{this.handleViews('today')
                                       
                                    }} >Check List</button> */}
                                        </div>
                                    <br />
                                    <h2 className="center">Table of appointements:</h2>
                                <div className="center">
                                    <table id="customers" >
                                        <tr>
                                            <th>Name</th>
                                            <th>Date of bith</th>
                                            <th>date of appointement</th>
                                            <th>Time</th>
                                        </tr>
                                        {sortedData.map(patient => {
                                            return (
                                                <tbody key={patient.name} >
                                                    <tr key={patient.name} >
                                                        <td>{patient.name}</td>
                                                        <td>{patient.dateOfBirth}</td>
                                                        <td>{patient.dateOfAp}</td>
                                                        <td>{patient.time}</td>
                                                    </tr>
                                                </tbody>
                                            )
                                        })}
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div class="div2">
                            <div class="wrapper">
                                <div class="sidebar">
                                    <div class="profile">
                                        <img src="https://media.discordapp.net/attachments/936015556287528980/947614190263210035/cc93f1595f4ec18589d585e5d9910c2f.jpg?width=473&height=473" alt="profile_picture" />
                                        <h3>Dr Mortadha</h3>
                                        <p>Dentist</p>
                                    </div>
                                    <ul>
                                        <li>
                                            <a class="active">
                                                <span class="item">Calendar</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a >
                                                <span class="item">Post blogs</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a >
                                                <span class="item">Blogs</span>
                                            </a>
                                        </li>
                                        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

                                        <li>
                                            <a href="#">
                                                <span class="item">contact us</span>
                                            </a>
                                        </li>

                                    </ul>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
