import React from "react";

class TiposProjetos {
    id: number;
    nome: string;

    public constructor(
        id:number,
        nome: string) {
        this.id = id;
        this.nome = nome;
    }
}

export default TiposProjetos;