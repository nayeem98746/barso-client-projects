import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './Compontents/Home/Home';
import Login from './Compontents/Login/Login';
import Register from './Compontents/Register/Register';
import AuthProvider from './context/AuthProvider';
import Dashboard from './Compontents/Dashboard/Dashboard/Dashboard';
import General from './Compontents/Dashboard/General/General';
import AddAdmin from './Compontents/Dashboard/AddAdmin/AddAdmin';
import Covid from './Compontents/Dashboard/Covid/Covid';
import Oncology from './Compontents/Dashboard/Oncology/Oncology';
import AdminCms from './Compontents/Dashboard/AdminCms/AdminCms';
import Diognostic from './Compontents/Dashboard/Diognostic/Diognostic';
import Orderinformation from './Compontents/Dashboard/Orderinformation/Orderinformation';
import PrivateRoute from './Compontents/PrivateRoute/PrivateRoute';
import OrderDetails from './Compontents/Dashboard/OrderDetails/OrderDetails';
function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
          <Routes>

            <Route exact path="/" element={<Home />}>
            </Route>
            <Route exact path="/home" element={<Home />}>
            </Route>
            <Route exact path="/login" element={<Login />}>
            </Route>
            <Route exact path="/register" element={<Register />}>
            </Route>
            <Route exact path="/Dashboard" element={<Dashboard />}>
            </Route>






            <Route path="/dashboard" element={
               <Dashboard /> 
            }>
             
              
              <Route path={`/dashboard/addadmin`} element={
                <AddAdmin></AddAdmin>
              }>
              </Route>
              <Route path={`/dashboard/General`} element={
                <General></General>
              }>
              </Route>
              <Route path={`/dashboard/covid`} element={
                <Covid></Covid>
              }>
              </Route>
              <Route path={`/dashboard/oncology`} element={
                <Oncology></Oncology>
              }>
              </Route>
              <Route path={`/dashboard/admincms`} element={
                <AdminCms></AdminCms>
              }>
              </Route>
              <Route path={`/dashboard/diognostic`} element={
                <Diognostic></Diognostic>
              }>
              </Route>
              <Route path={`/dashboard/orderinformation/:orderID`} element={
                <Orderinformation></Orderinformation>
              }>
              </Route>
              <Route path={`/dashboard/orderinformation/:orderID/:detailsID`} element={
                <OrderDetails></OrderDetails>
              }>
              </Route>
             
              
            </Route>












          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
