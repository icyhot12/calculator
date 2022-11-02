import React from "react";
import Button from "./components/Button";

function App() {

  const calcElements = [
    ["C", "+-", "%", "/"],
    [7, 8, 9, "X"],
    [4, 5, 6, "-"],
    [1, 2, 3, "+"],
    [0, '.', "="]
  ]

  const elements = calcElements.flat().map((element, index) => {
    return (
      <Button
        key={index}
        value={element}
      />
    )
  })

  return (
    <div className='w-screen h-screen flex justify-center items-center'>
      <div className='bg-gray-600 w-fit h-fit p-2 rounded-md'>
        <div className='text-white bg-slate-400 text-5xl py-3 px-2 mb-2 rounded-lg'>0</div>
        <div className='grid grid-rows-5 grid-cols-4 gap-1'>
          {elements}
        </div>
      </div>
    </div>
  );
}

export default App;
