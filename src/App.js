import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AboutUs from './Components/AboutUs/AboutUs';
import Blog from './Components/Blog/Blog';
import BlogFull from './Components/BlogFull/BlogFull';
import ContactUs from './Components/ContactUs/ContactUs';
import Error from './Components/Error/Error';
import Home from './Components/Home/Home';
import Portfolio from './Components/Portfolio/Portfolio';
import ProjectPage from './Components/ProjectPage/ProjectPage';
import Services from './Components/Services/Services';
import Footer from './Components/Shared/Footer/Footer';
import Header from './Components/Shared/Header/Header';
import PrivacyPolicy from './Components/Shared/PrivacyPolicy/PrivacyPolicy';
import TramsCondition from './Components/Shared/TramsCondition/TramsCondition';
import Technologies from './Components/Technologies/Technologies';
function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route exact path="/" element={<Home></Home>} />
          <Route path="/home" element={<Home></Home>} />
          <Route path="/technologies" element={<Technologies></Technologies>} />
          <Route path="/service" element={<Services></Services>} />
          <Route path="/portfolio" element={<Portfolio></Portfolio>} />
          <Route path="/about-us" element={<AboutUs></AboutUs>} />
          <Route path="/contact" element={<ContactUs></ContactUs>} />
          <Route path="/project" element={<ProjectPage></ProjectPage>} />
          <Route path="/blog" element={<Blog></Blog>} />
          <Route path="/blog-full" element={<BlogFull></BlogFull>} />
          <Route path="/tram&Condition" element={<TramsCondition></TramsCondition>} />
          <Route path="/privacy" element={<PrivacyPolicy></PrivacyPolicy>} />
          <Route path="*" element={<Error></Error>} />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>

    </div>
  );
}

export default App;
