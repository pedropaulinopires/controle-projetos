import React from "react";
import { Link } from "react-router-dom";

const NavBar: React.FC = () => {
  return (
    <nav>
      <div><Link to="/">Home</Link></div>
      <div><Link to="/projetos">Projetos</Link></div>
    </nav>
  );
};

export default NavBar;