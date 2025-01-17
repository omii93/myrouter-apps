import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home';
import About from './Pages/About';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Causes from './Pages/Causes';
import Contact from './Pages/Contact';

const App = () => {

  return (
    <>    
      <div className="app">
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/myrouter-app' element={<Home />} />
          <Route path='/About' element={<About />}></Route>
          <Route path='/Couses' element={<Causes />} />
          <Route path='/Contact' element={<Contact />} />
        </Routes>
        <Footer />
      </div>
      
    </>
  );

}

export default App;