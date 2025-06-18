import React from 'react';
import './Staff.css';

const staffMembers = [
  {
    name: 'Dr. Robert Lane',
    img: 'https://emeritus.qodeinteractive.com/wp-content/uploads/2020/11/course-single-instructor-02-big.jpg',
  },
  {
    name: 'Prof. Robert Lane',
    img: 'https://emeritus.qodeinteractive.com/wp-content/uploads/2020/11/course-single-instructor-02-big.jpg',
  },
  {
    name: 'Dr. Robert Lane',
    img: 'https://emeritus.qodeinteractive.com/wp-content/uploads/2020/11/course-single-instructor-02-big.jpg',
  },
  {
    name: 'Dr. Robert Lane',
    img: 'https://emeritus.qodeinteractive.com/wp-content/uploads/2020/11/course-single-instructor-02-big.jpg',
  },
  {
    name: 'Dr. Robert Lane',
    img: 'https://emeritus.qodeinteractive.com/wp-content/uploads/2020/11/course-single-instructor-02-big.jpg',
  },
  {
    name: 'Dr. Robert Lane',
    img: 'https://emeritus.qodeinteractive.com/wp-content/uploads/2020/11/course-single-instructor-02-big.jpg',
  },
  {
    name: 'Dr. Robert Lane',
    img: 'https://emeritus.qodeinteractive.com/wp-content/uploads/2020/11/course-single-instructor-02-big.jpg',
  },
  {
    name: 'Dr. Robert Lane',
    img: 'https://emeritus.qodeinteractive.com/wp-content/uploads/2020/11/course-single-instructor-02-big.jpg',
  },
];

function Staff() {
  return (
    <div className="staff-container">
      {staffMembers.map((staff, index) => (
        <div className="staff-card" key={index}>
          <img src={staff.img} alt={staff.name} />
          <p>{staff.name}</p>
        </div>
      ))}
    </div>
  );
}

export default Staff;
