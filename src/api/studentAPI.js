import { doGet, doPost } from './fetchAPI';

export function saveStudentAPI(fetchUrl, studentData) {
  let req = {
    studentName: studentData.studentName,
    studentClass: studentData.studentClass,
    dateOfBirth: studentData.dateOfBirth
  };
  return doPost(fetchUrl, req);
}

export function fetchStudentsAPI(fetchUrl, studentData) {
  return doGet(fetchUrl);
}
