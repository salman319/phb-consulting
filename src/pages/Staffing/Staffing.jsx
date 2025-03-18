import force from "../../assets/images/force.svg"
import talent from "../../assets/images/talent.svg"
import integration from "../../assets/images/integration.svg"
import expertise from "../../assets/images/expertise.svg"
import it from "../../assets/images/it.svg"
import finance from "../../assets/images/finance.svg"
import project from "../../assets/images/project.svg"
import girl from "../../assets/images/girl.webp"
import w1 from "../../assets/images/w1.webp"
import w2 from "../../assets/images/w2.jpg"
import w3 from "../../assets/images/w3.webp"
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer"

function Staffing() {

  return (
    <>
      <Header />
      <main className="bg-[#f1f1f1]">
        <section className="staffing-section bg-[#000000a5] bg-cover bg-no-repeat bg-top h-[calc(100vh-80px)] flex items-center py-5">
          <div className="w-[90%] md:w-[60%] mx-auto">
            <h1 className="text-center text-3xl md:text-6xl font-bold text-white">
              Staffing Solutions
            </h1>
            <p className="text-base text-white md:text-xl text-center pt-4">
              PHB Consulting provides expert staffing solutions that ensure your organization has the right talent to drive growth and innovation.
            </p>
          </div>
        </section>

        <section className="choose-services mt-11 md:mt-20">
          <div className="wrapper">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-9">
              <div>
                <img src={girl} alt="Media" className="w-full h-full object-cover" />
              </div>
              <div className="grid-item">
                <div className="text-left">
                  <p className="font-semibold text-sm text-gray-500 uppercase">Your Hiring Partner</p>
                  <h1 className="text-2xl md:text-4xl mt-1 mb-4 text-blue-550 font-bold">
                    Why Choose Our Staffing Services?
                  </h1>

                  <div className="grid grid-cols-[80px_1fr] gap-5 mt-6 items-start">
                    <div className="bg-mint-500 h-20 rounded-full flex justify-center items-center">
                      <img src={talent} className="w-14" alt="Media" />
                    </div>
                    <div className="flex flex-col justify-center min-h-full">
                      <h2 className="font-semibold text-xl text-black">
                        Access to Top Talent
                      </h2>
                      <p className="text-black text-base">
                        We connect you with skilled professionals across IT, finance, HR, and operations, based on a deep understanding of the technical and behavioral competencies required.
                      </p>
                    </div>

                    <div className="bg-mint-500 h-20 rounded-full flex justify-center items-center">
                      <img src={force} className="w-14" alt="Media" />
                    </div>
                    <div>
                      <h2 className="font-semibold text-xl text-black">
                        Flexible Staffing Models
                      </h2>
                      <p className="text-black text-base">
                        Whether you need short-term contractors or long-term strategic hires, we offer solutions that align with your unique needs.
                      </p>
                    </div>

                    <div className="bg-mint-500 h-20 rounded-full flex justify-center items-center">
                      <img src={integration} className="w-14" alt="Media" />
                    </div>
                    <div>
                      <h2 className="font-semibold text-xl text-black">
                        Efficient Integration
                      </h2>
                      <p className="text-black text-base">
                        Our staff quickly integrates into your organization, applying technical expertise, behavioral knowledge, and data-driven insights to contribute immediately.
                      </p>
                    </div>

                    <div className="bg-mint-500 h-20 rounded-full flex justify-center items-center">
                      <img src={expertise} className="w-14" alt="Media" />
                    </div>
                    <div>
                      <h2 className="font-semibold text-xl text-black">
                        Industry-Specific Expertise
                      </h2>
                      <p className="text-black text-base">
                        We match candidates with the precise skills, knowledge, and behavioral traits to excel in your industry, ensuring a strong fit from day one.
                      </p>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="choose-services my-11 md:my-20">
          <div className="wrapper">
            <div className="text-center">
              <p className="font-semibold text-sm text-gray-500 uppercase">Working with Experts</p>
              <h1 className="text-2xl md:text-4xl mt-1 mb-4 text-blue-550 font-bold">
                Who We Work With
              </h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-5">
              <div className="grid-item border-[3px] border-mint-500/40 p-5">
                <div>
                  <img src={w1} className="w-full aspect-square object-cover" alt="Media" />
                </div>
                <div>
                  <h3 className="text-black text-xl font-semibold mt-4 mb-3">Leading Experts</h3>
                  <p className="text-gray-600 text-base text-justify">
                    PHB partners with some of the world’s most prominent Fortune 500 companies across a variety of industries. From technology and finance to healthcare and manufacturing, our clients rely on us to provide cutting-edge consulting and staffing solutions that align with their business objectives. Our deep industry knowledge allows us to create strategic frameworks that drive efficiency, innovation, and long-term success. Whether it’s helping a financial institution optimize risk management, advising a global healthcare provider on regulatory compliance, or supporting a tech giant in scaling its IT workforce, we deliver measurable results that make an impact.
                  </p>
                </div>
              </div>

              <div className="grid-item border-[3px] border-mint-500/40 p-5">
                <div>
                  <img src={w2} className="w-full aspect-square object-cover" alt="Media" />
                </div>
                <div>
                  <h3 className="text-black text-xl font-semibold mt-4 mb-3">Strategic Talent</h3>
                  <p className="text-gray-600 text-base text-justify">
                    In addition to consulting, our staffing augmentation services help leading organizations secure the talent they need to stay competitive. Companies in industries such as banking, retail, logistics, and telecommunications require specialized professionals to meet the demands of large-scale operations and rapid digital transformation. We work with Fortune 500 clients to place highly skilled professionals in roles ranging from IT developers and data analysts to financial strategists and HR leaders. Our commitment to excellence ensures that our clients have the right expertise in place to achieve their business goals, whether they need temporary support for a critical project or long-term talent to drive sustained growth.
                  </p>
                </div>
              </div>

              <div className="grid-item border-[3px] border-mint-500/40 p-5">
                <div>
                  <img src={w3} className="w-full aspect-square object-cover" alt="Media" />
                </div>
                <div>
                  <h3 className="text-black text-xl font-semibold mt-4 mb-3">Preferred Partner</h3>
                  <p className="text-gray-600 text-base text-justify">
                    We are proud to be the trusted partner of industry leaders, helping them navigate transformation and build a workforce ready for the future. Some of the Fortune 500 companies we have worked with include Microsoft, JPMorgan Chase, General Motors, IBM, Walmart, Johnson & Johnson, and Google. Our ability to deliver top-tier consulting and staffing services makes us the preferred partner for companies that demand excellence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>

    </>

  );
}

export default Staffing;
