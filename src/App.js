import "./App.css";
import Header from "./components/Header";
import Carousel from "./components/Carousel";
import Services from "./components/Services";
import Feedback from "./components/Feedback";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { BrowserRouter as Router } from "react-router-dom";
import Horoscopes from "./components/Horoscopes";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router className="App">
      <Header />
      <Carousel />
      <Services />
      <Horoscopes />
      <Feedback />
    </Router>
  );
}

export default App;
