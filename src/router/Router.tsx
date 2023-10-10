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
                path="/users/:username"
                element={<User/>}
            />
            <Route
                path="/user/:username/repos"
                element={<p>oi</p>}
            />
            <Route
                path="*"
                element={<p>Não foi possível concluir sua busca, tente novamente</p>}
            />
        </Routes>
    </BrowserRouter>
)

export default Router
