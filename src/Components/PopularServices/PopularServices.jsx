import axios from "axios";
import { useEffect, useState } from "react";
import loadingImg from "../../assets/images/loading.gif";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const PopularServices = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get("https://pro-assignment-eleven-server.vercel.app/allServices", {
        withCredentials: true,
      })
      .then((res) => {
        setServices(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const motionVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.25 } },
  };
  const elementVariants = { hidden: { opacity: 0 }, show: { opacity: 1 } };

  return (
    <div className="max-w-[1170px] mx-auto px-3 lg:px-0 py-5 lg:py-10 border-b-2">
      {loading ? (
        <p className="flex justify-center items-center">
          <img className="rounded-3xl h-40" src={loadingImg} alt="" />
        </p>
      ) : (
        <>
          <div className="overflow-x-hidden">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-5 lg:mb-10 border-b-2 border-red-500 inline-block pb-2">
                Popular Services
              </h2>
            </div>
            <motion.div
              variants={motionVariants}
              initial="hidden"
              animate="show"
              className="grid grid-cols-1  gap-5"
            >
              {services?.slice(0, 6).map((service, idx) => (
                <motion.div
                  variants={elementVariants}
                  className="border rounded-lg"
                  key={idx}
                >
                  <div className="hero">
                    <div className="hero-content flex-col lg:flex-row">
                      <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 1,
                          ease: "easeOut",
                          delay: 0.2,
                        }}
                        className="w-full "
                      >
                        <img
                          src={service?.photo}
                          className=" rounded-lg shadow-2xl"
                        />
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, y: -100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 1,
                          ease: "easeOut",
                          delay: 0.4,
                        }}
                        className="w-full"
                      >
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
                          <Link
                            to={`/singleService/${service._id}`}
                            className="btn project-btn"
                          >
                            View Details
                          </Link>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
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
