import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { Helmet } from "react-helmet-async";
import axios from "axios";
import Swal from "sweetalert2";

const BookingService = () => {
  const bookingService = useLoaderData();
  const { user } = useContext(AuthContext);

  const handleBookService = (e) => {
    e.preventDefault();
    const form = e.target;
    const status = "pending";
    const serviceId = form.serviceId.value;
    const serviceName = form.serviceName.value;
    const serviceImage = form.photo.value;
    const providerEmail = form.providerEmail.value;
    const providerName = form.providerName.value;
    const userEmail = form.userEmail.value;
    const userName = form.userName.value;
    const price = form.price.value;
    const serviceDate = form.serviceDate.value;
    const instruction = form.instruction.value;
    const newBooking = {
      status,
      serviceId,
      serviceName,
      serviceImage,
      providerEmail,
      providerName,
      userEmail,
      userName,
      price,
      serviceDate,
      instruction,
    };
    axios
      .post("http://localhost:5000/allBookings", newBooking)
      .then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Service Booked Successfully",
            icon: "success",
            confirmButtonText: "Continue",
          });
          form.reset();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="max-w-[1170px] mx-auto px-3 lg:px-0 py-5 lg:py-10">
      <Helmet>
        <title>DreamDay|Book Service</title>
      </Helmet>
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-5 lg:mb-10 border-b-2 border-red-500 inline-block pb-2">
          Book This Service
        </h2>
      </div>
      <div>
        <form onSubmit={handleBookService}>
          {/* service id and service name */}
          <div className="flex flex-col md:flex-row lg:flex-row gap-5">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Service Id</span>
              </div>
              <input
                type="text"
                readOnly
                defaultValue={bookingService._id}
                name="serviceId"
                className="input input-bordered w-full"
              />
            </label>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Service Name</span>
              </div>
              <input
                type="text"
                readOnly
                name="serviceName"
                defaultValue={bookingService.serviceName}
                className="input input-bordered w-full"
              />
            </label>
          </div>
          {/* service image and provider email */}
          <div className="flex flex-col md:flex-row lg:flex-row gap-5">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Service Image</span>
              </div>
              <input
                type="text"
                readOnly
                defaultValue={bookingService.photo}
                name="photo"
                className="input input-bordered w-full"
              />
            </label>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Provider Email</span>
              </div>
              <input
                type="email"
                readOnly
                name="providerEmail"
                defaultValue={bookingService.providerEmail}
                className="input input-bordered w-full"
              />
            </label>
          </div>
          {/* provider name and user email */}
          <div className="flex flex-col md:flex-row lg:flex-row gap-5">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Provider Name</span>
              </div>
              <input
                type="text"
                readOnly
                defaultValue={bookingService.providerName}
                name="providerName"
                className="input input-bordered w-full"
              />
            </label>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">User Email</span>
              </div>
              <input
                type="email"
                readOnly
                name="userEmail"
                defaultValue={user?.email}
                className="input input-bordered w-full"
              />
            </label>
          </div>
          {/* user name and price */}
          <div className="flex flex-col md:flex-row lg:flex-row gap-5">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">User Name</span>
              </div>
              <input
                type="text"
                readOnly
                defaultValue={user?.displayName}
                name="userName"
                className="input input-bordered w-full"
              />
            </label>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Price</span>
              </div>
              <input
                type="text"
                readOnly
                name="price"
                defaultValue={bookingService.price}
                className="input input-bordered w-full"
              />
            </label>
          </div>
          {/* user name and price */}
          <div className="flex flex-col md:flex-row lg:flex-row gap-5">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Date of Service</span>
              </div>
              <input
                type="date"
                placeholder=""
                name="serviceDate"
                className="input input-bordered w-full"
                required
              />
            </label>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Special Instruction</span>
              </div>
              <input
                type="text"
                name="instruction"
                placeholder="Instruction, e.g. Address"
                className="input input-bordered w-full"
                required
              />
            </label>
          </div>
          <button type="submit" className="w-full mt-5 btn project-btn">
            Purchase Service
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingService;
