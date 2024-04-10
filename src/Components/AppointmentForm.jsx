import React, {useState} from "react"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import './AppointmentForm.css'
import DateRangePickerComp from './DateRangePickerComp.jsx'


function testFunc(){
    alert("Appointment request submitted");
}

const AppointmentForm = () => {

    const [selectedDate, setSelectedDate] = useState(null);

    
  
    return(
    <div className="main">
       
            <p className='date'>Select a date:  </p>
            <div className="datepicker">
            <DateRangePickerComp />
            </div>
        <p>   </p>

        <p className='extras'>What is the pet minders name?*</p>

        <span></span>
        <div className="extraText">
            <textarea type = "text" placeholder='Pet minders name'>
            </textarea>
        </div>

        <p className='extras'>What is your pets name?*</p>

        <span></span>
        <div className="extraText">
            <textarea type = "text" placeholder='Pets name'>
            </textarea>
        </div>

        <p className='extras'>What is your pets age?*</p>

        <span></span>
        <div className="extraText">
            <textarea type = "text" placeholder='Pets age'>
            </textarea>
        </div>

        <p className='extras'>Of what breed is your pet?*</p>

        <span></span>
        <div className="extraText">
            <textarea type = "text" placeholder='Pets breed'>
            </textarea>
        </div>

        <p className='extras'>Does your pet have any special needs?</p>

        <span></span>
        <div className="extraText">
            <textarea type = "text" placeholder='Add any extra information'>
            </textarea>
        </div>
        

        <button className="subbutton" onClick={testFunc}> Submit </button>
    </div>
    );
}

export default AppointmentForm
