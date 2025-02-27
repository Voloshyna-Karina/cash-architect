import './App.css';
import { Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar.jsx';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Sidebar/>} />
        </Routes>
    );
}

export default App;