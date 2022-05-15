import './App.css';
import { Route, Routes } from '../node_modules/react-router-dom/index';
import MainPage from './page/MainPage';
import LoginPage from './page/LoginPage';
import RegisterPage from './page/RegisterPage';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route element={<MainPage />} path="/" exact />
        <Route element={<LoginPage />} path="/login" />
        <Route element={<RegisterPage />} path="/register" />
      </Routes>
    </div>
  );
}

export default App;
