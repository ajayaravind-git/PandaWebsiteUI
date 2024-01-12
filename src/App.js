import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import FPassword from "./Pages/FPassword";
import RPassword from "./Pages/RPassword";


function App() {


    return (<Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/fpassword" element={<FPassword />} />
        <Route path="/rpassword" element={<RPassword />} />
    </Routes >)
}

export default App;