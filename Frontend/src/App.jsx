import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import Home from './pages/Home.jsx';
import RegisterShop from './pages/RegisterShop.jsx';
import DashboardStore from './pages/DashboardStore.jsx';
import ManageShops from './pages/ManageShops.jsx';

function App() {
      return(

            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/register" element={<Register/>}/>
                    <Route path="/register-shop" element={<RegisterShop/>}/>
                    <Route path="/dashboard-store" element={<DashboardStore/>}/>
                    <Route path="/manage-shops" element={<ManageShops/>}/>
                </Routes>
            </BrowserRouter>

      )
 
}

export default App
