import React from 'react';

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
  let display;

  if (result < 18.5 && result != 0) {
    display = bmiResults[0];
  } else if (result >= 18.5 && result <= 24.9) {
    display = bmiResults[1];
  } else if (result >= 25 && result <= 29.9) {
    display = bmiResults[2];
  } else if (result >= 30) {
    display = bmiResults[3];
  }

  // [grid-area:2/1/3/2] lg:[grid-area:1/2/2/3]

  console.log(display);
  console.log(result);

  return (
    <div className="flex h-full flex-col rounded-xl border border-solid border-[#cdcdcd] dark:border-gray-500 ">
      <div className="flex justify-start gap-4 px-6 py-5 text-[#222222]">
        <div className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-[#f2f2f7] dark:bg-neutral-300">
          <p className="text-sm font-bold sm:text-base">1</p>
        </div>
        <div className="ml-4 flex flex-col gap-2">
          <h5
            className={
              result
                ? `text-xl font-bold ${display.colour}`
                : 'text-xl font-bold dark:text-slate-200'
            }
          >
            BMI Rating : {result && Math.round(result)} kg/m²
          </h5>
          <p className="text-sm text-[#636262]"></p>
        </div>
      </div>
      <div className=" flex  justify-start gap-4 px-6 py-5 text-[#222222]">
        <div className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-[#f2f2f7] dark:bg-neutral-300">
          <p className="text-sm font-bold sm:text-base">2</p>
        </div>
        <div className="ml-4 flex flex-col gap-2">
          <h5 className="text-xl font-bold dark:text-slate-200">
            Weight Classification
          </h5>
          <p className="text-md text-[#636262] dark:text-neutral-300">
            {result && display.category}
          </p>
        </div>
      </div>
      <div className=" flex justify-start gap-4 px-6 py-5 text-[#222222]">
        <div className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-[#f2f2f7] dark:bg-neutral-300">
          <p className="text-sm font-bold sm:text-base">3</p>
        </div>
        <div className="ml-4 flex flex-col gap-2 w-auto">
          <h5 className="text-xl font-bold dark:text-slate-200">Description</h5>
          <p className="text-sm text-[#636262] dark:text-neutral-300">
            {result && display.info}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ResultCard;
