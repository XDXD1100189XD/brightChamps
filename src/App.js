
import './App.css';
import Homepage from './pages/homepage';
import Program from './components/Program/Program';
import {
  BrowserRouter,
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
        <Route path="/" element={<Homepage />} basename= "https://XDXD1100189XD.github.io/brightChamps"/> {/* 👈 Renders at /app/ */}
        <Route path="/:programName" element={<Program />} basename= "https://XDXD1100189XD.github.io/brightChamps"/>
      </Routes>
        
      </HashRouter>

    </div>
  );
}

export default App;
