import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Header from './components/Header'
import HeroSection from './components/HeroSection'
import Demo from './components/Demo'
import Features from './components/Features'
import Product from './components/Product'
import InnerPages from './components/InnerPages'
import Resources from './components/Resources'
import Theme from './components/Theme'
import Footer from './components/Footer'
import HeroSlider from "./components/HeroSlider";

function App() {
  return (
    <div>
      <Header/>
      <HeroSection/>
      <HeroSlider/>
      <Demo/>
      <Features/>
      <Product/>
      <InnerPages/>
      <Resources/>
      <Theme/>
      <Footer/>
    </div> 
  )
}

export default App;
