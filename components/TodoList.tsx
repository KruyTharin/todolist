import { useEffect } from "react";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import TodoItem from "./TodoItem";
import { useTodoListProvider } from "@/context/TodoListContext";
import { useFilterProvider } from "@/context/FilterContext";
import { useSearchTermContextProvider } from "@/context/SearchTermConText";

const TodoList: React.FC = () => {
  const { todoList, setTodoList } = useTodoListProvider();
  const { filterList } = useFilterProvider();
  const { searchTerm } = useSearchTermContextProvider();

  useEffect(() => {
    const collectionRef = collection(db, "todos");
    const q = query(collectionRef, orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      setTodoList(
        querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
          createdAt: doc?.data()?.createdAt?.toDate().getTime(),
        }))
      );
    });
    return unsubscribe;
  }, []);

  return (
    <div className="container mt-10 space-y-2 ">
      {(searchTerm?.length === 0 ? todoList : filterList).map((x) => (
        <div key={x.id}>
          <TodoItem {...x} />
        </div>
      ))}
    </div>
  );
};

export default TodoList;
