import Header from './components/Header'
import HeroSection from './components/HeroSection'
import Demo from './components/Demo'
import Features from './components/Features'
import Product from './components/Product'
import InnerPages from './components/InnerPages'
import Resources from './components/Resources'
import Theme from './components/Theme'
import Footer from './components/Footer'

function App() {
  return (
    <div className="container ">
      <Header/>
      <HeroSection/>
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
