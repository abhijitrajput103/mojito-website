import About from "./components/About";
import Art from "./components/Art";
import Cocktails from "./components/Cocktails";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <main>
      <Hero />
      <Cocktails />
      <About/>
      <Art/>
    </main>
  );
}
