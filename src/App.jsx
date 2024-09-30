import { useState } from "react";

const Calculator = () => {
  const [value1, setValue1] = useState(10);
  const [value2, setValue2] = useState(5);
  const [result, setResult] = useState(null);
  const [darkMode, setDarkMode] = useState(false); 
  const [Imagess, setCurrent] = useState(0); 

  const images = [
    "https://i.pinimg.com/474x/9d/5e/7b/9d5e7ba1eb9d8a288d5ac413a7c9b216.jpg",
    "https://i.pinimg.com/474x/9b/e1/6a/9be16a4fea75fd42b8beb6e00c943f8d.jpg",
    "https://i.pinimg.com/474x/9f/8f/a1/9f8fa12b6900f391bfd33f62161f3a75.jpg",
    "https://i.pinimg.com/474x/6b/ca/7c/6bca7c43c9a5cf50f414ebaafede2aa1.jpg"
  ];

  const pls = (v, value) => v(value + 1);
  const min = (v, value) => v(value - 1);

  const changeImage = () => {
    setCurrent((prevIndex) => (prevIndex + 1) % images.length);
  };

  const Operations = (operation) => {
    let calcResult;

    if (operation === "+") {
      calcResult = value1 + value2;
    } else if (operation === "-") {
      calcResult = value1 - value2;
    } else if (operation === "*") {
      calcResult = value1 * value2;
    } else if (operation === "%") {
      calcResult = value1 % value2;
    } else {
      calcResult = 0;
    }

    setResult(calcResult);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`flex flex-col items-center justify-center h-screen ${darkMode ? 'bg-gray-900' : 'bg-gray-100'} p-4`}>
      <button
        onClick={toggleDarkMode}
        className="mb-4 hover:bg-gray-700 bg-gray-500 text-white px-3 py-1 rounded"
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>

      <h1 className={`text-2xl font-bold mb-4 text-center ${darkMode ? 'text-white' : 'text-black'}`}>
        Calculator
      </h1>

      <div className="flex space-x-4 mb-6 justify-center">
        <div className="flex flex-col items-center">
          <button
            onClick={() => pls(setValue1, value1)}
            className="bg-gray-400 text-white px-2 py-1 mb-2 rounded"
          >
            +
          </button>
          <p className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-black'}`}>{value1}</p>
          <button
            onClick={() => min(setValue1, value1)}
            className="bg-gray-500 text-white px-2 py-1 mt-2 rounded"
          >
            -
          </button>
        </div>

        <div className="flex flex-col items-center">
          <button
            onClick={() => pls(setValue2, value2)}
            className="bg-gray-400 text-white px-2 py-1 mb-2 rounded"
          >
            +
          </button>
          <p className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-black'}`}>{value2}</p>
          <button
            onClick={() => min(setValue2, value2)}
            className="bg-gray-500 text-white px-2 py-1 mt-2 rounded"
          >
            -
          </button>
        </div>
      </div>

      <div className="flex flex-col items-center mb-6">
        <img src={images[Imagess]} alt="current" className="w-32 h-32 mb-4" />
        <button
          onClick={changeImage}
          className="bg-gray-500  hover:bg-gray-700 text-white px-4 py-2 rounded"
        >
          Change Image
        </button>
      </div>

      <div className="flex space-x-4 mb-6 justify-center">
        <button
          onClick={() => Operations("+")}
          className="bg-pink-400 text-white px-4 py-2 rounded"
        >
          +
        </button>
        <button
          onClick={() => Operations("-")}
          className="bg-pink-400 text-white px-4 py-2 rounded"
        >
          -
        </button>
        <button
          onClick={() => Operations("*")}
          className="bg-pink-400 text-white px-4 py-2 rounded"
        >
          *
        </button>
        <button
          onClick={() => Operations("%")}
          className="bg-pink-400 text-white px-4 py-2 rounded"
        >
          %
        </button>
      </div>

      {result !== null && (
        <div className={`text-xl font-bold p-4 rounded hover:bg-gray-700 text-center ${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-200 text-black'}`}>
          Result: {result}
        </div>
      )}
    </div>
  );
};

export default Calculator;
