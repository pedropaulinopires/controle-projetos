import React from "react";
import ISelectInputProps from "../interfaces/ISelectInputProps"
import styles from "./Selected.module.css";

const Selected: React.FC<ISelectInputProps> = ({ textDefault, name, id, required,
    values,
    disabled }) => {
    return (
        <select className={styles.select} name={name} id={id}>
            <option disabled selected>{textDefault}</option>
            {values.map(value => (
                <option key={value.nome} value={value.nome}>{value.nome}</option>
            ))}
        </select>
    )
}

export default Selected;