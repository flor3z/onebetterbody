import React from 'react';
import { Link } from 'react-router-dom';

function Signup() {
  return (
    <>
      <section>
        <div className="grid md:h-screen md:grid-cols-2">
          <div className="flex flex-col items-center justify-center bg-white">
            <div className="max-w-lg px-5 py-16 md:px-10 md:py-24 lg:py-32">
              <div className="mb-6 ml-2 flex h-14 w-14 rounded-md items-center justify-center bg-[#276ef1] [box-shadow:rgb(171,_196,_245)_-8px_8px]">
                <img
                  src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6358f5ec37c8c32b17d1c725_Vector-9.svg"
                  alt=""
                  className="inline-block"
                />
              </div>
              <p className="mb-8 text-[#647084] md:mb-12 lg:mb-16">
                Stay connected with your account and check-in on your health
                details. Keep in mind we have only one body and regular exercise
                coupled with good nutrition leads to longevity.
              </p>
              <p className="font-bold">One Body</p>
              <p className="text-sm">Living a Life of Wellness</p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center bg-[#f2f2f7]">
            <div className="max-w-lg px-5 py-16 text-center md:px-10 md:py-24 lg:py-32">
              <h2 className="mb-8 text-3xl font-bold md:mb-12 md:text-5xl">
                One Body
              </h2>
              <form
                className="mx-auto mb-4 max-w-sm pb-4"
                name="wf-form-password"
                method="get"
              >
                <div className="relative">
                  <img
                    alt=""
                    src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6357722e2a5f190b7e37f878_EnvelopeSimple.svg"
                    className="absolute bottom-0 left-[5%] right-auto top-[26%] inline-block"
                  />
                  <input
                    type="email"
                    className="mb-4 block h-9 w-full border border-black bg-[#f2f2f7] px-3 py-6 pl-14 text-sm text-[#333333]"
                    maxLength="256"
                    name="name"
                    placeholder="Email Address"
                    required=""
                  />
                </div>
                <div className="relative mb-4">
                  <img
                    alt=""
                    src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6357722e2a5f19601037f879_Lock-2.svg"
                    className="absolute bottom-0 left-[5%] right-auto top-[26%] inline-block"
                  />
                  <input
                    type="password"
                    className="mb-4 block h-9 w-full border border-black bg-[#f2f2f7] px-3 py-6 pl-14 text-sm text-[#333333]"
                    placeholder="Password (min 4 characters)"
                    required=""
                  />
                </div>
                <label className="mb-6 flex items-center pb-12 font-medium lg:mb-1">
                  <input type="checkbox" name="checkbox" />
                  <span
                    className="ml-4 inline-block cursor-pointer text-sm"
                    htmlFor="checkbox"
                  >
                    I agree with the{' '}
                    <a href="#" className="font-bold text-[#0b0b1f]">
                      Terms &amp; Conditions
                    </a>
                  </span>
                </label>
                <a
                  href="#"
                  className="flex items-center justify-center bg-[#276ef1] px-8 py-4 text-center font-semibold rounded-md text-white transition [box-shadow:rgb(171,_196,_245)_-8px_8px] hover:[box-shadow:rgb(171,_196,_245)_0px_0px]"
                >
                  <p className="mr-6 font-bold">Join One Body</p>
                  <svg
                    className="h-4 w-4 flex-none"
                    fill="currentColor"
                    viewBox="0 0 20 21"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Arrow Right</title>
                    <polygon points="16.172 9 10.101 2.929 11.515 1.515 20 10 19.293 10.707 11.515 18.485 10.101 17.071 16.172 11 0 11 0 9"></polygon>
                  </svg>
                </a>
              </form>
              <p className="text-sm text-[#636262]">
                Already have an account?{' '}
                <Link to="/signin" className="text-sm font-bold text-black">
                  Login now
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Signup;
