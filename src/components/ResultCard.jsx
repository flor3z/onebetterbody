import React from 'react';
// import { useState } from 'react';

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

function ResultCard({ result }) {
  console.log(result);

  // const [bmiInfo, setBmiInfo] = useState({});

  let display;

  if (result < 18.5 && result != 0) {
    display = bmiResults[0];
    // return () => setBmiInfo(display);
  } else if (result >= 18.5 && result <= 24.9) {
    display = bmiResults[1];
    // return () => setBmiInfo(display);
  } else if (result >= 25 && result <= 29.9) {
    display = bmiResults[2];
    // return () => setBmiInfo(display);
  } else if (result >= 30) {
    display = bmiResults[3];
    // return () => setBmiInfo(display);
  }

  console.log(display);
  console.log(result);

  return (
    <div className="flex h-full flex-col [grid-area:2/1/3/2] lg:[grid-area:1/2/2/3] rounded-xl border border-solid border-[#cdcdcd]">
      <div className=" flex justify-center gap-4 px-6 py-5 text-[#222222]">
        <div className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-[#f2f2f7]">
          <p className="text-sm font-bold sm:text-base">1</p>
        </div>
        <div className="ml-4 flex flex-col gap-2">
          <h5
            className={
              result
                ? `text-xl font-bold ${display.colour}`
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
          <p className="text-md text-[#636262]">{result && display.category}</p>
        </div>
      </div>
      <div className=" flex  justify-center gap-4 px-6 py-5 text-[#222222]">
        <div className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-[#f2f2f7]">
          <p className="text-sm font-bold sm:text-base">3</p>
        </div>
        <div className="ml-4 flex flex-col gap-2">
          <h5 className="text-xl font-bold">Description</h5>
          <p className="text-sm text-[#636262]">{result && display.info}</p>
        </div>
      </div>
    </div>
  );
}

export default ResultCard;
