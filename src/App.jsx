import './App.css';
import { Route, Routes } from 'react-router-dom';
import Hello from './components/Hello/Hello.jsx';

function App() {
    return (
        <Routes>
            <Route path="/" element={<div>Home Page</div>} />
            <Route path="/user" element={<Hello/>} />
        </Routes>
    );
}

export default App;