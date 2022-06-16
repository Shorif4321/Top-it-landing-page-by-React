import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Portfolio from './Components/Portfolio/Portfolio';
import Services from './Components/Services/Services';
import Footer from './Components/Shared/Footer/Footer';
import Header from './Components/Shared/Header/Header';





function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route exact path="/" element={<Home></Home>} />
          <Route  path="/home" element={<Home></Home>} />
          <Route  path="/service" element={<Services></Services>} />
          <Route  path="/portfolio" element={<Portfolio></Portfolio>} />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>

    </div>
  );
}

export default App;
