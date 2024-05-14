import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const AddService = () => {
  const { user } = useContext(AuthContext);
  const handleAddService = (e) => {
    e.preventDefault();
    const form = e.target;
    const photo = form.photo.value;
    const price = form.price.value;
    const serviceName = form.serviceName.value;
    const serviceArea = form.serviceArea.value;
    const description = form.description.value;
    const providerName = user?.displayName;
    const providerEmail = user?.email;
    const providerImage = user?.photoURL;
    const newService = {
      photo,
      price,
      serviceName,
      serviceArea,
      description,
      providerName,
      providerEmail,
      providerImage,
    };
    axios
      .post(
        "https://pro-assignment-eleven-server.vercel.app/allServices",
        newService
      )
      .then((res) => {
        // console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Service added Successfully",
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
    <div className="max-w-[1170px] mx-auto">
      <Helmet>
        <title>DreamDay|Add Service</title>
      </Helmet>
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-5 lg:mb-10 border-b-2 border-red-500 inline-block pb-2 mt-10">
          Add A Service
        </h2>
      </div>
      {/* photo & Service Name */}
      <div className="pb-10">
        <form onSubmit={handleAddService}>
          <div className="flex flex-col md:flex-row lg:flex-row gap-5">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Photo URL</span>
              </div>
              <input
                type="text"
                placeholder="Photo URL"
                className="input input-bordered w-full"
                name="photo"
                required
              />
            </label>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Service Name</span>
              </div>
              <input
                type="text"
                placeholder="Service Name"
                className="input input-bordered w-full"
                name="serviceName"
                required
              />
            </label>
          </div>

          {/* price & Service area */}
          <div className="flex flex-col md:flex-row lg:flex-row gap-5">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Price</span>
              </div>
              <input
                type="number"
                placeholder="Price"
                name="price"
                className="input input-bordered w-full"
                required
              />
            </label>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Service Area</span>
              </div>
              <input
                type="text"
                placeholder="Service Area"
                name="serviceArea"
                className="input input-bordered w-full"
                required
              />
            </label>
          </div>
          {/* Description */}
          <label className="form-control">
            <div className="label">
              <span className="label-text">Description</span>
            </div>
            <textarea
              className="textarea textarea-bordered h-24"
              placeholder="Description"
              name="description"
              required
            ></textarea>
          </label>
          <button type="submit" className="btn project-btn mt-5 w-full">
            Add Service
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddService;
