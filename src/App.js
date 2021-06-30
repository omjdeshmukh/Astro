import "./App.css";
import Header from "./components/Header";
import Carousel from "./components/Carousel";
import Services from "./components/Services";
import Feedback from "./components/Feedback";
import Expert from "./components/Expert";
import LatestBlock from "./components/LatestBlock";
import LatestVideo from "./components/LatestVideo";
import Footer from "./components/Footer";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { BrowserRouter as Router } from "react-router-dom";
import Horoscopes from "./components/Horoscopes";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Router className="App">
        <Header />
        <Carousel />
        <Services />
        <Horoscopes />
        <Feedback />
        <Expert />
        <LatestBlock />
        <LatestVideo />
        <Footer />
      </Router>
    </>
  );
}

export default App;
