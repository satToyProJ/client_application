import './App.css';
import { Route, Routes } from '../node_modules/react-router-dom/index';
import MainPage from './page/MainPage';
import LoginPage from './page/LoginPage';
import RegisterPage from './page/RegisterPage';

function App() {
  //   const [message, setMessage] = useState('');

  //   const api = axios.create({ baseURL: 'http://54.180.113.96:8080' });

  //   useEffect(() => {
  //     api
  //       .get('/demo')
  //       .then((res) => {
  //         setMessage(res.data);
  //       })
  //       .catch((e) => {
  //         console.log(e);
  //       });
  //   }, []);
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
