import { Cabecera } from './componentes/navegacion/Cabecera';
import { Inicio } from './componentes/secciones/Inicio';
import { Servicios } from './componentes/secciones/Servicios';

import { Proyectos } from './componentes/secciones/Proyectos';
import { Contacto } from './componentes/secciones/Contacto';
import { PiePagina } from './componentes/navegacion/PiePagina';

function App() {
  return (
    <>
      <Cabecera />
      <main>
        <Inicio />
        <Servicios />

        <Proyectos />
        <Contacto />
      </main>
      <PiePagina />
    </>
  );
}

export default App;
