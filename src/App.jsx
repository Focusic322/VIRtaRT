import Abstract from "./Components/Abstract";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Information from "./Components/Information";
import Services from "./Components/Services";
import Testimonials from "./Components/Testimonials";
import Welcome from "./Components/Welcome";
import ScrollToTop from "./Ui/ScrollToTop";

function App() {
  return (
    <>
      <Header />
      <ScrollToTop />
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
