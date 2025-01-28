
import RoutePaths from "./routes.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import ProjectProvider from './context/ProjectContext';
import "../src/styles/common.css";
function App() {
  return (
    <ProjectProvider>
      <RoutePaths />
    </ProjectProvider>
  );
}

export default App;
