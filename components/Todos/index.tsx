import { FC, useEffect, useState } from "react";
import {
  TodoHolder,
  ScrollContainer,
  GridWrapper,
  TodoCardHolder,
  TodoAddDiv,
  TodoAdd,
  AddTodoBtn,
} from "./style";
import { db, ITodo } from "../../firebaseFunctions/firestore";
import { doc, setDoc } from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { deleteDoc, getDoc } from "firebase/firestore";
import Todo from "../Todo";

export const Todos: FC<{
  existingTodo?: (ITodo & { id: string }) | null;
}> = () => {
  const [heading, setHeading] = useState("");
  const [desc, setDesc] = useState("");
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [todosDb] = useCollectionData<ITodo>(db.todos);
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

  const editTodo = async (todo: ITodo) => {
    if (todo) {
      setDoc(
        doc(db.todos, todo.id),
        {
          heading: todo.heading,
          desc: todo.desc,
        },
        { merge: true }
      );
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
        <TodoAddDiv>
          <AddTodoBtn>Add a new Todo</AddTodoBtn>
        </TodoAddDiv>
        <GridWrapper>
          <ScrollContainer>
            <TodoCardHolder>
              {todos?.map((todo) => {
                return (
                  <Todo
                    key={todo.id}
                    todo={todo}
                    deleteTodo={deleteTodo}
                    editTodo={editTodo}
                  />
                );
              })}
            </TodoCardHolder>
          </ScrollContainer>
        </GridWrapper>
      </TodoHolder>
    </>
  );
};

export default Todos;
