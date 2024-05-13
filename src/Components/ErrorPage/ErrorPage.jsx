import { Link } from "react-router-dom";
import errorImage from "../../assets/images/error.jpg";
const ErrorPage = () => {
  return (
    <div className="max-w-[1170px] mx-auto min-h-screen">
      <div className="flex justify-center items-center ">
        <img className="h-[400px]" src={errorImage} alt="" />
      </div>
      <div className="text-center">
        <Link to="/" className="btn project-btn ">
          Back To Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
