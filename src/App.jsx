import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import MainLayout from "./component/mainlayout";
import AdminDashboard from "./pages/AdminDashboard/AdminDashboard";
import AdminHome from "./pages/AdminDashboard/AdminHome";
import About from "./pages/navbar/About";
import Offers from "./pages/navbar/offers";
import Catering from "./pages/navbar/Catering";
import Contact from "./pages/navbar/Contact";
import Menu from "./pages/navbar/Menu";
import AdminLogin from "./pages/AdminLogin";
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
          <Route path="/login" element={<AdminLogin/>}/>
       

           </Route>

           {/* Admin routing */}
            <Route path='/admin' element={<AdminDashboard />}>
            <Route index element={<AdminHome />} />
              </Route>

      </Routes>

    </BrowserRouter>
  );
}

export default App;