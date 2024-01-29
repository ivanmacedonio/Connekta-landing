import { motion } from "framer-motion";
import React from "react";
import logo1 from "../assets/logo1.png";
import logo2 from "../assets/logo2.png";
import logo3 from "../assets/logo3.png";
import "../styles/Inicio.css";
export const Inicio = () => {
  return (
    <motion.div
      className="Inicio"
      id="hrefinicio"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="inicioText">
        <h3>RECLUTAMIENTO CERTIFICADO</h3>
        <h1>
          Ayudamos a las empresas a conectarse con el talento que necesitan
        </h1>
        <a href="#hrefnosotros">Descubre como podemos ayudarte</a>
      </div>
      <hr />

      <div className="marcas">
        <h2>Partners: </h2>
        <img src={logo1} alt="" />
        <img src={logo2} alt="" />
        <img src={logo3} alt="" />
      </div>
    </motion.div>
  );
};
