import { Helmet } from "react-helmet-async";
import { Link, useLoaderData } from "react-router-dom";

const SingleService = () => {
  const service = useLoaderData();
  console.log(service);
  return (
    <div className="max-w-[1170px] mx-auto px-3 lg:px-0 py-5 lg:py-10">
      <Helmet>
        <title>DreamDay|{service.serviceName}</title>
      </Helmet>
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-5 lg:mb-10 border-b-2 border-red-500 inline-block pb-2">
          Service: {service.serviceName}
        </h2>
      </div>
      <div className="mb-5">
        <div className="p-4 rounded-xl border">
          <h2 className="text-xl font-bold mb-5">Service Provider :</h2>
          <div className="flex items-center">
            <figure>
              <img src={service.providerImage} alt="Movie" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                <span className="text-lg text-black font-bold">Name:</span>
                {service.providerName}
              </h2>
              <p>
                <span className="text-lg font-bold mr-2">Service Area:</span>
                {service.serviceArea}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="hero border rounded-xl">
        <div className="hero-content flex-col lg:flex-row gap-10">
          <div className="w-full">
            <img src={service.photo} className="rounded-lg shadow-2xl" />
          </div>
          <div className="w-full">
            <h1 className="text-3xl font-bold">{service.serviceName}</h1>
            <p className="py-3">{service.description}</p>
            <p className="mb-5">
              <span className="text-lg font-bold mr-2">Price:</span>
              {service.price}
            </p>
            <div className="flex gap-5 items-center">
              <img
                className="h-16 rounded-full"
                src={service.providerImage}
                alt=""
              />
              <p>
                <span className="text-lg font-bold mr-2">Provider Name:</span>
                {service.providerName}
              </p>
            </div>
            <Link
              to={`/bookingService/${service._id}`}
              className="btn project-btn mt-5"
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleService;
