import { FC, FormEvent, useEffect, useState } from "react";
import {
  ScrollContainer,
  GridWrapper,
  TodoCardHolder,
  TodoAddDiv,
  AddTodoBtn,
  Sidebar,
  SearchInput,
  SearchButton,
  SearchForm
} from "./style";
import { db, ITodo } from "../../firebaseFunctions/firestore";
import { addDoc, doc, setDoc } from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { deleteDoc } from "firebase/firestore";
import Todo from "../Todo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
export const Todos: FC<{
  existingTodo?: (ITodo & { id: string }) | null;
}> = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [todosDb] = useCollectionData<ITodo>(db.todos);
  const [isOpen, setIsOpen] = useState(true);
  const [search, setSearch] = useState("");


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
    if (todosDb && !search) {
      setTodos(todosDb);
    }
  }, [todosDb, search]);

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (search) {
      const filteredTodos: ITodo[] = todosDb && todosDb.filter((todo) => todo.desc.includes(search) || todo.heading.includes(search)) || [];
      setTodos(filteredTodos);
    }
  }

  return (
    < >
      <Sidebar>
        <TodoAddDiv >
          <SearchForm onSubmit={handleSearch}>

            <SearchInput placeholder={"Search..."} type="text" required={true} onChange={(e) => setSearch(e.target.value)} />
            <SearchButton type={"submit"}>
              <FontAwesomeIcon icon={faSearch} style={{ color: '#fff', fontSize: '1.3rem' }} />
            </SearchButton>
          </SearchForm>
          {isOpen && (
            <AddTodoBtn onClick={addNewTodo}>Add a new Todo</AddTodoBtn>
          )}
        </TodoAddDiv>
      </Sidebar>
      <GridWrapper>
        <ScrollContainer>
          <TodoCardHolder >
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


