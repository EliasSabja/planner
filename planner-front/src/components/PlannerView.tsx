import { useState, useEffect } from 'react';
import { Course } from '../App';
import CoursesList from './CoursesList';
import SemesterContainer from './SemesterContainer';

interface coursesInterface {
    coursesList: Course[];
}

const PlannerView = (props : coursesInterface) => {

    const[courses, setCourses] = useState<Course[]>(props.coursesList);

    useEffect(() => {
        setCourses(props.coursesList);
        console.log(props.coursesList);
    }, [props.coursesList])

    return (
        <div>
            <h1>Cursos</h1>
            <CoursesList coursesList={courses}/>
        </div>
    );

    /*return (
        <div>
            <h1>Cursos</h1>
            <CoursesList coursesList={courses}/>
            <h1>Vista del planner</h1>
            <SemesterContainer />
        </div>
    );*/
};

export default PlannerView;