import TodoForm from "@/components/TodoForm";
import TodoList from "@/components/TodoList";
import FilterContextProvider from "@/context/FilterContext";
import SearchTermContextProvider from "@/context/SearchTermConText";
import TodoContextProvider from "@/context/TodoContext";
import TodoListContextProvider from "@/context/TodoListContext";

export default function Home() {
  return (
    <TodoListContextProvider>
      <TodoContextProvider>
        <FilterContextProvider>
          <SearchTermContextProvider>
            <TodoForm />
            <TodoList />
          </SearchTermContextProvider>
        </FilterContextProvider>
      </TodoContextProvider>
    </TodoListContextProvider>
  );
}
