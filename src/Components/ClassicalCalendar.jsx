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
    handleViews = s => {
        this.setState({
            view: s,
        })
    }
    handleChange = (date) => {
        this.setState({ selectedDate: date });
    }
    render() {
        let sortedData = [];
        if (this.state.view === "all") {
            sortedData = data;
        }
        else if (this.state.view === "today") {
            sortedData = data.filter(patient => parseInt(patient.dateOfAp[0]) === this.state.selectedDate.getDate());
        }
        console.log(sortedData)
        console.log(typeof (this.state.selectedDate.getDate()))

        let dataUnsorted = sortedData.map(patient => {
            return (
                <Patients key={patient.name} patient={patient} />
            )
        })
        return (
            <div>
                <div className="center" >
                    <br /><br /><br /><br />
                    <Calendar onChange={this.handleChange} />
                    <div className="center"> you have {sortedData.length} appointments </div>
                    <div>{this.state.selectedDate.toDateString()}</div>
                    <button onClick={() => this.handleViews('today')} >Check List</button>
                    {dataUnsorted}
                </div>
                <div>
                    <div class="wrapper">
                        <div class="sidebar">
                            <div class="profile">
                                <img src="https://1.bp.blogspot.com/-vhmWFWO2r8U/YLjr2A57toI/AAAAAAAACO4/0GBonlEZPmAiQW4uvkCTm5LvlJVd_-l_wCNcBGAsYHQ/s16000/team-1-2.jpg" alt="profile_picture" />
                                <h3>Dr Oussama</h3>
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
                                <br /><br /><br /><br /><br />

                                <li>
                                    <a href="#">
                                        <span class="icon"><i class="fas fa-tachometer-alt"></i></span>
                                        <span class="item">contact us</span>
                                    </a>
                                </li>

                            </ul>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
