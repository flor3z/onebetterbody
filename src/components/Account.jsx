import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

import React from 'react';

function Account() {
  const { user, logout } = UserAuth();

  const navigate = useNavigate();

  const handleLogOut = async () => {
    try {
      await logout();
      navigate('/');
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <section>
      <div className="absolute top-2 left-3">
        Welcome : {user && user.email}{' '}
      </div>
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
        <p className="text-center text-sm font-bold uppercase">
          BMI CALCULATOR
        </p>
        <h2 className="text-center text-3xl font-bold md:text-5xl">
          How it works
        </h2>
        <p className="mx-auto mb-8 mt-4 max-w-lg text-center text-sm text-[#636262] sm:text-base md:mb-12 lg:mb-16">
          One measure of good health would be your BMI score. Falling within the
          healthy range is a good indication of over-all wellness. Keep in mind
          these results are based off of averages and may not be an exact the
          most correct measure of determining total health.
        </p>
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="flex h-full flex-col [grid-area:2/1/3/2] lg:[grid-area:1/2/2/3]">
            <a
              className="mb-8 flex max-w-lg justify-center gap-4 rounded-xl border border-solid border-[#cdcdcd] px-6 py-5 text-[#222222]"
              href="#w-tabs-0-data-w-pane-0"
            >
              <div className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-[#f2f2f7]">
                <p className="text-sm font-bold sm:text-base">1</p>
              </div>
              <div className="ml-4 flex flex-col gap-2">
                <h5 className="text-xl font-bold">Find Component</h5>
                <p className="text-sm text-[#636262]">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit ut
                  aliquam, purus sit.
                </p>
              </div>
            </a>
            <a
              className="mb-8 flex max-w-lg justify-center gap-4 px-6 py-5 text-[#222222]"
              href="#w-tabs-0-data-w-pane-1"
            >
              <div className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-[#f2f2f7]">
                <p className="text-sm font-bold sm:text-base">2</p>
              </div>
              <div className="ml-4 flex flex-col gap-2">
                <h5 className="text-xl font-bold">Copy and Paste</h5>
                <p className="text-sm text-[#636262]">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit ut
                  aliquam, purus sit.
                </p>
              </div>
            </a>
            <a
              className="mb-8 flex max-w-lg justify-center gap-4 px-6 py-5 text-[#222222]"
              href="#w-tabs-0-data-w-pane-2"
            >
              <div className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-[#f2f2f7]">
                <p className="text-sm font-bold sm:text-base">3</p>
              </div>
              <div className="ml-4 flex flex-col gap-2">
                <h5 className="text-xl font-bold">Done</h5>
                <p className="text-sm text-[#636262]">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit ut
                  aliquam, purus sit.
                </p>
              </div>
            </a>
          </div>
          <form className="block h-full w-full overflow-hidden [grid-area:1/1/2/2] lg:[grid-area:1/1/2/2]">
            <div className="flex flex-col items-start p-4 text-left bg-slate-400 w-full h-full rounded-md shadow-md">
              <label>Weight in Kilograms</label>
              <input type="text" placeholder="input weight here" />
              <label>Height in Meters</label>
              <input type="text" placeholder="input height here" />
              <button
                href="#"
                className="flex items-center justify-center bg-[#276ef1] px-8 py-4 text-center font-semibold rounded-md text-white"
              >
                <p className="mr-6 font-bold">Submit</p>
                <svg
                  className="h-4 w-4 flex-none"
                  fill="currentColor"
                  viewBox="0 0 20 21"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Arrow Right</title>
                  <polygon points="16.172 9 10.101 2.929 11.515 1.515 20 10 19.293 10.707 11.515 18.485 10.101 17.071 16.172 11 0 11 0 9"></polygon>
                </svg>
              </button>
            </div>
          </form>
        </div>
        <div className="flex justify-center items-center text-sm py-4">
          <button
            onClick={handleLogOut}
            className="flex items-center justify-center bg-[#276ef1] px-8 py-4 text-center font-semibold rounded-md text-white"
          >
            <p className=" font-bold">Sign Out</p>
          </button>
          {/* Log out of{' '}
          <Link to="signin" className="text-sm font-bold text-balck">
            Your Account
          </Link> */}
        </div>
      </div>
    </section>
  );
}

export default Account;
