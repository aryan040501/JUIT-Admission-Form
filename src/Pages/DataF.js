import React, { useState } from "react";
import Header from "../Components/header";
// import "./data.css";

function DataF() {
  const [result, setResult] = useState("");

  const handleChange = (e) => {
    setResult(e.target.value);
  };
  const onSubmit = () => {
    console.log(result);
  };
  return (
    <div>
      <Header />
      <br></br>
      <br></br>
      <br></br>
      <div className="body">
        <div></div>
        <div>
          <form onSubmit={onSubmit} className="form">
            <center>
              <label>
                <strong>Type Application Number</strong>
              </label>
            </center>
            <input
              name="email"
              type="text"
              placeholder="Type Email Address to Verify"
              onChange={handleChange}
              className="inputfield"
            />
            <br />
            <button
              class="g-recaptcha button"
              data-sitekey="6Lfv5GweAAAAAMySTyQv4KJNxM6NoqNEJTRskw7S"
              data-callback="onSubmit"
              data-action="submit"
            >
              Download
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default DataF;
