import "bootswatch/dist/solar/bootstrap.min.css";
import "./App.css";
import { HomeHero } from "./components/HomeHero";
import { MainNav } from "./components/MainNav";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";

function App() {
  return (
    <>
      <MainNav />
      <div
        className="container"
        style={{
          paddingRight: ".75rem",
          paddingLeft: ".75rem",
          marginRight: "auto",
          marginLeft: "auto",
        }}
      >
        <main style={{ paddingTop: 120 }}>
          <HomeHero />
          <About />
          {/* <Projects /> */}
          <Contact />
        </main>
        <div id="palmBg"></div>
      </div>
    </>
  );
}

export default App;
