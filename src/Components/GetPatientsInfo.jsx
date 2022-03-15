import React, { Component } from "react";
import "./PatientInfo.css";

import Sidebar from "./Sidebar";
import axios from "axios";
import { person } from "@cloudinary/url-gen/qualifiers/focusOn";
export default class GetPatientsInfo extends Component {
  constructor() {
    super();
    this.state = {
      infos: [],
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:3000/doctor/api/getAppointment")
      .then((response) => {
        console.log(response.data);
        this.setState({
          infos: response.data,
        },()=>{
          console.log(this.state.infos)
        });
      });
  }
  render() {


    return (
     <div>
       {this.state.infos.map(person=>{
         return(
           <div className="container-grid" >
             
             <Sidebar/>

           <div className="center" >
            
           <div className="grid-item" >
           <div  > Full Name : {person.name}</div>
           <div> Phone Number : {person.phoneNum}</div>
           <div> Has been here before ? : {person.beenThere}</div>
           <div> diseases :  {person.diseases}</div>
           <div> Date of birth :  {person.dateOfBirth  }</div>
           <div> Date and time of appointment :  {person.date  }</div>

          </div>
          </div>
          </div>
         )
       })}

     </div>      

    )
  }
}
