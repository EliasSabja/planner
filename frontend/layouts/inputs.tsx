import React from "react";

interface Props {
    name: string;
    id: string;
    type: string;
    label: string;
    update: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<Props> = (props: Props) => {
    return(

    <div className="inputField">
        <label>{props.label}</label>
        <input name={props.name} id={props.id} type={props.type} onChange={props.update}/>
    </div>
    
    )
}

export default InputField;
