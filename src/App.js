import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Password from "./Pages/Password";
import ResetPassword from "./Pages/ResetPassword";


function App() {


    return (<Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/password" element={<Password />} />
        <Route path="/resetpassword" element={<ResetPassword />} />

    </Routes >)
}

export default App;