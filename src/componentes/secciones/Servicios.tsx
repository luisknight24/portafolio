import React from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { habilidades } from '../../datos/portafolio';

export const Servicios: React.FC = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
  };

  return (
    <section id="habilidades" className="seccion" style={{ background: 'var(--color-superficie)' }}>
      <div className="contenedor">
        <motion.h2
          className="titulo-seccion"
          style={{ marginBottom: '2rem' }}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Habilidades Técnicas
        </motion.h2>
        <motion.div
          className="servicios-grilla"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {habilidades.map((habilidad, index) => (
            <motion.div
              key={index}
              className="tarjeta-servicio interactiva"
              variants={itemVariants}
              whileHover={{
                y: -10,
                boxShadow: "0 20px 40px -10px rgba(45, 212, 191, 0.15)",
                borderColor: "rgba(45, 212, 191, 0.4)"
              }}
            >
              <div className="tarjeta-encabezado">
                <h3>{habilidad.categoria}</h3>
              </div>
              <p>{habilidad.descripcion}</p>

              <div className="etiquetas-tecnologias">
                {habilidad.tecnologias.map((tec, i) => (
                  <span key={i} className="etiqueta-tec">{tec}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
