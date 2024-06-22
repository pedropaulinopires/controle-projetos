import React from "react";
import IFormularioProps from "../interfaces/IFormularioProps";
import Button from "./ButtonForm";
import styles from "./Formulario.module.css";
import Selected from "./Selected";

const Formulario: React.FC<IFormularioProps> = ({ action, inputs, selects }) => {
    return (
        <form className={styles.form}>
            {inputs.map(input => (
                <div className={styles.campo}>
                    <input type={input.type} placeholder={input.placeholder} name={input.name} id={input.id} data-tr-require={input.required} value={input.value} disabled={input.disabled}></input>
                </div>
            ),)}

            {selects?.map(select => (
                <Selected textDefault={select.textDefault} name={select.name} id={select.id} required={select.required} values={select.values} disabled={select.disabled}/>
            ))}

            <div className={styles.btns}>
                <Button type="reset" text="Limpar" color="red" />
                <Button type="submit" text="Salvar" />
            </div>
        </form>
    )
}

export default Formulario;