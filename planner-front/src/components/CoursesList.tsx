import { cpus } from 'os';
import { useState, useEffect } from 'react';
import { Course } from '../App';
import CourseContainer from './CourseContainer';

interface coursesInterface {
    coursesList: Course[];
}

const CoursesList = (props : coursesInterface) => {

    const[courses, setCourses] = useState<Course[]>(props.coursesList);
    
    useEffect(() => {
        setCourses(props.coursesList);
    }, [props.coursesList])

    return( 
    <div className="courseListContainer">
        {courses.map((course, i) => 
        <CourseContainer key={i} course={course}/>
    )}
    </div>)
};

export default CoursesList;