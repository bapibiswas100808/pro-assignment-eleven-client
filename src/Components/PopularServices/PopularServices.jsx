import axios from "axios";
import { useEffect, useState } from "react";
import loadingImg from "../../assets/images/loading.gif";
import { Link } from "react-router-dom";

const PopularServices = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get("http://localhost:5000/allServices")
      .then((res) => {
        console.log(res.data);
        setServices(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  axios
    .get("http://localhost:5000/allServices")
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
  return (
    <div className="max-w-[1170px] mx-auto px-3 lg:px-0 py-5 lg:py-10 border-b-2">
      {loading ? (
        <p className="flex justify-center items-center">
          <img className="rounded-3xl h-40" src={loadingImg} alt="" />
        </p>
      ) : (
        <>
          <div>
            <h2 className="text-3xl font-bold text-center mb-5">
              Popular Services
            </h2>
            <div className="grid grid-cols-1  gap-5">
              {services?.slice(0, 6).map((service, idx) => (
                <div className="border rounded-lg" key={idx}>
                  <div className="hero">
                    <div className="hero-content flex-col lg:flex-row">
                      <div className="w-full ">
                        <img
                          src={service?.photo}
                          className=" rounded-lg shadow-2xl"
                        />
                      </div>
                      <div className="w-full">
                        <h1 className="text-2xl font-bold">
                          {service.serviceName}
                        </h1>
                        <p className="py-6">{service.description}</p>
                        <div className="flex items-center gap-10 mb-5">
                          <p>
                            <span className="text-lg font-bold mr-2">
                              Price:
                            </span>
                            {service?.price}
                          </p>
                          {/* <p>
                            <span className="text-lg font-bold mr-2">
                              Service Area:
                            </span>
                            {service?.serviceArea}
                          </p> */}
                        </div>
                        <div className="flex flex-col md:flex-row lg:flex-row items-center gap-5">
                          <p className="font-bold text-lg">Provider:</p>
                          <img
                            className="rounded-full h-12"
                            src={service.providerImage}
                            alt=""
                          />
                          <p>
                            <span className="mr-2 font-semibold">Name:</span>
                            {service.providerName}
                          </p>
                          <button className="btn project-btn">
                            View Details
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-5 lg:mt-10 flex justify-center">
            <Link to="/services" className="btn project-btn">
              Show All Service
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default PopularServices;
