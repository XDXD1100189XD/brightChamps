
import './App.css';
import Footer from './components/footer/footer';
import LearningPrograms from './components/learningPrograms/learningPrograms';
import Parents from './components/parents/Parents';
import Faq from './components/faq/faq';
import FirstFold from './components/firstFold/firstFold';
function App() {
  return (
    <div className="App">
    
     <FirstFold />
     <LearningPrograms />
     <Parents />
     <Faq />
     <Footer />
    </div>
  );
}

export default App;
