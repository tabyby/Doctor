import React from "react";
import './grid.css'
function Patients(props) {
    return (
        <div>
            <table id="customers">
                <tr>
                    <td>{props.patient.name}</td>
                    <td>{props.patient.dateOfBirth}</td>
                    <td>{props.patient.dateOfAp}</td>
                    <td>{props.patient.time}</td>
                    <td></td>
                </tr>
            </table>
        </div>
    )
}
export default Patients