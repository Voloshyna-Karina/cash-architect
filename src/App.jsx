import './App.css';
import { Route, Routes } from 'react-router-dom';
// import Hello from './components/Hello/Hello.jsx';
import DashboardLayoutBasic from "./components/DashboardLayoutBasic/DashboardLayoutBasic.jsx";

function App() {
    return (
        <Routes>
            <Route path="/" element={<DashboardLayoutBasic/>} />
            <Route path="/user" element={<DashboardLayoutBasic/>} />
        </Routes>
    );
}

export default App;