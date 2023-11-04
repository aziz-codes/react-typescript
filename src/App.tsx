import Counter from "./components/Counter";
const App = () => {
  let name: string = "Hello World";
  const age: number = 34;
  return <Counter name={name} age={age} />;
};

export default App;
