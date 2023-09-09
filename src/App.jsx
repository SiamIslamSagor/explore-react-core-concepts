import "./App.css";
import Counter from "./Counter";
import Team from "./Team";
import Users from "./Users";
import Friends from "./friends";

function App() {
  function handleClick() {
    alert("btn click");
  }
  const handleClick2 = () => {
    alert("handleClick2 clicked");
  };
  const addToFive = (num) => {
    alert(num + 5);
  };
  return (
    <>
      <h2>React Core Concepts 2</h2>

      <Friends></Friends>

      <Users></Users>

      <Team></Team>

      <Counter></Counter>
      <button onClick={handleClick}>Click me</button>
      <button onClick={handleClick2}>Click me 2</button>
      <button
        onClick={() => {
          alert("handleClick3 click");
        }}
      >
        Click me 3
      </button>
      <button
        onClick={() => {
          addToFive(3);
        }}
      >
        add five
      </button>
    </>
  );
}

export default App;
