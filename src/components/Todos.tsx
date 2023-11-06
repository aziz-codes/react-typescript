interface Todo {
  userId: number;
  id: number;
  title: string;
  isCompleted: boolean;
}
interface todosProps {
  todos: Todo[];
}
const Todos = (props: todosProps) => {
  const { todos } = props;
  return (
    <>
      {todos.map((item, index) => (
        <div className="flex w-full flex-wrap" key={index}>
          <p>{item.title}</p>
        </div>
      ))}
    </>
  );
};

export default Todos;
