import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import { Toaster } from "react-hot-toast";

const Root = () => {
  return (
    <>
      <Header></Header>
      <div>
        <Toaster />
      </div>
      <div>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Root;
