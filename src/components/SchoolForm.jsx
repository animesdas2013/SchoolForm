import React from "react";

let name = "Animesh Das";
let fname = "Praful Kumar Das";
let roll_no = 26071999;

// subjects
const sub1 = "English"
const sub2 = "Mathematics"
const sub3 = "Physics"
const sub4 = "Chemistry"
const sub5 = "Computer Science"

// total_marks and marks_obtained
const total_marks = 100;
const marks_obt_eng = 70;
const marks_obt_math = 60;
const marks_obt_phy = 70;
const marks_obt_chem = 50;
const marks_obt_cs = 95;
const total_marks_obt = marks_obt_eng + marks_obt_math + marks_obt_phy + marks_obt_chem + marks_obt_cs 


// percentage obtained in different subjects total percentage
const perc_in_eng = (marks_obt_eng/total_marks)*100;
const perc_in_math = (marks_obt_math/total_marks)*100;
const perc_in_phy = (marks_obt_phy/total_marks)*100;
const perc_in_chem = (marks_obt_chem/total_marks)*100;
const perc_in_cs = (marks_obt_cs/total_marks)*100;
const total_percentage = Math.floor((total_marks_obt/(total_marks*5))*100);

// status
let status = "";
let cssStyle = {}
if(total_percentage >= 60){
    if(marks_obt_eng > 30 && marks_obt_math>30 && marks_obt_phy > 30 && marks_obt_chem > 30 && marks_obt_cs > 30){
        status = "1st Division"
        cssStyle.color = "green"
    }
    else{
        status = "Fail"
        cssStyle.color = "red"
    }
}

else if(total_percentage >=45 && total_percentage <60){
    if(marks_obt_eng > 30 && marks_obt_math>30 && marks_obt_phy > 30 && marks_obt_chem > 30 && marks_obt_cs > 30){
        status = "2nd Division"
        cssStyle.color = "blue"
    }
    else{
        status = "Fail"
        cssStyle.color = "red"
    }
}   


else if(total_percentage >30 && total_percentage <45){
    if(marks_obt_eng > 30 && marks_obt_math>30 && marks_obt_phy > 30 && marks_obt_chem > 30 && marks_obt_cs > 30){
        status = "3rd Division"
        cssStyle.color = "#d2218f"
    }
    else{
        status = "Fail"
        cssStyle.color = "red"
    }
}

else{
    status = "Fail"
    cssStyle.color = "red"
}


// individual subject status style
let cssStyleEng = {}
let cssStyleMath = {}
let cssStylePhy = {}
let cssStyleChem = {}
let cssStyleCs = {}

// for english
if(marks_obt_eng <= 30){
    cssStyleEng.color = "red"
}
else{
    cssStyleEng.color = "black" 
}

// for math
if(marks_obt_math <= 30){
    cssStyleMath.color = "red"
}
else{
    cssStyleMath.color = "black" 
}

// for physics
if(marks_obt_phy <= 30){
    cssStylePhy.color = "red"
}
else{
    cssStylePhy.color = "black" 
}

// for chemistry
if(marks_obt_chem <= 30){
    cssStyleChem.color = "red"
}
else{
    cssStyleChem.color = "black" 
}

// for computer science
if(marks_obt_cs <= 30){
    cssStyleCs.color = "red"
}
else{
    cssStyleCs.color = "black" 
}

// main component
const SchoolForm = () => {
  return (
    <>
      <div className="container">
        <div className="heading">
          <h2>TECHNO INTERNATIONAL BATANAGAR</h2>
          <p>
            Ward No. 30, B7-360, New, Gumar Gala, Maheshtala, West Bengal 700141
          </p>
        </div>

        <div className="description">
          <div className="details">
            <h4>Name : {`${name}`}</h4>
            <h4>Father's Name : {`${fname}`}</h4>
            <h4>Roll No. : {`${roll_no}`}</h4>
          </div>

          <div className="image">
            <img src="school_logo.png" alt="" />
          </div>
        </div>

        <div className="marksobtained">
          <table>
            <thead>
              <tr>
                <th>SUBJECT</th>
                <th>TOTAL MARKS</th>
                <th>MARKS OBTAINED</th>
                <th>PERCENTAGE</th>
              </tr>
            </thead>

            <tbody>
              <tr style={cssStyleEng}>
                <td>{`${sub1}`}</td>
                <td>{`${total_marks}`}</td>
                <td>{`${marks_obt_eng}`}</td>
                <td>{`${perc_in_eng}`}%</td>
              </tr>

              
              <tr style={cssStyleMath}>
                <td>{`${sub2}`}</td>
                <td>{`${total_marks}`}</td>
                <td>{`${marks_obt_math}`}</td>
                <td>{`${perc_in_math}`}%</td>
              </tr>

              
              <tr style={cssStylePhy}>
                <td>{`${sub3}`}</td>
                <td>{`${total_marks}`}</td>
                <td>{`${marks_obt_phy}`}</td>
                <td>{`${perc_in_phy}`}%</td>
              </tr>

              
              <tr style={cssStyleChem}>
                <td>{`${sub4}`}</td>
                <td>{`${total_marks}`}</td>
                <td>{`${marks_obt_chem}`}</td>
                <td>{`${perc_in_chem}`}%</td>
              </tr>

              
              <tr style={cssStyleCs}>
                <td>{`${sub5}`}</td>
                <td>{`${total_marks}`}</td>
                <td>{`${marks_obt_cs}`}</td>
                <td>{`${perc_in_cs}`}%</td>
              </tr>

              <tr>
                <td style={cssStyle}><strong>Grand Total</strong></td>
                <td style={cssStyle}><strong>{`${total_marks*5}`}</strong></td>
                <td style={cssStyle}><strong>{`${total_marks_obt}`}</strong></td>
                <td style={cssStyle}><strong>{`${total_percentage}`}%</strong></td>
              </tr>

            </tbody>
          </table>

          <div className="status" style={cssStyle}>
            <h4>Percentage : {`${total_percentage}`}</h4>
            <h4>Division : {`${status}`}</h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default SchoolForm;
