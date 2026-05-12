import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Pricing from "../components/Pricing";
import Branches from "../components/Branches";
import Trainers from "../components/Trainers";
import DashboardPreview from "../components/DashboardPreview";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Branches />
      <Pricing />
      <Trainers />
      <DashboardPreview />
      <Footer />
    </>
  );
};

export default Home;