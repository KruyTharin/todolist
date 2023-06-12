import { useTodoProvider } from "@/context/TodoContext";
import { db } from "@/firebase";
import useMarkTodo from "@/hooks/useMarkTodo";
import { todoType } from "@/type/interface";
import { deleteDoc, doc } from "firebase/firestore";
import moment from "moment";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";

const TodoItem: React.FC<todoType> = (props) => {
  const { id, todo, isCompleted, createdAt } = props;
  const { setTodo } = useTodoProvider();
  const date = moment(createdAt).format("MMMM ddd, yyyy");
  const { MarkTodo } = useMarkTodo();

  const deleteTodo = async (
    e: React.MouseEvent<SVGElement, MouseEvent>,
    id: string
  ) => {
    e.stopPropagation();
    const docRef = doc(db, "todos", id);
    await deleteDoc(docRef);
  };

  return (
    <div>
      <div className="border p-5 shadow-md rounded-sm">
        <div className="flex justify-between items-center">
          <div className="flex flex-col items-start gap-y-2">
            <span>{todo}</span>
            <span>{date}</span>
            <span
              className={`${
                isCompleted ? "border-green-500" : "border-red-500"
              } border p-1`}
            >
              {isCompleted ? "Mark as Complete" : "Mark as InComplete"}
            </span>
          </div>

          <div className="flex items-center gap-x-3">
            <span
              onClick={() => MarkTodo(id)}
              className="text-white bg-blue-500 p-2 text-sm  font-semibold rounded-sm cursor-pointer"
            >
              Mark as Complete / Mark as Incomplete
            </span>
            <AiFillEdit
              onClick={() => setTodo({ id, todo, createdAt })}
              className="hover:rotate-45 duration-300 cursor-pointer"
            />
            <AiFillDelete
              onClick={(e) => deleteTodo(e, id)}
              className="text-red-500 hover:scale-125 duration-300 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
