import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import { useState } from 'react';
import ResultCard from './ResultCard';
import React from 'react';

function Account() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [result, setResult] = useState('');
  const [inches, setInches] = useState('');
  const [standardUnit, setStandardUnit] = useState(true);
  // const [bmiInfo, setBmiInfo] = useState({});

  const { user, logout } = UserAuth();

  const navigate = useNavigate();

  const handleLogOut = async () => {
    try {
      await logout();
      navigate('/signin');
    } catch (e) {
      console.log(e.message);
    }
  };

  const handleUnitSwitch = () => {
    setStandardUnit(!standardUnit);
  };

  const handleSubmitResult = (e) => {
    e.preventDefault();
    if (standardUnit) {
      const heightSquared = height * height;
      setResult(weight / heightSquared);
      setHeight('');
      setWeight('');
    } else {
      const kilosIntoPounds = weight / 2.205;
      const heightIntoMeters = height * 0.3048;
      const heightTotal = heightIntoMeters + inches * 0.0254;
      const metricHeightSquard = heightTotal * heightTotal;
      console.log(
        kilosIntoPounds,
        heightIntoMeters,
        heightTotal,
        metricHeightSquard
      );
      setResult(kilosIntoPounds / metricHeightSquard);
      setHeight('');
      setInches('');
      setWeight('');
    }
  };

  return (
    <section>
      <div className="flex justify-between">
        <div className="py-4 text-black font-bold pl-5 sm:pl-10 underline decoration-[#276ef1] hover:decoration-[#277ef1] hover:decoration-2  underline-offset-2 ">
          User: {user && user.email}
        </div>
        <div className="flex justify-center items-center py-4 pr-5 sm:pr-10">
          <button
            onClick={handleLogOut}
            className="flex text-black items-center justify-center text-center underline decoration-[#276ef1] hover:decoration-[#277ef1] hover:decoration-2  underline-offset-2"
          >
            <p className="font-bold tracking-wider ">Sign Out</p>
          </button>
        </div>
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
          <ResultCard result={result} />

          <div className="relative block w-auto h-auto md:h-full md:w-full overflow-hidden [grid-area:1/1/2/2] lg:[grid-area:1/1/2/2] rounded-xl border border-solid border-[#cdcdcd]">
            <button
              onClick={handleUnitSwitch}
              className="absolute top-3 right-4 font-bold underline decoration-[#276ef1] hover:decoration-[#277ef1] hover:decoration-2  underline-offset-2"
            >
              {standardUnit ? <span>Standard</span> : <span>Metric</span>}
            </button>
            <form onSubmit={handleSubmitResult}>
              <div className="flex flex-col items-start p-4">
                <label>
                  {standardUnit ? 'Weight in Kilograms' : 'Weight in Pounds'}
                </label>
                <input
                  className="mb-4 block h-9 w-full border border-black bg-[#f2f2f7] px-3 py-6 pl-14 text-sm text-[#333333]"
                  onChange={(e) => setWeight(e.target.value)}
                  value={weight}
                  step=".1"
                  autoComplete="off"
                  type="number"
                  placeholder="input weight here"
                  required
                />
                <label>
                  {standardUnit
                    ? 'Height in Meters'
                    : 'Height in Feet and Inches'}
                </label>
                {standardUnit ? (
                  <input
                    className=" mb-4 block h-9 w-full border border-black bg-[#f2f2f7] px-3 py-6 pl-14 text-sm text-[#333333]"
                    onChange={(e) => setHeight(e.target.value)}
                    value={height}
                    autoComplete="off"
                    step=".01"
                    type="number"
                    placeholder="input height here"
                    required
                  />
                ) : (
                  <>
                    <input
                      className=" mb-4 block h-9 w-full border border-black bg-[#f2f2f7] px-3 py-6 pl-14 text-sm text-[#333333]"
                      onChange={(e) => setHeight(e.target.value)}
                      value={height}
                      maxLength="10"
                      autoComplete="off"
                      step=".01"
                      type="number"
                      placeholder="input feet here"
                      required
                    />
                    <input
                      className=" mb-4 block h-9 w-full border border-black bg-[#f2f2f7] px-3 py-6 pl-14 text-sm text-[#333333]"
                      onChange={(e) => setInches(e.target.value)}
                      value={inches}
                      autoComplete="off"
                      step=".01"
                      type="number"
                      placeholder="input inches here"
                      required
                    />
                  </>
                )}

                <button
                  href="#"
                  className="flex items-center justify-center hover:bg-[#277ef1] bg-[#276ef1] px-8 py-4 text-center font-semibold rounded-md text-white"
                >
                  <p className="mr-6 font-bold tracking-wider">Submit</p>
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
        </div>
        {/* <div className="flex justify-center items-center text-sm py-4">
          <button
            onClick={handleLogOut}
            className="flex items-center justify-center hover:bg-[#277ef1] bg-[#276ef1] px-8 py-4 text-center font-semibold rounded-md text-white"
          >
            <p className="font-bold tracking-wider ">Sign Out</p>
          </button>
        </div> */}
      </div>
    </section>
  );
}

export default Account;
