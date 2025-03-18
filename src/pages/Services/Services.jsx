import robot from "../../assets/images/robot.svg"
import staff from "../../assets/images/staff.svg"
import cyber from "../../assets/images/cyber.svg"
import cloud from "../../assets/images/cloud.svg"
import plan from "../../assets/images/plan.svg"
import risk from "../../assets/images/risk.svg"
import cost from "../../assets/images/cost.svg"
import employee from "../../assets/images/employee.svg"
import guidance from "../../assets/images/guidance.svg"
import training from "../../assets/images/training.svg"
import process from "../../assets/images/process.svg"
import decision from "../../assets/images/decision.svg"
import Header from "../../components/Header/Header";
import TestimonialSection from "../../components/Testimonial/Testimonial"
import ContinuousSlider from "../../components/ContinuousSlider/ContinuousSlider"
import Footer from "../../components/Footer/Footer"

function Home() {

  return (
    <>
      <Header />
      <main className="bg-[#f1f1f1]">
        <section className="services-section bg-cover bg-no-repeat bg-top h-[calc(100vh-80px)] flex items-center py-5">
          <div className="w-[90%] md:w-[60%] mx-auto">
            <h1 className="text-center text-3xl md:text-6xl font-bold text-white">
              Services
            </h1>
            <p className="text-base text-white md:text-xl text-center pt-4">
              At PHB Consulting, our goal is to empower organizations by leveraging data analysis, behavioral insights, and technical expertise across key areas of business transformation. Each service we provide is designed to address specific challenges and opportunities in a data-informed and behavioral-sensitive way.
            </p>
          </div>
        </section>


        <section className="unique-section py-8 md:py-13">
          <div className="wrapper">
            <div className="text-center">
              <p className="font-semibold text-sm text-gray-500 uppercase">Solutions for Growth</p>
              <h1 className="text-2xl md:text-4xl mt-1 mb-4 text-blue-550 font-bold">Management Consulting</h1>
              <p className="text-base text-gray-500">
                Our consulting services focus on guiding your organization through business transformation by improving strategy, operations, and leadership.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              <div className="grid-item rounded-lg p-4 shadow-custom bg-white">
                <div className="flex flex-col items-center gap-2">
                  <div className="bg-icon w-max rounded-full p-3 shadow-lg">
                    <img src={cloud} className="w-11" alt="Media" />
                  </div>
                  <p className="text-base font-semibold text-gray-700 text-center">
                    Data Analysis
                  </p>
                  <p className="text-gray-500 text-base text-center">
                    We analyze key business metrics and trends to understand your current operations and identify areas for improvement. This allows us to provide actionable insights based on real-time data.
                  </p>
                </div>
              </div>

              <div className="grid-item rounded-lg p-4 shadow-custom bg-white">
                <div className="flex flex-col items-center gap-2">
                  <div className="bg-icon w-max rounded-full p-3 shadow-lg">
                    <img src={cyber} className="w-11" alt="Media" />
                  </div>
                  <p className="text-base font-semibold text-gray-700 text-center">
                    Behavioral Analysis
                  </p>
                  <p className="text-gray-500 text-base text-center">
                    We assess organizational culture and leadership behaviors to ensure that the right incentives and leadership styles are in place for successful change.
                  </p>
                </div>
              </div>

              <div className="grid-item rounded-lg p-4 shadow-custom bg-white">
                <div className="flex flex-col items-center gap-2">
                  <div className="bg-icon w-max rounded-full p-3 shadow-lg">
                    <img src={robot} className="w-11" alt="Media" />
                  </div>
                  <p className="text-base font-semibold text-gray-700 text-center">Technical Knowledge</p>
                  <p className="text-gray-500 text-base text-center">
                    Our consultants use the latest tools and technologies to optimize processes and implement scalable solutions that align with your organizational goals.
                  </p>
                </div>
              </div>

            </div>
            <p className="text-base text-center text-gray-500 mt-4 italic">
              "PHB’s management consulting helped us streamline our operations by leveraging data insights and behavioral analysis. Their technical approach ensured we achieved long-term success."
            </p>
            <p className="text-base text-center text-gray-500">
              Robert Harris, Director of Operations, Siemens
            </p>
          </div>
        </section>

        <section className="unique-section py-8 md:py-13">
          <div className="wrapper">
            <div className="text-center">
              <p className="font-semibold text-sm text-gray-500 uppercase">Solutions Built Smartly</p>
              <h1 className="text-2xl md:text-4xl mt-1 font-bold mb-4 text-blue-550">Technology Consulting</h1>
              <p className="text-base text-gray-500">
                We help businesses optimize their technology infrastructure to support operational goals and improve business outcomes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              <div className="grid-item rounded-lg p-4 shadow-custom bg-white">
                <div className="flex flex-col items-center gap-2">
                  <div className="bg-icon w-max rounded-full p-3 shadow-lg">
                    <img src={cloud} className="w-11" alt="Media" />
                  </div>
                  <p className="text-base font-semibold text-gray-700 text-center">
                    Data Analysis
                  </p>
                  <p className="text-gray-500 text-base text-center">
                    We use data analytics to evaluate your IT systems and identify opportunities for improvement. This ensures that your technology investments are optimized for efficiency.
                  </p>
                </div>
              </div>

              <div className="grid-item rounded-lg p-4 shadow-custom bg-white">
                <div className="flex flex-col items-center gap-2">
                  <div className="bg-icon w-max rounded-full p-3 shadow-lg">
                    <img src={cyber} className="w-11" alt="Media" />
                  </div>
                  <p className="text-base font-semibold text-gray-700 text-center">
                    Behavioral Analysis
                  </p>
                  <p className="text-gray-500 text-base text-center">
                    Understanding how employees interact with technology allows us to design systems that enhance usability and productivity, promoting positive behavioral changes in your workforce.
                  </p>
                </div>
              </div>

              <div className="grid-item rounded-lg p-4 shadow-custom bg-white">
                <div className="flex flex-col items-center gap-2">
                  <div className="bg-icon w-max rounded-full p-3 shadow-lg">
                    <img src={robot} className="w-11" alt="Media" />
                  </div>
                  <p className="text-base font-semibold text-gray-700 text-center">
                    Technical Knowledge
                  </p>
                  <p className="text-gray-500 text-base text-center">
                    Our team brings deep technical expertise to implement modern IT solutions, from cloud computing and cybersecurity to AI-driven automation and data analytics tools.
                  </p>
                </div>
              </div>

            </div>
            <p className="text-base text-center text-gray-500 mt-4 italic">
              "With PHB’s help, we utilized data and behavioral analysis to understand our system’s shortcomings and implement more effective technology solutions."
            </p>
            <p className="text-base text-center text-gray-500">
              Jessica Clarke, Director of Financial Operations, Bank of America
            </p>
          </div>
        </section>

        <section className="unique-section py-8 md:py-13">
          <div className="wrapper">
            <div className="text-center">
              <p className="font-semibold text-sm text-gray-500 uppercase">Data Fuels Growth</p>
              <h1 className="text-2xl md:text-4xl mt-1 font-bold mb-4 text-blue-550">
                Data Analytics & Business Intelligence
              </h1>
              <p className="text-base text-gray-500">
                We help organizations use data to drive better business decisions by unlocking the full potential of their data assets.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              <div className="grid-item rounded-lg p-4 shadow-custom bg-white">
                <div className="flex flex-col items-center gap-2">
                  <div className="bg-icon w-max rounded-full p-3 shadow-lg">
                    <img src={cloud} className="w-11" alt="Media" />
                  </div>
                  <p className="text-base font-semibold text-gray-700 text-center">
                    Data Analysis
                  </p>
                  <p className="text-gray-500 text-base text-center">
                    We extract meaningful insights from large datasets, helping businesses make data-driven decisions that improve efficiency, reduce costs, and maximize performance.
                  </p>
                </div>
              </div>

              <div className="grid-item rounded-lg p-4 shadow-custom bg-white">
                <div className="flex flex-col items-center gap-2">
                  <div className="bg-icon w-max rounded-full p-3 shadow-lg">
                    <img src={cyber} className="w-11" alt="Media" />
                  </div>
                  <p className="text-base font-semibold text-gray-700 text-center">
                    Behavioral Analysis
                  </p>
                  <p className="text-gray-500 text-base text-center">
                    We examine the behavior of both customers and employees to identify trends that can inform smarter business strategies, from marketing to HR.
                  </p>
                </div>
              </div>

              <div className="grid-item rounded-lg p-4 shadow-custom bg-white">
                <div className="flex flex-col items-center gap-2">
                  <div className="bg-icon w-max rounded-full p-3 shadow-lg">
                    <img src={robot} className="w-11" alt="Media" />
                  </div>
                  <p className="text-base font-semibold text-gray-700 text-center">
                    Technical Knowledge
                  </p>
                  <p className="text-gray-500 text-base text-center">
                    We use advanced data analytics tools and techniques to provide real-time insights, predictive models, and dashboards that give you a clear picture of your organization’s performance.
                  </p>
                </div>
              </div>
            </div>
            <p className="text-base text-center text-gray-500 mt-4 italic">
              "PHB’s data analytics services enabled us to make more informed decisions, improving both our operational efficiency and market responsiveness."
            </p>
            <p className="text-base text-center text-gray-500">
              Karen Mitchell, Director of Human Resources, Ford Motor Company
            </p>
          </div>
        </section>

        <section className="unique-section mb-11 py-8 md:py-13">
          <div className="wrapper">
            <div className="text-center">
              <p className="font-semibold text-sm text-gray-500 uppercase">Building Strong Teams</p>
              <h1 className="text-2xl md:text-4xl mt-1 font-bold mb-4 text-blue-550">
                Human Capital Strategy
              </h1>
              <p className="text-base text-gray-500">
                Our human capital strategy services are designed to help organizations build stronger teams and foster a culture of engagement.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              <div className="grid-item rounded-lg p-4 shadow-custom bg-white">
                <div className="flex flex-col items-center gap-2">
                  <div className="bg-icon w-max rounded-full p-3 shadow-lg">
                    <img src={cloud} className="w-11" alt="Media" />
                  </div>
                  <p className="text-base font-semibold text-gray-700 text-center">
                    Data Analysis
                  </p>
                  <p className="text-gray-500 text-base text-center">
                    We leverage workforce data to identify trends in employee performance, engagement, and retention, helping to shape policies that attract and retain top talent.
                  </p>
                </div>
              </div>

              <div className="grid-item rounded-lg p-4 shadow-custom bg-white">
                <div className="flex flex-col items-center gap-2">
                  <div className="bg-icon w-max rounded-full p-3 shadow-lg">
                    <img src={cyber} className="w-11" alt="Media" />
                  </div>
                  <p className="text-base font-semibold text-gray-700 text-center">
                    Behavioral Analysis
                  </p>
                  <p className="text-gray-500 text-base text-center">
                    By understanding the behavioral patterns of employees, we design strategies to improve engagement, motivation, and productivity across your organization.
                  </p>
                </div>
              </div>

              <div className="grid-item rounded-lg p-4 shadow-custom bg-white">
                <div className="flex flex-col items-center gap-2">
                  <div className="bg-icon w-max rounded-full p-3 shadow-lg">
                    <img src={robot} className="w-11" alt="Media" />
                  </div>
                  <p className="text-base font-semibold text-gray-700 text-center">
                    Technical Knowledge
                  </p>
                  <p className="text-gray-500 text-base text-center">
                    We utilize HR technology platforms to enhance recruitment, performance management, and talent development processes, creating a more streamlined and efficient workforce.
                  </p>
                </div>
              </div>

            </div>
            <p className="text-base text-center text-gray-500 mt-4 italic">
              "The behavioral data provided by PHB helped us make better HR decisions, which resulted in improved employee retention and a stronger company culture."
            </p>
            <p className="text-base text-center text-gray-500">
              Alex Moore, Director of IT Services, Dell Technologies
            </p>
          </div>
        </section>
        <Footer />
      </main>

    </>

  );
}

export default Home;
