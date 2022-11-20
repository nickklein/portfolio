import './App.css';
import Expertise from './components/Expertise';
import Header from './components/Header';
import About from './components/About';
import Work from './components/Work';
import Footer from './components/Footer';
import Contact from './components/Contact';

function App() {
  return (
    <div>
        <Header />
        <About />
        <Expertise />
        <Work />
        <Contact />
        <Footer />
    </div>
  );
}

export default App;
