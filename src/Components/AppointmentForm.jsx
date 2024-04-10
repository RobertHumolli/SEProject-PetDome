import React, {useState} from "react"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import './AppointmentForm.css'
import DateRangePickerComp from './DateRangePickerComp.jsx'

const AppointmentForm = () => {

    const [selectedDate, setSelectedDate] = useState(null);
  
    return(
    <div className="main">
        <p className='title'>Book an appointment with </p>
       
            <p className='date'>Select a date:  </p>
            <div className="datepicker">
            <DateRangePickerComp />
            </div>
        <p>   </p>

        <p className='extras'>Does your pet have any special needs?</p>

        <span></span>
        <div className="extraText">
            <textarea type = "text" placeholder='Add any extra information'>
            </textarea>
        </div>
        

        <button className="subbutton"> Submit </button>
    </div>
    );
}

export default AppointmentForm
