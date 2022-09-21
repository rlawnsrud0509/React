import "./App.css";
import "./lotto/lotto.css";
import Counter from "./counter.js";
import CreateList from "./createList";
import PrintInput from "./printInput.js";
import Lotto from "./lotto/lotto";
import TypeSc from "./TYPESCRIPT/index.js";

function App() {
  return (
    <div>
      <Counter />
      <PrintInput />
      <CreateList />
      <Lotto />
      <TypeSc />
    </div>
  );
}

export default App;
