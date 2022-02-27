import React from "react";
function Patients (props) {
    return(
        <div>
            <div>{props.patient.name}</div>
            <div>{props.patient.dateOfBirth}</div>
            <div>{props.patient.dateOfAp}</div>
            <div>{props.patient.time}</div>
        </div>
    )
}
export default Patients