import React, { useState } from "react";

function Rotto() {
  let [Rnum, setRnum] = useState([]);
  const setRandom = () => {
    for (let i = 0; i < 7; i++) {
      setTimeout(() => {
        setRnum(Rnum[i].concat(Math.random() * 100));
      }, 500);
    }
  };

  return (
    <div className="rottoDiv">
      <div className="rotto" id="rotto2">
        {Rnum}
      </div>
      <div className="rotto" id="rotto1">
        {Rnum}
      </div>
      <div className="rotto" id="rotto3">
        {Rnum}
      </div>
      <div className="rotto" id="rotto4">
        {Rnum}
      </div>
      <div className="rotto" id="rotto5">
        {Rnum}
      </div>
      <div className="rotto" id="rotto6">
        {Rnum}
      </div>
      <div className="rotto" id="bonus">
        {Rnum}
      </div>
      <button onClick={setRandom} className="startR">
        추첨 시작!
      </button>
    </div>
  );
}

export default Rotto;
