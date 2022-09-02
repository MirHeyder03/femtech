import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/index";
import ImageSlider from "./components/ImageSlider";
import Footer from "./components/Footer";
import Partners from "./components/Partners";
import Map from "./components/Map";
import Community from "./components/Community";
import Success from "./components/Success";
import Mission from "./components/Mission";

function App() {
  return (
    <div id="page-container">
      <Header />
      <ImageSlider />
      <Mission />
      <Success />
      <Community />
      <Map />
      <Partners />
      <Footer />
    </div>
  );
}

export default App;
