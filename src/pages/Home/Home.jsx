import about from "../../assets/images/about.webp"
import industry from "../../assets/images/industry.svg"
import approach from "../../assets/images/approach.svg"
import record from "../../assets/images/record.svg"
import client from "../../assets/images/client.svg"
import ai from "../../assets/images/ai.webp"
import Header from "../../components/Header/Header";
import TestimonialSection from "../../components/Testimonial/Testimonial"
import ContinuousSlider from "../../components/ContinuousSlider/ContinuousSlider"
import Footer from "../../components/Footer/Footer"

function Home() {

  return (
    <>
      <Header />
      <main>
        <section className="hero-section flex items-center py-5">
          <div className="w-[90%] md:w-[60%] mx-auto">
            <h1 className="text-center text-2xl md:text-5xl font-bold text-white">Welcome to PHB Consulting</h1>
            <p className="text-sm text-white md:text-base text-center pt-4">
              At PHB Consulting, we provide strategic, data-driven solutions to help organizations navigate complex challenges and unlock their full potential. Our expertise spans across management consulting, organizational development, technology, data analytics, and human capital strategy. By combining behavioral insights, technical knowledge, and advanced data analysis, we empower businesses to drive growth, improve efficiency, and stay ahead in an ever-changing landscape.
            </p>
          </div>
        </section>

        <section className="about-section my-16 md:my-24 py-11 md:py-16 bg-dim">
          <div className="wrapper">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-8">
              <div>
                <img src={about} className="w-full rounded-3xl" alt="Media" />
              </div>
              <div className="flex flex-col justify-center">
                <p className="font-semibold text-sm text-gray-500 uppercase">About</p>
                <h1 className="text-2xl md:text-4xl mt-1 mb-5 text-blue-550">PHB Consulting</h1>
                <p className="text-base text-gray-500">
                  At PHB Consulting, we believe in the power of tailored solutions that are driven by data, behavioral insights, and cutting-edge technologies. Our team of experts brings a practical and results-oriented approach to every engagement, ensuring that organizations not only meet their immediate needs but also build long-term success. With decades of combined experience, we work closely with each client to achieve measurable outcomes and foster lasting impact.
                </p>
              </div>
            </div>
          </div>

        </section>

        <section className="unique-section mb-16 md:mb-24 py-11 md:py-16">
          <div className="wrapper">
            <div className="text-center">
              <p className="font-semibold text-sm text-gray-500 uppercase">Transforming Visions Successfully</p>
              <h1 className="text-2xl md:text-4xl mt-1 mb-5 text-blue-550">What Sets Us Apart?</h1>
              <p className="text-base text-gray-500">
                We are committed to understanding the unique challenges and opportunities facing your organization. By combining data analysis, behavioral insights, and deep technical expertise, we provide strategies that are customized to fit your specific business goals.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
              <div className="grid-item rounded-lg p-4 shadow-custom">
                <div className="flex flex-col items-center gap-2">
                  <div className="bg-icon w-max rounded-full p-3 shadow-lg">
                    <img src={industry} className="w-11" alt="Media" />
                  </div>
                  <p className="text-base font-semibold text-gray-700">Industry-Specific Expertise</p>
                  <p className="text-gray-500 text-base text-center">
                    Our consultants have deep experience across multiple industries, allowing us to offer insights and solutions that are both innovative and practical.
                  </p>
                </div>
              </div>

              <div className="grid-item rounded-lg p-4 shadow-custom">
                <div className="flex flex-col items-center gap-2">
                  <div className="bg-icon w-max rounded-full p-3 shadow-lg">
                    <img src={approach} className="w-11" alt="Media" />
                  </div>
                  <p className="text-base font-semibold text-gray-700">Data-Driven Decisions</p>
                  <p className="text-gray-500 text-base text-center">
                    Our approach integrates data analysis at every step of the process, ensuring that decisions are based on the most accurate and actionable information available.
                  </p>
                </div>
              </div>

              <div className="grid-item rounded-lg p-4 shadow-custom">
                <div className="flex flex-col items-center gap-2">
                  <div className="bg-icon w-max rounded-full p-3 shadow-lg">
                    <img src={record} className="w-11" alt="Media" />
                  </div>
                  <p className="text-base font-semibold text-gray-700">Collaborative Approach</p>
                  <p className="text-gray-500 text-base text-center">
                    We work alongside your team to ensure that strategies are not only implemented but also supported by the right technical tools and behaviors that drive success.
                  </p>
                </div>
              </div>

              <div className="grid-item rounded-lg p-4 shadow-custom">
                <div className="flex flex-col items-center gap-2">
                  <div className="bg-icon w-max rounded-full p-3 shadow-lg">
                    <img src={client} className="w-11" alt="Media" />
                  </div>
                  <p className="text-base font-semibold text-gray-700">Proven Results</p>
                  <p className="text-gray-500 text-base text-center">
                    Through careful analysis and hands-on collaboration, we help organizations improve operational performance, reduce costs, and enhance workforce engagement.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="consulting-section mb-16 md:mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div>
              <img src={ai} className="w-full" alt="Media" />
            </div>
            <div>
              <div className="p-5 md:p-8">
                <p className="font-semibold text-sm text-gray-500 uppercase">Future Through Insights</p>
                <h1 className="text-2xl md:text-4xl mt-1 mb-5 text-blue-550">Data, Behavior, and Technology for the Future</h1>
                <p className="text-base text-gray-500">
                  At PHB Consulting, we recognize that the future of business lies in data-driven decision-making. By integrating data analytics, behavioral analysis, and the latest technologies, we help businesses improve operations, predict trends, and achieve greater performance. Whether it’s optimizing processes through data analysis, understanding employee behavior to improve engagement, or implementing technology to streamline workflows, we ensure your organization is prepared for the challenges of tomorrow.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="executive-section mb-16 md:mb-24 py-11 md:py-16">
          <TestimonialSection />
        </section>

        <section className="unique-section mb-16 md:mb-24 py-11 md:py-16 bg-dim">
          <div className="wrapper">
            <div className="text-center">
              <p className="font-semibold text-sm text-gray-500 uppercase">Global Network Partners</p>
              <h1 className="text-2xl md:text-4xl mt-1 mb-5 text-blue-550">Who We Work With</h1>
              <p className="text-base text-gray-500">
                At PHB, we collaborate with leading Fortune 500 companies across diverse industries, including technology, finance, healthcare, manufacturing, retail, and logistics. Our clients rely on us for cutting-edge consulting and staffing solutions designed to meet their unique business challenges. With deep industry expertise, we develop strategic frameworks that enhance efficiency, foster innovation, and drive sustainable growth.
                <br /><br />
                We take pride in partnering with industry leaders that set the benchmark for excellence. Some of the Fortune 500 companies we have worked with include Microsoft, JPMorgan Chase, General Motors, IBM, Walmart, Johnson & Johnson, Google, Amazon, Boeing, and Pfizer. Our reputation for delivering high-impact consulting and staffing solutions makes us the trusted partner for organizations seeking transformative growth and workforce success.
              </p>
            </div>
          </div>
          <ContinuousSlider />
        </section>
        <Footer />
      </main>

    </>

  );
}

export default Home;
