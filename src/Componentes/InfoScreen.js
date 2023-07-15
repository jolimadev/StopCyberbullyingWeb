import React from "react";
import { Link } from "react-router-dom";
import "../css/InfoScreen.css";

export default function InfoScreen() {
  return (
    <div className="container p-5 bg-info border rounded shadow">
      <h2 className="text-white text-center text-decoration-underline mb-5">
        Links y canales para reportar o capacitarse mas al respecto{" "}
      </h2>

      <div className="container">
        <h3>
          Organizaciones y sitios web especializados en prevención del
          cyberbullying:{" "}
        </h3>

        <ol>
          <li>
            {" "}
            StopBullying.gov:{" "}
            <a href="https://www.stopbullying.gov/">
              https://www.stopbullying.gov/
            </a>
          </li>
          <li>
            {" "}
            National Bullying Prevention Center:{" "}
            <a href="https://www.pacer.org/bullying/">
              https://www.pacer.org/bullying/
            </a>
          </li>
          <li>
            {" "}
            Stomp Out Bullying:{" "}
            <a href="https://www.stompoutbullying.org/">
              https://www.stompoutbullying.org/
            </a>{" "}
          </li>
        </ol>

        <h3>Recursos y guías de seguridad en línea: </h3>
        <ol>
          <li>
            Internet Matters:{" "}
            <a href="https://www.internetmatters.org/">
              https://www.internetmatters.org/
            </a>
          </li>
          <li>
            Common Sense Media:{" "}
            <a href="https://www.commonsensemedia.org/">
              https://www.commonsensemedia.org/
            </a>
          </li>
          <li>
            ConnectSafely:{" "}
            <a href="https://www.connectsafely.org/">
              https://www.connectsafely.org/
            </a>
          </li>
        </ol>
        <h3>
          {" "}
          Plataformas y redes sociales con herramientas de denuncia y soporte:
        </h3>
        <ol>
          <li>
            Facebook:{" "}
            <a href="https://www.facebook.com/safety/">
              https://www.facebook.com/safety/
            </a>{" "}
          </li>
          <li>
            Instagram:{" "}
            <a href="https://help.instagram.com/569081503245058">
              https://help.instagram.com/569081503245058
            </a>
          </li>
          <li>
            Twitter:{" "}
            <a href="https://help.twitter.com/en/safety-and-security">
              https://help.twitter.com/en/safety-and-security
            </a>
          </li>
        </ol>
      </div>
      <div className="container">
        <Link to="/">
          <div className="text-center mt-4 "> 
          <button className="btn btn-primary">Volver al Quiz</button>
          </div>
        </Link>
      </div>
    </div>
  );
}
