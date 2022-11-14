import React, { Component } from "react";
import ContactInfo from "../ContactInfo/ContactInfo";
import EducationExp from "../EducationExp/EducationExp";


class App extends Component {
  constructor() {
    super();

    this.state = {
      eduExpArray: [],
    }
  }


  addNewEduExp = (e) => {
    console.log(e.target.parentNode);
    
    this.setState({
      eduExpArray: [...this.state.eduExpArray, {school: "", study: "", startDate: "", endDate: ""}]
    })
   
    
  }

  render() {
    return (
      <div className="App">
        <ContactInfo />
        <div id="eduExp">
          <h2 style={{ display: "inline-block", marginRight: 5}}>Education Experience</h2>
          <button onClick={ this.addNewEduExp }>Add Experience</button>
          {this.state.eduExpArray.map((item) => (<EducationExp key={ Math.floor(Math.random() * 987654)}/>))}
        </div>
      </div>
    );
  }
}

export default App;
