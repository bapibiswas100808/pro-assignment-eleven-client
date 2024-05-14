import axios from "axios";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";

const ToDoService = () => {
  const bookedService = useLoaderData();
  const [allBookedService, setAllBookedService] = useState([]);

  useEffect(() => {
    setAllBookedService(bookedService);
  }, [bookedService]);

  const [search, setSearch] = useState("");
  const handleStatus = (status, id) => {
    axios
      .patch(
        `https://pro-assignment-eleven-server.vercel.app/allBookings/${id}`,
        { status },
        { withCredentials: true }
      )
      .then((res) => {
        console.log(res.data);
        if (res.data.modifiedCount > 0) {
          axios
            .get("https://pro-assignment-eleven-server.vercel.app/allBookings")
            .then((res) => {
              setAllBookedService(res.data);
            })
            .catch((err) => {
              console.log(err);
            });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="max-w-[1170px] mx-auto px-3 lg:px-0 py-5 lg:py-10">
      <Helmet>
        <title>DreamDay|Service To Do</title>
      </Helmet>
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-5 lg:mb-10 border-b-2 border-red-500 inline-block pb-2">
          Service To Do
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

      {allBookedService?.length > 0 ? (
        <div className="grid grid-cols-1 gap-5">
          {allBookedService
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
                      <div className="flex gap-10 items-center">
                        <p className="mb-1">
                          <span className="text-lg font-bold mr-2">
                            Status:
                          </span>
                          <span className="bg-green-600 p-2 rounded-3xl">
                            {service.status}
                          </span>
                        </p>
                        <select
                          onChange={(e) =>
                            handleStatus(e.target.value, service._id)
                          }
                          className="select select-bordered w-full max-w-xs"
                          defaultValue={service.status}
                        >
                          <option disabled value="">
                            Select Status
                          </option>
                          <option value="pending">Pending</option>
                          <option value="working">Working</option>
                          <option value="completed">Completed</option>
                        </select>
                      </div>

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

export default ToDoService;
