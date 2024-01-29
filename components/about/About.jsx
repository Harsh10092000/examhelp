import Image from "next/image";
import img from "@/public/images/ab-pict.jpg";
const About = () => {
  return (
    <div className="py-16 bg-white pb-20 ">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6 ">
        <h2 className="text-2xl text-black font-bold justify-center items-center flex md:text-4xl  pb-10">
          About Exam Help Online
        </h2>

        <div class="flex space-x-6">
          <div class="w-2/5 ">
            <Image src={img} alt="img" className="rounded-full " />
          </div>
          <div class="w-3/5">
            <p className="mt-4 text-black text-lg pt-16 ">
              We have thousands of exams experts for more than 50 + different
              subjects. Our exam experts possess higher educational
              qualifications from top colleges and years of taking exams for
              students. We have been helping the students for the last seven
              years, and we have served more than 18,750+ students with our
              services.
            </p>
            <p className="mt-4 text-black text-lg ">
              {" "}
              Our experts are proficient in solving the exams for a wide range
              of important subjects such as statistics, accounting, medical,
              mathematics, finance, computer science, programming, management,
              nursing, history, chemistry, and many more subjects.
            </p>
            <button
              type="submit"
              class="flex mt-6 w-52 justify-center rounded-md bg-orange-00 hover:bg-orange-800 px-3 py-2.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
