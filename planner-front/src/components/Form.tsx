import React, { useState } from 'react';
import { course } from '../App';

interface PropsInterface {
    onSubmitForm: (data: course) => void;
};

const Form = (props : PropsInterface) => {
    
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
        <div>
            <h1>Formulario de creación de curso</h1>
            <form onSubmit={submitForm} >
                <input name="courseName" id="courseName" type="text" onChange={handleChange}/>
                <input name="courseCode" id="courseCode" type="text" onChange={handleChange}/>
                <input name="requisites" id="requisites" type="text" onChange={handleChange}/>
                <input name="semester" id="semester" type="text" onChange={handleChange}/>
                <input name="credits" id="credits" type="text" onChange={handleChange}/>
                <input name="color" id="color" type="text" onChange={handleChange}/>
                <button type="submit">Añadir curso</button>
            </form>
        </div>
    );
};

export default Form;