import React from 'react';

import "bootstrap/dist/css/bootstrap.min.css";
// import { BrowserRouter as Router, Route} from "react-router-dom";
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { Provider } from 'react-redux'
import store from './store';
// import setAuthToken from './utils/SetAuthToken';





import  DoctorPrivateRoute from './privateRoutes/DoctorPrivateRoute';
import doctorRoutes from './components/doctor/doctorRoutes'
// import DoctorDrawer from './components/doctor/doctorDrawer';
// import dashboard from './components/doctor/Dashboard/dashboard';
import Home from './components/doctor/home/Home';
import Appointments from './components/doctor/Appointments/Appointments';
import Location from './components/doctor/Location/location';
import EditAndDelete from './components/doctor/Appointments/EditAndDelete';
import Account from './components/doctor/Account/Account';
import Login from './components/pages/login';

import SellerPrivateRoute from './privateRoutes/SellerPrivateRoute'

import Seller from './components/seller/Seller'
import ShopkeeperDrawer from './components/seller/shopkeeperDrawer';
import SellerDashboard from './components/seller/Dashboard/SellerDashboard'
// import PetProducts from './components/seller/petproducts/PetProducts';
// import Showproducts from './components/seller/petproducts/Showproducts';
import sellerHome from './components/seller/Home/sellerHome';
// import Inventory from './components/seller/Inventory/Inventory';
// import Pets from './components/seller/pets/Pets';
// import petSelling from './components/seller/pets/petSelling';
// import Product from './components/seller/petproducts/products/Product';

import AddPets from './components/seller/pets/AddPets';
import SavePets from './components/seller/pets/SavePets';
import sellerOrder from './components/seller/Orders/sellerOrder';
import sellerReports from './components/seller/Report/sellerReports';
import sellerProfile from './components/seller/userprofile/sellerProfile';

import PharmacistPrivateRoute from './privateRoutes/PharmacistPrivateRoute';
import PharmacistDrawer from './components/pharmacist/pharmacistDrawer';
import pharmacistDashboard from './components/pharmacist/Dashboard/pharmacistDashboard';
import pharmacistNotifications from './components/pharmacist/pharmacistHome/pharmacistNotifications';
// import Pharmacy from './components/pharmacist/Pharmacy/Pharmacy';
// import AddPharmacy from './components/pharmacist/Pharmacy/AddPharmacy'
// import Pharmacypicture from './components/pharmacist/Pharmacy/Pharmacypicture';
// import VaccinesPicture from './components/pharmacist/Pharmacy/VaccinesPicture';
// import pharmacyInventory from './components/pharmacist/pharmacyInventory/pharmacyinventory';
import Pharmacist from './components/pharmacist/Pharmacist'
import PharmacyOrders from './components/pharmacist/Orders/PharmacyOrders';
import PharmacyReport from './components/pharmacist/Report/PharmacyReports';
import PharmacistProfile from './components/pharmacist/userprofile/PharmacistProfile';

import Header from './components/mainpage/Header';
import Signup from './components/pages/signup';
import SimpleSlider from './components/mainpage/SimpleSlider';
import Services from './components/mainpage/Services'
import ourteam from './components/mainpage/ourteam';
import petlost from './components/mainpage/petlost';
import Blog from './components/mainpage/Blog';
import Footer from './components/mainpage/Footer';

import CustomerPrivateRoute from './privateRoutes/CustomerPrivateRoute'
// import CustomerDrawer from './components/customer/Customerdrawer';
import Customer from './components/customer/Customer'
import makeportfolio from './components/customer/Portfolio/makeportfolio'
import customerAccount from './components/customer/CustomerAccount/customerAccount';
import ViewPortfolio from './components/customer/customerDashboard/viewPortfolio';
import DisplayProducts from './components/customer/customerDashboard/displayProducts';
import DisplayPets from './components/customer/ShowPets/displayPets';
import TakeAppointment from './components/customer/CustomerAppointments/TakeAppointment'
import CustomerHome from './components/customer/CustomerHome/customerHome';
import CustomerPharmacy from './components/customer/CustomerPharmacy/customerPharmacy'
 
import AdminPrivateRoute from './privateRoutes/AdminPrivateRoute'
import AdminDrawer from './components/admin/AdminDrawer';
import AdminAccount from './components/admin/AdminAccount/AdminAccount';
import AdminNotifications from './components/admin/AdminHome/AdminNotifications';
import AdminViewProducts from './components/admin/AdminProducts/AdminViewProducts';
import AdminViewPets from './components/admin/AdminViewPets/AdminViewPets';
import AdminViewDoctors from './components/admin/AdminViewDoctors/AdminViewDoctors';
import DoctorNotifications from './components/doctor/DoctorNotifications/DoctorNotifications';


import HomePage from './components/seller/petproducts/HomePage';
import Medi from './components/customer/ShowPharmacy/Medi';


// if (localStorage.token) {
//   setAuthToken(localStorage.token);
// }


function App() {

  

  return (
  

   <Provider store={store}>
   <BrowserRouter>
        {/* <Alert /> */}
        {/* <Switch> */}
      {/* main page */}
      <Route path="/"   exact component={Header} />
     
      <Route path="/"  exact component={SimpleSlider} />
      <Route path="/"  exact component={Services} />
      <Route path="/"  exact component={ourteam} />
      <Route path="/"  exact component={petlost} />
      <Route path="/"  exact component={Blog} />
      <Route path="/"  exact component={Footer} />



      <Route path="/login"  exact component={Login} />
      <Route path="/register"  exact component={Signup} />

      {/* Customer */}
      {/* <Route path="/customer"  component={CustomerDrawer} /> */}
      {/* <Route path="/customer/portfolio"  component={makeportfolio} /> */}
      <CustomerPrivateRoute path="/customer" component={Customer} />


      <Route path="/customer/account"  component={customerAccount} />
      <Route path="/customer/login"  component={Login} />
      <Route path="/customer"  component={Medi} />


      {/* <Route path="/customer/dashboard"  component={CustomerDashboard} /> */}

      {/* <Route path="/customer/petportfolio"  component={ViewPortfolio} /> */}
      {/* <Route path="/customer/display"  component={DisplayProducts} />
      <Route path="/customer/pets"  component={DisplayPets} />
      <Route path="/customer/takeappointment"  component={TakeAppointment} /> */}
      {/* <Route path="/customer/takeappointment"  component={Location} /> */}a
      {/* <Route path="/customer/home"  component={CustomerHome} />
      <Route path="/customer/pharmacy"  component={CustomerPharmacy} /> */}


      {/* Admin */}
      
      <Route path="/admin"  component={AdminDrawer} />
      <Route path="/admin/account"  component={AdminAccount} />
      <Route path="/admin/home"  component={AdminNotifications} />
      <Route path="/admin/products"  component={AdminViewProducts} />
      <Route path="/admin/pets"  component={AdminViewPets} />
      <Route path="/admin/viewdoc"  component={AdminViewDoctors} />
      <Route path="/admin/login"  component={Login} />  
     


         {/* Doctor */}
         {/* < Route path="/doctor"  component={DoctorDrawer} /> */}
         {/* < Route path="/doctor" exact component={dashboard} /> */}
         <DoctorPrivateRoute path="/doctor" component={doctorRoutes} />

          < Route path="/doctor/home" component={Home} />
         < Route path="/doctor/addappointment" component={Appointments} />
         < Route path="/doctor/location" component={Location} />
         < Route path="/doctor/report" component={EditAndDelete} />
         < Route path="/doctor/notifications" component={DoctorNotifications} />

         < Route path="/doctor/account" component={Account} />
         < Route path="/doctor/login" component={Login} /> 
         {/* Shopkeeper


        {/* <ShopkeeperDrawer/> */}
         <SellerPrivateRoute path="/seller/home" component={sellerHome} />
         <SellerPrivateRoute path="/seller"  component={ShopkeeperDrawer} />
         <SellerPrivateRoute path="/seller/homepage" component={HomePage}/>

      <SellerPrivateRoute path="/seller" component={Seller} />
         
         {/* <SellerPrivateRoute path="/seller/category" component={AddCategory}/> */}
         {/* <SellerPrivateRoute path="/seller/create/category" component={AddCategory}/> */}

         {/* <SellerPrivateRoute path="/seller" exact component={SellerDashboard} /> */}
        <SellerPrivateRoute path="/seller/home" component={sellerHome} />
        {/* <SellerPrivateRoute path="/seller/product" component={PetProducts} />
        <SellerPrivateRoute path="/seller/petproducts" component={Catproducts} />
        <SellerPrivateRoute path="/seller/petproducts" component={Dogproducts} /> */}
                {/* <SellerPrivateRoute path="/seller/product" component={Product} /> */}

        {/* <SellerPrivateRoute path="/seller/productsave" component={Showproducts} /> */}



         {/* <SellerPrivateRoute path="/seller/stock" component={Inventory} /> */}
         {/* <SellerPrivateRoute path="/seller/pets" component={petSelling} /> */}

         {/* <SellerPrivateRoute path="/seller/petpic" component={Pets} /> */}

         <SellerPrivateRoute path="/seller/addpets" component={AddPets} />
         <SellerPrivateRoute path="/seller/savepets" component={SavePets} />


         <SellerPrivateRoute path="/seller/orders" component={sellerOrder} />
         <SellerPrivateRoute path="/seller/reports" component={sellerReports} />
         <SellerPrivateRoute path="/seller/userprofile" component={sellerProfile} />

         <SellerPrivateRoute path="/seller/login" component={Login} />
            {/* Pharmacist */}
            <Route path="/pharmacist"  component={PharmacistDrawer} />
            <Route path="/pharmacist" exact component={pharmacistDashboard} />
            <Route path="/pharmacist/home" component={pharmacistNotifications} />
            {/* <Route path="/pharmacist/pharmacy" component={Pharmacy} /> */}
            {/* <Route path="/pharmacist/pharmacy/addpharmacy" component={AddPharmacy} /> */}
            {/* <Route path="/pharmacist/pharmacy/pharmacypicture" component={Pharmacypicture} /> */}
            {/* <Route path="/pharmacist/pharmacy/vaccinepicture" component={VaccinesPicture} /> */}
            {/* <Route path="/pharmacist/inventory" component={pharmacyInventory} /> */}
            <Route path="/pharmacist/orders" component={PharmacyOrders} />
            <PharmacistPrivateRoute path="/pharmacist" component={Pharmacist}/>
            <Route path="/pharmacist/reports" component={PharmacyReport} />
            <Route path="/pharmacist/userprofile" component={PharmacistProfile} />
            <Route path="/pharmacist/login" component={Login} />   

            {/* </Switch> */}
      </BrowserRouter>
    </Provider>
  );
}

export default App;
