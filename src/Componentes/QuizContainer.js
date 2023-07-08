import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/QuizContainer.css';

const QuizContainer = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);
  const preguntas = [
    {
      pregunta: '¿Qué es el cyberbullying?',
      opciones: [
        'El uso de las tecnologías de información y comunicación para acosar o dañar a otras personas de forma deliberada.',
        'El uso de Internet para compartir información falsa y engañar a las personas.',
        'El uso de redes sociales para promover el respeto y la tolerancia.',
      ],
      respuestaCorrecta: 0,
      explicacion: 'El cyberbullying se refiere al uso de las tecnologías de información y comunicación para acosar o dañar a otras personas de forma deliberada.',
    },
    {
      pregunta: '¿Alguna vez has sufrido cyberbullying?',
      opciones: ['Sí', 'No, pero conozco a alguien que si lo ha sufrido'],
      respuestaCorrecta: 0,
      explicacion: 'Lamentamos saber que has experimentado cyberbullying. Recuerda que siempre puedes buscar apoyo y reportar estas situaciones.',
    },
    {
      pregunta: '¿Cómo denunciar o reportar el cyberbullying?',
      opciones: [
        'Contactando a las autoridades escolares.',
        'Hablando directamente con la persona que te está acosando.',
        'Utilizando las herramientas de denuncia y reporte de las plataformas en línea y hablar con una autoridad cercana si eres menor.',
      ],
      respuestaCorrecta: 2,
      explicacion: 'La forma más efectiva de denunciar o reportar el cyberbullying es utilizando las herramientas de denuncia y reporte que proporcionan las plataformas en línea.',
    },
    // Agrega más preguntas aquí
  ];
  const handleAnswer = (respuestaSeleccionada) => {
    setShowExplanation(true);
    setTimeout(() => {
      setCurrentQuestion(currentQuestion + 1);
      setShowExplanation(false);
    }, 2000);
  };
  
  

  const renderizarQuiz = () => {
    if (currentQuestion >= preguntas.length) {
      return (
        <>
          <p>Quiz completado. ¡Gracias por participar!</p>
          <h4>No olvides compartir esto para crear conciencia e impacto social. 💪🗺️🧡</h4>
          <Link to="/info">
          <button className='button-info'>Ver + Info</button>
        </Link>
        </>
      );
    }

    const { pregunta, opciones } = preguntas[currentQuestion];

    return (
      <div className="quiz-container">
        {currentQuestion < preguntas.length - 1 && (
          <h2>Por favor, responde las siguientes preguntas:</h2>
        )}
         {currentQuestion === preguntas.length - 1 && (
      <h2>Última pregunta</h2>
    )}
        <h2>Pregunta {currentQuestion + 1}</h2>
        <p>{pregunta}</p>
        <ol>
          {opciones.map((opcion, index) => (
            <li key={index}>
              <label>
                <input
                  type="radio"
                  name="opcion"
                  onChange={() => handleAnswer(index)}
                  disabled={showExplanation}
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
        <div className="explicacion">
          <h3>Explicación:</h3>
          <p>{explicacion}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="contenedor-quiz">
      <h1 className="titulo-quiz">Campaña contra el #CYBERBULLYING:</h1>
      {renderizarQuiz()}
      {renderizarExplicacion()}
    </div>
  );
};

export default QuizContainer;
