import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import axios from "axios";
import { Helmet } from "react-helmet-async";

const BookedService = () => {
  const { user } = useContext(AuthContext);
  const [booking, setBooking] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    axios
      .get(
        `https://pro-assignment-eleven-server.vercel.app/myBooking/${user?.email}`,
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        setBooking(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [user]);
  // console.log(booking);
  return (
    <div className="max-w-[1170px] mx-auto px-3 lg:px-0 py-5 lg:py-10">
      <Helmet>
        <title>DreamDay|Booked Service</title>
      </Helmet>
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-5 lg:mb-10 border-b-2 border-red-500 inline-block pb-2">
          Your Booked Services
        </h2>
      </div>
      <div>
        <input
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Search here"
          className="input input-bordered input-primary w-full mb-5"
        />
      </div>
      {booking?.length > 0 ? (
        <div className="grid grid-cols-1 gap-5">
          {booking
            ?.filter((item) => {
              const searchLowerCase = search.toLowerCase();
              const serviceNameLowerCase = item.serviceName.toLowerCase();
              return searchLowerCase === ""
                ? item
                : serviceNameLowerCase.includes(searchLowerCase);
            })
            .map((service, idx) => (
              <div className="border rounded-lg" key={idx}>
                <div className="hero">
                  <div className="hero-content flex-col lg:flex-row">
                    <div className="w-full ">
                      <img
                        src={service?.serviceImage}
                        className=" rounded-lg shadow-2xl"
                      />
                    </div>
                    <div className="w-full">
                      <h1 className="text-2xl font-bold mb-5">
                        {service.serviceName}
                      </h1>

                      <div className="space-y-3">
                        <p>
                          <span className="text-lg font-bold mr-2">
                            Service Booked by:
                          </span>
                          {service?.userName}
                        </p>
                        <p>
                          <span className="text-lg font-bold mr-2">
                            Email of Customer:
                          </span>
                          {service?.userEmail}
                        </p>
                        <p>
                          <span className="text-lg font-bold mr-2">Price:</span>
                          {service?.price}
                        </p>
                        <p>
                          <span className="text-lg font-bold mr-2">
                            Service Provider:
                          </span>
                          {service?.providerName}
                        </p>
                      </div>
                      <div className="space-y-3 mt-2">
                        <p>
                          <span className="mr-2 font-bold">
                            Provider Email:
                          </span>
                          {service.providerEmail}
                        </p>
                        <p>
                          <span className="mr-2 font-bold">Service Date:</span>
                          {service.serviceDate}
                        </p>
                        <p>
                          <span className="mr-2 font-bold">
                            Special Instructions:
                          </span>
                          {service.instruction}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      ) : (
        <div>
          <h2 className="text-xl font-bold text-center">
            You did not Book Any Service yet!
          </h2>
        </div>
      )}
    </div>
  );
};

export default BookedService;
