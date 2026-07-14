import React, { useState } from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { proyectos } from '../../datos/portafolio';
import { ModalProyecto } from './ModalProyecto';



export const Proyectos: React.FC = () => {
  const [proyectoSeleccionado, setProyectoSeleccionado] = useState<any | null>(null);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
  };

  return (
    <section id="proyectos" className="seccion">
      <div className="contenedor">
        <motion.h2
          className="titulo-seccion"
          style={{ marginBottom: '2rem' }}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Proyectos
        </motion.h2>

        <motion.div
          className="proyectos-grilla-nueva"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {proyectos.map((proyecto) => (
            <motion.div
              key={proyecto.id}
              className="tarjeta-proyecto-nueva"
              variants={itemVariants}
              onClick={() => setProyectoSeleccionado(proyecto)}
              whileHover={{ y: -10 }}
            >
              <div className="tarjeta-proyecto-imagen-contenedor">
                <img
                  src={proyecto.imagen}
                  alt={proyecto.titulo}
                  className="tarjeta-proyecto-imagen"
                />
                <div className="tarjeta-overlay">
                  <span>Ver detalles</span>
                </div>
              </div>
              <div className="tarjeta-proyecto-info">
                <h3>{proyecto.titulo}</h3>
                <div className="tarjeta-proyecto-etiquetas">
                  {proyecto.tecnologias.slice(0, 3).map((tec, index) => (
                    <span key={index} className="etiqueta-minimalista">{tec}</span>
                  ))}
                  {proyecto.tecnologias.length > 3 && (
                    <span className="etiqueta-minimalista">+{proyecto.tecnologias.length - 3}</span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {proyectoSeleccionado && (
        <ModalProyecto
          proyecto={proyectoSeleccionado}
          cerrarModal={() => setProyectoSeleccionado(null)}
        />
      )}
    </section>
  );
};
