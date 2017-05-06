import React, { Component } from 'react';
import './App.css';

import Teacher from '../Teacher';
import Student from '../Student';

import { saveStudentAPI, fetchStudentsAPI } from '../../api/studentAPI';
import { saveTeacherAPI, fetchTeachersAPI } from '../../api/teacherAPI';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teachers: [],
      students: []
    };
    this.saveTeacher = this.saveTeacher.bind(this);
    this.saveStudent = this.saveStudent.bind(this);
    this.fetchTeachers = this.fetchTeachers.bind(this);
    this.fetchStudents = this.fetchStudents.bind(this);

    this.fetchData();
  }

  fetchData() {
    this.fetchStudents();
    this.fetchTeachers();
  }

  fetchTeachers() {
    let self = this;
    fetchStudentsAPI(this.props.baseUrl + '/teachers').then((teachers) => {
      console.log("Teachers response", teachers);
      self.setState({
        teachers
      });
    });
  }

  fetchStudents() {
    let self = this;
    fetchTeachersAPI(this.props.baseUrl + '/students').then((students) => {
      console.log("Students response", students);
      self.setState({
        students
      });
    });
  }

  saveTeacher(teacherData) {
    let self = this;
    saveTeacherAPI(this.props.baseUrl + '/teacher', teacherData).then((resp) => {
      console.log(resp);
      self.fetchTeachers();
    });
  }

  saveStudent(studentData) {
    let self = this;
    saveStudentAPI(this.props.baseUrl + '/student', studentData).then((resp) => {
      console.log(resp);
      self.fetchStudents();
    });
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Schoolio</h2>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <Teacher
              saveTeacher={this.saveTeacher}
              teachers={this.state.teachers}
            />
          </div>
          <div className="col-sm-6">
            <Student
              saveStudent={this.saveStudent}
              students={this.state.students}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
