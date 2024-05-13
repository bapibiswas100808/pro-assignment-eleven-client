import aboutImage from "../../assets/images/20.png";
const About = () => {
  return (
    <div className="max-w-[1170px] mx-auto py-5 lg:py-10 px-3 lg:px-0 border-b-2">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-5 lg:mb-10 border-b-2 border-red-500 inline-block pb-2">
          About Us
        </h2>
      </div>
      <div>
        <div className="hero">
          <div className="flex flex-col lg:flex-row-reverse gap-10 items-top">
            <div className="w-full flex items-center justify-center">
              <div className="mockup-phone">
                <div className="camera "></div>
                <div className="display">
                  <div className="">
                    <img
                      src="https://i.ibb.co/4KHncY2/wedding.jpg"
                      className="w-full rounded-lg shadow-2xl "
                    />
                    <h3 className="text-center font-semibold text-lg py-4 text-white">
                      DreamDay makes your dream come true!
                    </h3>
                    <img
                      src="https://i.ibb.co/r4mS6m4/gala-dinner.jpg"
                      className="w-full rounded-lg shadow-2xl"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full">
              {/* <h1 className="text-2xl font-bold">Know More About Us!</h1> */}
              <div className="flex justify-center lg:justify-start">
                <img className="h-[300px]" src={aboutImage} alt="" />
              </div>
              <h3 className="text-3xl lg:text-5xl font-semibold">
                Years Of Experience on Event management!
              </h3>
              <p className="py-6">
                Dreamday Event Management is the epitome of event excellence.
                With a keen eye for detail and a passion for creativity, they
                transform visions into reality. From corporate galas to intimate
                gatherings, every event is meticulously planned and executed
                with finesse. Their dedicated team goes above and beyond to
                ensure each aspect, from venue selection to catering, reflects
                the clients unique style and exceeds expectations. With
                Dreamday, every occasion becomes an unforgettable experience,
                cherished by all who attend.
              </p>

              <button className="btn project-btn">Explore More!</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
