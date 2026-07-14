import React from 'react';


export const Cabecera: React.FC = () => {
  return (
    <header className="cabecera">
      <div className="contenedor cabecera-contenido">
        {/* <div className="logo">
          <span className="logo-texto">Portafolio de {informacionPersonal.nombre.split(' ')[0]}</span>
        </div> */}
        <nav className="navegacion">
          <a href="#inicio">Inicio</a>
          <a href="#habilidades">Habilidades Técnicas</a>
          <a href="#proyectos">Proyectos</a>
        </nav>
        <a href="#contacto" className="boton boton-primario">Contacto</a>
      </div>
    </header>
  );
};
