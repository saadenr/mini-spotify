import Header from "./components/Header/Header";
import Services from "./components/Albums/Albums";
import Qualities from "./components/Qualities/Qualities";
import Features from "./components/Features/Features";
import Portfolio from "./components/Portfolio/Portfolio";
import Footer from "./components/Footer/Footer";
import "./assets/js/script";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Services />
      {/* <Qualities /> */}
      {/* <Features /> */}
      {/* <Portfolio /> */}
      <Footer />
    </div>
  );
}

export default App;
