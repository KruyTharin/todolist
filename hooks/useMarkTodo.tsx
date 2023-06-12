import { useFilterProvider } from "@/context/FilterContext";
import { useTodoListProvider } from "@/context/TodoListContext";
import { db } from "@/firebase";
import { doc, serverTimestamp, updateDoc } from "firebase/firestore";

const useMarkTodo = () => {
  const { todoList } = useTodoListProvider();
  const { filterList } = useFilterProvider();

  async function MarkTodo(id: string) {
    const data = (todoList || filterList).filter((x) => x.id === id);
    const docRef = doc(db, "todos", id);
    const todoUpdated = {
      todo: data[0].todo,
      isCompleted: !data[0].isCompleted,
      createdAt: serverTimestamp(),
    };
    await updateDoc(docRef, todoUpdated);
  }

  return { MarkTodo };
};

export default useMarkTodo;
