
import RoutePaths from "./routes.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import ProjectProvider from './context/ProjectContext';

function App() {
  return (
    <ProjectProvider>
      <RoutePaths />
    </ProjectProvider>
  );
}

export default App;
