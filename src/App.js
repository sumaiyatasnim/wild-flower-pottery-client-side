import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import HomeServices from './Pages/Home/HomeServices/HomeServices';

import Products from './Pages/Products/Products';
import Login from './Pages/LoginRegister/Login/Login';
import Register from './Pages/LoginRegister/Register/Register';
import Dashboard from './Pages/Dashboard/Dashboard';
import AuthProvider from './Context/AuthProvider/AuthProvider';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import AddProducts from './Pages/Dashboard/AddProduct/AddProducts';
import Purchase from './Pages/Purchase/Purchase';
import MyOrder from './Pages/Dashboard/MyOrder/MyOrder';
import ManageProducts from './Pages/Dashboard/ManageProducts/ManageProducts';
import MakeAdmin from './Pages/Dashboard/MakeAdmin/MakeAdmin';


function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/home' element={<Home></Home>}></Route>
            <Route path='/products' element={<Products></Products>}></Route>

            <Route path='/dashboard' element={<PrivateRoute><Dashboard>
            </Dashboard></PrivateRoute>
            }>
              <Route path={`/dashboard/addProducts`} element={<AddProducts></AddProducts>}></Route>
              <Route path='/dashboard/manageProduct' element={<ManageProducts></ManageProducts>}></Route>
              <Route path='/dashboard/makeAdmin' element={<MakeAdmin></MakeAdmin>}></Route>

              <Route path='/dashboard/myOrder' element={<MyOrder></MyOrder>}></Route>

            </Route>

            {/* <Route path='/about' element={}></Route> */}
            <Route path='/orderPlace/:productId' element={<PrivateRoute><Purchase></Purchase></PrivateRoute>}></Route>
            <Route path='/login' element={<Login></Login>}></Route>
            <Route path='/register' element={<Register></Register>}></Route>
          </Routes>

        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
