import { FC, useEffect, useState } from "react";
import {
  TodoHolder,
  ScrollContainer,
  GridWrapper,
  TodoCardHolder,
} from "./style";
import { db, ITodo } from "../../firebaseFunctions/firestore";
import { doc, setDoc } from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { deleteDoc } from "firebase/firestore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCode, faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import Todo from "../Todo";

export const Todos: FC<{
  existingTodo?: (ITodo & { id: string }) | null;
}> = () => {
  const [heading, setHeading] = useState("");
  const [desc, setDesc] = useState("");
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [todosDb] = useCollectionData<ITodo>(db.todos);

  useEffect(() => {
    if (todosDb) {
    }
  }, [todosDb]);

  const handleAddTodo = async (newTodo: ITodo) => {
    try {
      await setDoc<ITodo>(doc(db.todos), newTodo);
      setTodos([...todos, newTodo]);
    } catch (err: any) {
      alert(err.message);
      throw err;
    }
  };

  const resetForm = () => {
    setHeading("");
    setDesc("");
  };

  const deleteTodo = async (id: string | undefined) => {
    if (id) {
      await deleteDoc(doc(db.todos, id));
      setTodos(todos.filter((todo) => todo.id !== id));
    }
  };

  useEffect(() => {
    if (todosDb) {
      setTodos(todosDb);
    }
  }, [todosDb]);

  const handleTodoFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newTodo = {
      heading,
      desc,
    };
    handleAddTodo(newTodo);
    resetForm();
  };
  return (
    <>
      <TodoHolder>
        <GridWrapper>
          <ScrollContainer>
            <TodoCardHolder>
              {todos?.map((todo) => {
                return <Todo key={todo.id} todo={todo} />;
              })}
            </TodoCardHolder>
          </ScrollContainer>
        </GridWrapper>
      </TodoHolder>
    </>
  );
};

export default Todos;