import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import QuizContainer from "./Componentes/QuizContainer";
import InfoScreen from "./Componentes/InfoScreen";

const App = () => {
  return (
    <div>
      {/* Header */}
      <header className="bg-primary text-white py-4">
        <div className="container d-flex justify-content-between align-items-center">
          <h1 className="titulo-quiz fs-2">Campaña contra el #CYBERBULLYING</h1>
          <nav>
            <ul className="list-unstyled d-flex gap-3 mb-0">
              <li>
                <a href="/info" className="text-white">
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
      </header>

      {/* Contenido */}
      <main className="bg-primary d-flex align-items-center justify-content-center" style={{ minHeight: "calc(100vh - 112px)" }}>
        {/* Rutas */}
        <Router>
          <Routes>
            <Route path="/" element={<QuizContainer />} />
            <Route path="/info" element={<InfoScreen />} />
          </Routes>
        </Router>
      </main>

      {/* Footer */}
      <footer className="bg-primary text-white py-4">
  <div className="container text-center">
    <span>Made with ❤️ by @jolimadev</span>
    <div className="mt-3">
      <a href="https://www.linkedin.com/in/juanolima/?locale=en_US" target="_blank" rel="noopener noreferrer" className="text-white me-3">
        <i className="bi bi-linkedin fs-3"></i>
      </a>
      <a href="https://www.instagram.com/gaunetit/" target="_blank" rel="noopener noreferrer" className="text-white">
        <i className="bi bi-instagram fs-3"></i>
      </a>
    </div>
  </div>
</footer>

    </div>
  );
};


export default App;
