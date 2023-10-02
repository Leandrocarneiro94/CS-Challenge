import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import User from "../pages/User/User";

const Router = () => (
    <BrowserRouter>
        <Routes>
            <Route 
                path="/"
                element={<Home/>}
            />
            <Route
                path="/users/:id"
                element={<User/>}
            />
        </Routes>
    </BrowserRouter>
)

export default Router
