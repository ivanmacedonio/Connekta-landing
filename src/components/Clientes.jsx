import React from "react";
import cliente1 from "../assets/cliente1.jpg";
import cliente2 from "../assets/cliente2.jpg";
import cliente3 from "../assets/cliente3.jpg";
import cliente4 from "../assets/cliente4.jpg";
import clip from '../assets/clip.svg';
import "../styles/Clientes.css";

export const Clientes = () => {
  return (
    <div className="clientes" id="hrefclientes">
      <h4>TESTIMONIOS</h4>
      <h1>Qué dicen nuestros clientes</h1>
      <div className="cards-clientes">
        <div className="card-clientes">
            <img src={clip} alt="" />
          <h3>
            "Ha sido un alivio tener a Connecta Partners como socio de Recursos
            Humanos. Ante situaciones donde el negocio nos demanda redoblar
            velocidad de respuesta y calidad, Connecta ha sido apoyo
            incondicional para la consecución de nuestras metas."
          </h3>
          <div className="cliente">
            <img src={cliente1} alt="" />
            <h3>ERIKA VARGAS</h3>
          </div>
        </div>
        <div className="card-clientes">
        <img src={clip} alt="" />
          <h3>
            "Me ayudaron a enfocar mi CV hacia el puesto que quiero ocupar, pero
            sobre todo a sacar el mayor provecho de Linkedin para comunicar mi
            experiencia e intereses. "
          </h3>
          <div className="cliente">
            <img src={cliente2} alt="" />
            <h3>ANA LILA GUTIERREZ</h3>
          </div>
        </div>
        <div className="card-clientes">
        <img src={clip} alt="" />
          <h3>
            "El Kit Recolocate me ayudó a aclarar dudas que tenía sobre mi
            futuro laboral. Las sesiones brindadas por la coach laboral y la
            headhunter de Connecta Partners fueron muy buenas y siempre
            estuvieron abiertas a resolver todas mis preguntas. "
          </h3>
          <div className="cliente">
            <img src={cliente3} alt="" />
            <h3>ROBERTO GUERA</h3>
          </div>
        </div>
        <div className="card-clientes">
        <img src={clip} alt="" />
          <h3>
            "Excelentes sesiones en manejo y actualización de Linkedin y
            Coaching Laboral con los expertos de Connecta Partners Mayra Toledo
            y Ángeles de Vecchi. Gracias por los tips que me serán de gran
            utilida en mi crecimiento profesional. "
          </h3>
          <div className="cliente">
            <img src={cliente4} alt="" />
            <h3>CARLOS CAMACHO</h3>
          </div>
        </div>
      </div>
    </div>
  );
};
