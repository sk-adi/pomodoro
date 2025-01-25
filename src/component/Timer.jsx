import { useEffect, useState } from "react";

function Timer(props) {
  const focustime = props.timeInSeconds || 10;
  const totalTime = `${focustime}:00`;

  const [time, Settime] = useState(totalTime);
  const [timerid, SettimerId] = useState();

  let timeInSeconds = focustime * 60;

  const updatetime = () => {
    if (timeInSeconds === 0) {
      clearInterval(timerid);
    } else {
      timeInSeconds = timeInSeconds - 1;
      let minutes = Math.floor(timeInSeconds / 60);
      let seconds = timeInSeconds % 60;
      seconds = seconds < 10 ? "0" + seconds : seconds;
      let leftTime = `${minutes}:${seconds}`;
      Settime(leftTime);
    }
  };

  const handleOnStart = () => {
    const id = setInterval(updatetime, 1000);
    SettimerId(id);
  };

  const handleOnReset = () => {
    clearInterval(timerid);
    Settime(totalTime);
  };

  return (
    <div
      style={{
        backgroundImage:
          'url("https://images.unsplash.com/photo-1663084579817-774940ed6b47?q=80&w=2189&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="flex justify-center items-center h-screen bg-gray-900 bg-opacity-60"
    >
      <div className="text-center p-12 rounded-xl shadow-lg w-96 bg-opacity-0">
        <h1 className="text-7xl font-extrabold text-white mb-8 tracking-tight">{time}</h1>
        <div className="flex justify-center gap-8">
          <button
            onClick={handleOnStart}
            className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-500 transition duration-200"
          >
            Start
          </button>
          <button
            onClick={handleOnReset}
            className="px-8 py-4 bg-gray-800 text-white font-semibold rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-500 transition duration-200"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default Timer;
