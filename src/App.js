import { useState } from 'react';
import './App.css';
import Header from './pages/Header';
import Main from './pages/Main';

function App() {
  const [mode, setMode] = useState('Pomoboro');

  const modeClass = (getMode) => {
    if(getMode === 'Pomoboro') {
      return 'pb';
    }else if(getMode === 'Short Break') {
      return 'sb';
    }else if(getMode === 'Long Break') {
      return 'lb';
    }
  };

  return (
    <div className="App">
      <div className={`app-wrapper ${modeClass(mode)}`}>
        <Header />
        <Main mode={setMode} />
      </div>
    </div>
  );
}

export default App;
