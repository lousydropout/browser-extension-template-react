import ReactDOM from "react-dom";
import { useBrowserStore } from "@/hooks/useBrowserStore";
import { Button } from "@/components/ui/button";

export const Main = () => {
  const [counter, setCounter] = useBrowserStore<number>("counter", 0);

  return (
    <>
      <h1>Counter: {counter}</h1>
      <div>
        <Button onClick={() => setCounter((prev) => prev + 1)}>
          Increment
        </Button>
        <Button onClick={() => setCounter((prev) => prev - 1)}>
          Decrement
        </Button>
      </div>
    </>
  );
};

ReactDOM.render(<Main />, document.getElementById("root"));
