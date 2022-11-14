import React, { Component } from "react";
import './EducationExp.css';


class EducationExp extends Component {
    constructor() {
        super();

        this.state = {
            school: "",
            study: "",
            startDate: "",
            endDate: "",
            allowEdit: false,
            // school: "Bakersfield College",
            // study: "Industrial Automation w/ Electronics Option",
            // startDate: "2015",
            // endDate: "2017"
        }

        this.makeEditable = this.makeEditable.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.saveData = this.saveData.bind(this);
    }

    getYears = () => {
        return this.state.endDate - this.state.startDate;
    }

    makeEditable = (e) => {
        // console.log(e.target);
        this.setState({
            allowEdit: true,
        })
        console.log(this.state.allowEdit);
    }

    handleInput = (e) => {
        console.log(e.target.value);
    }

    saveData = (e) => {
        e.preventDefault();
        console.log("clicked button");
    }

    render() {
        return (
            <div>
                <form onSubmit={ this.saveData }>
                    <div>
                        <label htmlFor="school">School:</label> { this.state.allowEdit ? <input id="school" onChange={ this.handleInput } ></input> : this.state.school }
                    </div>
                    <div>
                        <label htmlFor="study">Study:</label> { this.state.allowEdit ? <input id="study" onChange={ this.handleInput } ></input> : this.state.study }
                    </div>
                    <div>
                        <label>Date of Study:</label>
                        { this.state.allowEdit
                            ?
                            <div style={{ display: "inline-block", marginLeft: 4}}> <input id="startDate" onChange={ this.handleInput } ></input> - <input id="endDate" onChange={ this.handleInput } ></input></div>
                            :
                            <div style={{ display: "inline-block", marginLeft: 4}}>
                                { `${this.state.startDate || "Start Date" } - ${this.state.endDate || "End Date" }` } 
                                { (this.getYears() > 0) ? ` (${this.getYears()} yrs)` : null } 
                            </div>
                        }
                        {/* { (this.getYears() > 0) ? ` (${this.getYears()} yrs)` : null } */}
                    </div>
                    { this.state.allowEdit ? <button type="submit">Submit</button> : <button onClick={ this.makeEditable }>Edit</button> }
                </form>
            </div>
        )
    }
}

export default EducationExp;