import React from "react";

const a = 'a';
export interface ButtonProps {
    label: string;
}

const Button = (props: ButtonProps) => {
    return <button>{props.label}</button>;
};

export default Button;
