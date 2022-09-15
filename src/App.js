import "./App.css";
import "./rotto/rotto.css";
import Counter from "./counter.js";
import CreateList from "./createList";
import PrintInput from "./printInput.js";
import Rotto from "./rotto/rotto";

function App() {
  return (
    <div>
      <Counter />
      <PrintInput />
      <CreateList />
      <Rotto />
    </div>
  );
}

export default App;
