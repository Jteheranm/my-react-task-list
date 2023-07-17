import Navbar from "../components/Navbar";

const SobreNosotrosPage = () => {
  return (
    <div className="main-container">
      <Navbar />

      <fieldset>
        <legend>Funcionalidades:</legend>

        <ul>
          <li>
            Sobre nosotros: Contiene toda la información sobre la aplicación
          </li>
          <li>
            Lista de tareas: Es una lista de tareas que se pueden marcar como
            terminadas
          </li>
        </ul>
      </fieldset>

      <fieldset>
        <legend>Tecnologías:</legend>

        <ul>
          <li>
            Vite: Herramienta para desarrollo frontend que permite iniciar
            proyectos rápidamente entre otras cualidades.
          </li>
          <li>
            React: Librería para desarrollo frontend caracterizada por la
            interactividad de las interfaces.
          </li>
          <li>
            uuid: Librería para generar identificadores únicos universales.
          </li>
          <li>
            Eslint: Herramienta de análisis de código para identificar errores y
            malas prácticas al momento de escribir código, y así programar con
            mejores prácticas.
          </li>
        </ul>
      </fieldset>
    </div>
  );
};

export default SobreNosotrosPage;
