import React from "react";
import { Link } from "react-router-dom";
import styles from "./BtnLink.module.css";
import IBtnLinkProps from "../interfaces/IBtnLinkProps";

const BtnLink: React.FC<IBtnLinkProps> = ({to, text}) =>{
    return(
        <Link className={styles.btn} to={to}>{text}</Link>
    )
}

export default BtnLink;