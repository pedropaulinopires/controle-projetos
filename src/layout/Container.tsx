import React from "react";
import styles from "./Container.module.css"
import IContainerProps from "../interfaces/IContainerProps";


const Container: React.FC<IContainerProps> = ({ children, customClass }) => {
    
    const containerClasses = `${styles.container} ${customClass}`;
    
    return (
        <div className={containerClasses}>{children}</div>
    )
}

export default Container;