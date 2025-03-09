import { assets } from "../assets/assets";

const About = () => {
  return (
    <div className="about-container">
      {/* Heading Section */}
      <div className="text-center text-2xl pt-10 pb-10 text-gray-500">
        <h1>ABOUT <span className="text-gray-700 font-medium">US</span></h1>
      </div>

      {/* Image and Content Section */}
      <div className="flex flex-col md:flex-row my-5 gap-7">
        {/* Image Section */}
        <div className="md:w-1/2">
          <img className="w-full md:max-w-[390px] rounded-lg mx-auto mr-8 ml-13" src={assets.about_image} alt="About Us" />
        </div>

        {/* Content Section */}
        <div className="md:w-1/2 flex flex-col justify-center gap-3 text-sm text-gray-600">
          <h2 className="text-xl font-semibold text-gray-900">Who We Are</h2>
          <p className="text-gray-700 mt-2">
            We are a dedicated team committed to transforming the healthcare experience. Our mission is to make healthcare accessible and efficient for everyone. By connecting patients with qualified healthcare professionals, we strive to improve the quality and ease of medical consultations.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mt-6">OUR VISION</h3>
          <p className="text-gray-700 mt-2">
            Our vision is to revolutionize the healthcare sector by enhancing accessibility to medical consultations. We aim to bridge the gap between healthcare providers and patients, ensuring they have the tools and resources necessary for better health outcomes.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mt-6">OUR GOALS</h3>
          <p className="text-gray-700 mt-2">
            Our goal is to create a healthcare platform that simplifies the process of scheduling appointments, accessing doctors, and managing health information. We aim to empower both doctors and patients with the tools they need for informed decision-making.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
