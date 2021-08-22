import { useState, useEffect } from 'react';
import Form from './components/Form';
import PlannerView from './components/PlannerView';


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
      <Form onSubmitForm={newCourse}/>
      <PlannerView />
    </div>
  );
}

export default App;