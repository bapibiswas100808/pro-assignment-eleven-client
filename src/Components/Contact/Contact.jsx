const Contact = () => {
  return (
    <div className="max-w-[1170px] mx-auto mb-20  pt-5">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-5 lg:mb-10 border-b-2 border-red-500 inline-block pb-2">
          Contact Us
        </h2>
      </div>
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse gap-10">
          <div className="text-center lg:text-left w-full">
            <h1 className="text-3xl font-bold">
              Do Not Hesitate to Reach Out!
            </h1>
            <p className="py-6">
              For inquiries or to plan your next unforgettable event, contact
              Dreamday Event Management at Phone Number or Email Address. Let us
              bring your vision to life with our meticulous planning and
              impeccable execution. Visit our website for more information and
              to view our portfolio of past events.
            </p>
            <p>
              <span className="text-lg font-bold mr-2">Phone:</span> +1 (555)
              123-4567
            </p>
            <p>
              <span className="text-lg font-bold mr-2">Email:</span>{" "}
              info@dreamdayevents.com
            </p>
            <p>
              <span className="text-lg font-bold mr-2">Address:</span>123 Main
              Street, Cityville, State, Zip Code
            </p>
          </div>
          <div className="card w-full shadow-2xl ">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Contact Us</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
