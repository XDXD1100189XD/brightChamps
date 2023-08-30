
import './App.css';
import Homepage from './pages/homepage';
import Program from './components/Program/Program';
import {
  BrowserRouter,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Routes
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/brightChamps" element={<Homepage />}/> {/* 👈 Renders at /app/ */}
        <Route path="brightChamps/:programName" element={<Program />} />
      </Routes>
        
      </BrowserRouter>

    </div>
  );
}

export default App;
