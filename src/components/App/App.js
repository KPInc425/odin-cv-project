import React, { Component } from "react";
import ContactInfo from "../ContactInfo/ContactInfo";
import EducationExp from "../EducationExp/EducationExp";


class App extends Component {
  constructor() {
    super();

    this.state = {
      eduExpArray: [
        {
        school: "",
        study: "", 
        startDate: "",
        endDate: "",
        }
      ],
    }
  }


  addNewEduExpTemplate = (e) => {
    console.log(e.target.parentNode);
    
    this.setState({
      eduExpArray: [...this.state.eduExpArray, {school: "", study: "", startDate: "", endDate: ""}]
    })
  }

  addEduExp = (newExp, index) => {
    const tmpArray = this.state.eduExpArray;

    tmpArray[index] = newExp;

    this.setState({
      eduExpArray: tmpArray,
    })
  }



  render() {
    return (
      <div className="App">
        <ContactInfo />
        <div id="eduExp">
          <h2 style={{ display: "inline-block", marginRight: 5}}>Education Experience</h2>
          <button onClick={ this.addNewEduExpTemplate }>Add Experience</button>
          {this.state.eduExpArray.map((item, index) => (<EducationExp key={ index } eduData={ item } id={ index } addEduExp={ this.addEduExp }/>))}
        </div>
      </div>
    );
  }
}

export default App;
