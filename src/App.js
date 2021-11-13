
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import MoreCars from './components/MoreCars/MoreCars';
import Purchase from './components/Purchase/Purchase';
import Reviews from './components/Reviews/Reviews';
import Cars from './components/Cars/Cars';
import Register from './components/Login/Register/Register';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import Dashboard from './components/Dashboard/Dashboard';
import MyOrders from './components/MyOrders/MyOrders';
import AddCar from './components/Dashboard/AddCar/AddCar';
import ManageCar from './components/Dashboard/ManageCar/ManageCar';
import MakeAdmin from './components/Dashboard/MakeAdmin/MakeAdmin';
import OrderPay from './components/Dashboard/UserDashboard/OrderPay/OrderPay';
import AddReview from './components/Dashboard/UserDashboard/AddReview/AddReview';
import ManageOrders from './components/Dashboard/UserDashboard/ManageOrders/ManageOrders';
import AboutUs from './components/AboutUs/AboutUs';



function App() {
  return (
    <div className="App">
      <AuthProvider>
      <BrowserRouter>
      <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/moreCar">
            <MoreCars></MoreCars>
          </Route>
          <Route path="/allCar">
            <Cars></Cars>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <Route path="/reviews">
            <Reviews></Reviews>
          </Route>
          <Route path="/aboutUs">
            <AboutUs></AboutUs>
          </Route>
          <Route path="/addReview">
            <AddReview></AddReview>
          </Route>
          <PrivateRoute path="/purchase/:carId">
            <Purchase></Purchase>
          </PrivateRoute>
          <Route path="/myOrders">
            <MyOrders></MyOrders>
          </Route>
          <Route path="/addCar">
            <AddCar></AddCar>
          </Route>
          <Route path="/orderPay">
            <OrderPay></OrderPay>
          </Route>
          <Route path="/makeAdmin">
            <MakeAdmin></MakeAdmin>
          </Route>
          <Route path="/manageCar">
            <ManageCar></ManageCar>
          </Route>
          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <Route path="/manageOrder">
            <ManageOrders></ManageOrders>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
