import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import PopularServices from "../PopularServices/PopularServices";
import About from "../About/About";
import Contact from "../Contact/Contact";
import FAQSection from "../FAQ/FAQSection";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>DreamDay|Home</title>
      </Helmet>
      <Banner></Banner>
      <About></About>
      <PopularServices></PopularServices>
      <FAQSection></FAQSection>
      <Contact></Contact>
    </>
  );
};

export default Home;
