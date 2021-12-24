import { useState, useEffect } from 'react';
import CourseForm from '../components/Forms/CourseForm';
import Planner from '../components/Containers/Planner';

export interface course {
  courseName: string;
  courseCode: string;
  requisites: string;
  semester: string;
  credits: number;
  color: string;
};


const App = (): JSX.Element => {

  const[courseData, setCourseData] = useState<course[]>([]);

  const newCourse = (data: course) : void => {
    console.log("Datos recibidos:", data);
    // Insert to DB
    
  };

  return (
    <div className="App">
      <CourseForm onSubmitForm={newCourse}/>
      <Planner />
    </div>
  );
}

export default App;