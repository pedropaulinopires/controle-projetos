import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";

const NavBar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.img_navbar}>
      </div>
      <div className={styles.itens_menu}>
        <span><NavLink className={({ isActive }) => (isActive ? `${styles.link} ${styles.link_active}` : `${styles.link}`)} to="/">Home</NavLink></span>
        <span><NavLink className={({ isActive }) => (isActive ? `${styles.link} ${styles.link_active}` : `${styles.link}`)} to="/projetos">Projetos</NavLink></span>
      </div>
    </nav>
  );
};

export default NavBar;