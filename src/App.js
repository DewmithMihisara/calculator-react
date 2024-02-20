import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Calculetor from './views/calForm';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Calculetor />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
