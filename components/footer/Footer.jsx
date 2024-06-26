import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconBrandWhatsapp,
} from "@tabler/icons-react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="flex items-end w-full bg-white">
      <footer className="w-full text-gray-700 bg-slate-800 body-font maindiv">
        <div className="container flex flex-col flex-wrap px-5 py-24 mx-auto md:items-center lg:items-start md:flex-row md:flex-no-wrap">
          <div className="flex flex-wrap flex-grow mt-10 -mb-10 text-center md:pl-20 md:mt-0 md:text-left">
            <div className="w-full px-4 lg:w-1/4 md:w-1/2">
              <div className="flex items-center justify-center font-medium text-white title-font md:justify-start uppercase">
                <h3>About Us</h3>
              </div>
              <p className="mt-2 text-gray-200">
                You can be confident that your personal information and
                examination details will remain completely confidential with us.
                We will never share that with anyone and ensure that it is not
                accessible to even specialists.
              </p>
              <div className="mt-4">
                <span className="inline-flex justify-center mt-2 sm:ml-auto sm:mt-0 sm:justify-start">
                  <div className="text-gray-200 cursor-pointer hover:text-gray-700">
                    <IconBrandFacebook />
                  </div>
                  <div className="ml-3 text-gray-200 cursor-pointer hover:text-gray-700">
                    <IconBrandTwitter />
                  </div>
                  <div className="ml-3 text-gray-200 cursor-pointer hover:text-gray-700">
                    <IconBrandInstagram />
                  </div>
                  <div className="ml-3 text-gray-200 cursor-pointer hover:text-gray-700">
                    <IconBrandLinkedin />
                  </div>
                </span>
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/6 md:w-1/2">
              <div className="flex items-center justify-center font-medium text-white title-font md:justify-start uppercase">
                <h3>Quick Link</h3>
              </div>
              <nav className="mb-10 list-none">
                <div className="mt-3">
                  <Link href="/">
                    <div className="text-gray-200 cursor-pointer hover:text-white">
                      Home
                    </div>
                  </Link>
                </div>
                <div className="mt-3">
                  <Link href="/about">
                    <div className="text-gray-200 cursor-pointer hover:text-white">
                      About Us
                    </div>
                  </Link>
                </div>
                <div className="mt-3">
                  <Link href="/contact">
                    <div className="text-gray-200 cursor-pointer hover:text-white">
                      Contact Us
                    </div>
                  </Link>
                </div>
                <div className="mt-3">
                  <Link href="/privacy">
                    <div className="text-gray-200 cursor-pointer hover:text-white">
                      Privacy Policy
                    </div>
                  </Link>
                </div>
                <div className="mt-3">
                  <Link href="/disclaimer">
                    <div className="text-gray-200 cursor-pointer hover:text-white">
                      Disclaimer
                    </div>
                  </Link>
                </div>
                <div className="mt-3">
                  <Link href="/terms">
                    <div className="text-gray-200 cursor-pointer hover:text-white">
                      Terms & Conditions
                    </div>
                  </Link>
                </div>
              </nav>
            </div>
            <div className="w-full px-4 lg:w-1/4 md:w-1/2">
              <div className="flex items-center justify-center font-medium text-white title-font md:justify-start">
                <h3>WHAT MAKES YOU HIRE US?</h3>
              </div>
              <nav className="mb-10 list-none">
                <div className="mt-3">
                  <div className="text-gray-200  hover:text-white ">
                    You get highly qualified and experienced professionals to
                    help you with the best services.
                  </div>
                </div>
                <div className="mt-3">
                  <div className="text-gray-200 hover:text-white">
                    We are highly acclaimed in the business when it comes to
                    providing affordable services.
                  </div>
                </div>
                <div className="mt-3">
                  <div className="text-gray-200  hover:text-white">
                    We have experts available worldwide to ensure that you are
                    getting assistance whenever you need it.
                  </div>
                </div>
              </nav>
            </div>
            <div className="w-full px-4 lg:w-1/6 md:w-1/2">
              <div className="mb-3 text-sm font-medium tracking-widest text-white uppercase title-font">
                Important Subjects
              </div>
              <nav className="mb-10 list-none">
                <div className="mt-3">
                  <Link href="/economics-exam-help">
                    <div className="text-gray-200 cursor-pointer hover:text-white">
                      Economics Exam Help
                    </div>
                  </Link>
                </div>

                <div className="mt-3">
                  <Link href="/statistics-exam-help">
                    <div className="text-gray-200 cursor-pointer hover:text-white">
                      Statistics Exam Help
                    </div>
                  </Link>
                </div>
                <div className="mt-3">
                  <Link href="/chemistry-exam-help">
                    <div className="text-gray-200 cursor-pointer hover:text-white">
                      Chemistry Exam Help
                    </div>
                  </Link>
                </div>
                <div className="mt-3">
                  <Link href="/physics-exam-help">
                    <div className="text-gray-200 cursor-pointer hover:text-white">
                      Physics Exam Help
                    </div>
                  </Link>
                </div>

                <div className="mt-3">
                  <Link href="/r-programming-exam-help">
                    <div className="text-gray-200 cursor-pointer hover:text-white">
                      R Programming Exam Help
                    </div>
                  </Link>
                </div>
                <div className="mt-3">
                  <Link href="/engineering-exam-help">
                    <div className="text-gray-200 cursor-pointer hover:text-white">
                      Engineering Exam Help
                    </div>
                  </Link>
                </div>
              </nav>
            </div>
            <div className="w-full px-4 lg:w-1/6 md:w-1/2">
              <div className="flex items-center justify-center font-medium text-white title-font md:justify-start uppercase">
                <h3>Contact Info</h3>
              </div>
              <nav className="mb-10  list-none">
                <div className="mt-3">
                  <Link href="https://api.whatsapp.com/send?phone=919053000124">
                    <div className="flex text-gray-200 cursor-pointer hover:text-white md:justify-start justify-center">
                      <IconBrandWhatsapp className="mr-3 " /> WhatsApp
                    </div>
                  </Link>
                </div>

                <div className="mt-3">
                  <p className="text-white">We Accept</p>

                  <div className="flex text-gray-200 cursor-pointer hover:text-white md:justify-start justify-center">
                    <img src="/images/paypal.gif" alt="paypal" />
                    <img src="/images/amazon.gif" alt="amazon" />
                    <img src="/images/master.gif" alt="master" />
                    <img src="/images/discover.gif" alt="discover" />
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
        <div className="bg-slate-800 ">
          <div className="container px-5 py-4 mx-auto">
            <p className="text-sm text-white capitalize xl:text-center flex justify-center">
              © {new Date().getFullYear()} Matlab Assignment Help - All Rights Reserved
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
