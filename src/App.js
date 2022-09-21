import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import GeneratorPage from './components/GeneratorPage';
import { useState } from 'react';
import GraphPage from './components/GraphPage';

function App() {
  const [values, setValues] = useState([]);
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path='/graph' element={<GraphPage values={values} />} />
        <Route path='/'
          element={<GeneratorPage
            values={values}
            setValues={setValues}
          />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
