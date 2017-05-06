import React, { Component } from 'react';
import './styles.css';
import TeachersList from '../TeachersList';

class Teacher extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.saveTeacher = this.saveTeacher.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  saveTeacher() {
    this.props.saveTeacher(this.state);
    this.setState({
      teacherName: '',
      teacherSubject: '',
      dateOfBirth: ''
    });
  }

  render() {
    return (
      <div className="Teacher">
        <div className="row">
          <div className="col-sm-12">
            <TeachersList
              teachers={this.props.teachers}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <div className="form-group form-inline">
              <label htmlFor="teacherName">Teacher Name: </label>
              <input type="text" className="form-control" onChange={this.handleChange} name="teacherName" id="teacherName" />
            </div>
            <div className="form-group form-inline">
              <label htmlFor="dateOfBirth">Date Of Birth: </label>
              <input type="date" className="form-control" onChange={this.handleChange} name="dateOfBirth" id="dateOfBirth" />
            </div>
            <div className="form-group form-inline">
              <label htmlFor="teacherSubject">Teacher Subject: </label>
              <input type="text" className="form-control" onChange={this.handleChange} name="teacherSubject" id="teacherSubject" />
            </div>
            <div className="form-group form-inline">
              <button className="btn btn-primary" onClick={this.saveTeacher}>Save</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Teacher;
