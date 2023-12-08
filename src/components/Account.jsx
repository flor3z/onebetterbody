import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import { useEffect, useState } from 'react';
import React from 'react';

function Account() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [result, setResult] = useState('');
  const [inches, setInches] = useState('');
  const [standardUnit, setStandardUnit] = useState(true);
  const [bmiInfo, setBmiInfo] = useState({});

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

  const bmiResults = [
    {
      category: 'Under Weight',
      colour: 'text-red-500',
      info: 'You may be dealing with malnutrition, seek dietary assistance.',
    },
    {
      category: 'Healthy Weight',
      colour: 'text-green-500',
      info: 'You are currently at a healthy weight, keep up the good work.',
    },
    {
      category: 'Over Weight',
      colour: 'text-orange-500',
      info: 'You may need to seek guidance regarding small dietary adjustments.',
    },
    {
      category: 'Obese',
      colour: 'text-red-500',
      info: 'You may need to seek medical support as your bmi level indicates a high risk of disease and health concerns.',
    },
  ];

  //1. Once result has been returned e.g 20 bmi store that information
  // result stored in state variable
  //2. Create conditional statement comparing result to a range of numbers,
  // if (result < 18.5 ) {
  // setBmiInfo(bmiResults[0])
  //      }
  //3. Once info has been selected, display data on screen
  // <h1>{bmiInfo.colour}</h1>

  useEffect(() => {
    const totalInfo = () => {
      if (result < 18.5) {
        return setBmiInfo(bmiResults[0]);
      } else if (result >= 18.5 && result <= 24.9) {
        return setBmiInfo(bmiResults[1]);
      } else if (result >= 25 && result <= 29.9) {
        return setBmiInfo(bmiResults[2]);
      } else {
        return setBmiInfo(bmiResults[3]);
      }
    };

    console.log(bmiInfo.info);
    console.log(result);
    return () => {
      totalInfo();
    };
  }, [result]);

  //contiune here with finding out how to display data without constant re-renders

  // colour condition for BMI range//
  // let colour;
  // if (result < 18.5) {
  //   colour = 'text-red-500';
  // } else if (result >= 18.5 && result <= 24.9) {
  //   colour = 'text-green-500';
  // } else if (result >= 25 && result <= 29.9) {
  //   colour = 'text-orange-500';
  // } else {
  //   colour = 'text-red-500';
  // }

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
          <div className="flex h-full flex-col [grid-area:2/1/3/2] lg:[grid-area:1/2/2/3] rounded-xl border border-solid border-[#cdcdcd]">
            {/* <div className="flex flex-col items-center justify-around">
              <div className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-[#f2f2f7]">
                <p className="text-sm font-bold sm:text-base">1</p>
              </div>
              <div className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-[#f2f2f7]">
                <p className="text-sm font-bold sm:text-base">2</p>
              </div>
              <div className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-[#f2f2f7]">
                <p className="text-sm font-bold sm:text-base">3</p>
              </div>
            </div> */}
            {/* <div className="flex flex-col items-between"> */}
            <div className=" flex justify-center gap-4 px-6 py-5 text-[#222222]">
              <div className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-[#f2f2f7]">
                <p className="text-sm font-bold sm:text-base">1</p>
              </div>
              <div className="ml-4 flex flex-col gap-2">
                <h5
                  className={
                    result
                      ? `text-xl font-bold ${bmiInfo.colour}`
                      : 'text-xl font-bold'
                  }
                >
                  BMI Rating : {result && Math.round(result)} kg/m²
                </h5>
                <p className="text-sm text-[#636262]"></p>
              </div>
            </div>
            <div className=" flex  justify-center gap-4 px-6 py-5 text-[#222222]">
              <div className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-[#f2f2f7]">
                <p className="text-sm font-bold sm:text-base">2</p>
              </div>
              <div className="ml-4 flex flex-col gap-2">
                <h5 className="text-xl font-bold">Weight Classification</h5>
                <p className="text-md text-[#636262]">
                  {result && bmiInfo.category}
                </p>
              </div>
            </div>
            <div className=" flex  justify-center gap-4 px-6 py-5 text-[#222222]">
              <div className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-[#f2f2f7]">
                <p className="text-sm font-bold sm:text-base">3</p>
              </div>
              <div className="ml-4 flex flex-col gap-2">
                <h5 className="text-xl font-bold">Description</h5>
                <p className="text-sm text-[#636262]">
                  {result && bmiInfo.info}
                </p>
              </div>
            </div>
            {/* </div> */}
          </div>
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
                      step=".01"
                      type="number"
                      placeholder="input feet here"
                      required
                    />
                    <input
                      className=" mb-4 block h-9 w-full border border-black bg-[#f2f2f7] px-3 py-6 pl-14 text-sm text-[#333333]"
                      onChange={(e) => setInches(e.target.value)}
                      value={inches}
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
