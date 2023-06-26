import "bootswatch/dist/solar/bootstrap.min.css";
import "./App.css";
import { HomeHero } from "./components/HomeHero";
import { MainNav } from "./components/MainNav";
import { About } from "./components/About";
import { Projects } from "./components/Projects";

function App() {
  return (
    <>
      <MainNav />
      <div className="container">
        <main>
          <HomeHero />
          <About />
          <Projects />
        </main>
        <div id="palmBg"></div>
      </div>
    </>
  );
}

export default App;
