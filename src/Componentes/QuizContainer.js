import React, { useState } from "react";
import { Link } from "react-router-dom";


const QuizContainer = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const preguntas = [
    {
      pregunta: "¿Qué es el cyberbullying?",
      opciones: [
        "El uso de las tecnologías de información y comunicación para acosar o dañar a otras personas de forma deliberada.",
        "El uso de Internet para compartir información falsa y engañar a las personas.",
        "El uso de redes sociales para promover el respeto y la tolerancia.",
      ],
      respuestaCorrecta: 0,
      explicacion:
        "El cyberbullying se refiere al uso de las tecnologías de información y comunicación para acosar o dañar a otras personas de forma deliberada.",
    },
    {
      pregunta: "¿Alguna vez has sufrido cyberbullying?",
      opciones: ["Sí", "No, pero conozco a alguien que sí lo ha sufrido"],
      respuestaCorrecta: 0,
      explicacion:
        "Lamentamos saber que has experimentado cyberbullying. Recuerda que siempre puedes buscar apoyo y reportar estas situaciones.",
    },
    {
      pregunta: "¿Cómo denunciar o reportar el cyberbullying?",
      opciones: [
        "Contactando a las autoridades escolares.",
        "Hablando directamente con la persona que te está acosando.",
        "Utilizando las herramientas de denuncia y reporte de las plataformas en línea y hablar con una autoridad cercana si eres menor.",
      ],
      respuestaCorrecta: 2,
      explicacion:
        "La forma más efectiva de denunciar o reportar el cyberbullying es utilizando las herramientas de denuncia y reporte que proporcionan las plataformas en línea.",
    },
    {
      pregunta:
        "¿Cuáles son algunas de las consecuencias del cyberbullying para las víctimas?",
      opciones: [
        "Baja autoestima, ansiedad y depresión.",
        "Mejora en la confianza y habilidades sociales.",
        "Aumento de popularidad en línea.",
      ],
      respuestaCorrecta: 0,
      explicacion:
        "El cyberbullying puede tener graves consecuencias para las víctimas, como baja autoestima, ansiedad y depresión.",
    },
    {
      pregunta: "¿Cómo puedes protegerte del cyberbullying?",
      opciones: [
        "Evitar usar las redes sociales y la tecnología.",
        "No compartir información personal en línea y bloquear a personas desconocidas.",
        "Responder a los mensajes ofensivos y acosadores para defenderte.",
      ],
      respuestaCorrecta: 1,
      explicacion:
        "Para protegerte del cyberbullying, es importante no compartir información personal en línea y bloquear a personas desconocidas que puedan acosarte.",
    },
  ];
  const handleAnswer = (respuestaSeleccionada) => {
    setSelectedOption(respuestaSeleccionada);
    setShowExplanation(true);
    setTimeout(() => {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null); // Reinicia la selección de opción después de avanzar
      setShowExplanation(false);
    }, 2500);
  };
  

  const renderizarQuiz = () => {
    if (currentQuestion >= preguntas.length) {
      return (
        <div style={{ backgroundColor: "#599eee" }}>
          <p>Quiz completado. ¡Gracias por participar!</p>
          <h4 className="text-center">
            No olvides compartir esto para crear conciencia e impacto social.
            💪🗺️🧡
          </h4>
          <h2 className="text-center mt-5">"Usemos el Internet sabiamente"</h2>
          <Link to="/info">
            <div className="text-center mt-5">
              <button className="btn btn-primary">Ver + Info</button>
            </div>
          </Link>
        </div>
      );
    }

    const { pregunta, opciones } = preguntas[currentQuestion];

    return (
      <div className="container">
        {currentQuestion < preguntas.length - 1 && (
          <h2 className="text-center mt-4 text-white">
            Por favor, responde las siguientes preguntas:
          </h2>
        )}
        {currentQuestion === preguntas.length - 1 && (
          <h2 className="text-center mt-4">Última pregunta</h2>
        )}
        <h2 className="text-center mt-5 text-decoration-underline ">
          Pregunta {currentQuestion + 1}
        </h2>
        <p className="text-center fw-bold fs-2 mb-4 ">{pregunta}</p>
        <ol className="text-center">
          {opciones.map((opcion, index) => (
            <li className="text-center" key={index}>
              <label>
                <input
                  type="radio"
                  name="opcion"
                  value={index} // Asigna el valor del índice como el valor de la respuesta
                  onChange={(event) => handleAnswer(event.target.value)} 
                  disabled={showExplanation}
                  checked={selectedOption === index} // esto me sirve para la seleccion de opciones

                />
                {opcion}
              </label>
            </li>
          ))}
        </ol>
      </div>
    );
  };

  const renderizarExplicacion = () => {
    if (showExplanation && currentQuestion < preguntas.length) {
      const { explicacion } = preguntas[currentQuestion];
      return (
        <div className="container text-center text-muted">
          <h3 className="text-decoration-underline">Explicación:</h3>
          <p className="fw-bold">{explicacion}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div
      className="container p-5 border rounded shadow text-center"
      style={{ backgroundColor: "#599eee" }}
    >
      
      {renderizarQuiz()}
      {renderizarExplicacion()}
    </div>
  );
};

export default QuizContainer;
