import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import AuthRoute from "./layouts/AuthRoute";
import SpeciesManagement from "./pages/WildlifeExplorer/SpeciesManagement";
import BlogManagement from "./pages/WildlifeExplorer/BlogManagement";
import ThreatsManagement from "./pages/WildlifeExplorer/ThreatsManagement";
import EndangeredSpeciesManagement from "./pages/WildlifeExplorer/EndangeredSpeciesManagement";


const RoutePaths = () => (
    <Router>
        <Routes>
            <Route path="/" element={<Login />}></Route>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route element={<AuthRoute />}>
                <Route path="/species" element={<SpeciesManagement />} />
                <Route path="/endangered" element={<EndangeredSpeciesManagement />} />
                <Route path="/threats" element={<ThreatsManagement />} />
                <Route path="/blogs" element={<BlogManagement />} />
            </Route>
        </Routes>
    </Router>

);

export default RoutePaths;
