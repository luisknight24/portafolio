import React, { useState } from 'react';

export const Contacto: React.FC = () => {
  const [estado, setEstado] = useState<'inactivo' | 'enviando' | 'exito' | 'error'>('inactivo');

  const manejarEnvio = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setEstado('enviando');

    const form = e.currentTarget;
    const formData = new FormData(form);
    
    formData.append('access_key', import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || '');
    formData.append('subject', 'Nuevo mensaje desde tu Portafolio');
    formData.append('from_name', 'Portafolio Web');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setEstado('exito');
        form.reset();
        setTimeout(() => setEstado('inactivo'), 4000);
      } else {
        setEstado('error');
        setTimeout(() => setEstado('inactivo'), 4000);
      }
    } catch (error) {
      setEstado('error');
      setTimeout(() => setEstado('inactivo'), 4000);
    }
  };

  return (
    <section id="contacto" className="seccion contacto">
      <div className="contenedor">
        <h2 className="titulo-seccion">Contáctame</h2>
        <form className="formulario-contacto" onSubmit={manejarEnvio}>
          <p style={{ textAlign: 'center', marginBottom: '0rem' }}>
            ¿Tienes un proyecto en mente, una vacante en tu equipo o alguna consulta técnica?
          </p>
          <div className="grupo-formulario">
            <label htmlFor="nombre">Nombre</label>
            <input type="text" id="nombre" name="name" placeholder="¿Cómo te llamas?" required />
          </div>

          <div className="grupo-formulario">
            <label htmlFor="correo">Correo electrónico</label>
            <input type="email" id="correo" name="email" placeholder="correo@ejemplo.com" required />
          </div>

          <div className="grupo-formulario">
            <label htmlFor="mensaje">Detalles</label>
            <textarea id="mensaje" name="message" rows={5} placeholder="Describe el proyecto o propuesta aquí..." required></textarea>
          </div>

          <button 
            type="submit" 
            className="boton boton-primario" 
            style={{ marginTop: '1rem' }}
            disabled={estado === 'enviando'}
          >
            {estado === 'enviando' && 'Enviando...'}
            {estado === 'exito' && '¡Mensaje enviado!'}
            {estado === 'error' && 'Error al enviar'}
            {estado === 'inactivo' && 'Enviar mensaje'}
          </button>
        </form>
      </div>
    </section>
  );
};
