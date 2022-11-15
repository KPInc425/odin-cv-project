import React, { Component } from "react";
import './EducationExp.css';


class EducationExp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            school: "",
            study: "",
            startDate: "",
            endDate: "",
            allowEdit: false,
            // index: props.id,
            // school: "Bakersfield College",
            // study: "Industrial Automation w/ Electronics Option",
            // startDate: "2015",
            // endDate: "2017"
        }

        this.makeEditable = this.makeEditable.bind(this);
        this.handleInput = this.handleInput.bind(this);
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
        }, this.props.index);
    }

    render() {
        return (
            <div>
                <form onSubmit={ (e) => e.preventDefault() } id={this.props.id}>
                    <div>
                        <label htmlFor="school">School:</label> 
                        { this.state.allowEdit 
                            ? 
                            <input id="school" onChange={ this.handleInput } placeholder={ this.props.school }></input> 
                            : 
                            this.props.school 
                        }
                    </div>
                    <div>
                        <label htmlFor="study">Study:</label> 
                        { this.state.allowEdit 
                            ? 
                            <input id="study" onChange={ this.handleInput } placeholder={ this.props.study }></input> 
                            : 
                            this.props.study 
                        }
                    </div>
                    <div>
                        <label>Date of Study:</label>
                        { this.state.allowEdit
                            ?
                            <div style={{ display: "inline-block"}}> 
                                <input id="startDate" onChange={ this.handleInput } placeholder={ this.props.startDate }></input> 
                                - 
                                <input id="endDate" onChange={ this.handleInput } placeholder={ this.props.endDate }></input>
                            </div>
                            :
                            <div style={{ display: "inline-block"}}>
                                { `${this.props.startDate || "Start Date" } - ${this.props.endDate || "End Date" }` } 
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