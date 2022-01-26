import React from "react";
import "./header.css";

function header() {
  return (
    <div className="fullheader">
      <div className="logo">
        <img src="https://www.juit.ac.in/front/images/logo.jpg" alt="logo" />
      </div>
      <div className="header-data">
        <center>
          <div className="univ">
            JAYPEE UNIVERSITY OF INFORMATION TECHNOLOGY
          </div>
          <div>
            (Approved by UGC u/s 2(f) of UGC Act, 1956) P.O Waknaghat, Teh:
            Kandaghat, Distt. Solan 173 234 (H.P.)
          </div>
          <div className="greyed">
            <div>BTech Admission 2022</div>
            <div>(10+2 Merit Based)</div>
          </div>
          <div>
            Bioinformatics (BI) ,Biotechnology (BT) ,Civil Engineering (CE),
            Computer Science &amp; Engineering (CSE),
            <br /> Electronics and Computer Engineering (ECM), Electronics &amp;
            Communication Engineering (ECE) and Information Technology (IT)
          </div>
        </center>
      </div>
      <div className="addpic">{/* <input type="file" /> */}</div>
    </div>
  );
}

export default header;
