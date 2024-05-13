import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import axios from "axios";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const ManageService = () => {
  const { user } = useContext(AuthContext);
  const [services, setServices] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/myService/${user?.email}`)
      .then((res) => {
        setServices(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [user]);
  console.log(services);
  return (
    <div className="max-w-[1170px] mx-auto px-3 lg:px-0 py-5 lg:py-10">
      <Helmet>
        <title>DreamDay|Manage Service</title>
      </Helmet>
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-5 lg:mb-10 border-b-2 border-red-500 inline-block pb-2">
          Manage Your Services
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-5">
        {services?.map((service, idx) => (
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
                  <h1 className="text-2xl font-bold">{service.serviceName}</h1>
                  <p className="py-6">{service.description}</p>
                  <div className="flex items-center gap-10 mb-3">
                    <p>
                      <span className="text-lg font-bold mr-2">Price:</span>
                      {service?.price}
                    </p>
                    <p>
                      <span className="text-lg font-bold mr-2">
                        Service Area:
                      </span>
                      {service?.serviceArea}
                    </p>
                  </div>
                  <div className="flex flex-col md:flex-row lg:flex-row items-center gap-5">
                    <p className="font-bold text-lg">Provider:</p>
                    <img
                      className="rounded-full h-10"
                      src={service.providerImage}
                      alt=""
                    />
                    <p>
                      <span className="mr-2 font-semibold">Name:</span>
                      {service.providerName}
                    </p>
                  </div>
                  <div className="flex gap-5 mt-5">
                    <Link
                      to={`/updateService/${service._id}`}
                      className="btn project-btn"
                    >
                      Update Service
                    </Link>
                    <button className="btn text-white bg-red-600 hover:bg-black">
                      Delete Service
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageService;
