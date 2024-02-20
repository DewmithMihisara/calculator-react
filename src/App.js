import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Calculetor from './views/calForm';
import 'bootstrap/dist/css/bootstrap.min.css';

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
