import React, { useState } from 'react';
import { course } from '../App';
import '../style/css/courseForm.css';

interface PropsInterface {
    onSubmitForm: (data: course) => void;
};

const CourseForm = (props : PropsInterface) => {
    
    const[dataInput, setdataInput] = useState<course>({courseName: '', courseCode: '', requisites: '', semester: '', credits: 0, color: ''}
    );

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setdataInput({...dataInput, [event.target.name]: event.target.value });
    };

    const submitForm = (event: React.FormEvent) => {
        event.preventDefault();
        props.onSubmitForm(dataInput);
    };

    return (
        <div className="courseFormContainer">
            <h1>Formulario de creación de curso</h1>
            <form className="courseForm" onSubmit={submitForm}>

                <div className="inputField">
                    <label>Nombre del curso</label>
                    <input name="courseName" id="courseName" type="text" onChange={handleChange}/>
                </div>
                
                <div className="inputField">
                    <label>NRC</label>
                    <input name="courseCode" id="courseCode" type="text" onChange={handleChange}/>
                </div>

                <div className="inputField">
                    <label>Requisitos</label>
                    <input name="requisites" id="requisites" type="text" onChange={handleChange}/>
                </div>

                <div className="inputField">
                    <label>Semestre</label>
                    <input name="semester" id="semester" type="text" onChange={handleChange}/>
                </div>

                <div className="inputField">
                    <label>Créditos</label>
                    <input name="credits" id="credits" type="text" onChange={handleChange}/>
                </div>
                
                <div className="inputField">
                    <label>Color (hexadecimal)</label>
                    <input name="color" id="color" type="text" onChange={handleChange}/>
                </div>
                
                <div className="buttonContainer">
                    <button type="submit">Añadir curso</button>
                </div>
            </form>
        </div>
    );
};

export default CourseForm;