import { useFilterProvider } from "@/context/FilterContext";
import { useSearchTermContextProvider } from "@/context/SearchTermConText";
import { useTodoProvider } from "@/context/TodoContext";
import { useTodoListProvider } from "@/context/TodoListContext";
import { db } from "@/firebase";
import {
  addDoc,
  collection,
  serverTimestamp,
  doc,
  updateDoc,
} from "firebase/firestore";
import { useEffect } from "react";

const useSubmitTodo = () => {
  const { todo, setTodo } = useTodoProvider();
  const { searchTerm, setSearchTerm } = useSearchTermContextProvider();
  const { todoList, setTodoList } = useTodoListProvider();
  const { setFilterList } = useFilterProvider();
  const onSubmit = async () => {
    if (todo.todo === "") {
      return alert("Please input todo...");
    }
    if (todo.hasOwnProperty("createdAt")) {
      //update
      const docRef = doc(db, "todos", todo.id as string);
      const todoUpdated = { ...todo, createdAt: serverTimestamp() };
      await updateDoc(docRef, todoUpdated);
      setTodo({ todo: "", id: "" });
      setSearchTerm("");
      alert(`Todo ${docRef.id} is added`);
    } else {
      //input
      const collectionRef = collection(db, "todos");
      const docRef = await addDoc(collectionRef, {
        ...todo,
        createdAt: serverTimestamp(),
      });
      setTodo({ todo: "", id: "" });
      setSearchTerm("");
      alert(`Todo ${docRef.id} is updated`);
    }
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo({ ...todo, todo: e.target.value });
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    if (searchTerm != "") {
      const result = todoList.filter((x) =>
        x.todo.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilterList(result);
    } else {
      setTodoList(todoList);
    }
  }, [searchTerm]);

  return { onSubmit, onChange };
};

export default useSubmitTodo;
