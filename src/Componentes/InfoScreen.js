import React from "react";
import { Link } from 'react-router-dom';
import '../css/InfoScreen.css';

export default function InfoScreen() {
  return (
    <div className="info-container">
      <h2 className="info-h2">Links y canales para reportar o capacitarse mas al respecto </h2>

      <div className="info-content">
        <h3>
          Organizaciones y sitios web especializados en prevención del
          cyberbullying:{" "}
        </h3>

        <ol>
          <li> StopBullying.gov: https://www.stopbullying.gov/ </li>
          <li>
            {" "}
            National Bullying Prevention Center: https://www.pacer.org/bullying/
          </li>
          <li> Stomp Out Bullying: https://www.stompoutbullying.org/ </li>
        </ol>

        <h3>Recursos y guías de seguridad en línea: </h3>
        <ol>
          <li>Internet Matters: https://www.internetmatters.org/</li>
          <li>Common Sense Media: https://www.commonsensemedia.org/</li>
          <li>ConnectSafely: https://www.connectsafely.org/</li>
        </ol>
        <h3>
          {" "}
          Plataformas y redes sociales con herramientas de denuncia y soporte:
        </h3>
        <ol>
          <li>Facebook:https://www.facebook.com/safety/ </li>
          <li>Instagram: https://help.instagram.com/569081503245058</li>
          <li>Twitter: https://help.twitter.com/en/safety-and-security</li>
        </ol>
      </div>
      <div className="button-container">
      <Link to="/">
      <button className="info-button">Volver al Quiz</button>
      </Link>
      </div>
    </div>
  );
}
