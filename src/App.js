
import './App.css';
import Footer from './components/footer/footer';
import LearningPrograms from './components/learningPrograms/learningPrograms';
//import Parents from './components/parents/Parents';
import Faq from './components/faq/faq';
function App() {
  return (
    <div className="App">
    
      <LearningPrograms />
      <Faq />
      <Footer />

    </div>
  );
}

export default App;
