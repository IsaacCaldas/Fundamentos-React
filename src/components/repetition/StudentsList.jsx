import './StudentsList.css';

import React from "react";
import students from '../../data/students.js';

export default props => {

  const studentsJSX = students.map(student => {
    return (
      <li key={ students.id }>
        { student.name } tirou <strong> { student.note } </strong> na prova.
      </li>
    );
  });

  return (

    <div className="student-list">
      <ul>
        { studentsJSX }
      </ul>
    </div>

  );

}