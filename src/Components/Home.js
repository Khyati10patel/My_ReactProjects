import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = ({ setName, name }) => {
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const start = () => {
    if (name === "") {
      setError(true);
    } else {
      setError(false);
      navigate("/info");
    }
  };

  // const start = () => {
  //   if (name.trim() === "") {
  //     setError(true);
  //   } else {
  //     setError(false);
  //     navigate("/info");
  //   }
  // };

  const handleNameChange = (e) => {
    const { value } = e.target;
    const re = /^[A-Za-z]+$/;
    if (re.test(value) || value === "") {
      setName(value);
      if (value.length > 0) {
        setError(false);
      } else {
        setError(true);
      }
    }
  };

  // const handleNameChange = (e) => {
  //   const {value} = e.target;
  //   const re = /^[A-Za-z]+$/;
  //   if (re.test(value) ) {
  //     setName(value);
  //     setError(value.trim() === "");
  //   }
  // };

  return (
    <div className="Main_Div">
      <div className="Home_Div">
        <h1>Quiz</h1>
        <p className="first_p">
          Enter your name to start the quiz
        </p>

        <input
          type="text"
          value={name}
          name="name"
          placeholder="Your Name"
          autoComplete="off"
          onChange={(e) => handleNameChange(e)}
        />
        {/* <input
          type="text"
          value={name}
          name="name"
          placeholder="Your Name"
          autoComplete="off"
          onChange={handleNameChange}
        /> */}

        {error && <p className="error">Please enter your name</p>}
        <button onClick={start}>
          Click here to start
        </button>

      </div>

    </div>
  );
};
export default Home;
