import "./styles.css";
import { useState } from "react";
export default function App() {
  const [one, setOne] = useState("");
  const [data, setData] = useState([]);

  const fun = (e) => {
    setOne(e.target.value);
  };

  const onAdd = () => {
    setData([...data, one]);

    setOne("");
  };

  const wow = () => {
    if (data.length == 0) {
      return;
    } else {
      setData(
        data.sort((a, b) => {
          if (a < b) {
            return -1;
          } else if (a > b) {
            return 1;
          }
          return 0;
        })
      );
    }
  };
  return (
    <div className="App">
      <input value={one} type="text" onChange={fun}></input>
      <br />
      <button onClick={onAdd}>click to add to list</button>
      <button onClick={wow}>sort this list</button>
      {data.map((elem) => {
        return <li>{elem}</li>;
      })}
    </div>
  );
}
