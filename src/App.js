import Header from "./components/Header";
import Footer from "./components/Footer";
import Past from "./components/sections/Past";
import Hobby from "./components/sections/Hobby";
import Family from "./components/sections/Family";
import Speciality from "./components/sections/Speciality";
import Future from "./components/sections/Future";

function App() {
  return (
    <div className="App">
      <header className="header_background">
        <Header />
      </header>
      <main>
        <Past />
        <Hobby />
        <Family />
        <Speciality />
        <Future />
      </main>
      <footer className="container">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
