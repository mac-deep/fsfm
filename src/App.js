import React, { useState, useEffect } from "react";
import ForSlider from "./components/ForSlider";
import ForVariable from "./components/ForVariable";

const App = () => {
  const [tempo, setTempo] = useState(130);
  const [bars, setBars] = useState(16);
  const [seconds, setSeconds] = useState();
  const [beats, setBeats] = useState();
  const [fiboSeconds, setFiboSeconds] = useState([]);
  const [fiboBeats, setFiboBeats] = useState([]);
  const [fiboBars, setFiboBars] = useState([]);

  const fiboSeries = (setFunction, max) => {
    let fiboArr = [0];
    let n1 = 0,
      n2 = 1,
      nextTerm;
    nextTerm = n1 + n2;
    while (nextTerm <= max) {
      fiboArr.push(nextTerm);
      n1 = n2;
      n2 = nextTerm;
      nextTerm = n1 + n2;
    }
    return setFunction(fiboArr);
  };

  useEffect(() => {
    setSeconds((4 * bars) / (tempo / 60));
    fiboSeries(setFiboSeconds, seconds);
  }, [tempo, bars, seconds]);

  useEffect(() => {
    setBeats(4 * bars);
    fiboSeries(setFiboBeats, beats);
  }, [bars, beats]);

  useEffect(() => {
    fiboSeries(setFiboBars, bars);
  }, [bars]);

  return (
    <div className="w-full bg-gradient-to-b lg:p-20 lg:pt-12 px-4 pt-4 from-blue-200 to-blue-400 min-h-screen">
      <h1 className="text-6xl great-vibes font-bold pb-12 capitalize text-center text-purple-900">
        fibonacci sequence for music 🎶✨
      </h1>
      <div className="flex flex-col md:flex-row">
        <ForSlider
          parameter={tempo}
          setParameter={setTempo}
          min="1"
          max="200"
          title="💿Tempo"
        />
        <ForSlider
          parameter={bars}
          setParameter={setBars}
          min="1"
          max="400"
          title="🎼Bars"
        />
      </div>
      <div className="mt-16">
        <ForVariable
          title="seconds"
          variable={seconds}
          fiboVariable={fiboSeconds}
        />
        <ForVariable title="beats" variable={beats} fiboVariable={fiboBeats} />
        <ForVariable title="bars" variable={bars} fiboVariable={fiboBars} />
      </div>
    </div>
  );
};

export default App;
