import { assets } from "../assets/assets";

const Contact = () => {
  return (
    <div>

<div className="text-center text-2xl pt-10 pb-10 text-gray-500">
        <h1>CONTACT <span className="text-gray-700 font-medium">US</span></h1>
      </div>

      <div className=" my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm">
        <img className="w-full md:max-w-[360px]" src={assets.contact_image} alt="" />
        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-lg text-gray-600">Our Office</p>
          <p className="text-gray-500">Manalurpet road <br />Tiruvannamalai-606601</p>
          <p className="text-gray-500">Phone no. : +91 1112223334 <br />Email: example@gmail.com</p>
          <p className="font-semibold text-lg text-gray-600">Careers at DOCMATE</p>
          <p className="text-gray-500">Learn more about our teams and job openings.</p>
          <button className="border border-b px-8 py-4 text-zm hover:bg-black hover:text-white transition-all  duration-100">Explore Jobs</button>
        </div>
      </div>


    </div>
  );
}

export default Contact;
