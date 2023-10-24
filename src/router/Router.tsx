import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import User from "../pages/User/User";
import Repos from "../pages/Repos/Repos";
import ReposDetails from "../pages/ReposDetails/ReposDetails";

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
                path="/users/:username/repos"
                element={<Repos />}
            />

            <Route
                path="/users/:username/repos/:repoId"
                element={<ReposDetails />}
            />
            
            <Route
                path="*"
                element={<p>Something is wrong, try again.</p>}
            />
        </Routes>
    </BrowserRouter>
)

export default Router
