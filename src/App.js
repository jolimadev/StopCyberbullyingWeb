import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import QuizContainer from './Componentes/QuizContainer';
import InfoScreen from './Componentes/InfoScreen';
import './css/App.css';


const App = () => {
  return (
    <div className='app-container'>

    
    <Router>
      <Routes>
        <Route path="/" element={<QuizContainer />} />
        <Route path="/info" element={<InfoScreen />} />
      </Routes>
    </Router>

    </div>
   
  );
};

export default App;
