import React, { Component } from 'react';
import './styles.css';
import LoadingListItem from '../LoadingListItem';

class TeachersList extends Component {
  constructor() {
    super();
    this.renderTeachers = this.renderTeachers.bind(this);
  }
  renderTeachers() {
    if (typeof this.props.teachers === 'undefined' || this.props.teachers.length === 0) {
      return (
        <LoadingListItem />
      );
    }
    let teachersList = this.props.teachers.map((teacher) => {
      return (
        <li className="list-group-item" key={teacher.teacherName + teacher.teacherId}>
          {teacher.teacherName} - {teacher.teacherSubject}
        </li>
      );
    });
    teachersList.push(
      <LoadingListItem />
    );
    return teachersList;
  }
  render() {
    return (
      <div className="TeacherList">
        <div className="row">
          <div className="col-sm-8 col-sm-offset-2">
            <ul className="list-group">
              {this.renderTeachers()}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default TeachersList;
