import React from "react";
import styles from "./Footer.module.css"
import {FaFacebook, FaInstagram, FaLinkedin} from "react-icons/fa";

const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.medias}><FaFacebook/> <FaInstagram/> <FaLinkedin/></div>
            <p> Gestão de projetos © 2024.</p>
        </footer>
    )
}

export default Footer;