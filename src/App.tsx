import { useState } from "react";
import CinematicEntrance from "./components/CinematicEntrance";
import Navigation from "./components/Navigation";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { Process } from "./components/Process";
import QuoteTool from "./components/QuoteTool";
import Reviews from "./components/Reviews";
import ServiceArea from "./components/ServiceArea";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import MobileStickyCTA from "./components/MobileStickyCTA";

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <CinematicEntrance onDone={() => setLoading(false)} />}
      <div style={{ visibility: loading ? "hidden" : "visible" }}>
        <Navigation />
        <main>
          <Hero />
          <Services />
          <Process />
          <Reviews />
          <ServiceArea />
          <FAQ />
          <QuoteTool />
        </main>
        <Footer />
        <MobileStickyCTA />
      </div>
    </>
  );
}

export default App;
