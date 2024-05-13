import faqImage from "../../assets/images/faq.jpg";
const FAQSection = () => {
  return (
    <div className="max-w-[1170px] mx-auto py-5 lg:py-10 px-3 lg:px-0 border-b-2">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-5 lg:mb-10 border-b-2 border-red-500 inline-block pb-2">
          FAQs
        </h2>
      </div>
      <div className="">
        <div className="flex flex-col lg:flex-row gap-10 items-center">
          <div className="w-full">
            <img
              className="lg:h-[300px] mb-5 w-full rounded-lg"
              src={faqImage}
              alt=""
            />
            <h2 className="text-2xl font-bold mb-5">
              We are Always Dedicated to answer your questions
            </h2>
            <p>
              Dreamday Event Management provides comprehensive answers to
              frequently asked questions, ensuring clarity and peace of mind for
              our clients. From event logistics to budget inquiries, our
              experienced team addresses every concern promptly and thoroughly,
              empowering clients to make informed decisions and embark on their
              event journey with confidence.
            </p>
          </div>
          <div className="w-full">
            {/* faq 1 */}
            <div className="collapse collapse-arrow border-b-2">
              <input type="radio" name="my-accordion-2" defaultChecked />
              <div className="collapse-title text-xl font-medium">
                How far in advance should I book my event with Dreamday Event
                Management?
              </div>
              <div className="collapse-content">
                <p>
                  {" "}
                  We recommend booking your event with us at least 6-12 months
                  in advance to ensure availability and allow ample time for
                  planning and coordination.
                </p>
              </div>
            </div>
            {/* faq 2 */}
            <div className="collapse collapse-arrow border-b-2">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-xl font-medium">
                What types of events does Dreamday Event Management specialize
                in?
              </div>
              <div className="collapse-content">
                <p>
                  Dreamday specializes in a wide range of events, including
                  corporate galas, weddings, conferences, fundraisers, and
                  private celebrations, tailoring each experience to meet your
                  unique needs.
                </p>
              </div>
            </div>
            {/* faq 3 */}
            <div className="collapse collapse-arrow border-b-2">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-xl font-medium">
                Can I customize the services offered by Dreamday Event
                Management?
              </div>
              <div className="collapse-content">
                <p>
                  Absolutely! We believe in creating bespoke experiences
                  tailored to your vision and preferences. Our team works
                  closely with you to customize every aspect of your event,
                  ensuring it exceeds expectations.
                </p>
              </div>
            </div>
            {/* faq 4 */}
            <div className="collapse collapse-arrow border-b-2">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-xl font-medium">
                How does Dreamday Event Management handle unforeseen
                circumstances or emergencies during an event?
              </div>
              <div className="collapse-content">
                <p>
                  Our experienced team is trained to handle any unexpected
                  situations that may arise with professionalism and efficiency.
                  We have contingency plans in place to mitigate risks and
                  ensure the smooth flow of your event.
                </p>
              </div>
            </div>
            {/* faq 5 */}
            <div className="collapse collapse-arrow ">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-xl font-medium">
                What is the pricing structure for Dreamday Event Management
                services?
              </div>
              <div className="collapse-content">
                <p>
                  {" "}
                  Our pricing is tailored to each clients specific requirements,
                  taking into account factors such as event size, complexity,
                  and location. Contact us for a personalized quote based on
                  your needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div>
        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title text-xl font-medium">
            Click to open this one and close others
          </div>
          <div className="collapse-content">
            <p>hello</p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            Click to open this one and close others
          </div>
          <div className="collapse-content">
            <p>hello</p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            Click to open this one and close others
          </div>
          <div className="collapse-content">
            <p>hello</p>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default FAQSection;
