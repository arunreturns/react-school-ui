import React, { Component } from 'react';
import './styles.css';
import StudentsList from '../StudentsList';

class Student extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.saveStudent = this.saveStudent.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  saveStudent() {
    this.props.saveStudent(this.state);
    this.setState({
      studentName: '',
      studentClass: '',
      dateOfBirth: ''
    });
  }

  render() {
    return (
      <div className="Student">
        <div className="row">
          <div className="col-sm-12">
            <StudentsList
              students={this.props.students}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <div className="form-group form-inline">
              <label htmlFor="studentName">Student Name: </label>
              <input type="text" className="form-control" onChange={this.handleChange} name="studentName" id="studentName" />
            </div>
            <div className="form-group form-inline">
              <label htmlFor="dateOfBirth">Date Of Birth: </label>
              <input type="date" className="form-control" onChange={this.handleChange} name="dateOfBirth" id="dateOfBirth" />
            </div>
            <div className="form-group form-inline">
              <label htmlFor="studentClass">Student Class: </label>
              <input type="text" className="form-control" onChange={this.handleChange} name="studentClass" id="studentClass" />
            </div>
            <div className="form-group form-inline">
              <button className="btn btn-primary" onClick={this.saveStudent}>Save</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Student;
