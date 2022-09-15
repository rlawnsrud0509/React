import React, { useState } from "react";

function CreateList() {
  let [text, setText] = useState("");
  let [createLi, setcreateLi] = useState([]);
  let [i, setI] = useState(0);

  const create = (e) => {
    setText((text = e.target.value));
  };

  const deleteLi = (e) => {
    setcreateLi((createLi[i] = ""));
    setcreateLi((createLi = []));
  };

  const createList = () => {
    setI(i + 1);

    console.log(i);
    setcreateLi(createLi.concat(<li className="List">{text}</li>));
  };

  return (
    <>
      <div>
        <input onChange={create}></input>
        <button onClick={createList}>등록</button>
        <button onClick={deleteLi}>삭제</button>
      </div>
      <ul>{createLi}</ul>
    </>
  );
}

export default CreateList;
