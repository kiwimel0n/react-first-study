import React from "react";

const students = [
  {
    id : 1,
    name: "Inje1",
  },
  {
    id : 2,
    name: "Inje2",
  },
  {
    id : 3,
    name: "Inje3",
  },
  {
    id : 4,
    name: "Inje4",
  },
  {
    id : 5,
    name: "Inje5",
  },
];

//id 값을 키로 주는 방식
// function AttendanceBook(props) {
//   return (
//       <ul>
//         {students.map((student) => {
//           return <li key={student.id}> {student.name}</li>;
//         })}
//       </ul>
//   );
// }

// key를 포맷팅 된 문자열로 변경!
// function AttendanceBook(props) {
//   return (
//       <ul>
//         {students.map((student) => {
//           return <li key={`student.id-${student.id}`}> {student.name}</li>;
//         })}
//       </ul>
//   );
// }

// key를 index로 변경!
function AttendanceBook(props) {
  return (
      <ul>
        {students.map((student, index) => {
          return <li key={index}> {student.name}</li>;
        })}
      </ul>
  );
}
export default AttendanceBook;