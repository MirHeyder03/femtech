import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/index";
import ImageSlider from "./components/ImageSlider";
import Footer from "./components/Footer";
import Partners from "./components/Partners";
import Map from "./components/Map";
import Community from "./components/Community";

function App() {
  return (
    <div id="page-container">
      <Header />
      <ImageSlider />
      <Map />
      <Community />
      <Partners />
      <Footer />
    </div>
  );
}

export default App;
