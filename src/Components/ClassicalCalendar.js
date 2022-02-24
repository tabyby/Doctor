import React, { Component } from "react";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import data from "../Components/fakeData";
import Patients from "./Patients";

export default class ClassicalCalendar extends Component{
    constructor(){
        super();
        this.state={
            selectedDate:new Date(),
            view : "all",
        }
    }
    handleViews = s => {
        this.setState({
            view : s,
        })
    }
    handleChange = (date) => {
        this.setState({ selectedDate: date }); 
      }
      render(){
        let sortedData = [];
        if(this.state.view==="all"){
            sortedData = data;
        }
        else if(this.state.view==="today") {
            sortedData = data.filter(patient=>parseInt(patient.dateOfAp[0])===this.state.selectedDate.getDate());
        }
        console.log(sortedData)
        console.log(typeof (this.state.selectedDate.getDate()))
        
        let dataUnsorted = sortedData.map(patient=>{
            return(
                <Patients key={patient.name} patient={patient} />
            )
        })
        return(
            <div>
                <Calendar  onChange={this.handleChange} /> 
                <div> you have {sortedData.length} appointments </div>
                <div>{this.state.selectedDate.toDateString()}</div>
                    <button onClick={()=>this.handleViews('today')} >Check List</button>
                    {dataUnsorted}
                    
            </div>
        )
    }
}