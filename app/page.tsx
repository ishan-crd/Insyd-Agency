import "./bambai/bambai.css";
import { City } from "./bambai/City";
import { BFooter, Features, Finale } from "./bambai/Features";
import { Garage } from "./bambai/Garage";
import { Hero, Nav } from "./bambai/Hero";
import { People } from "./bambai/People";
import { Smooth } from "./bambai/Smooth";
import { Reel, Statement } from "./bambai/Story";

export default function Bambai() {
  return (
    <Smooth>
      <div className="bb">
        <Nav />
        <main>
          <Hero />
          <Statement />
          <Reel />
          <City />
          <Garage />
          <People />
          <Features />
          <Finale />
        </main>
        <BFooter />
      </div>
    </Smooth>
  );
}
