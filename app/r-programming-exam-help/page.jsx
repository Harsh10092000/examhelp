import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import ServiceHero from "@/components/serviceHero/ServiceHero";
import ExpertCarousel from "@/components/expertCarousel/ExpertCarousel";
import Carousel from "@/components/carousel/Carousel";
import Image from "next/image";
import Link from "next/link";
import {
  IconClock2,
  IconGraph,
  IconWorld,
  IconReportAnalytics,
  IconPigMoney,
} from "@tabler/icons-react";

import { IconSchool } from "@tabler/icons-react";
export const metadata = {
  title: "R Programming Exam Help | Get Expert Assistance for Your Exams",
  description:
    "Struggling with R programming exams? Our experienced tutors provide comprehensive exam help, from concept clarification to coding assistance and exam prep strategies.   ",
  openGraph: {
    title: "R Programming Exam Help | Get Expert Assistance for Your Exams ",
  },
};

const Page = () => {
  return (
    <>
      <link
        rel="canonical"
        href="https://examhelp.online/r-programming-exam-help"
      />
      <Navbar />

      <ServiceHero
        title="R Programming Exam Help | Get Expert Assistance For Your Exams"
        desc="Struggling with R programming exams? Our experienced tutors provide comprehensive exam help, from concept clarification to coding assistance and exam prep strategies.                "
      />
      <div
        className="flex flex-col gap-5 items-center pt-10"
        id="pricing_section"
      >
        <div className="flex flex-wrap  lg:w-[80%] w-[95%]">
          <div className="w-full px-4">
            <div className="text-center mx-auto max-w-[510px]">
              <span className="font-semibold text-lg text-blue-600 mb-2 block">
                Pricing Table
              </span>
              <h2
                className="
            font-bold
            text-3xl
            sm:text-4xl
            md:text-[40px]
            text-dark
            mb-4
            "
              >
                Our Pricing Plan
              </h2>
              <p className="text-base text-body-color">
                Get started with a free quote now. Our student-friendly exam
                assistance services begin at the most accessible prices designed
                to help you master your exams with confidence.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-center lg:w-[80%] w-[95%]">
          <div className="w-full md:w-1/2 lg:w-1/3 px-4 md:mx-0 mx-4">
            <div
              className="
        bg-white
        rounded-xl
        relative
        z-10
        overflow-hidden
        border border-primary border-opacity-20
        shadow-pricing
        py-10
        px-8
        sm:p-12
        lg:py-10 lg:px-6
        xl:p-12
        mb-10
        "
            >
              <span className="text-blue-600 font-semibold text-lg block mb-4">
                Custom Quote & Discussion
              </span>
              <h2 className="font-bold text-dark mb-5 text-[42px]">$0</h2>
              <p
                className="
            text-base text-body-color
            pb-8
            mb-8
            border-b border-[#F2F2F2]
            "
              >
                Submit and let us know your requirements now to get a free
                quote.
              </p>
              <div className="mb-7">
                <p className="text-base text-body-color leading-loose mb-1">
                  Quick Reply
                </p>
                <p className="text-base text-body-color leading-loose mb-1">
                  Free Discussion
                </p>
                <p className="text-base text-body-color leading-loose mb-1">
                  Genuine Quote
                </p>
                <p className="text-base text-body-color leading-loose mb-1">
                  No SignUp Or Account Needed
                </p>
              </div>
              <Link href="/submit-work">
                <span
                  className="
            w-full
            block
            text-base
            font-semibold
            text-blue-600
            bg-transparent
            border border-[#D4DEFF]
            rounded-md
            text-center
            p-4
            hover:text-white hover:bg-blue-600 hover:border-bg-blue-600
            transition
            "
                >
                  Choose Personal
                </span>
              </Link>
              <div>
                <span className="absolute right-0 top-7 z-[-1]">
                  <svg
                    width="77"
                    height="172"
                    viewBox="0 0 77 172"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="86"
                      cy="86"
                      r="86"
                      fill="url(#paint0_linear)"
                    ></circle>
                    <defs>
                      <linearGradient
                        id="paint0_linear"
                        x1="86"
                        y1="0"
                        x2="86"
                        y2="172"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#3056D3" stopOpacity="0.09"></stop>
                        <stop
                          offset="1"
                          stopColor="#C4C4C4"
                          stopOpacity="0"
                        ></stop>
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
                <span className="absolute right-4 top-4 z-[-1]">
                  <svg
                    width="41"
                    height="89"
                    viewBox="0 0 41 89"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="38.9138"
                      cy="87.4849"
                      r="1.42021"
                      transform="rotate(180 38.9138 87.4849)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="38.9138"
                      cy="74.9871"
                      r="1.42021"
                      transform="rotate(180 38.9138 74.9871)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="38.9138"
                      cy="62.4892"
                      r="1.42021"
                      transform="rotate(180 38.9138 62.4892)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="38.9138"
                      cy="38.3457"
                      r="1.42021"
                      transform="rotate(180 38.9138 38.3457)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="38.9138"
                      cy="13.634"
                      r="1.42021"
                      transform="rotate(180 38.9138 13.634)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="38.9138"
                      cy="50.2754"
                      r="1.42021"
                      transform="rotate(180 38.9138 50.2754)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="38.9138"
                      cy="26.1319"
                      r="1.42021"
                      transform="rotate(180 38.9138 26.1319)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="38.9138"
                      cy="1.42021"
                      r="1.42021"
                      transform="rotate(180 38.9138 1.42021)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="26.4157"
                      cy="87.4849"
                      r="1.42021"
                      transform="rotate(180 26.4157 87.4849)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="26.4157"
                      cy="74.9871"
                      r="1.42021"
                      transform="rotate(180 26.4157 74.9871)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="26.4157"
                      cy="62.4892"
                      r="1.42021"
                      transform="rotate(180 26.4157 62.4892)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="26.4157"
                      cy="38.3457"
                      r="1.42021"
                      transform="rotate(180 26.4157 38.3457)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="26.4157"
                      cy="13.634"
                      r="1.42021"
                      transform="rotate(180 26.4157 13.634)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="26.4157"
                      cy="50.2754"
                      r="1.42021"
                      transform="rotate(180 26.4157 50.2754)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="26.4157"
                      cy="26.1319"
                      r="1.42021"
                      transform="rotate(180 26.4157 26.1319)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="26.4157"
                      cy="1.4202"
                      r="1.42021"
                      transform="rotate(180 26.4157 1.4202)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="13.9177"
                      cy="87.4849"
                      r="1.42021"
                      transform="rotate(180 13.9177 87.4849)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="13.9177"
                      cy="74.9871"
                      r="1.42021"
                      transform="rotate(180 13.9177 74.9871)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="13.9177"
                      cy="62.4892"
                      r="1.42021"
                      transform="rotate(180 13.9177 62.4892)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="13.9177"
                      cy="38.3457"
                      r="1.42021"
                      transform="rotate(180 13.9177 38.3457)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="13.9177"
                      cy="13.634"
                      r="1.42021"
                      transform="rotate(180 13.9177 13.634)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="13.9177"
                      cy="50.2754"
                      r="1.42021"
                      transform="rotate(180 13.9177 50.2754)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="13.9177"
                      cy="26.1319"
                      r="1.42021"
                      transform="rotate(180 13.9177 26.1319)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="13.9177"
                      cy="1.42019"
                      r="1.42021"
                      transform="rotate(180 13.9177 1.42019)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="1.41963"
                      cy="87.4849"
                      r="1.42021"
                      transform="rotate(180 1.41963 87.4849)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="1.41963"
                      cy="74.9871"
                      r="1.42021"
                      transform="rotate(180 1.41963 74.9871)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="1.41963"
                      cy="62.4892"
                      r="1.42021"
                      transform="rotate(180 1.41963 62.4892)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="1.41963"
                      cy="38.3457"
                      r="1.42021"
                      transform="rotate(180 1.41963 38.3457)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="1.41963"
                      cy="13.634"
                      r="1.42021"
                      transform="rotate(180 1.41963 13.634)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="1.41963"
                      cy="50.2754"
                      r="1.42021"
                      transform="rotate(180 1.41963 50.2754)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="1.41963"
                      cy="26.1319"
                      r="1.42021"
                      transform="rotate(180 1.41963 26.1319)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="1.41963"
                      cy="1.4202"
                      r="1.42021"
                      transform="rotate(180 1.41963 1.4202)"
                      fill="#3056D3"
                    ></circle>
                  </svg>
                </span>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 px-4 md:mx-0 mx-4">
            <div
              className="
        bg-white
        rounded-xl
        relative
        z-10
        overflow-hidden
        border border-primary border-opacity-20
        shadow-pricing
        py-10
        px-8
        sm:p-12
        lg:py-10 lg:px-6
        xl:p-12
        mb-10
        "
            >
              <span className=" text-blue-600 font-semibold text-lg block mb-4">
                Programming Homework Help
              </span>
              <h2 className="font-bold text-dark mb-5 text-[42px]">
                $39
                <span className="text-base text-body-color font-medium">
                  Starting Price
                </span>
              </h2>
              <p
                className="
            text-base text-body-color
            pb-8
            mb-8
            border-b border-[#F2F2F2]
            "
              >
                Basic Assignments or Projects in any Programming language or
                STEM
              </p>
              <div className="mb-7">
                <p className="text-base text-body-color leading-loose mb-1">
                  Plagiarism Free
                </p>
                <p className="text-base text-body-color leading-loose mb-1">
                  Expert Programmers
                </p>
                <p className="text-base text-body-color leading-loose mb-1">
                  On Time Delivery
                </p>
                <p className="text-base text-body-color leading-loose mb-1">
                  Project Manager
                </p>
              </div>
              <Link href="/submit-work">
                <span
                  className="
            w-full
            block
            text-base
            font-semibold
            text-white
            bg-blue-600
            border border-bg-blue-600
            rounded-md
            text-center
            p-4
            hover:bg-opacity-90
            transition
            "
                >
                  Choose Business
                </span>
              </Link>
              <div>
                <span className="absolute right-0 top-7 z-[-1]">
                  <svg
                    width="77"
                    height="172"
                    viewBox="0 0 77 172"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="86"
                      cy="86"
                      r="86"
                      fill="url(#paint0_linear)"
                    ></circle>
                    <defs>
                      <linearGradient
                        id="paint0_linear"
                        x1="86"
                        y1="0"
                        x2="86"
                        y2="172"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#3056D3" stopOpacity="0.09"></stop>
                        <stop
                          offset="1"
                          stopColor="#C4C4C4"
                          stopOpacity="0"
                        ></stop>
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
                <span className="absolute right-4 top-4 z-[-1]">
                  <svg
                    width="41"
                    height="89"
                    viewBox="0 0 41 89"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="38.9138"
                      cy="87.4849"
                      r="1.42021"
                      transform="rotate(180 38.9138 87.4849)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="38.9138"
                      cy="74.9871"
                      r="1.42021"
                      transform="rotate(180 38.9138 74.9871)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="38.9138"
                      cy="62.4892"
                      r="1.42021"
                      transform="rotate(180 38.9138 62.4892)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="38.9138"
                      cy="38.3457"
                      r="1.42021"
                      transform="rotate(180 38.9138 38.3457)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="38.9138"
                      cy="13.634"
                      r="1.42021"
                      transform="rotate(180 38.9138 13.634)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="38.9138"
                      cy="50.2754"
                      r="1.42021"
                      transform="rotate(180 38.9138 50.2754)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="38.9138"
                      cy="26.1319"
                      r="1.42021"
                      transform="rotate(180 38.9138 26.1319)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="38.9138"
                      cy="1.42021"
                      r="1.42021"
                      transform="rotate(180 38.9138 1.42021)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="26.4157"
                      cy="87.4849"
                      r="1.42021"
                      transform="rotate(180 26.4157 87.4849)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="26.4157"
                      cy="74.9871"
                      r="1.42021"
                      transform="rotate(180 26.4157 74.9871)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="26.4157"
                      cy="62.4892"
                      r="1.42021"
                      transform="rotate(180 26.4157 62.4892)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="26.4157"
                      cy="38.3457"
                      r="1.42021"
                      transform="rotate(180 26.4157 38.3457)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="26.4157"
                      cy="13.634"
                      r="1.42021"
                      transform="rotate(180 26.4157 13.634)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="26.4157"
                      cy="50.2754"
                      r="1.42021"
                      transform="rotate(180 26.4157 50.2754)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="26.4157"
                      cy="26.1319"
                      r="1.42021"
                      transform="rotate(180 26.4157 26.1319)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="26.4157"
                      cy="1.4202"
                      r="1.42021"
                      transform="rotate(180 26.4157 1.4202)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="13.9177"
                      cy="87.4849"
                      r="1.42021"
                      transform="rotate(180 13.9177 87.4849)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="13.9177"
                      cy="74.9871"
                      r="1.42021"
                      transform="rotate(180 13.9177 74.9871)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="13.9177"
                      cy="62.4892"
                      r="1.42021"
                      transform="rotate(180 13.9177 62.4892)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="13.9177"
                      cy="38.3457"
                      r="1.42021"
                      transform="rotate(180 13.9177 38.3457)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="13.9177"
                      cy="13.634"
                      r="1.42021"
                      transform="rotate(180 13.9177 13.634)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="13.9177"
                      cy="50.2754"
                      r="1.42021"
                      transform="rotate(180 13.9177 50.2754)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="13.9177"
                      cy="26.1319"
                      r="1.42021"
                      transform="rotate(180 13.9177 26.1319)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="13.9177"
                      cy="1.42019"
                      r="1.42021"
                      transform="rotate(180 13.9177 1.42019)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="1.41963"
                      cy="87.4849"
                      r="1.42021"
                      transform="rotate(180 1.41963 87.4849)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="1.41963"
                      cy="74.9871"
                      r="1.42021"
                      transform="rotate(180 1.41963 74.9871)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="1.41963"
                      cy="62.4892"
                      r="1.42021"
                      transform="rotate(180 1.41963 62.4892)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="1.41963"
                      cy="38.3457"
                      r="1.42021"
                      transform="rotate(180 1.41963 38.3457)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="1.41963"
                      cy="13.634"
                      r="1.42021"
                      transform="rotate(180 1.41963 13.634)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="1.41963"
                      cy="50.2754"
                      r="1.42021"
                      transform="rotate(180 1.41963 50.2754)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="1.41963"
                      cy="26.1319"
                      r="1.42021"
                      transform="rotate(180 1.41963 26.1319)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="1.41963"
                      cy="1.4202"
                      r="1.42021"
                      transform="rotate(180 1.41963 1.4202)"
                      fill="#3056D3"
                    ></circle>
                  </svg>
                </span>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 px-4 md:mx-0 mx-4">
            <div
              className="
        bg-white
        rounded-xl
        relative
        z-10
        overflow-hidden
        border border-primary border-opacity-20
        shadow-pricing
        py-10
        px-8
        sm:p-12
        lg:py-10 lg:px-6
        xl:p-12
        mb-10
        "
            >
              <span className=" text-blue-600 font-semibold text-lg block mb-4">
                Capstone Project / Major Assignment
              </span>
              <h2 className="font-bold text-dark mb-5 text-[42px]">
                $290
                <span className="text-base text-body-color font-medium">
                  Starting Price
                </span>
              </h2>
              <p
                className="
            text-base text-body-color
            pb-8
            mb-8
            border-b border-[#F2F2F2]
            "
              >
                Bigger Assignments with Advance & Complex requirements
              </p>
              <div className="mb-7">
                <p className="text-base text-body-color leading-loose mb-1">
                  Academic Integrity
                </p>
                <p className="text-base text-body-color leading-loose mb-1">
                  Free Revisions
                </p>
                <p className="text-base text-body-color leading-loose mb-1">
                  Personalised Support
                </p>
                <p className="text-base text-body-color leading-loose mb-1">
                  24x7 Email & Chat
                </p>
              </div>
              <Link href="/submit-work">
                <span
                  className="
            w-full
            block
            text-base
            font-semibold
            text-blue-600
            bg-transparent
            border border-[#D4DEFF]
            rounded-md
            text-center
            p-4
            hover:text-white hover:bg-blue-600 hover:border-blue-600
            transition
            "
                >
                  Choose Professional
                </span>
              </Link>
              <div>
                <span className="absolute right-0 top-7 z-[-1]">
                  <svg
                    width="77"
                    height="172"
                    viewBox="0 0 77 172"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="86"
                      cy="86"
                      r="86"
                      fill="url(#paint0_linear)"
                    ></circle>
                    <defs>
                      <linearGradient
                        id="paint0_linear"
                        x1="86"
                        y1="0"
                        x2="86"
                        y2="172"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#3056D3" stopOpacity="0.09"></stop>
                        <stop
                          offset="1"
                          stopColor="#C4C4C4"
                          stopOpacity="0"
                        ></stop>
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
                <span className="absolute right-4 top-4 z-[-1]">
                  <svg
                    width="41"
                    height="89"
                    viewBox="0 0 41 89"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="38.9138"
                      cy="87.4849"
                      r="1.42021"
                      transform="rotate(180 38.9138 87.4849)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="38.9138"
                      cy="74.9871"
                      r="1.42021"
                      transform="rotate(180 38.9138 74.9871)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="38.9138"
                      cy="62.4892"
                      r="1.42021"
                      transform="rotate(180 38.9138 62.4892)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="38.9138"
                      cy="38.3457"
                      r="1.42021"
                      transform="rotate(180 38.9138 38.3457)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="38.9138"
                      cy="13.634"
                      r="1.42021"
                      transform="rotate(180 38.9138 13.634)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="38.9138"
                      cy="50.2754"
                      r="1.42021"
                      transform="rotate(180 38.9138 50.2754)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="38.9138"
                      cy="26.1319"
                      r="1.42021"
                      transform="rotate(180 38.9138 26.1319)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="38.9138"
                      cy="1.42021"
                      r="1.42021"
                      transform="rotate(180 38.9138 1.42021)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="26.4157"
                      cy="87.4849"
                      r="1.42021"
                      transform="rotate(180 26.4157 87.4849)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="26.4157"
                      cy="74.9871"
                      r="1.42021"
                      transform="rotate(180 26.4157 74.9871)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="26.4157"
                      cy="62.4892"
                      r="1.42021"
                      transform="rotate(180 26.4157 62.4892)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="26.4157"
                      cy="38.3457"
                      r="1.42021"
                      transform="rotate(180 26.4157 38.3457)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="26.4157"
                      cy="13.634"
                      r="1.42021"
                      transform="rotate(180 26.4157 13.634)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="26.4157"
                      cy="50.2754"
                      r="1.42021"
                      transform="rotate(180 26.4157 50.2754)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="26.4157"
                      cy="26.1319"
                      r="1.42021"
                      transform="rotate(180 26.4157 26.1319)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="26.4157"
                      cy="1.4202"
                      r="1.42021"
                      transform="rotate(180 26.4157 1.4202)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="13.9177"
                      cy="87.4849"
                      r="1.42021"
                      transform="rotate(180 13.9177 87.4849)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="13.9177"
                      cy="74.9871"
                      r="1.42021"
                      transform="rotate(180 13.9177 74.9871)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="13.9177"
                      cy="62.4892"
                      r="1.42021"
                      transform="rotate(180 13.9177 62.4892)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="13.9177"
                      cy="38.3457"
                      r="1.42021"
                      transform="rotate(180 13.9177 38.3457)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="13.9177"
                      cy="13.634"
                      r="1.42021"
                      transform="rotate(180 13.9177 13.634)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="13.9177"
                      cy="50.2754"
                      r="1.42021"
                      transform="rotate(180 13.9177 50.2754)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="13.9177"
                      cy="26.1319"
                      r="1.42021"
                      transform="rotate(180 13.9177 26.1319)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="13.9177"
                      cy="1.42019"
                      r="1.42021"
                      transform="rotate(180 13.9177 1.42019)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="1.41963"
                      cy="87.4849"
                      r="1.42021"
                      transform="rotate(180 1.41963 87.4849)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="1.41963"
                      cy="74.9871"
                      r="1.42021"
                      transform="rotate(180 1.41963 74.9871)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="1.41963"
                      cy="62.4892"
                      r="1.42021"
                      transform="rotate(180 1.41963 62.4892)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="1.41963"
                      cy="38.3457"
                      r="1.42021"
                      transform="rotate(180 1.41963 38.3457)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="1.41963"
                      cy="13.634"
                      r="1.42021"
                      transform="rotate(180 1.41963 13.634)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="1.41963"
                      cy="50.2754"
                      r="1.42021"
                      transform="rotate(180 1.41963 50.2754)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="1.41963"
                      cy="26.1319"
                      r="1.42021"
                      transform="rotate(180 1.41963 26.1319)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="1.41963"
                      cy="1.4202"
                      r="1.42021"
                      transform="rotate(180 1.41963 1.4202)"
                      fill="#3056D3"
                    ></circle>
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-5 items-center">
        <div className="flex flex-wrap justify-center lg:w-[80%] w-[95%]">
          <div className="w-full md:w-1/2 lg:w-1/3 px-4 md:mx-0 mx-4">
            <div
              className="
        bg-white
        rounded-xl
        relative
        z-10
        overflow-hidden
        border border-primary border-opacity-20
        shadow-pricing
        py-10
        px-8
        sm:p-12
        lg:py-10 lg:px-6
        xl:p-12
        mb-10
        "
            >
              <span className="text-blue-600 font-semibold text-lg block mb-4">
                Exam Help & Prepration
              </span>
              <h2 className="font-bold text-dark mb-5 text-[42px]">
                $59
                <span className="text-base text-body-color font-medium">
                  Per Hour
                </span>
              </h2>
              <p
                className="
            text-base text-body-color
            pb-8
            mb-8
            border-b border-[#F2F2F2]
            "
              >
                Online Test and Quizzes from Qualified Experts
              </p>
              <div className="mb-7">
                <p className="text-base text-body-color leading-loose mb-1">
                  1:1 Live Sessions
                </p>
                <p className="text-base text-body-color leading-loose mb-1">
                  Expert Tutors
                </p>
                <p className="text-base text-body-color leading-loose mb-1">
                  Take My Exam For Me
                </p>
                <p className="text-base text-body-color leading-loose mb-1">
                  Confidentiality Guaranteed
                </p>
              </div>
              <Link href="/submit-work">
                <span
                  className="
            w-full
            block
            text-base
            font-semibold
            text-blue-600
            bg-transparent
            border border-[#D4DEFF]
            rounded-md
            text-center
            p-4
            hover:text-white hover:bg-blue-600 hover:border-bg-blue-600
            transition
            "
                >
                  Choose Personal
                </span>
              </Link>
              <div>
                <span className="absolute right-0 top-7 z-[-1]">
                  <svg
                    width="77"
                    height="172"
                    viewBox="0 0 77 172"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="86"
                      cy="86"
                      r="86"
                      fill="url(#paint0_linear)"
                    ></circle>
                    <defs>
                      <linearGradient
                        id="paint0_linear"
                        x1="86"
                        y1="0"
                        x2="86"
                        y2="172"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#3056D3" stopOpacity="0.09"></stop>
                        <stop
                          offset="1"
                          stopColor="#C4C4C4"
                          stopOpacity="0"
                        ></stop>
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
                <span className="absolute right-4 top-4 z-[-1]">
                  <svg
                    width="41"
                    height="89"
                    viewBox="0 0 41 89"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="38.9138"
                      cy="87.4849"
                      r="1.42021"
                      transform="rotate(180 38.9138 87.4849)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="38.9138"
                      cy="74.9871"
                      r="1.42021"
                      transform="rotate(180 38.9138 74.9871)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="38.9138"
                      cy="62.4892"
                      r="1.42021"
                      transform="rotate(180 38.9138 62.4892)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="38.9138"
                      cy="38.3457"
                      r="1.42021"
                      transform="rotate(180 38.9138 38.3457)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="38.9138"
                      cy="13.634"
                      r="1.42021"
                      transform="rotate(180 38.9138 13.634)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="38.9138"
                      cy="50.2754"
                      r="1.42021"
                      transform="rotate(180 38.9138 50.2754)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="38.9138"
                      cy="26.1319"
                      r="1.42021"
                      transform="rotate(180 38.9138 26.1319)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="38.9138"
                      cy="1.42021"
                      r="1.42021"
                      transform="rotate(180 38.9138 1.42021)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="26.4157"
                      cy="87.4849"
                      r="1.42021"
                      transform="rotate(180 26.4157 87.4849)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="26.4157"
                      cy="74.9871"
                      r="1.42021"
                      transform="rotate(180 26.4157 74.9871)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="26.4157"
                      cy="62.4892"
                      r="1.42021"
                      transform="rotate(180 26.4157 62.4892)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="26.4157"
                      cy="38.3457"
                      r="1.42021"
                      transform="rotate(180 26.4157 38.3457)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="26.4157"
                      cy="13.634"
                      r="1.42021"
                      transform="rotate(180 26.4157 13.634)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="26.4157"
                      cy="50.2754"
                      r="1.42021"
                      transform="rotate(180 26.4157 50.2754)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="26.4157"
                      cy="26.1319"
                      r="1.42021"
                      transform="rotate(180 26.4157 26.1319)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="26.4157"
                      cy="1.4202"
                      r="1.42021"
                      transform="rotate(180 26.4157 1.4202)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="13.9177"
                      cy="87.4849"
                      r="1.42021"
                      transform="rotate(180 13.9177 87.4849)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="13.9177"
                      cy="74.9871"
                      r="1.42021"
                      transform="rotate(180 13.9177 74.9871)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="13.9177"
                      cy="62.4892"
                      r="1.42021"
                      transform="rotate(180 13.9177 62.4892)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="13.9177"
                      cy="38.3457"
                      r="1.42021"
                      transform="rotate(180 13.9177 38.3457)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="13.9177"
                      cy="13.634"
                      r="1.42021"
                      transform="rotate(180 13.9177 13.634)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="13.9177"
                      cy="50.2754"
                      r="1.42021"
                      transform="rotate(180 13.9177 50.2754)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="13.9177"
                      cy="26.1319"
                      r="1.42021"
                      transform="rotate(180 13.9177 26.1319)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="13.9177"
                      cy="1.42019"
                      r="1.42021"
                      transform="rotate(180 13.9177 1.42019)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="1.41963"
                      cy="87.4849"
                      r="1.42021"
                      transform="rotate(180 1.41963 87.4849)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="1.41963"
                      cy="74.9871"
                      r="1.42021"
                      transform="rotate(180 1.41963 74.9871)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="1.41963"
                      cy="62.4892"
                      r="1.42021"
                      transform="rotate(180 1.41963 62.4892)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="1.41963"
                      cy="38.3457"
                      r="1.42021"
                      transform="rotate(180 1.41963 38.3457)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="1.41963"
                      cy="13.634"
                      r="1.42021"
                      transform="rotate(180 1.41963 13.634)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="1.41963"
                      cy="50.2754"
                      r="1.42021"
                      transform="rotate(180 1.41963 50.2754)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="1.41963"
                      cy="26.1319"
                      r="1.42021"
                      transform="rotate(180 1.41963 26.1319)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="1.41963"
                      cy="1.4202"
                      r="1.42021"
                      transform="rotate(180 1.41963 1.4202)"
                      fill="#3056D3"
                    ></circle>
                  </svg>
                </span>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 px-4 md:mx-0 mx-4">
            <div
              className="
        bg-white
        rounded-xl
        relative
        z-10
        overflow-hidden
        border border-primary border-opacity-20
        shadow-pricing
        py-10
        px-8
        sm:p-12
        lg:py-10 lg:px-6
        xl:p-12
        mb-10
        "
            >
              <span className=" text-blue-600 font-semibold text-lg block mb-4">
                Online 1:1 Tutoring
              </span>
              <h2 className="font-bold text-dark mb-5 text-[42px]">
                $49
                <span className="text-base text-body-color font-medium">
                  Per Hour
                </span>
              </h2>
              <p
                className="
            text-base text-body-color
            pb-8
            mb-8
            border-b border-[#F2F2F2]
            "
              >
                For all Programming and STEM Courses
              </p>
              <div className="mb-7">
                <p className="text-base text-body-color leading-loose mb-1">
                  Live Sessions
                </p>
                <p className="text-base text-body-color leading-loose mb-1">
                  Expert Programmers
                </p>
                <p className="text-base text-body-color leading-loose mb-1">
                  Flexible Time Slots
                </p>
                <p className="text-base text-body-color leading-loose mb-1">
                  24x7 Chat Support
                </p>
              </div>
              <Link href="/submit-work">
                <span
                  className="
            w-full
            block
            text-base
            font-semibold
            text-white
            bg-blue-600
            border border-bg-blue-600
            rounded-md
            text-center
            p-4
            hover:bg-opacity-90
            transition
            "
                >
                  Choose Business
                </span>
              </Link>
              <div>
                <span className="absolute right-0 top-7 z-[-1]">
                  <svg
                    width="77"
                    height="172"
                    viewBox="0 0 77 172"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="86"
                      cy="86"
                      r="86"
                      fill="url(#paint0_linear)"
                    ></circle>
                    <defs>
                      <linearGradient
                        id="paint0_linear"
                        x1="86"
                        y1="0"
                        x2="86"
                        y2="172"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#3056D3" stopOpacity="0.09"></stop>
                        <stop
                          offset="1"
                          stopColor="#C4C4C4"
                          stopOpacity="0"
                        ></stop>
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
                <span className="absolute right-4 top-4 z-[-1]">
                  <svg
                    width="41"
                    height="89"
                    viewBox="0 0 41 89"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="38.9138"
                      cy="87.4849"
                      r="1.42021"
                      transform="rotate(180 38.9138 87.4849)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="38.9138"
                      cy="74.9871"
                      r="1.42021"
                      transform="rotate(180 38.9138 74.9871)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="38.9138"
                      cy="62.4892"
                      r="1.42021"
                      transform="rotate(180 38.9138 62.4892)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="38.9138"
                      cy="38.3457"
                      r="1.42021"
                      transform="rotate(180 38.9138 38.3457)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="38.9138"
                      cy="13.634"
                      r="1.42021"
                      transform="rotate(180 38.9138 13.634)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="38.9138"
                      cy="50.2754"
                      r="1.42021"
                      transform="rotate(180 38.9138 50.2754)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="38.9138"
                      cy="26.1319"
                      r="1.42021"
                      transform="rotate(180 38.9138 26.1319)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="38.9138"
                      cy="1.42021"
                      r="1.42021"
                      transform="rotate(180 38.9138 1.42021)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="26.4157"
                      cy="87.4849"
                      r="1.42021"
                      transform="rotate(180 26.4157 87.4849)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="26.4157"
                      cy="74.9871"
                      r="1.42021"
                      transform="rotate(180 26.4157 74.9871)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="26.4157"
                      cy="62.4892"
                      r="1.42021"
                      transform="rotate(180 26.4157 62.4892)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="26.4157"
                      cy="38.3457"
                      r="1.42021"
                      transform="rotate(180 26.4157 38.3457)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="26.4157"
                      cy="13.634"
                      r="1.42021"
                      transform="rotate(180 26.4157 13.634)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="26.4157"
                      cy="50.2754"
                      r="1.42021"
                      transform="rotate(180 26.4157 50.2754)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="26.4157"
                      cy="26.1319"
                      r="1.42021"
                      transform="rotate(180 26.4157 26.1319)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="26.4157"
                      cy="1.4202"
                      r="1.42021"
                      transform="rotate(180 26.4157 1.4202)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="13.9177"
                      cy="87.4849"
                      r="1.42021"
                      transform="rotate(180 13.9177 87.4849)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="13.9177"
                      cy="74.9871"
                      r="1.42021"
                      transform="rotate(180 13.9177 74.9871)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="13.9177"
                      cy="62.4892"
                      r="1.42021"
                      transform="rotate(180 13.9177 62.4892)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="13.9177"
                      cy="38.3457"
                      r="1.42021"
                      transform="rotate(180 13.9177 38.3457)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="13.9177"
                      cy="13.634"
                      r="1.42021"
                      transform="rotate(180 13.9177 13.634)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="13.9177"
                      cy="50.2754"
                      r="1.42021"
                      transform="rotate(180 13.9177 50.2754)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="13.9177"
                      cy="26.1319"
                      r="1.42021"
                      transform="rotate(180 13.9177 26.1319)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="13.9177"
                      cy="1.42019"
                      r="1.42021"
                      transform="rotate(180 13.9177 1.42019)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="1.41963"
                      cy="87.4849"
                      r="1.42021"
                      transform="rotate(180 1.41963 87.4849)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="1.41963"
                      cy="74.9871"
                      r="1.42021"
                      transform="rotate(180 1.41963 74.9871)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="1.41963"
                      cy="62.4892"
                      r="1.42021"
                      transform="rotate(180 1.41963 62.4892)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="1.41963"
                      cy="38.3457"
                      r="1.42021"
                      transform="rotate(180 1.41963 38.3457)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="1.41963"
                      cy="13.634"
                      r="1.42021"
                      transform="rotate(180 1.41963 13.634)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="1.41963"
                      cy="50.2754"
                      r="1.42021"
                      transform="rotate(180 1.41963 50.2754)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="1.41963"
                      cy="26.1319"
                      r="1.42021"
                      transform="rotate(180 1.41963 26.1319)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="1.41963"
                      cy="1.4202"
                      r="1.42021"
                      transform="rotate(180 1.41963 1.4202)"
                      fill="#3056D3"
                    ></circle>
                  </svg>
                </span>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 px-4 md:mx-0 mx-4">
            <div
              className="
        bg-white
        rounded-xl
        relative
        z-10
        overflow-hidden
        border border-primary border-opacity-20
        shadow-pricing
        py-10
        px-8
        sm:p-12
        lg:py-10 lg:px-6
        xl:p-12
        mb-10
        "
            >
              <span className=" text-blue-600 font-semibold text-lg block mb-4">
                Full Courses / Internship Program
              </span>
              <h2 className="font-bold text-dark mb-5 text-[42px]">
                $990
                <span className="text-base text-body-color font-medium">
                  Complete Course
                </span>
              </h2>
              <p
                className="
            text-base text-body-color
            pb-8
            mb-8
            border-b border-[#F2F2F2]
            "
              >
                Become an Expert Programmer
              </p>
              <div className="mb-7">
                <p className="text-base text-body-color leading-loose mb-1">
                  Full Semester Support
                </p>
                <p className="text-base text-body-color leading-loose mb-1">
                  Personalized 1:1 Sessions
                </p>
                <p className="text-base text-body-color leading-loose mb-1">
                  Hand Picked Tutors
                </p>
                <p className="text-base text-body-color leading-loose mb-1">
                  Certificate From US Inc.
                </p>
              </div>
              <Link href="/submit-work">
                <span
                  className="
            w-full
            block
            text-base
            font-semibold
            text-blue-600
            bg-transparent
            border border-[#D4DEFF]
            rounded-md
            text-center
            p-4
            hover:text-white hover:bg-blue-600 hover:border-blue-600
            transition
            "
                >
                  Choose Professional
                </span>
              </Link>
              <div>
                <span className="absolute right-0 top-7 z-[-1]">
                  <svg
                    width="77"
                    height="172"
                    viewBox="0 0 77 172"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="86"
                      cy="86"
                      r="86"
                      fill="url(#paint0_linear)"
                    ></circle>
                    <defs>
                      <linearGradient
                        id="paint0_linear"
                        x1="86"
                        y1="0"
                        x2="86"
                        y2="172"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#3056D3" stopOpacity="0.09"></stop>
                        <stop
                          offset="1"
                          stopColor="#C4C4C4"
                          stopOpacity="0"
                        ></stop>
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
                <span className="absolute right-4 top-4 z-[-1]">
                  <svg
                    width="41"
                    height="89"
                    viewBox="0 0 41 89"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="38.9138"
                      cy="87.4849"
                      r="1.42021"
                      transform="rotate(180 38.9138 87.4849)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="38.9138"
                      cy="74.9871"
                      r="1.42021"
                      transform="rotate(180 38.9138 74.9871)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="38.9138"
                      cy="62.4892"
                      r="1.42021"
                      transform="rotate(180 38.9138 62.4892)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="38.9138"
                      cy="38.3457"
                      r="1.42021"
                      transform="rotate(180 38.9138 38.3457)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="38.9138"
                      cy="13.634"
                      r="1.42021"
                      transform="rotate(180 38.9138 13.634)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="38.9138"
                      cy="50.2754"
                      r="1.42021"
                      transform="rotate(180 38.9138 50.2754)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="38.9138"
                      cy="26.1319"
                      r="1.42021"
                      transform="rotate(180 38.9138 26.1319)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="38.9138"
                      cy="1.42021"
                      r="1.42021"
                      transform="rotate(180 38.9138 1.42021)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="26.4157"
                      cy="87.4849"
                      r="1.42021"
                      transform="rotate(180 26.4157 87.4849)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="26.4157"
                      cy="74.9871"
                      r="1.42021"
                      transform="rotate(180 26.4157 74.9871)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="26.4157"
                      cy="62.4892"
                      r="1.42021"
                      transform="rotate(180 26.4157 62.4892)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="26.4157"
                      cy="38.3457"
                      r="1.42021"
                      transform="rotate(180 26.4157 38.3457)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="26.4157"
                      cy="13.634"
                      r="1.42021"
                      transform="rotate(180 26.4157 13.634)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="26.4157"
                      cy="50.2754"
                      r="1.42021"
                      transform="rotate(180 26.4157 50.2754)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="26.4157"
                      cy="26.1319"
                      r="1.42021"
                      transform="rotate(180 26.4157 26.1319)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="26.4157"
                      cy="1.4202"
                      r="1.42021"
                      transform="rotate(180 26.4157 1.4202)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="13.9177"
                      cy="87.4849"
                      r="1.42021"
                      transform="rotate(180 13.9177 87.4849)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="13.9177"
                      cy="74.9871"
                      r="1.42021"
                      transform="rotate(180 13.9177 74.9871)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="13.9177"
                      cy="62.4892"
                      r="1.42021"
                      transform="rotate(180 13.9177 62.4892)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="13.9177"
                      cy="38.3457"
                      r="1.42021"
                      transform="rotate(180 13.9177 38.3457)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="13.9177"
                      cy="13.634"
                      r="1.42021"
                      transform="rotate(180 13.9177 13.634)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="13.9177"
                      cy="50.2754"
                      r="1.42021"
                      transform="rotate(180 13.9177 50.2754)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="13.9177"
                      cy="26.1319"
                      r="1.42021"
                      transform="rotate(180 13.9177 26.1319)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="13.9177"
                      cy="1.42019"
                      r="1.42021"
                      transform="rotate(180 13.9177 1.42019)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="1.41963"
                      cy="87.4849"
                      r="1.42021"
                      transform="rotate(180 1.41963 87.4849)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="1.41963"
                      cy="74.9871"
                      r="1.42021"
                      transform="rotate(180 1.41963 74.9871)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="1.41963"
                      cy="62.4892"
                      r="1.42021"
                      transform="rotate(180 1.41963 62.4892)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="1.41963"
                      cy="38.3457"
                      r="1.42021"
                      transform="rotate(180 1.41963 38.3457)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="1.41963"
                      cy="13.634"
                      r="1.42021"
                      transform="rotate(180 1.41963 13.634)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="1.41963"
                      cy="50.2754"
                      r="1.42021"
                      transform="rotate(180 1.41963 50.2754)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="1.41963"
                      cy="26.1319"
                      r="1.42021"
                      transform="rotate(180 1.41963 26.1319)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="1.41963"
                      cy="1.4202"
                      r="1.42021"
                      transform="rotate(180 1.41963 1.4202)"
                      fill="#3056D3"
                    ></circle>
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-10 flex flex-col gap-14">
        <h2 className="font-bold md:text-4xl text-3xl tracking-tight text-center ">
          Top 6 Benefits Of Choosing Our Online Exam Help
        </h2>
        <div className="flex justify-center">
          <div className="grid md:grid-cols-3 w-[80%] gap-10">
            <div className="space-y-3">
              <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-xl">
                <IconClock2 />
              </span>
              <h2 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">
                Save Time
              </h2>
              <p className="text-gray-500 dark:text-gray-300 text-balance">
                Taking exams on your own can be hugely time-consuming. Between
                studying content, practicing questions, and taking the exam,
                exams can take up much precious time. Our service takes the exam
                burden off your shoulders so you can allocate that time to other
                priorities. From start to finish, we streamline everything to
                save you the maximum time.
              </p>
            </div>
            <div className="space-y-3">
              <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-xl">
                <IconSchool />
              </span>

              <h2 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">
                Domain Expertise
              </h2>

              <p className="text-gray-500 dark:text-gray-300 text-balance">
                Unlike general tutoring services, our online tutors are niche
                subject matter experts. They have extensive education and
                real-world experience in their specific exam domain. This means
                they have the greatest depth of knowledge to tackle any topic or
                question within their field, lending you their insight and
                guidance throughout your exam.
              </p>
            </div>
            <div className="space-y-3">
              <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-xl">
                <IconGraph />
              </span>

              <h2 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">
                Customized Assistance
              </h2>

              <p className="text-gray-500 dark:text-gray-300 text-balance">
                We provide a fully personalized 1-on-1 exam assistance service
                tailored to your needs. Before your exam session, your tutor
                will consult with you to understand your strengths and
                weaknesses. This allows them to custom-craft potential
                questions, practice problems, explanations, and learning
                strategies just for you. It's like having a private tutor
                designing a fully customized study plan to help you succeed.
              </p>
            </div>
            <div className="space-y-3">
              <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-xl">
                <IconWorld />
              </span>

              <h2 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">
                Worldwide Access
              </h2>

              <p className="text-gray-500 dark:text-gray-300 text-balance">
                As an online platform, we allow you to connect with expert
                tutors remotely. That means you can get expert exam help from
                the comfort of your home, from a library, while traveling -
                anywhere with internet access! No need to commute or travel to
                appointments. Just log in online at your convenience to start
                your tutoring.
              </p>
            </div>
            <div className="space-y-3">
              <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-xl">
                <IconReportAnalytics />
              </span>

              <h2 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">
                Secure Service
              </h2>

              <p className="text-gray-500 dark:text-gray-300 text-balance">
                We invest heavily in security measures like end-to-end
                encryption, stringent privacy policies, and authentication
                protocols to protect your data. <br /> Exam integrity is vital,
                so our top priority is safeguarding your information during
                online exam assistance.
              </p>
            </div>
            <div className="space-y-3">
              <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-xl">
                <IconPigMoney />
              </span>

              <h2 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">
                Affordable Pricing
              </h2>

              <p className="text-gray-500 dark:text-gray-300 text-balance">
                Our rates are designed for students on a budget. Pay just a
                fraction of what expensive private tutoring normally costs.
                Without geographical or access restrictions, we connect you to
                specialists globally to find great tutors at affordable prices
                for all educational levels and subjects. Our platform allows
                tutors to set reasonable rates, keeping pricing competitive.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="py-10">
        <h2 className="text-4xl text-center font-semibold mb-10">
          Our Experts
        </h2>
        <ExpertCarousel />
      </div>

      <div className="px-4 mx-auto pb-12 max-w-screen-xl  lg:px-6">
        <section className="container">
          {/* <h2 className="text-4xl font-bold">
            An intriguing title for an interesting article
          </h2>
          <div className="mt-1">
            <span className="inline-block w-96 h-1 bg-blue-500 rounded-full"></span>
            <span className="inline-block w-3 h-1 ml-1 bg-blue-500 rounded-full"></span>
            <span className="inline-block w-1 h-1 ml-1 bg-blue-500 rounded-full"></span>
          </div> */}

          <h2 className="text-4xl font-bold mt-5">R Programming Exam Help</h2>
          <div className="mt-1">
            <span className="inline-block w-96 h-1 bg-blue-500 rounded-full"></span>
            <span className="inline-block w-3 h-1 ml-1 bg-blue-500 rounded-full"></span>
            <span className="inline-block w-1 h-1 ml-1 bg-blue-500 rounded-full"></span>
          </div>

          <div className="mb-5 mt-3 text-slate-700">
            <p className="pb-2">
              {" "}
              Taking R programming exams is hard, especially when you get stuck
              on exercises like coding for data analytics or statistics.
            </p>
            <p className="pb-2">
              {" "}
              Whether you are a student who has not understood the concepts well
              or a student who is facing difficulties with their R programming
              exam help, don’t worry. Our team has professionals who help people
              with their R programming exams.{" "}
            </p>
            <p className="pb-2">
              {" "}
              Our private tutors are all experts in R programming and will work
              with you individually.
            </p>
            <p className="pb-2">
              {" "}
              We will explain the basics better, explore the most advanced
              coding problems, and develop efficient exam-tackling strategies.
              We can also provide you with guidance for your R programming
              online exam.{" "}
            </p>
            <p className="pb-2">
              {" "}
              This service's objective is to help you understand the
              complexities of R programming so that you can be comfortable in
              your academic or professional future.
            </p>
          </div>

          <h2 className="text-4xl font-bold mt-5">
            Looking For The Urgent R Programming Exam Help?
          </h2>
          <div className="mt-1">
            <span className="inline-block w-96 h-1 bg-blue-500 rounded-full"></span>
            <span className="inline-block w-3 h-1 ml-1 bg-blue-500 rounded-full"></span>
            <span className="inline-block w-1 h-1 ml-1 bg-blue-500 rounded-full"></span>
          </div>

          <div className="mb-5 mt-3 text-slate-700">
            <p className="pb-2">
              We know exam deadlines can sneak up on you fast, leaving you
              feeling rushed and desperately needing last-minute R programming
              help. That's exactly why our urgent R exam support is available
              24/7 to give you the focused assistance you need when time is
              running out.
            </p>

            <p className="pb-2">
              Whether your exam is coming up in just a couple of days or even
              hours from now, our team of experienced R programming tutors will
              jump into action to guide you through those really tough coding
              problems, confusing statistical work, and tricky data tasks.
            </p>

            <p className="pb-2">
              Don't let the ticking clock add more stress – we'll work hard to
              make sure you get the complete, easy-to-understand help you need
              to feel confident and ready for your upcoming R exam.
            </p>
            <p>
              With our urgent support, you can tackle the test with the
              knowledge, skills, and strategies to overcome any obstacle and
              knock it out of the park.
            </p>
            <p>
              Let us be your go-to partner during this crunch time, providing
              the one-on-one guidance you need to conquer the exam with flying
              colors.
            </p>
          </div>

          <h2 className="text-4xl font-bold mt-5">
            Why We Are The Best Option Online For Your R Programming Exam Help?
          </h2>
          <div className="mt-1">
            <span className="inline-block w-96 h-1 bg-blue-500 rounded-full"></span>
            <span className="inline-block w-3 h-1 ml-1 bg-blue-500 rounded-full"></span>
            <span className="inline-block w-1 h-1 ml-1 bg-blue-500 rounded-full"></span>
          </div>

          <p className="pb-2 mt-3">
            When it comes to looking for reliable R programming{" "}
            <Link href="/" className="text-blue-600">
              {" "}
              Exam Help Online
            </Link>
            , our service stands out as the premier choice.
          </p>
          <ol className="list-disc pb-2 ml-7">
            <li>Experienced R programming tutors with industry expertise</li>
            <li>Personalized guidance tailored to your specific needs</li>
            <li>Step-by-step explanations for better concept clarity</li>
            <li>Assistance with coding, data analysis, and problem-solving</li>
            <li>Proven strategies to ace R programming exams</li>
            <li>Round-the-clock support and timely delivery</li>
            <li>Affordable pricing without compromising quality</li>
          </ol>

          <p className="pb-2">
            With our most trusted online R programming exam help support, you
            can confidently tackle your R exams and unlock your true potential.
          </p>

          <h2 className="text-4xl font-bold mt-5">
            Topics Related To R Programming Covered In Our Exam Help Service!
          </h2>
          <div className="mt-1">
            <span className="inline-block w-96 h-1 bg-blue-500 rounded-full"></span>
            <span className="inline-block w-3 h-1 ml-1 bg-blue-500 rounded-full"></span>
            <span className="inline-block w-1 h-1 ml-1 bg-blue-500 rounded-full"></span>
          </div>

          <p className="pb-2 mt-3">
            Our R programming exam help service covers a wide range of topics to
            ensure you have a comprehensive understanding of this powerful
            statistical computing language. We can guide you through:
          </p>

          <ul className="ml-7 list-disc">
            <li className="pb-2">Data manipulation (dplyr, data. table)</li>
            <li className="pb-2">Data visualization (ggplot2, Plotly)</li>
            <li className="pb-2">
              Statistical modeling (lm, glm, mixed models)
            </li>
            <li className="pb-2">Working with databases (DBI, ODBC)</li>
            <li className="pb-2">Machine learning algorithms (caret, more)</li>
            <li className="pb-2">Package development and documentation</li>
            <li className="pb-2">Report generation (RMarkdown, Shiny)</li>
            <li className="pb-2">Web applications and APIs</li>
            <li className="pb-2">Parallel computing techniques</li>
          </ul>

          <p className="pb-2">
            No matter what R programming concepts or applications you need
            assistance with, our experts can provide insightful explanations,
            example code, and practice exercises to solidify your knowledge. Let
            us help you excel in your R coursework or professional projects.
          </p>

          <h2 className="text-4xl font-bold mt-5">
            Master the Key Features of the R Language With The Help Of Our
            Expert Exam Help
          </h2>
          <div className="mt-1">
            <span className="inline-block w-96 h-1 bg-blue-500 rounded-full"></span>
            <span className="inline-block w-3 h-1 ml-1 bg-blue-500 rounded-full"></span>
            <span className="inline-block w-1 h-1 ml-1 bg-blue-500 rounded-full"></span>
          </div>
          <p className="pb-2 mt-3">
            R is a flexible coding tool for working with numbers, stats, and
            pictures. It has many helpful abilities that make it great for jobs
            like money, health, marketing, and science. Our expert R support can
            teach you the key skills of this multi-use language. Our
            knowledgeable teachers will guide you through the following:
          </p>

          <ul className="ml-7 list-decimal">
            <li>
              <strong>Object Coding:</strong> Make and use objects, understand
              inheritance, and apply common object rules in R.
            </li>
            <li>
              <strong>Data Structures:</strong> Get good with R's data
              structures like vectors, matrices, data frames, and lists.
            </li>
            <li>
              <strong>Function Coding:</strong> Explore R's support for function
              concepts like higher-order functions, unnamed functions, and
              closures.
            </li>
            <li>
              <strong>Data In/Out:</strong> Master transfers data between
              formats such as CSV, Excel, databases, and more.
            </li>
            <li>
              <strong>Data Shaping:</strong> Become awesome at reshaping,
              combining, cutting, and changing data using dplyr and data. table.
            </li>
            <li>
              <strong>Visualizations:</strong> Unlock R's picture power with
              ggplot2, plotly, and other graphing tools.
            </li>
            <li>
              <strong>Stat Models:</strong> Use R's stats package to build
              skills with stat models, such as linear/logistic regression, time
              series, and more.
            </li>
            <li className="pb-2">
              <strong>Package Handling:</strong> Learn how to install, update,
              and make your own R packages.
            </li>
          </ul>
          <p className="pb-2">
            With our one-on-one support, you'll get full guidance, real
            examples, and hands-on practice made just for your needs. Master R's
            key skills and level up your number skills.
          </p>
          <h2 className="text-4xl font-bold mt-5">
            Our Instant R Programming Exam Help Can Be Your Go-To Exam Help
            Partner!
          </h2>
          <div className="mt-1">
            <span className="inline-block w-96 h-1 bg-blue-500 rounded-full"></span>
            <span className="inline-block w-3 h-1 ml-1 bg-blue-500 rounded-full"></span>
            <span className="inline-block w-1 h-1 ml-1 bg-blue-500 rounded-full"></span>
          </div>
          <p className="pb-2 mt-3">
            Stuck with R coding assignments or exam prep? Use our instant R
            coding exam help service! We understand the struggles you face,
            whether it's learning tricky coding ideas, fixing code errors, or
            meeting tight due dates. That's why we have a team of
            super-qualified R experts ready to be your go-to exam helpers.
          </p>
          <p className="pb-2 mt-3">
            Our teachers have tons of experience teaching and using R across
            fields like stats, data, finance, and biology. They can give you
            quick and personalized help, making sure you fully understand the
            material and build the skills needed to ace your R coding exams.
          </p>
          <p className="pb-2 mt-3">
            With our instant R coding exam help, you can expect:
          </p>

          <li>Step-by-step guidance on coding challenges and assignments.</li>
          <li>Detailed explanations of R coding ideas and techniques.</li>
          <li>Help with working with data, visualizations, and stat models.</li>
          <li>Feedback and code reviews to improve your coding abilities.</li>
          <li>Exam-style practice questions and mock tests for full prep.</li>
          <li>
            Their availability is on a twenty-four-hour basis, which gives you
            an opportunity to seek help anytime.
          </li>

          <p className="pb-2 mt-3">
            Don't let R coding exams hold you back. Partner with our dedicated
            team and gain the confidence to tackle even the trickiest coding
            problems. With our instant support, you'll have a reliable buddy to
            help you reach your academic goals and become a pro in this powerful
            language.
          </p>
        </section>
      </div>

      <div className="w-full cbg ">
        <div className="w-full">
          <div className="z-50 text-center mx-auto max-w-[510px]">
            <h2 className=" font-bold  text-3xl sm:text-4xl  md:text-[40px]  text-white z-50 ">
              Testimonials
            </h2>
          </div>
        </div>
        <div className="flex justify-center">
          <Carousel />
        </div>
      </div>
      <div className="bg-white py-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
            Trusted by the world’s most innovative teams
          </h2>
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            <Image
              className="col-span-2  w-auto object-contain lg:col-span-1 "
              src="/images/uni1.webp"
              alt="logo1"
              width={158}
              height={48}
              loading="lazy"
            />
            <Image
              className="col-span-2  w-auto object-contain lg:col-span-1"
              src="/images/logo-un2.webp"
              alt="logo2"
              width="158"
              height="48"
              loading="lazy"
            />
            <Image
              className="col-span-2  w-auto object-contain lg:col-span-1"
              src="/images/logo-un3.webp"
              alt="logo3"
              width="158"
              height="48"
            />
            <Image
              className="col-span-2  w-auto object-contain sm:col-start-2 lg:col-span-1"
              src="/images/logo-un4.webp"
              alt="logo4"
              width="158"
              height="48"
              loading="lazy"
            />
            <Image
              className="col-span-2 col-start-2 w-auto object-contain sm:col-start-auto lg:col-span-1"
              src="/images/logo-un5.webp"
              alt="logo5"
              width="158"
              height="48"
              loading="lazy"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Page;
