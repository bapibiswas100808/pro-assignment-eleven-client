import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import PopularServices from "../PopularServices/PopularServices";
import About from "../About/About";
import Contact from "../Contact/Contact";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>DreamDay|Home</title>
      </Helmet>
      <Banner></Banner>
      <About></About>
      <PopularServices></PopularServices>
      <Contact></Contact>
    </>
  );
};

export default Home;
