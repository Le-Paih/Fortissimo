import StreamIcons from "../../components/StreamIcons";
import Artists from "./components/Artists";
import Footer from "./components/Footer";
import GetStarted from "./components/GetStarted";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import Outro from "./components/Outro";
import Prices from "./components/Prices";

function HomePageEng() {
  return (
    <>
      <Hero />
      <StreamIcons />
      <Intro />
      <GetStarted />
      <Prices />
      <Artists />
      <Outro />
      <Footer />
    </>
  );
}

export default HomePageEng;
