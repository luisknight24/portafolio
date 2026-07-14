import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Code, ExternalLink } from 'lucide-react';

interface ModalProyectoProps {
  proyecto: any;
  cerrarModal: () => void;
}

export const ModalProyecto: React.FC<ModalProyectoProps> = ({ proyecto, cerrarModal }) => {
  const [indiceImagen, setIndiceImagen] = useState(0);

  useEffect(() => {
    if (!proyecto.galeria || proyecto.galeria.length === 0) return;
    const intervalo = setInterval(() => {
      setIndiceImagen((prev) => (prev + 1) % proyecto.galeria.length);
    }, 4000);
    return () => clearInterval(intervalo);
  }, [proyecto.galeria]);

  const irAImagen = (indice: number) => {
    setIndiceImagen(indice);
  };

  return (
    <AnimatePresence>
      <motion.div
        className="modal-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={cerrarModal}
      >
        <motion.div
          className="modal-contenido"
          initial={{ y: 50, opacity: 0, scale: 0.95 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: 20, opacity: 0, scale: 0.95 }}
          transition={{ type: "spring", bounce: 0.3, duration: 0.5 }}
          onClick={(e) => e.stopPropagation()}
        >
          <button className="modal-cerrar" onClick={cerrarModal}>
            <X size={24} />
          </button>

          <div className="modal-columna-izq">
            <div className="modal-galeria">
              <AnimatePresence mode="wait">
                <motion.img
                  key={indiceImagen}
                  src={proyecto.galeria[indiceImagen]}
                  alt={`${proyecto.titulo} - vista ${indiceImagen + 1}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="modal-imagen"
                />
              </AnimatePresence>
              <div className="modal-indicadores">
                {proyecto.galeria.map((_: any, i: number) => (
                  <button
                    key={i}
                    className={`modal-indicador ${i === indiceImagen ? 'activo' : ''}`}
                    onClick={() => irAImagen(i)}
                  />
                ))}
              </div>
            </div>

            <div className="modal-tecnologias-contenedor">
              <h3 className="modal-subtitulo">Tecnologías utilizadas</h3>
              <div className="modal-tecnologias">
                {proyecto.tecnologias.map((tec: string, index: number) => (
                  <span key={index} className="modal-etiqueta">{tec}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="modal-info">
            <h2>{proyecto.titulo}</h2>
            <p>{proyecto.descripcion}</p>

            <div className="modal-acciones">
              {proyecto.enlaces.codigo && (
                <a href={proyecto.enlaces.codigo} target="_blank" rel="noopener noreferrer" className="boton boton-secundario">
                  <Code size={18} /> Ver código
                </a>
              )}
              {proyecto.enlaces.demo && (
                <a href={proyecto.enlaces.demo} target="_blank" rel="noopener noreferrer" className="boton boton-primario">
                  <ExternalLink size={18} /> Probar ahora
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
