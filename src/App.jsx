import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MainLayout from "./component/MainLayout";
import About from "./pages/navbar/About";
import Offers from "./pages/navbar/offers";
import Catering from "./pages/navbar/Catering";
import Contact from "./pages/navbar/Contact";
import Menu from "./pages/navbar/Menu";
import RestautrantLogin from "./pages/navbar/RestaurantLogin";
import Unauthorized from "./component/Unauthorized"


//ResaurantDashboard
import ResaurantDashboard from "./pages/ResaurantDashboard/ResaurantDashboard"
import ResaurantHome from "./pages/ResaurantDashboard/ResaurantHome"
import Orders from "./pages/ResaurantDashboard/Orders"
import LiveOrders from "./pages/ResaurantDashboard/LiveOrders";
import Customers from "./pages/ResaurantDashboard/Customers";
import Reviews from "./pages/ResaurantDashboard/Reviews";
import ProfilePage from "./pages/ResaurantDashboard/ProfilePage";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route element={<MainLayout />}>

          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About/>}/>
          <Route path="/offers" element={<Offers/>} />
          <Route path="/catering" element={<Catering/>}/>
          <Route path="/Contact" element={<Contact/>}/>
          <Route path="/Menu" element={<Menu/>}/>
          {/* <Route path="/login" element={<AdminLogin/>}/> */}
          <Route path="/resturant-login" element={<RestautrantLogin/>} />
       
           </Route>

             

           {/* ResaurantDashboard routing */}
           
            <Route path='/ResaurantDashboard' element={<ResaurantDashboard />}>
            <Route index element={<ResaurantHome/>} />
            <Route path="/ResaurantDashboard/orders" element={<Orders />} />
             <Route path="/ResaurantDashboard/live-orders" element={<LiveOrders />} />
             <Route path="/ResaurantDashboard/customers" element={<Customers />} />
              <Route path="/ResaurantDashboard/reviews" element={<Reviews />} />
               <Route path="/ResaurantDashboard/restaurant-profile" element={<ProfilePage />} />
              </Route>

      </Routes>

    </BrowserRouter>
  );
}

export default App;