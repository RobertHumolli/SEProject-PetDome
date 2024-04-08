// REVIEW PAGE FOR PET OWNER 


import React, { useState } from 'react';
import './reviewPage.css';
import { FaStar } from "react-icons/fa";


const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9"
}

const ReviewPage = () => { // Corrected component name to start with uppercase letter
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const [myPet, setMyPet] = useState("Dog");
  const [otherPetInfo, setOtherPetInfo] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (e)=> {
    e.preventDefault();

    const feedbackForm = {currentValue, myPet, otherPetInfo,feedback};
    console.log(feedbackForm);

    if(currentValue === 0){
      alert("The star rating has been left blank")
    }
    else if (myPet === undefined){
      alert("The type of pet has been left blank")
    }
    else if (myPet === 'Other' && otherPetInfo === ''){
      alert("The other type of pet has been left blank")
    }
    else if (feedback === ''){
      alert("This feedback form cannot be left blank")
    }
    else{
      alert("Form has been")
    }
  
  }
  


  const handleFeedback = event => {
    const { value } = event.target;
    setFeedback(value);
    
  }

  const handleChange1 = event => {
    const { value } = event.target;
    setMyPet(value);

    // Reset otherPetInfo when the selected option changes
    if (value !== 'Other') {
      setOtherPetInfo('');
    }
  };

  const handleOtherPetInfoChange = event => {
    setOtherPetInfo(event.target.value);
  };

//

  const stars = Array(5).fill(0);

  const handleClick = value => {
    setCurrentValue(value);
  }

  const handleMouseOver = value => {
    setHoverValue(value);
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined);
  }

  return (
    <div style={styles.container}>
      <div>
        <h1 style={styles.container}>Review Page for pet owner</h1>
        <br/>
        <h4 style={styles.container}>Rate the service</h4>
        <br/>
      </div>
      <div style={styles.stars}>
        {stars.map((_, index) => (
          <FaStar 
            key={index}
            size={30}
            onClick={() => handleClick(index + 1)}
            onMouseOver={() => handleMouseOver(index + 1)}
            onMouseLeave={handleMouseLeave}
            color={(hoverValue || currentValue) > index ? colors.orange : colors.grey}
            style={{
              marginRight: 10,
              cursor: "pointer"
            }}
          />
        ))}
      </div>
      <div style={styles.container}>
        <h4> What type of pet did the pet minder take care of?</h4>
        <form style={styles.form}>
        
            <select value={myPet} onChange={handleChange1} style={styles.select}>

            <option value="">Cat</option>
            <option value="Dog">Dog</option>
            <option value="Other">Other</option>
            {/* <if other put ur own option></if> */}
          </select>

        {myPet === 'Other' &&(
           <textarea
           value={otherPetInfo}
           onChange={(e)=>setOtherPetInfo(e.target.value)}
          //  {handleOtherPetInfoChange}
           placeholder="Please specify..."
           style={{ ...styles.select, ...styles.smallTextArea }}
         />

        )}


      </form>
      </div>

      <div>
        <textarea
        required
        value={feedback}
        onChange={handleFeedback}
        placeholder="What's your feedback?"
        style={styles.textarea}
        />
      </div>
  

      <button type="button" name="send" id="send" value="SEND" onClick={handleSubmit} style={styles.button}>Submit</button>


      
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  textarea: {
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    padding: 10,
    margin: "20px 0",
    minHeight: 100,
    width: 300,
    cursor: "pointer", // Cursor style
  },
  button: {
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    width: 300,
    padding: 10,
  },
  form:{
    borderRadius: 5,
    padding: 10,
    margin: "20px 0",
    minHeight: 100,
    width: 300
  },

  select: {
    width: "100%", // Make the select element fill its container width
    padding: 8, // Padding
    fontSize: 16, // Font size
    border: "1px solid #a9a9a9", // Border color
    borderRadius: 5, // Border radius
    backgroundColor: "#fff", // Background color
    cursor: "pointer", // Cursor style
  },
  smallTextArea: {
    height: 50, // Adjust the height as needed
    marginTop: 10, // Add some space between the select and the text area
    resize: "vertical", // Allow vertical resizing if needed
  
  button: {

  }
}

}

export default ReviewPage;



