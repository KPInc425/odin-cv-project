import React, { Component } from "react";
import './EducationExp.css';


class EducationExp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            school: props.eduData.school,
            study: props.eduData.study,
            startDate: props.eduData.startDate,
            endDate: props.eduData.endDate,
            allowEdit: false,
            index: props.id,
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

        if (e.target.id === "school") {
            this.setState({
                school: e.target.value,
            })
        } else if (e.target.id === "study") {
            this.setState({
                study: e.target.value,
            })
        } else if (e.target.id === "startDate") {
            this.setState({
                startDate: e.target.value,
            })
        } else if (e.target.id === "endDate") {
            this.setState({
                endDate: e.target.value,
            })
        }
    }

    saveData = (e) => {
        e.preventDefault();
        console.log("clicked button");
    }

    cancelEdit = (e) => {
        console.log(e.target.parentNode);
        e.preventDefault();
        this.setState({
            allowEdit: false,
        })
        this.props.addEduExp({
            school: this.state.school,
            study: this.state.study,
            startDate: this.state.startDate,
            endDate: this.state.endDate,
        }, this.state.index);
    }

    render() {
        return (
            <div>
                <form onSubmit={ this.saveData } id={this.props.id}>
                    <div>
                        <label htmlFor="school">School:</label> 
                        { this.state.allowEdit 
                            ? 
                            <input id="school" onChange={ this.handleInput } placeholder={ this.state.school }></input> 
                            : 
                            this.state.school 
                        }
                    </div>
                    <div>
                        <label htmlFor="study">Study:</label> 
                        { this.state.allowEdit 
                            ? 
                            <input id="study" onChange={ this.handleInput } placeholder={ this.state.study }></input> 
                            : 
                            this.state.study 
                        }
                    </div>
                    <div>
                        <label>Date of Study:</label>
                        { this.state.allowEdit
                            ?
                            <div style={{ display: "inline-block"}}> 
                                <input id="startDate" onChange={ this.handleInput } placeholder={ this.state.startDate }></input> 
                                - 
                                <input id="endDate" onChange={ this.handleInput } placeholder={ this.state.endDate }></input>
                            </div>
                            :
                            <div style={{ display: "inline-block"}}>
                                { `${this.state.startDate || "Start Date" } - ${this.state.endDate || "End Date" }` } 
                                { (this.getYears() > 0) ? ` (${this.getYears()} yrs)` : null } 
                            </div>
                        }
                        {/* { (this.getYears() > 0) ? ` (${this.getYears()} yrs)` : null } */}
                    </div>
                    { this.state.allowEdit 
                        ? 
                        <button onClick={ this.cancelEdit }>Done</button> 
                        : 
                        <button onClick={ this.makeEditable }>Edit</button> 
                    }
                </form>
            </div>
        )
    }
}

export default EducationExp;