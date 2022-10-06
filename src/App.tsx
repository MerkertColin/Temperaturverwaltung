import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Index from './components/pages/IndexPage'
import Login from './components/pages/LoginPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Index />}>
          </Route>
          <Route path="/login" element={<Login />}>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
