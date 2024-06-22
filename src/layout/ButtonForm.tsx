import React from "react";
import IButtonProps from "../interfaces/IButtonProps";
import styles from "./ButtonForm.module.css";

const Button: React.FC<IButtonProps> = ({type, text, color}) =>{
    
    const btnClasses = `${styles.btn} ${color ? styles[color] : ""}`;
    
    return(
        <button className={btnClasses} type={type}>{text}</button>
    )
}

export default Button; 