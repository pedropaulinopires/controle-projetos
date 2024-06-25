import React, { FormEventHandler, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./NovoProjeto.module.css"
import Formulario from "../layout/Formulario"
import InputFormulario from "../Utils/InputFormulario";
import SelectInput from "../Utils/SelectInput";
import TiposProjetos from "../Utils/TiposProjetos";
import INovoProjetoProps from "../interfaces/INovoProjetoProps";

const NovoProjeto: React.FC<INovoProjetoProps> = ({ }) => {

    let inputs: Array<InputFormulario> = [
        new InputFormulario("text", "Nome do Projeto", "nome_projeto", "nome_projeto", true, undefined, false),
        new InputFormulario("number", "Orçamento do projeto", "orcamento_projeto", "orcamento_projeto", true, undefined, false),
    ];

    const [tiposProjetos, setTiposProjetos] = useState<TiposProjetos[]>([]);
    const navigation = useNavigate();

    let selects: Array<SelectInput> = [
        new SelectInput("Selecione uma categoria", "categoria_projeto", "categoria_projeto", true, tiposProjetos, false),
    ];

    function CarregarCategorias() {

        let listaOptions: Array<TiposProjetos> = [];

        fetch('http://localhost:5000/categories', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(response => response.json())
            .then(data => {
                data.map((item: TiposProjetos) => {
                    listaOptions.push(new TiposProjetos(item.id, item.nome));
                    setTiposProjetos(listaOptions);
                });
            })
            .catch(error => { console.log(error) })

    }

    useEffect(() => {
        CarregarCategorias();
    }, []);

    function submit(projeto: object | undefined) {
        fetch('http://localhost:5000/projects', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(projeto),
        })
            .then(resp => resp.json())
            .then(data => { navigation('/projetos') })
            .catch(error => { console.log(error) })

    }

    return (
        <section className={styles.novo_projeto}>
            <h1>Novo Projeto</h1>
            <p>Aqui você poderá cadastrar um novo projeto para a sua gestao.</p>
            <Formulario action={submit} inputs={inputs} selects={selects} />
        </section>
    )
}

export default NovoProjeto
