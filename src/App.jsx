import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import "./App.css";
import Footer from "./components/footer/Footer";
import Firm from "./components/Firm/Firm";
import How from "./components/How/How";
import Projects from "./components/Projects/Projects";

export default function App() {
  return (
    <div className="mx-auto  flex flex-col h-full justify-between   min-h-screen max-w-[1440px] w-full ">
      <Header />
      <main className="grow flex flex-col">
        <Hero />
        <Firm/>
        <How/>
        <Projects/>
      </main>

      <Footer />
    </div>
  );
}
