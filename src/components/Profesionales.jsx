import React from "react";
import imagen from "../assets/destacado-personas.jpg";
import "../styles/Profesionales.css";
export const Profesionales = () => {
  return (
    <div className="profesionales" id="hrefservicio">
      <div className="text-profesionales">
        <div className="text1">
          <h1>Soluciones para profesionales</h1>
        </div>
        <div className="text2">
          <h2>
            ¡Proyecta tu futuro laboral y encuentra el equilibrio que necesitas
            para tener éxito!
          </h2>
          <p>
            Ayudamos a las personas a descubrir, desarrollar y aprovechar su
            potencial y habilidades innatas para que puedan establecer objetivos
            a largo plazo y crear planes de acción para alcanzarlos.
          </p>
        </div>
      </div>
      <div className="card-profesionales">
        <div className="card-image">
          <img src={imagen} alt="" />
        </div>
        <div className="paleta">
          <div className="paleta1">
            <h3>Employer Branding</h3>
            <p>
              Nuestro workshop de Construye tu Personal Branding está dirigido a
              profesionistas en búsqueda de empleo o aquellos decididos a crecer
              profesionalmente.
            </p>
          </div>
          <div className="paleta2">
            <h3>Brief Laboral</h3>
            <p>
              Contamos con un programa completo que te ayudará a potenciar tu
              búsqueda laboral con una herramienta que te garantizará encontrar
              el empleo que necesitas tomando en cuenta tus Power Skills
              alineados a las necesidades del mercado laboral actual.
            </p>
          </div>
          <div className="paleta3">
            <h3>Coaching Laboral</h3>
            <p>
              Nuestra área de coaching laboral está diseñada para programar
              sesiones individuales con nuestros clientes, diseñando programas
              que cumplen con las metas laborales y personales, permitiendo el
              crecimiento personal y profesional.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
