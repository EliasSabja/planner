import { useState, useEffect } from 'react';
import { Course } from '../App';
import '../style/css/courseDisplay.css';

interface courseInterface {
    course: Course;
}

const CourseContainer = (props : courseInterface) => {

    return (
        <div className="courseContainer">
            <h1>{props.course.courseName}</h1>
            <h2>{props.course.courseCode}</h2>
        </div>
        
    );
};

export default CourseContainer;