import { getAllPosts } from "@/lib/api";
import React from "react";
import Link from "next/link";
import Header from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

const Page = () => {
  const post = getAllPosts();
  const morePost = post.slice(2);

  return (
    <>
      <Header />
      <div className="flex justify-center flex-col items-center">
        <div className="grid md:grid-cols-2 md:w-[80%] w-[90%]  gap-10 pt-10 py-5">
          <div className="relative max-h-[550px]">
            <div>
              <div className="bg-black/50 absolute top-0 right-0 w-full h-full"></div>
              <p className="md:p-10 p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">
                {new Date(post[0].date).toDateString()}
              </p>
              <div className="absolute bottom-0 left-0 md:p-10 p-6">
                <h2 className="text-xl font-semibold 5 text-white">
                  {post[0].title}
                </h2>
                <p className="text-base leading-4 text-white mt-2">
                  {post[0].description}
                </p>
                <Link
                  href={`/blog/${post[0].slug}`}
                  className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline"
                >
                  <p className="pr-2 text-sm font-medium leading-none">
                    Read More
                  </p>
                  <svg
                    className="fill-stroke"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.75 12.5L10.25 8L5.75 3.5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
            </div>
            <img
              src={post[0].coverImage}
              alt="sitting place"
              className="w-full object-cover h-full "
            />
          </div>
          <div className="relative max-h-[550px]">
            <div>
              <div className="bg-black/50 absolute top-0 right-0 w-full h-full"></div>
              <p className="md:p-10 p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">
                {new Date(post[0].date).toDateString()}
              </p>
              <div className="absolute bottom-0 left-0 md:p-10 p-6">
                <h2 className="text-xl font-semibold 5 text-white">
                  {post[1].title}
                </h2>
                <p className="text-base leading-4 text-white mt-2">
                  {post[1].description}
                </p>
                <Link
                  href={`/blog/${post[1].slug}`}
                  className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline"
                >
                  <p className="pr-2 text-sm font-medium leading-none">
                    Read More
                  </p>
                  <svg
                    className="fill-stroke"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.75 12.5L10.25 8L5.75 3.5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
            </div>
            <img
              src={post[1].coverImage}
              alt="sitting place"
              className="w-full object-cover h-full "
            />
          </div>
        </div>
        <div className="grid md:grid-cols-3 md:w-[80%]  w-[90%]  gap-10 py-5">
          {morePost.map((item, index) => (
            <div className="relative max-h-[400px]" key={index}>
              <div>
                <div className="bg-black/50 absolute top-0 right-0 w-full h-full"></div>
                <p className="md:p-10 p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">
                  {new Date(item.date).toDateString()}
                </p>
                <div className="absolute bottom-0 left-0 md:p-10 p-6">
                  <h2 className="text-xl font-semibold 5 text-white">
                    {item.title}
                  </h2>
                  <p className="text-base leading-4 text-white mt-2">
                    {item.description}
                  </p>
                  <Link
                    href={`/blog/${item.slug}`}
                    className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline"
                  >
                    <p className="pr-2 text-sm font-medium leading-none">
                      Read More
                    </p>
                    <svg
                      className="fill-stroke"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.75 12.5L10.25 8L5.75 3.5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
              <img
                src={item.coverImage}
                alt="sitting place"
                className="w-full object-cover h-full "
              />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Page;
