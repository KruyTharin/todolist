import { createContext, useContext, useState } from "react";

export type todoContextType = {
  todo: {
    todo: string;
    id?: string;
    createdAt?: string;
  };
  setTodo: React.Dispatch<
    React.SetStateAction<{
      todo: string;
      id?: string;
      createdAt?: string;
    }>
  >;
};

interface childrenProp {
  children: React.ReactNode;
}

export const TodoContext = createContext<todoContextType>(
  {} as todoContextType
);

const TodoContextProvider: React.FC<childrenProp> = ({ children }) => {
  const [todo, setTodo] = useState({ todo: "" });
  return (
    <TodoContext.Provider value={{ todo, setTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;

export const useTodoProvider = () => useContext(TodoContext);
