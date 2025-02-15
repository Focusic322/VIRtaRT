import Abstract from "./Components/Abstract";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Information from "./Components/Information";
import Services from "./Components/Services";
import Testimonials from "./Components/Testimonials";
import Welcome from "./Components/Welcome";
// Відділення інтервенційної радіології та реперфузійної терапії it`s welcome page...

function App() {
  return (
    <>
      <Header />
      <Welcome />
      <div className="pt-serif-regular">
        <Services />
        <Abstract />
        <Testimonials />
        <Information />
        <Footer />
      </div>
    </>
  );
}

export default App;
