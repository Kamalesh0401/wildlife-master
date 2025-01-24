import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
// import SpeciesManagement from './pages/SpeciesManagement';
// import BlogManagement from './pages/BlogManagement';
// import ThreatManagement from './pages/ThreatManagement';
// import GalleryManagement from './pages/GalleryManagement';
// import UserManagement from './pages/UserManagement';

const RoutePaths = () => (
    <Router>
        <Routes>
            <Route path="/" element={<Login />}></Route>
            <Route path="/dashboard" element={<Dashboard />} />
            {/* <Route path="/species" element={<SpeciesManagement />} />
            <Route path="/blogs" element={<BlogManagement />} />
            <Route path="/threats" element={<ThreatManagement />} />
            <Route path="/gallery" element={<GalleryManagement />} />
            <Route path="/users" element={<UserManagement />} /> */}
        </Routes>
    </Router>

);

export default RoutePaths;
