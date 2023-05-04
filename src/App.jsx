import './index.css';
import './styles/style.css';
// import components
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Edu from './components/Edu';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Social from './components/Social';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

// import the css files
// import './styles/animate.css';
// import './styles/bootstrap.min.css';
// import './styles/font-awesome.min.css';
// import './styles/bootsnav.css';
// import './styles/flaticon.css';
// import './styles/owl.carousel.min.css';
// import './styles/owl.theme.default.min.css';
// import './styles/responsive.css';

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Edu />
      <Skills />
      <Experience />
      <Social />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
