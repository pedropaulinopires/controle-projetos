import React, { ChangeEventHandler } from "react";
import IFormularioProps from "../interfaces/IFormularioProps";
import Button from "./ButtonForm";
import styles from "./Formulario.module.css";
import Selected from "./Selected";

const Formulario: React.FC<IFormularioProps> = ({ action, inputs, selects, projeto }) => {

    const [projetoObj, setProjeto] = React.useState<object | undefined>(projeto || {});

    const onHandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setProjeto({ ...projetoObj, [event.target.name]: event.target.value });
    }

    const onHandleChangeCategory = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setProjeto({
            ...projetoObj, category: {
                id: event.target.value,
                nome: event.target.options[event.target.selectedIndex].text,
            }
        });
    }

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        action(projetoObj);
    }

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            {inputs.map(input => (
                <div className={styles.campo}>
                    <input type={input.type} placeholder={input.placeholder} name={input.name} id={input.id} data-tr-require={input.required} value={input.value} disabled={input.disabled} onChange={onHandleChange}></input>
                </div>
            ),)}

            {selects?.map(select => (
                <Selected handleChange={onHandleChangeCategory} textDefault={select.textDefault} name={select.name} id={select.id} required={select.required} values={select.values} disabled={select.disabled} />
            ))}

            <div className={styles.btns}>
                <Button type="reset" text="Limpar" color="red" />
                <Button type="submit" text="Salvar" />
            </div>
        </form>
    )
}

export default Formulario;