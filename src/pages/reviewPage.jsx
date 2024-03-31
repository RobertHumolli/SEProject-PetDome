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
      <h1>Review Page</h1>
      <div style={styles.stars}>
        {stars.map((_, index) => (
          <FaStar 
            key={index}
            size={24}
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
      <textarea
      placeholder="What's your feedback?"
      style={styles.textarea}
      />

      <textarea

      placeholder="What's their name"
      style={styles.textarea}
      />

      <button style={styles.button}>Submit</button>
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
    width: 300
  },
  textarea2: {
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    padding: 10,
    margin: "20px 0",
    minHeight: 100,
    width: 300
  },
  button: {
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    width: 300,
    padding: 10,
  }
}

export default ReviewPage;





// import React from 'react';
// import './reviewPage.css';
// import { FaStar } from "react-icons/fa";


// const colors = {
//   orange: "#FFBA5A",
//   grey: "#a9a9a9"

// }


// // define an array 'stars' with 5 elements, all initialized to 0
// const stars = Array(5).fill(0);


// //to save thew current rating we need to create a usedStateand give it a default value of zero
// const [currentValue, setcurrentValue] = useState(0);

// //give it a hover value and give it a default value of undefined
// const [hoverValue, setHoverValue]  = useState(undefined)



// //takes the new rating value as input
// const handleClick = value => {
//   setcurrentValue(value)

// }

// //updates the hover value to the new value
// const handlemouseHover = value => {
//   setHoverValue(value)


// }

// //resets the hover value to undefine it
// const handlemouseHoverLeave = value => {
//   setHoverValue(undefined)
// }


// const reviewPage = () => {

//   return (
//     <div style={styles.container}> {/* Applied background style here */}
//       <h1>Review Page</h1>
//       <div style={styles.stars}>

//       {/*Map over the 'stars' array*/}

//         {stars.map((_,index) => {   {/*render a star icon for each element in the 'stars' array*/}
//           return (
//             <FaStar 
//             key={index}
//             size={24}
//             onClick={() => handleClick(index + 1)}
//             onMouseOver={() => handleMouseOver(index + 1)}
//             onMouseLeave={handleMouseLeave}
//             color={(hoverValue || currentValue) > index ? colors.orange : colors.grey}
//             style={{
//               marginRight: 10,
//               cursor: "pointer"
//             }}
//             />
//           )
//         })}

//       </div>

      
//     </div>
//   );
// }

// const styles = {
//   container: {
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//   }
// }

// export default reviewPage;


