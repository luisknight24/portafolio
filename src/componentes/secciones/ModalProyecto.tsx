import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Code, ExternalLink, Monitor, Smartphone } from 'lucide-react';

interface ModalProyectoProps {
  proyecto: any;
  cerrarModal: () => void;
}

export const ModalProyecto: React.FC<ModalProyectoProps> = ({ proyecto, cerrarModal }) => {
  const [vistaActiva, setVistaActiva] = useState<'web' | 'movil'>(
    proyecto.tipo === 'hibrido' && proyecto.vistas?.web ? 'web' : (proyecto.tipo === 'movil' ? 'movil' : 'web')
  );
  const [indiceImagen, setIndiceImagen] = useState(0);

  const esHibrido = proyecto.tipo === 'hibrido';
  const esMovil = proyecto.tipo === 'movil' || (esHibrido && vistaActiva === 'movil');

  const datosVista = esHibrido && proyecto.vistas ? proyecto.vistas[vistaActiva] : proyecto;
  const galeriaActual = datosVista.galeria || proyecto.galeria;
  const descripcionActual = datosVista.descripcion || proyecto.descripcion;
  const tecnologiasActuales = datosVista.tecnologias || proyecto.tecnologias;
  const enlacesActuales = datosVista.enlaces || proyecto.enlaces;
  const credencialesActuales = datosVista.credenciales || proyecto.credenciales;
  const tituloActual = esHibrido ? `${proyecto.titulo}` : proyecto.titulo;

  useEffect(() => {
    if (!galeriaActual || galeriaActual.length === 0) return;
    const intervalo = setInterval(() => {
      setIndiceImagen((prev) => (prev + 1) % galeriaActual.length);
    }, 4000);
    return () => clearInterval(intervalo);
  }, [galeriaActual]);

  const cambiarVista = (nuevaVista: 'web' | 'movil') => {
    setVistaActiva(nuevaVista);
    setIndiceImagen(0);
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
          className={`modal-contenido ${esMovil ? 'modal-movil' : ''} ${esMovil ? (esHibrido ? 'modal-hibrido-movil' : 'modal-movil-puro') : ''}`}
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
                  key={`${vistaActiva}-${indiceImagen}`}
                  src={galeriaActual[indiceImagen]}
                  alt={`${tituloActual} - vista ${indiceImagen + 1}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="modal-imagen"
                />
              </AnimatePresence>
              <div className="modal-indicadores">
                {galeriaActual.map((_: any, i: number) => (
                  <button
                    key={i}
                    className={`modal-indicador ${i === indiceImagen ? 'activo' : ''}`}
                    onClick={() => setIndiceImagen(i)}
                  />
                ))}
              </div>
            </div>

            {!esMovil && (
              <div className="modal-tecnologias-contenedor">
                <h3 className="modal-subtitulo">Tecnologías utilizadas</h3>
                <div className="modal-tecnologias">
                  {tecnologiasActuales.map((tec: string, index: number) => (
                    <span key={index} className="modal-etiqueta">{tec}</span>
                  ))}
                </div>
              </div>
            )}

            {!esMovil && credencialesActuales && (
              <div className="modal-credenciales-contenedor">
                <h3 className="modal-subtitulo">Credenciales para acceso de prueba</h3>
                <div className="modal-credenciales">
                  <p><strong>Correo:</strong> {credencialesActuales.correo}</p>
                  <p style={{ marginTop: '0.4rem' }}><strong>Contraseña:</strong> {credencialesActuales.contrasena}</p>
                  {credencialesActuales.cedula && (
                    <p style={{ marginTop: '0.4rem' }}>
                      <strong>Cédula de tienda (Registro Sec. 3):</strong> {credencialesActuales.cedula}
                    </p>
                  )}
                </div>
              </div>
            )}
          </div>

          <div className={`modal-columna-der ${esHibrido ? 'modal-columna-der--hibrido' : ''}`}>
            {esHibrido && (
              <div className="modal-tabs-barra">
                <button
                  className={`modal-tab-barra ${vistaActiva === 'web' ? 'activo' : ''}`}
                  onClick={() => cambiarVista('web')}
                >
                  <Monitor size={16} /> Sistema web
                </button>
                <button
                  className={`modal-tab-barra ${vistaActiva === 'movil' ? 'activo' : ''}`}
                  onClick={() => cambiarVista('movil')}
                >
                  <Smartphone size={16} /> Aplicación móvil
                </button>
              </div>
            )}

            <div className="modal-info">
              <h2>{tituloActual}</h2>
              <div className="modal-descripcion-contenedor">
                {descripcionActual.split('\n\n').map((parrafo: string, i: number) => (
                  <p key={i} style={{ marginBottom: '0.50rem' }}>{parrafo}</p>
                ))}
              </div>

              {esMovil && credencialesActuales && (
                <div className="modal-credenciales-contenedor" style={{ marginTop: '-0.5rem', marginBottom: '1.25rem' }}>
                  <h3 className="modal-subtitulo">Credenciales para acceso de prueba</h3>
                  <div className="modal-credenciales">
                    <p><strong>Correo:</strong> {credencialesActuales.correo}</p>
                    <p style={{ marginTop: '-0.4rem' }}><strong>Contraseña:</strong> {credencialesActuales.contrasena}</p>
                    {credencialesActuales.cedula && (
                      <p style={{ marginTop: '-0.5rem' }}>
                        {/* <strong>Cédula de encargado de tienda (Para registro, sección 3):</strong> {credencialesActuales.cedula} */}
                      </p>
                    )}
                  </div>
                </div>
              )}

              <div className="modal-acciones">
                {enlacesActuales.codigo && (
                  <a href={enlacesActuales.codigo} target="_blank" rel="noopener noreferrer" className="boton boton-secundario">
                    <Code size={18} /> Ver código
                  </a>
                )}
                {enlacesActuales.demo && (
                  <a href={enlacesActuales.demo} target="_blank" rel="noopener noreferrer" className="boton boton-primario">
                    <ExternalLink size={18} /> Probar ahora
                  </a>
                )}
              </div>

              {esMovil && (
                <div className="modal-tecnologias-contenedor" style={{ marginTop: '0.2rem' }}>
                  <h3 className="modal-subtitulo">Tecnologías utilizadas</h3>
                  <div className="modal-tecnologias">
                    {tecnologiasActuales.map((tec: string, index: number) => (
                      <span key={index} className="modal-etiqueta">{tec}</span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
