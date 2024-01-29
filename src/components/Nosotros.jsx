import React from "react";
import icono1 from '../assets/icono1.svg';
import icono2 from '../assets/icono2.svg';
import icono3 from '../assets/icono3.svg';
import icono4 from '../assets/icono4.svg';
import "../styles/Nosotros.css";

export const Nosotros = () => {
  return (
    <div className="nosotros" id="hrefnosotros">
      <h1>Soluciones para empresas</h1>
      <p>
        Acompañamos a nuestros clientes durante todo el proceso de
        reclutamiento, reduciendo tiempos, costos y esfuerzos asociados con la
        contratación.
      </p>
      <div className="iconos">
        <div className="icono">
          <img src={icono1} alt="" />
          <h2>Headhunter</h2>
        </div>
        <div className="icono">
          <img src={icono2} alt="" />
          <h2>Reclutamiento Masivo</h2>
        </div>
        <div className="icono">
          <img src={icono3} alt="" />
          <h2>Investigación Laboral</h2>
        </div>
        <div className="icono">
          <img src={icono4} alt="" />
          <h2>Capacitación</h2>
        </div>
      </div>
      <a href="#hrefacerca">CONOZCA MÁS</a>
    </div>
  );
};
