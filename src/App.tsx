
import { Description } from "./components/Description";
import { Footer } from "./components/Footer";
import FrontBanner from "./components/FrontBanner";
import Header from "./components/Header/Header";
import Materials from "./components/Materials";
import { Presentation } from "./components/Presentation";
import Space from "./components/Space/Space";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Header />
      {/* <FrontBanner /> */}
      {/* <Space /> */}
      <Presentation />
      <Materials />
      <Description />
      {/* <Cards /> */}
      {/* <Brands /> */}
      {/* <MapContact /> */}
      <Footer />
    </div>
  );
}

export default App;
