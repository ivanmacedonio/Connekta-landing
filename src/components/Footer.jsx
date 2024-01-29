import React from "react";
import logo from '../assets/logop.webp';
import "../styles/Footer.css";
export const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-card">
        <img src={logo} alt="" />
      </div>
      <div className="footer-card">
        <h2>Acceso rápido</h2>
        <a href="#hrefinicio">Inicio</a>
        <a href="#hrefnosotros">Servicio</a>
        <a href="#hrefservicio">Nosotros</a>
        <a href="#hrefclientes">Testimonios</a>
      </div>
      <div className="footer-card">
        <h2>Contacto</h2>
        <p>Calle Copoa Alameda No. 11, Col, Toriello</p>
        <p>Guerra, Del. Tlalpan</p>
        <p>01 (55) 55 28 11 37</p>
        <p>conexiondetalento@connecta.partners</p>
      </div>
    </div>
  );
};
