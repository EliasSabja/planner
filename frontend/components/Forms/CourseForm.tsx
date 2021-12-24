import React, { useState } from 'react';
import { course } from '../../interfaces/course';
import InputField from '../../layouts/inputs';

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
                <InputField name="courseName" id="courseName" type="text" update={handleChange} label="Nombre del curso 2" />
                <InputField name="courseCode" id="courseCode" type="text" update={handleChange} label="NRC" />
                <InputField name="requisites" id="requisites" type="text" update={handleChange} label="Requisitos" />
                <InputField name="semester" id="semester" type="text" update={handleChange} label="Semestre" />
                <InputField name="credits" id="credits" type="text" update={handleChange} label="Créditos" />
                <InputField name="color" id="color" type="text" update={handleChange} label="Color (hexadecimal)" />
                <div className="buttonContainer">
                    <button type="submit">Añadir curso</button>
                </div>
            </form>
        </div>
    );
};

export default CourseForm;