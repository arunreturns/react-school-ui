import React, { Component } from 'react';
import './styles.css';
import LoadingListItem from '../LoadingListItem';

class StudentsList extends Component {
  constructor(props) {
    super(props);
    this.renderStudents = this.renderStudents.bind(this);
  }
  renderStudents() {
    if (typeof this.props.students === 'undefined' || this.props.students.length === 0) {
      return (
        <LoadingListItem />
      );
    }
    let StudentsList = this.props.students.map((Student) => {
      return (
        <li className="list-group-item" key={Student.studentName + Student.studentId}>
          {Student.studentName} - {Student.studentClass}
        </li>
      );
    });
    return StudentsList;
  }
  render() {
    return (
      <div className="StudentList">
        <div className="row">
          <div className="col-sm-8 col-sm-offset-2">
            <ul className="list-group">
              {this.renderStudents()}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default StudentsList;
