import "./App.css";
import "./lotto/lotto.css";
import Counter from "./counter.js";
import CreateList from "./createList";
import PrintInput from "./printInput.js";
import Lotto from "./lotto/lotto";

function App() {
  return (
    <div>
      <Counter />
      <PrintInput />
      <CreateList />
      <Lotto />
    </div>
  );
}

export default App;
