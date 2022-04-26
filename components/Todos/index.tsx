import { FC, useEffect, useState } from "react";
import {
  ScrollContainer,
  GridWrapper,
  TodoCardHolder,
  TodoAddDiv,
  AddTodoBtn,
  Sidebar,
} from "./style";
import { db, ITodo } from "../../firebaseFunctions/firestore";
import { addDoc, doc, setDoc } from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { deleteDoc } from "firebase/firestore";
import Todo from "../Todo";
export const Todos: FC<{
  existingTodo?: (ITodo & { id: string }) | null;
}> = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [todosDb] = useCollectionData<ITodo>(db.todos);
  const [isOpen, setIsOpen] = useState(true);
  // const handleAddTodo = async (newTodo: ITodo) => {
  //   try {
  //     await setDoc<ITodo>(doc(db.todos), newTodo);
  //     setTodos([...todos, newTodo]);
  //   } catch (err: any) {
  //     alert(err.message);
  //     throw err;
  //   }
  // };

  useEffect(() => {
    console.log("[TODOS] Component did mount");
  }, []);

  const deleteTodo = async (id: string | undefined) => {
    if (!id) return;

    await deleteDoc(doc(db.todos, id));
    setTodos(todos.filter((todo) => todo.id !== id));

  };

  const todoAddNewCancel = (todo: ITodo) => {
    setIsOpen(true);
    setTodos(todos.slice(1));
  };

  const addOrEditTodo = async (todo: ITodo) => {
    if (todo.id) {
      setDoc(
        doc(db.todos, todo.id),
        {
          heading: todo.heading,
          desc: todo.desc,
        },
        { merge: true }
      );
    } else {
      const docRef = await addDoc(db.todos, todo);
      // Case where we create new todo
    }
    setIsOpen(true);
  };

  const addNewTodo = () => {
    setTodos([
      {
        heading: "New Todo",
        desc: "",
      },
      ...todos,
    ]);
    setIsOpen(false);
  };

  useEffect(() => {
    if (todosDb) {
      setTodos(todosDb);
    }
  }, [todosDb]);

  return (
    <>
      <Sidebar>
        <TodoAddDiv>
          {isOpen && (
            <AddTodoBtn onClick={addNewTodo}>Add a new Todo</AddTodoBtn>
          )}
        </TodoAddDiv>
      </Sidebar>
      <GridWrapper>
        <ScrollContainer>
          <TodoCardHolder>
            {todos?.map((todo, index) => {
              return (
                <Todo
                  key={todo.id || index}
                  todo={todo}
                  deleteTodo={deleteTodo}
                  addOrEditTodo={addOrEditTodo}
                  todoAddNewCancel={todoAddNewCancel}
                />
              );
            })}
          </TodoCardHolder>
        </ScrollContainer>
      </GridWrapper>
    </>
  );
};

export default Todos;
