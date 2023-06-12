import { todoType } from "@/type/interface";
import { createContext, useContext, useState } from "react";

export type todoListContextType = {
  todoList: todoType[];
  setTodoList: any;
};

interface childrenProp {
  children: React.ReactNode;
}

export const TodoListContext = createContext<todoListContextType>(
  {} as todoListContextType
);

const TodoListContextProvider: React.FC<childrenProp> = ({ children }) => {
  const [todoList, setTodoList] = useState<todoType[] | []>([]);
  return (
    <TodoListContext.Provider value={{ todoList, setTodoList }}>
      {children}
    </TodoListContext.Provider>
  );
};

export default TodoListContextProvider;

export const useTodoListProvider = () => useContext(TodoListContext);
