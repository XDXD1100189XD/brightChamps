
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
        <Route path="/brightChamps" element={<Homepage />}/> {/* 👈 Renders at /app/ */}
        <Route path="brightChamps/:programName" element={<Program />} />
      </Routes>
        
      </HashRouter>

    </div>
  );
}

export default App;
