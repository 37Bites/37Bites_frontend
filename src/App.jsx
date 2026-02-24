import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import MainLayout from "./component/mainlayout";
import AdminDashboard from "./pages/AdminDashboard/AdminDashboard";
import AdminHome from "./pages/AdminDashboard/AdminHome";
import About from "./pages/navbar/About";
function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route element={<MainLayout />}>

          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About/>}/>
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