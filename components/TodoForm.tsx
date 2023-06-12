import { useTodoProvider } from "@/context/TodoContext";
import useSubmitTodo from "@/hooks/useSubmitTodo";

const TodoForm: React.FC = () => {
  const { todo } = useTodoProvider();
  const { onSubmit, onChange } = useSubmitTodo();

  return (
    <div className="container mt-5 flex flex-col gap-y-4 text-gray-500 uppercase">
      <label className="text-xl font-bold">Todo From</label>
      <div>
        <input
          type="text"
          onChange={(e) => onChange(e)}
          value={todo?.todo}
          className="border p-3"
        />
        <button onClick={onSubmit} className="bg-blue-500 p-3 text-white">
          {todo?.hasOwnProperty("createdAt") ? "UPDATE" : "ADD"}
        </button>
      </div>
    </div>
  );
};

export default TodoForm;
