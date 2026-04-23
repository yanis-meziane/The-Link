import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Login from './Login/Login';
import Register from './Register/Register';
import Main from './Main/Main';
import User from './User/User';
import Admin from './Admin/Admin';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        
        {/* Ne pas oublier de faire une protection de route pour l'affichage en fonction de si tu es un user ou un admin */}

        <Route path='/user' element={<User />}></Route>
        <Route path='/admin' element={<Admin />}></Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
