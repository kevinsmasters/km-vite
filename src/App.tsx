import { useState } from "react";
import "bootswatch/dist/solar/bootstrap.min.css";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { HomeHero } from "./components/HomeHero";
import { MainNav } from "./components/MainNav";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <MainNav />
      <div className="container">
        <main>
          <HomeHero />
        </main>
      </div>
    </>
  );
}

export default App;
