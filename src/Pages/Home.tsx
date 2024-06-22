import React from "react";
import styles from "./Home.module.css"
import BtnLink from "../layout/BtnLink";

const Home: React.FC = () => {
    return (
        <section className={styles.home}>
            <h1>Seja bem-vindo ao <span>Gestão de projetos</span></h1>
            <p>Aqui você pode gerenciar todos os seus projetos de maneira simples e eficiente!</p>	
            <BtnLink to="/novo-projeto" text="Começar agora" />
            <div className={styles.logo}></div>
        </section>
    );
};

export default Home;