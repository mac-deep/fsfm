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
    if(tempo >= 1){
      setSeconds((4 * bars) / (tempo / 60));
      fiboSeries(setFiboSeconds, seconds);
    }
  }, [tempo, bars, seconds]);

  useEffect(() => {
    setBeats(4 * bars);
    fiboSeries(setFiboBeats, beats);
  }, [bars, beats]);

  useEffect(() => {
    fiboSeries(setFiboBars, bars);
  }, [bars]);

  return (
    <main className="bg-gradient-to-b from-gray-50 to-gray-200">
    <div className="max-w-screen-lg mx-auto w-full lg:p-20 lg:pt-12 px-6 pt-8 min-h-screen">
      <div className="text-lg md:text-4xl font-bold pb-12 text-black ">
        <h1 className="md:mb-4">Fibonacci sequence for music</h1>
      <h2 className="font-light">
        Make transitions of music piece, 🎶 <br/> On the magical beats. ✨
      </h2>
      </div>
      <h1>
        
      </h1>
      <p className="text-3xl font-bold text-center"></p>
      <div className="flex flex-col md:flex-row gap-4">
        <ForSlider
          parameter={tempo}
          setParameter={setTempo}
          min="1"
          max="200"
          title="💿Tempo"
          desc="What is the tempo of your track?"
        />
        <ForSlider
          parameter={bars}
          setParameter={setBars}
          min="1"
          max="400"
          title="🎼Bars"
          desc="What is the length of your track in bars?"
        />
      </div>
      <div className="mt-16 flex flex-col gap-4">
        <ForVariable title="bars" variable={bars} fiboVariable={fiboBars} />
        <ForVariable title="beats" variable={beats} fiboVariable={fiboBeats} />
        <ForVariable
          title="seconds"
          variable={seconds}
          fiboVariable={fiboSeconds}
        />
      </div>
    </div>
    </main>
  );
};

export default App;
