import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import QuizContainer from "./Componentes/QuizContainer";
import InfoScreen from "./Componentes/InfoScreen";
import ModalInicio from "./Componentes/ModalInicio";
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  return (
    <div>
      {/* Título y Menú de navegación */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "#448ada",
          padding: "10px",
        }}
      >
        <h1 className="titulo-quiz text-white fs-2">
          Campaña contra el #CYBERBULLYING
        </h1>

        {/* Menú de navegación */}
        <nav className="ml-2"
        >
          <ul
            style={{
              display: "flex",
              listStyle: "none",
              gap: "20px",
              margin: 0,
            }}
          >
            <li>
              <a
                href="/info"
                path="/info"
                element={<InfoScreen />}
                className="text-white"
              >
                Información
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/juanolima/?locale=en_US"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
                Contacto
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <ModalInicio />
      {/* Contenido de la aplicación */}
      <div
        className="container-fluid bg-primary d-flex align-items-center justify-content-center"
        style={{ height: "100vh" }}
      >
        <Router>
          <Routes>
            <Route path="/" element={<QuizContainer />} />
            <Route path="/info" element={<InfoScreen />} />
          </Routes>
        </Router>
      </div>

   {/* Footer */}
   <footer
        style={{
          backgroundColor: "#448ada",
          color: "white",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px",
        }}
      >
        <span>Made by @jolimadev</span>
        <div>
          <a
            href="https://www.linkedin.com/in/juanolima/?locale=en_US"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white"
          >
            <i className="bi bi-linkedin"></i>
          </a>
          <a
            href="https://www.instagram.com/jolimadev/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white ml-3"
          >
            <i className="bi bi-instagram"></i>
          </a>
        </div>
      </footer>

    </div>
  );
};

export default App;
