import './App.css';

import {Routes, Route} from "react-router-dom";
import Home from './Componentes/home/Home';
import Teste from './Componentes/Teste/Teste';
import Export from './Componentes/home/Export';

function App() {
  return (
    <>
    <Routes>

    <Route path="/" element={<Home />}/>
    <Route path="/teste" element={<Teste />}/>
    <Route path="/export2" element={<Export/>}/>
    </Routes>
    </>
  );
}

export default App;
