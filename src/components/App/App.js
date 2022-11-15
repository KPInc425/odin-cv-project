import React, { Component } from "react";
import ContactInfo from "../ContactInfo/ContactInfo";
import EducationExp from "../EducationExp/EducationExp";
import PracticalExp from "../PracticalExp/PracticalExp";


class App extends Component {
  constructor() {
    super();

    this.state = {
      eduExpArray: [],
      practExpArray: [],
    }
  }


  addNewEduExpTemplate = (e) => {
    console.log(e.target.parentNode);
    
    this.setState({
      eduExpArray: [...this.state.eduExpArray, {school: "", study: "", startDate: "", endDate: ""}]
    })
  }

  addNewPractExpTemplate = (e) => {
    console.log(e.target.parentNode);
    
    this.setState({
      practExpArray: [...this.state.practExpArray, {company: "", position: "", title: "", tasks: "", startDate: "", endDate: ""}]
    })
  }

  addEduExp = (newExp, index) => {
    const tmpArray = this.state.eduExpArray;

    tmpArray[index] = newExp;

    this.setState({
      eduExpArray: tmpArray,
    })
  }

  addPractExp = (newExp, index) => {
    const tmpArray = this.state.practExpArray;

    tmpArray[index] = newExp;

    this.setState({
      practExpArray: tmpArray,
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
        <div id="practExp">
          <h2 style={{ display: "inline-block", marginRight: 5}}>Practical Experience</h2>
          <button onClick={ this.addNewPractExpTemplate }>Add Experience</button>
          {this.state.practExpArray.map((item, index) => (<PracticalExp key={ index } practData={ item } id={ index } addPractExp={ this.addPractExp }/>))}
        </div>
      </div>
    );
  }
}

export default App;

