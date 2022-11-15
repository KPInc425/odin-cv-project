import React, { Component } from "react";
import './PracticalExp.css';

class PracticalExp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            company: props.practData.company, 
            position: props.practData.position, 
            title: props.practData.title, 
            tasks: props.practData.tasks, 
            startDate: props.practData.startDate, 
            endDate: props.practData.endDate,
            allowEdit: false,
            index: props.id,
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

        if (e.target.id === "company") {
            this.setState({
                company: e.target.value,
            })
        } else if (e.target.id === "position") {
            this.setState({
                position: e.target.value,
            })
        } else if (e.target.id === "title") {
            this.setState({
                title: e.target.value,
            })
        } else if (e.target.id === "tasks") {
            this.setState({
                tasks: e.target.value,
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
        this.props.addPractExp({
            company: this.state.company, 
            position: this.state.position, 
            title: this.state.title, 
            tasks: this.state.tasks, 
            startDate: this.state.startDate, 
            endDate: this.state.endDate,
        }, this.state.index);
    }

    render() {
        return (
            <div>
            <form onSubmit={ (e) => e.preventDefault() } id={this.props.id}>
                <div>
                    <label htmlFor="company">Company:</label> 
                    { this.state.allowEdit 
                        ? 
                        <input id="company" onChange={ this.handleInput } placeholder={ this.state.company }></input> 
                        : 
                        this.state.company 
                    }
                </div>
                <div>
                    <label htmlFor="position">Position:</label> 
                    { this.state.allowEdit 
                        ? 
                        <input id="position" onChange={ this.handleInput } placeholder={ this.state.position }></input> 
                        : 
                        this.state.position 
                    }
                </div>
                <div>
                    <label htmlFor="title">Title:</label> 
                    { this.state.allowEdit 
                        ? 
                        <input id="title" onChange={ this.handleInput } placeholder={ this.state.title }></input> 
                        : 
                        this.state.title 
                    }
                </div>
                <div>
                    <label htmlFor="tasks">Tasks:</label> 
                    { this.state.allowEdit 
                        ? 
                        <input id="tasks" onChange={ this.handleInput } placeholder={ this.state.tasks }></input> 
                        : 
                        this.state.tasks 
                    }
                </div>
                
                <div>
                    <label>Date of Work:</label>
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

export default PracticalExp;