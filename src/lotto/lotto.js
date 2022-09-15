import React, { useState } from "react";

function Lotto() {
  let [Lnum, setLnum] = useState([]);
  const setRandom = () => {
    for (let i = 0; i < 7; i++) {
      setTimeout(() => {
        setLnum(Lnum[i].concat(Math.random() * 100));
      }, 500);
    }
  };

  return (
    <div className="lottoDiv">
      <div className="lotto" id="lotto2">
        {Lnum}
      </div>
      <div className="lotto" id="lotto1">
        {Lnum}
      </div>
      <div className="lotto" id="lotto3">
        {Lnum}
      </div>
      <div className="lotto" id="lotto4">
        {Lnum}
      </div>
      <div className="lotto" id="lotto5">
        {Lnum}
      </div>
      <div className="lotto" id="lotto6">
        {Lnum}
      </div>
      <div className="lotto" id="bonus">
        {Lnum}
      </div>
      <button onClick={setRandom} className="startL">
        추첨 시작!
      </button>
    </div>
  );
}

export default Lotto;
