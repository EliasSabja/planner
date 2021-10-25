import { useState, useEffect } from 'react';
import CourseForm from './components/CourseForm';
import PlannerView from './components/PlannerView';
import './style/css/mainPage.css';

export interface Course {
  courseName: string;
  courseCode: string;
  requisites: string;
  semester: string;
  credits: number;
  color: string;
};

const App = (): JSX.Element => {

  const[courses, setCourses] = useState<Course[]>([]);

  const newCourse = (data: Course) : void => {
    let coursesTemp = [...courses];
    coursesTemp.push(data);
    setCourses(coursesTemp);
    // Insert to DB
  };

  return (
    <div className="App">
      <CourseForm onSubmitForm={newCourse}/>
      <PlannerView coursesList={courses}/>
    </div>
  );
}

export default App;