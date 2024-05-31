import "./App.css";
import ScrollProgressBarIndicator from "./components";

function App() {
  return (
    <div className="App">
      <ScrollProgressBarIndicator
        url={"https://dummyjson.com/products?limit=100"}
      />
    </div>
  );
}

export default App;
