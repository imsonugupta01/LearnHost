import logo from './logo.svg';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import Home from './Page/Home';
import Detail from './Page/Detail';

function App() {
  return (
    <Routes>
     <Route path="/" element={<Home/>}/>
     <Route path="/details" element={<Detail/>}/>
    </Routes>
  );
}

export default App;
