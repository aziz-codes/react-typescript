import { useEffect, useState } from "react";
import Posts from "./components/Todos";

const App = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/");

    const result = await res.json();
    setData(result);
  };
  console.log(data);
  useEffect(() => {
    getData();
  }, []);
  return <Posts todos={data} />;
};

export default App;
