import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import Home from './pages/Home.jsx';
import RegisterShop from './pages/RegisterShop.jsx';

function App() {
      return(

            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login/>}/>
                    <Route path="/register" element={<Register/>}/>
                    <Route path="/home" element={<Home/>}/>
                    <Route path="/register-shop" element={<RegisterShop/>}/>
                </Routes>
            </BrowserRouter>

      )
 
}

export default App
