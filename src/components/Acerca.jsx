import React from "react";
import dave from '../assets/dave.jpg';
import "../styles/Acerca.css";
export const Acerca = () => {
  return (
    <div className="acerca">
      <div className="header-acerca" id="hrefacerca">
        <p>ACERCA DE CONNECTA PARTNERS</p>
        <h1>
          Somos Partners de nuestros clientes y hacemos equipo para optimizar la
          búsqueda del talento que necesitan.
        </h1>
      </div>
      <div className="card-acerca">
        <div className="img-acerca">
          <img src={dave} alt="" />
        </div>
        <div className="text-acerca">
          <p>
            <b>
              Desde del 2014 tenemos el propósito de ayudar a las organizaciones
              a reclutar el talento que necesitan. Sabemos que una mala
              contratación tiene repercusiones cuantitativas y cualitativas.
            </b>
          </p>
          <p>
            Por ello, creamos un modelo de reclutamiento único, que nos ha
            permitido ayudar a las organizaciones a reclutar a su personal,
            optimizando su productividad, crecimiento, y expansión de sus
            negocios. Lo hacemos gracias a nuestro talento interno que acompaña
            durante todo el proceso y garantiza hasta por 365 días las
            contrataciones.
          </p>

          <h3>
            “Como Headhunter me apasiona colaborar con las
            organizaciones en el reclutamiento, desarrollo, y fidelización del
            talento humano.”
          </h3>
        </div>
      </div>
    </div>
  );
};
