import React, { useRef } from "react";
import "./formBody.css";

function FormBody() {
  const candidateNameRef = useRef("");
  const fathersNameRef = useRef("");
  const mothersNameRef = useRef("");
  const dateofBirthRef = useRef("");
  const nationalityRef = useRef("");
  const genderRef = useRef("");
  const categoryRef = useRef("");
  const personWithDisabilityRef = useRef(false);
  const nameOfBoardRef = useRef("");
  const maximumMarksTRef = useRef(0.0);
  const marksObtainedTRef = useRef(0.0);
  const rollNumberRef = useRef(0.0);
  const yearOfPassingRef = useRef("");
  const maximumMarksRef1 = useRef(0.0);
  const marksObtainedRef1 = useRef(0.0);
  const maximumMarksRef2 = useRef(0.0);
  const marksObtainedRef2 = useRef(0.0);
  const subjectNameRef3 = useRef("");
  const maximumMarksRef3 = useRef(0.0);
  const marksObtainedRef3 = useRef(0.0);
  const subjectNameRef4 = useRef("");
  const maximumMarksRef4 = useRef(0.0);
  const marksObtainedRef4 = useRef(0.0);
  const subjectNameRef5 = useRef("");
  const maximumMarksRef5 = useRef(0.0);
  const marksObtainedRef5 = useRef(0.0);
  const totalMarksObtainedRef = useRef(0.0);
  const totalMaximumMarksRef = useRef(0.0);
  const lineOneRefC = useRef("");
  const districtRefC = useRef("");
  const stateRefC = useRef("");
  const pinCodeRefC = useRef(0.0);
  const lineOneRef = useRef("");
  const districtRef = useRef("");
  const stateRef = useRef("");
  const pinCodeRef = useRef(0.0);
  const mobileNumberRef = useRef(0.0);
  const landlineNumberRef = useRef(0.0);
  const emailIdRef = useRef("");
  const tenPlusTwoExamStateRef = useRef("");
  const choiceOneRef = useRef("");
  const choiceTwoRef = useRef("");
  const choiceThreeRef = useRef("");
  const choiceFourRef = useRef("");
  const choiceFiveRef = useRef("");
  const choiceSixRef = useRef("");
  const choiceSevenRef = useRef("");
  const forcesBackgroundRef = useRef("");

  const onSubmitClicked = (e) => {
    e.preventDefault();
    const postData = {
      candidateName: candidateNameRef.current.value,
      fathersName: fathersNameRef.current.value,
      mothersName: mothersNameRef.current.value,
      nationality: nationalityRef.current.value,
      gender: genderRef.current.value,
      category: categoryRef.current.value,
      personWithDisability: personWithDisabilityRef.current.value,
      qualifyingExamDetails: {
        nameOfBoard: nameOfBoardRef.current.value,
        maximumMarks: maximumMarksTRef.current.value,
        marksObtained: marksObtainedTRef.current.value,
        rollNumber: rollNumberRef.current.value,
        yearOfPassing: yearOfPassingRef.current.value,
      },
      subjectScoreList: [
        {
          subjectName: "Mathematics",
          maximumMarks: maximumMarksRef1.current.value,
          marksObtained: marksObtainedRef1.current.value,
        },
        {
          subjectName: "Physics",
          maximumMarks: maximumMarksRef2.current.value,
          marksObtained: marksObtainedRef2.current.value,
        },
        {
          subjectName: subjectNameRef3.current.value,
          maximumMarks: maximumMarksRef3.current.value,
          marksObtained: marksObtainedRef3.current.value,
        },
        {
          subjectName: subjectNameRef4.current.value,
          maximumMarks: maximumMarksRef4.current.value,
          marksObtained: marksObtainedRef4.current.value,
        },
        {
          subjectName: subjectNameRef5.current.value,
          maximumMarks: maximumMarksRef5.current.value,
          marksObtained: marksObtainedRef5.current.value,
        },
      ],
      residentialAddress: {
        lineOne: lineOneRefC.current.value,
        district: districtRefC.current.value,
        state: stateRefC.current.value,
        pinCode: pinCodeRefC.current.value,
      },
      permanentAddress: {
        lineOne: lineOneRef.current.value,
        district: districtRef.current.value,
        state: stateRef.current.value,
        pinCode: pinCodeRef.current.value,
      },
      mobileNumber: mothersNameRef.current.value,
      landlineNumber: landlineNumberRef.current.value,
      emailId: emailIdRef.current.value,
      tenPlusTwoExamState: tenPlusTwoExamStateRef.current.value,
      branchPriority: {
        choiceOne: choiceOneRef.current.value,
        choiceTwo: choiceTwoRef.current.value,
        choiceThree: choiceThreeRef.current.value,
        choiceFour: choiceFourRef.current.value,
        choiceFive: choiceFiveRef.current.value,
        choiceSix: choiceSixRef.current.value,
        choiceSeven: choiceSevenRef.current.value,
      },
    };
    console.log(postData);
  };

  return (
    <div className="form">
      <br></br>
      <div className="capital">
        <center>
          <strong>Please Fill the Form</strong>
        </center>
      </div>
      <br></br>
      <form>
        <div className="halfnhalf">
          <div className="form-half1">
            <label className="form-label">Candidate's Name</label>
            <input
              type="text"
              ref={candidateNameRef}
              className="form-control"
              name="candidateName"
            />
            <label className="form-label">Father's Name</label>
            <input
              type="text"
              className="form-control"
              name="fathersName"
              ref={fathersNameRef}
            />
            <label className="form-label">Mother's Name</label>
            <input
              type="text"
              className="form-control"
              name="mothersName"
              ref={mothersNameRef}
            />
            <label className="form-label">Date of Birth</label>
            <input
              type="date"
              className="form-control"
              name="dateOfBirth"
              ref={dateofBirthRef}
            />
          </div>
          <div className="form-half2">
            <label className="form-label">Nationality</label>
            <input
              type="text"
              className="form-control"
              name="nationality"
              ref={nationalityRef}
            />
            <label className="form-label">Gender</label>
            <select className="form-select" name="gender" ref={genderRef}>
              <option value={"Male"}>Male</option>
              <option value={"Female"}>Female</option>
              <option value={"Other(s)"}>Other(s)</option>
            </select>
            <label className="form-label">Category</label>
            <select className="form-select" name="category" ref={categoryRef}>
              <option value={"General"}>General</option>
              <option value={"OBC"}>OBC</option>
              <option value={"SC"}>SC</option>
              <option value={"ST"}>ST</option>
              <option value={"EWS"}>EWS</option>
            </select>
            <label className="form-label">
              Person with Disability &nbsp;&nbsp;&nbsp;&nbsp;
            </label>
            <br></br>
            <input
              className="form-check-input"
              type="checkbox"
              value="false"
              id="flexCheckDefault"
              name="personWithDisability"
              ref={personWithDisabilityRef}
            />
            <label class="form-check-label" for="flexCheckDefault">
              Yes
            </label>
            &nbsp;&nbsp;&nbsp;&nbsp;
          </div>
        </div>
        <br></br>
        <label className="form-label">
          Details of Qualifying exam (10+2 or equivalent) :
        </label>
        <div className="exam">
          <div>
            <label className="form-label">Name of Board</label>
            <input
              type="text"
              className="form-control"
              name="nameOfBoard"
              ref={nameOfBoardRef}
            />
          </div>
          <div>
            <label className="form-label">Maximum Marks</label>
            <input
              type="text"
              className="form-control"
              name="maximumMarks"
              ref={maximumMarksTRef}
            />
          </div>
          <div>
            <label className="form-label">Marks Obtained</label>
            <input
              type="text"
              className="form-control"
              name="marksObtained"
              ref={marksObtainedTRef}
            />
          </div>
          <div>
            <label className="form-label">10+2 Roll No</label>
            <input
              type="text"
              className="form-control"
              name="rollNumber"
              ref={rollNumberRef}
            />
          </div>
          <div>
            <label className="form-label">Year of Passing</label>
            <input
              type="text"
              className="form-control"
              name="yearOfPassing"
              ref={yearOfPassingRef}
            />
          </div>
        </div>
        <br></br>
        <label className="form-label">Score in 10+2 Exam</label>
        <div className="exam-marks">
          <div className="exam-marks-body">
            <div>
              <center>
                <strong>Subject</strong>
              </center>
            </div>
            <div></div>
            <div>
              <strong>Marks</strong>
            </div>
            <div></div>
            <div>Max Marks</div>
            <div>Obtained</div>

            <label className="form-label">Mathematics</label>
            <input
              type="text"
              className="form-control"
              name="maximumMarks"
              ref={maximumMarksRef1}
            />
            <input
              type="text"
              className="form-control"
              name="marksObtained"
              ref={marksObtainedRef1}
            />
            <label className="form-label">Physics</label>
            <input
              type="text"
              className="form-control"
              name="maximumMarks"
              ref={maximumMarksRef2}
            />
            <input
              type="text"
              className="form-control"
              name="marksObtained"
              ref={marksObtainedRef2}
            />
            <input
              type="text"
              className="form-control"
              placeholder="Subject3"
              name="subjectName"
              ref={subjectNameRef3}
            />
            <input
              type="text"
              className="form-control"
              name="maximumMarks"
              ref={maximumMarksRef3}
            />
            <input
              type="text"
              className="form-control"
              name="marksObtained"
              ref={marksObtainedRef3}
            />
            <input
              type="text"
              className="form-control"
              placeholder="Subject4"
              name="subjectName"
              ref={subjectNameRef4}
            />
            <input
              type="text"
              className="form-control"
              name="maximumMarks"
              ref={maximumMarksRef4}
            />
            <input
              type="text"
              className="form-control"
              name="marksObtained"
              ref={marksObtainedRef4}
            />
            <input
              type="text"
              className="form-control"
              placeholder="Subject5"
              name="subjectName"
              ref={subjectNameRef5}
            />
            <input
              type="text"
              className="form-control"
              name="maximumMarks"
              ref={maximumMarksRef5}
            />
            <input
              type="text"
              className="form-control"
              name="marksObtained"
              ref={marksObtainedRef5}
            />
            <label className="form-label">
              <strong>
                <center>Total</center>
              </strong>
            </label>
            <input
              type="text"
              className="form-control"
              name="totalMaximumMarks"
              ref={totalMaximumMarksRef}
            />
            <input
              type="text"
              className="form-control"
              name="totalMarksObtained"
              ref={totalMarksObtainedRef}
            />
          </div>
          <div>
            <br />
            <br />
            Note: Subjects shall be ; Compulsory (I) Mathematics (ii) Physics
            and one from others subjects can be from:- Chemistry, Computer
            Science, Information Technology, Biology, Informatics Practices,
            Biotechnology, Technical Vocational Subjects, Agriculture,
            Electronics, Entrepreneurship, Engineering Graphics, Business
            Studies and English.
            <br />
            <br />
            Merit shall be based on Mathematics, Physics and subject having
            higher score out of above mentioned eleven subjects.
          </div>
        </div>
        <label className="form-label">Corresponding Address</label>
        <input
          type="text"
          className="form-control"
          name="lineOne"
          ref={lineOneRefC}
        />
        <div className="area">
          <div>
            <label className="form-label">District</label>
            <input
              type="text"
              className="form-control"
              name="district"
              ref={districtRefC}
            />
          </div>
          <div>
            <label className="form-label">State</label>
            <input
              type="text"
              className="form-control"
              name="state"
              ref={stateRefC}
            />
          </div>
          <div>
            <label className="form-label">Pincode</label>
            <input
              type="text"
              className="form-control"
              name="pinCode"
              ref={pinCodeRefC}
            />
          </div>
        </div>
        <label className="form-label">Permanent Address</label>
        <input
          type="text"
          className="form-control"
          name="lineOne"
          ref={lineOneRef}
        />
        <div className="area">
          <div>
            <label className="form-label">District</label>
            <input
              type="text"
              className="form-control"
              name="district"
              ref={districtRef}
            />
          </div>
          <div>
            <label className="form-label">State</label>
            <input
              type="text"
              className="form-control"
              name="state"
              ref={stateRef}
            />
          </div>
          <div>
            <label className="form-label">Pincode</label>
            <input
              type="text"
              className="form-control"
              name="pinCode"
              ref={pinCodeRef}
            />
          </div>
        </div>
        <label className="form-label">Contact Details</label>
        <div className="contact">
          <div>
            <label className="form-label">Mobile Number</label>
            <input
              type="text"
              className="form-control"
              name="mobileNumber"
              ref={mobileNumberRef}
            />
          </div>
          <div>
            <label className="form-label">Telephone Number</label>
            <input
              type="text"
              className="form-control"
              name="landlineNumber"
              ref={landlineNumberRef}
            />
          </div>
        </div>
        <label className="form-label">Email</label>
        <input
          type="text"
          className="form-control"
          name="emailId"
          ref={emailIdRef}
        />
        <div className="statefromboard">
          <div>
            <label className="form-label">10+2 Exam State</label>
            <input
              type="text"
              className="form-control"
              name="tenPlusTwoExamState"
              ref={tenPlusTwoExamStateRef}
            />
          </div>
          <div>
            <label className="form-label">
              Serving or Retired Defence / Paramilitary Personnel / Martyrs Ward
              (son/daughter)
            </label>
            <br></br>
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
              name="forcesBackground"
              ref={forcesBackgroundRef}
            />
            <label class="form-check-label" for="flexCheckDefault">
              Yes
            </label>
          </div>
        </div>
        <label className="form-label">
          Choice of Branch (In Order of Priority)
        </label>
        <div className="branch">
          <div className="branch-body">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">Branch</th>
                  <th scope="col">Code</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Bioinformatics</td>
                  <td>A</td>
                </tr>
                <tr>
                  <td>Biotechnology</td>
                  <td>B</td>
                </tr>
                <tr>
                  <td>Civil Engineering</td>
                  <td colspan="2">C</td>
                </tr>
                <tr>
                  <td>Computer Science Engineering</td>
                  <td colspan="2">D</td>
                </tr>
                <tr>
                  <td>Information Technology</td>
                  <td colspan="2">E</td>
                </tr>
                <tr>
                  <td>Electronics Communication Engineering</td>
                  <td colspan="2">F</td>
                </tr>
                <tr>
                  <td>Electronics Computer Engineering</td>
                  <td colspan="2">G</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="branch-form">
            <label className="form-label">
              <strong>
                <center>PRIORITY</center>
              </strong>
            </label>
            <label className="form-label">
              <strong>
                <center>CODE</center>
              </strong>
            </label>
            <label className="form-label">
              <center>Choice 1</center>
            </label>
            <select className="form-select" name="choiceOne" ref={choiceOneRef}>
              <option selected disabled>
                Select Choice
              </option>
              <option value={"BT"}>Bioinformatics</option>
              <option value={"BI"}>Biotechnology</option>
              <option value={"CE"}>Civil Engineering</option>
              <option value={"CSE"}>Computer Science Engineering</option>
              <option value={"IT"}>Information Technology</option>
              <option value={"ECE"}>
                Electronics Communication Engineering
              </option>
              <option value={"ECM"}>Electronics Computer Engineering</option>
            </select>
            <label className="form-label">
              <center>Choice 2</center>
            </label>
            <select className="form-select" name="choiceTwo" ref={choiceTwoRef}>
              <option selected disabled>
                Select Choice
              </option>
              <option value={"BT"}>Bioinformatics</option>
              <option value={"BI"}>Biotechnology</option>
              <option value={"CE"}>Civil Engineering</option>
              <option value={"CSE"}>Computer Science Engineering</option>
              <option value={"IT"}>Information Technology</option>
              <option value={"ECE"}>
                Electronics Communication Engineering
              </option>
              <option value={"ECM"}>Electronics Computer Engineering</option>
            </select>
            <label className="form-label">
              <center>Choice 3</center>
            </label>
            <select
              className="form-select"
              name="choiceThree"
              ref={choiceThreeRef}
            >
              <option selected disabled>
                Select Choice
              </option>
              <option value={"BT"}>Bioinformatics</option>
              <option value={"BI"}>Biotechnology</option>
              <option value={"CE"}>Civil Engineering</option>
              <option value={"CSE"}>Computer Science Engineering</option>
              <option value={"IT"}>Information Technology</option>
              <option value={"ECE"}>
                Electronics Communication Engineering
              </option>
              <option value={"ECM"}>Electronics Computer Engineering</option>
            </select>
            <label className="form-label">
              <center>Choice 4</center>
            </label>
            <select
              className="form-select"
              name="choiceFour"
              ref={choiceFourRef}
            >
              <option selected disabled>
                Select Choice
              </option>
              <option value={"BT"}>Bioinformatics</option>
              <option value={"BI"}>Biotechnology</option>
              <option value={"CE"}>Civil Engineering</option>
              <option value={"CSE"}>Computer Science Engineering</option>
              <option value={"IT"}>Information Technology</option>
              <option value={"ECE"}>
                Electronics Communication Engineering
              </option>
              <option value={"ECM"}>Electronics Computer Engineering</option>
            </select>
            <label className="form-label">
              <center>Choice 5</center>
            </label>
            <select
              className="form-select"
              name="choiceFive"
              ref={choiceFiveRef}
            >
              <option selected disabled>
                Select Choice
              </option>
              <option value={"BT"}>Bioinformatics</option>
              <option value={"BI"}>Biotechnology</option>
              <option value={"CE"}>Civil Engineering</option>
              <option value={"CSE"}>Computer Science Engineering</option>
              <option value={"IT"}>Information Technology</option>
              <option value={"ECE"}>
                Electronics Communication Engineering
              </option>
              <option value={"ECM"}>Electronics Computer Engineering</option>
            </select>
            <label className="form-label">
              <center>Choice 6</center>
            </label>
            <select className="form-select" name="choiceSix" ref={choiceSixRef}>
              <option selected disabled>
                Select Choice
              </option>
              <option value={"BT"}>Bioinformatics</option>
              <option value={"BI"}>Biotechnology</option>
              <option value={"CE"}>Civil Engineering</option>
              <option value={"CSE"}>Computer Science Engineering</option>
              <option value={"IT"}>Information Technology</option>
              <option value={"ECE"}>
                Electronics Communication Engineering
              </option>
              <option value={"ECM"}>Electronics Computer Engineering</option>
            </select>
            <label className="form-label">
              <center>Choice 7</center>
            </label>
            <select className="form-select" name="choice7" ref={choiceSevenRef}>
              <option selected disabled>
                Select Choice
              </option>
              <option value={"BT"}>Bioinformatics</option>
              <option value={"BI"}>Biotechnology</option>
              <option value={"CE"}>Civil Engineering</option>
              <option value={"CSE"}>Computer Science Engineering</option>
              <option value={"IT"}>Information Technology</option>
              <option value={"ECE"}>
                Electronics Communication Engineering
              </option>
              <option value={"ECM"}>Electronics Computer Engineering</option>
            </select>
          </div>
        </div>
        <label className="form-label">Declaration by the Student:</label>
        <br></br>
        <div className="declaration">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
            name="declaraction"
          />
          <label class="form-check-label" for="flexCheckDefault">
            I, hereby declare that all the particulars stated in this
            application form are true to the best of my knowledge and belief. I
            have read and understood the Information Brochure and the Admission
            procedure and I shall abide by them. In the event of suppression or
            distortion of any fact and understand like date of birth,
            nationality, category, qualification, etc. made in my application
            form, I understand that I will be denied the opportunity to be
            admitted to JUIT and if already admitted, my admission would stand
            cancelled. I also understand that the decision of JUIT regarding my
            admission will be final and binding to me.
          </label>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <center>
          <button type="submit" className="submit" onClick={onSubmitClicked}>
            Submit
          </button>
        </center>
        <br></br>
        <br></br>
        <br></br>
      </form>
    </div>
  );
}

export default FormBody;
