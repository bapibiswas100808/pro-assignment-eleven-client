import { useLoaderData } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import axios from "axios";
import Swal from "sweetalert2";

const UpdateService = () => {
  const updatedService = useLoaderData();
  // console.log(updatedService);

  const handleUpdateService = (e) => {
    e.preventDefault();
    const form = e.target;
    const photo = form.photo.value;
    const price = form.price.value;
    const serviceName = form.serviceName.value;
    const serviceArea = form.serviceArea.value;
    const description = form.description.value;
    const updatedData = {
      photo,
      price,
      serviceName,
      serviceArea,
      description,
    };
    axios
      .put(
        `https://pro-assignment-eleven-server.vercel.app/allServices/${updatedService._id}`,
        updatedData
      )
      .then((res) => {
        console.log(res.data);
        if (res.data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Service Updated Successfully",
            icon: "success",
            confirmButtonText: "Continue",
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
        <title>DreamDay|Update Service</title>
      </Helmet>
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-5 lg:mb-10 border-b-2 border-red-500 inline-block pb-2">
          Update This Service
        </h2>
      </div>
      <div className="pb-10">
        <form onSubmit={handleUpdateService}>
          <div className="flex flex-col md:flex-row lg:flex-row gap-5">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Photo URL</span>
              </div>
              <input
                type="text"
                placeholder="Photo URL"
                defaultValue={updatedService.photo}
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
                defaultValue={updatedService.serviceName}
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
                defaultValue={updatedService.price}
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
                defaultValue={updatedService.serviceArea}
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
              defaultValue={updatedService.description}
              required
            ></textarea>
          </label>
          <button type="submit" className="btn project-btn mt-5 w-full">
            Update Service
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateService;
