import "./App.css";
import Button from "./Button";
import Marquee from "./Marquee";
import { FaMoneyBill } from "react-icons/fa";

function App() {
  return (
    <div className="App">
      <main>
        <Button>
          <FaMoneyBill /> Click Me
        </Button>
        <Marquee>Hello Weshleeeeee</Marquee>
      </main>
    </div>
  );
}

export default App;
