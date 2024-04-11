import React, {useState} from "react"
import "react-datepicker/dist/react-datepicker.css"
import './AppointmentForm.css'
import DateRangePickerComp from './DateRangePickerComp.jsx'


function testFunc(){
    alert("Appointment request submitted");
}

const AppointmentForm = () => {

    const [petMindersName, setPetMindersName] = useState('');
    const [petName, setPetName] = useState('');
    const [petAge, setPetAge] = useState('');
    const [petBreed, setBreed] = useState('');



    const handleSubmit = (e)=> {
        e.preventDefault();
    
        const feedbackForm = {petMindersName, petName, petAge,petBreed};
        console.log(feedbackForm);
    
        if(petMindersName === ''){
          alert("Please enter the pet minders name")
        }
        else if (petName === ''){
          alert("Please enter the pet's name")
        }
        else if (isNaN(petAge) || petAge ===''){
          alert("Please enter a number for the pet's age")
        }
        else if (petBreed === ''){
            alert("Please enter the pet's breed")
        }
        else{
          alert("Form has been submitted")
        }
      
      
    }


    const handlePetName = event => {
        const { value } = event.target;
        setPetName(value);
        
      }
    
      const handlePetMinderName= event => {
        const { value } = event.target;
        setPetMindersName(value);
        
      }

      const handleBreed = event => {
        const { value } = event.target;
        setBreed(value);
        
      }
    
      const handlePetAge= event => {
        const { value } = event.target;
        setPetAge(value);
        
      }

    
  
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
            <textarea 
            value={petMindersName} 
            onChange={handlePetMinderName}
            type = "text"
            placeholder='Pet minders name'>
            </textarea>
        </div>

        <p className='extras'>What is your pets name?*</p>

        <span></span>
        <div className="extraText">
            <textarea
            value={petName} 
            onChange={handlePetName}
            type = "text" 
            placeholder='Pets name'>
            </textarea>
        </div>

        <p className='extras'>What is your pets age?*</p>

        <span></span>
        <div className="extraText">
            <textarea 
            type = "number"
            value={petAge} 
            onChange={handlePetAge} 
            placeholder='Pets age'>
            </textarea>
        </div>

        <p className='extras'>Of what breed is your pet?*</p>

        <span></span>
        <div className="extraText">
            <textarea 
            type = "text" 
            value={petBreed} 
            onChange={handleBreed}
            placeholder='Pets breed'>
            </textarea>
        </div>

        <p className='extras'>Does your pet have any special needs?</p>

        <span></span>
        <div className="extraText">
            <textarea type = "text" placeholder='Add any extra information'>
            </textarea>
        </div>
        

        <button className="subbutton" onClick={handleSubmit}> Submit </button>
    </div>
    );
}

export default AppointmentForm
