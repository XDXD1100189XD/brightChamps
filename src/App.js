
import './App.css';
import Homepage from './pages/homepage';
import Program from './components/Program/Program';
import {
  HashRouter,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Routes
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <HashRouter>
      <Routes>
        <Route path="/" element={<Homepage />}/> {/* 👈 Renders at /app/ */}
        <Route path="/:programName" element={<Program />} />
      </Routes>
        
      </HashRouter>

    </div>
  );
}

export default App;
