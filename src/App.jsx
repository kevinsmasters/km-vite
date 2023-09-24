import "bootswatch/dist/solar/bootstrap.min.css";
import './App.css';
import { MainNav } from "./components/MainNav";
import { HomeHero } from "./components/HomeHero";
import { About } from "./components/About";
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
          <Contact />
        </main>
        <div id="palmBg"></div>
      </div>
    </>
  )
}

export default App
