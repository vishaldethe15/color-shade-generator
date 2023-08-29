import { useState } from "react";
import SingleColor from "./components/SingleColor";
import "https://cdn.jsdelivr.net/npm/values.js";

const App = () => {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values("#9c89b8").all(10));

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(10);
      setList(colors);
    } catch (error) {
      setError(true);
    }
  };

  return (
    <>
      <section className="container">
        <h3>Shades Generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder="#9c89b8"
            className={`${error ? "error" : null}`}
          />
          <button className="btn" type="submit">
            Generate
          </button>
        </form>
      </section>
      <section className="colors">
        {list.map((color, index) => {
          return (
            <SingleColor
              key={index}
              {...color}
              index={index}
              hexColor={color.hex}
              shadeType={color.type}
            />
          );
        })}
      </section>
    </>
  );
};

export default App;
