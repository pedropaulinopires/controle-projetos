import React from "react"
import styles from "./NovoProjeto.module.css"
import Formulario from "../layout/Formulario"
import InputFormulario from "../Utils/InputFormulario";
import SelectInput from "../Utils/SelectInput";
import TiposProjetos from "../Utils/TiposProjetos";

const NovoProjeto:React.FC = () => {

    let inputs:Array<InputFormulario> = [
        new InputFormulario("text", "Nome do Projeto", "nome_projeto","nome_projeto", true,undefined,false),
        new InputFormulario("number", "Orçamento do projeto", "orcamento_projeto","orcamento_projeto", true,undefined,false),
     ];

     let tiposProjetos: Array<TiposProjetos> = [
        new TiposProjetos("Desenvolvimento Web")
     ];

     let selects:Array<SelectInput> = [
        new SelectInput("Selecione uma categoria","categoria_projeto","categoria_projeto", true, tiposProjetos, false),
     ];

    return (
        <section className={styles.novo_projeto}>
            <h1>Novo Projeto</h1>
            <p>Aqui você poderá cadastrar um novo projeto para a sua gestao.</p>
            <Formulario action="/" inputs={inputs} selects={selects} />
        </section>
    )
}

export default NovoProjeto
