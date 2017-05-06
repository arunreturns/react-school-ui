import { doGet, doPost } from './fetchAPI';

export function saveTeacherAPI(fetchUrl, teacherData) {
  let req = {
    teacherName: teacherData.teacherName,
    teacherSubject: teacherData.teacherSubject,
    dateOfBirth: teacherData.dateOfBirth
  };
  return doPost(fetchUrl, req);
}

export function fetchTeachersAPI(fetchUrl, studentData) {
  return doGet(fetchUrl);
}
