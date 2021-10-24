import { useState, useEffect } from 'react';
import CourseForm from './components/CourseForm';
import PlannerView from './components/PlannerView';
import './style/css/mainPage.css';

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
      <PlannerView />
    </div>
  );
}

export default App;