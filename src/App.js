import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/index";
import ImageSlider from "./components/ImageSlider";
import Footer from "./components/Footer";

function App() {
  return (
    <div id="page-container">
      <Header />
      <ImageSlider />
      <Footer />
    </div>
  );
}

export default App;
