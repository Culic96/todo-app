import { FC, useEffect, useState } from "react";
import { TodoHolder, TodoAdd } from "./style";
import { db, IRecipe } from "../../firebaseFunctions/firestore";
import { doc, setDoc } from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { deleteDoc } from "firebase/firestore";

export const Todos: FC<{
  existingTodo?: (IRecipe & { id: string }) | null;
}> = () => {
  const [heading, setHeading] = useState("");
  const [desc, setDesc] = useState("");
  const [todos, setTodos] = useState<IRecipe[]>([]);
  const [todosDb] = useCollectionData<IRecipe>(db.todos);

  useEffect(() => {
    if (todosDb) {
    }
  }, [todosDb]);

  const handleAddTodo = async (newTodo: IRecipe) => {
    try {
      await setDoc<IRecipe>(doc(db.todos), newTodo);
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
        <TodoAdd>
          <form onSubmit={handleTodoFormSubmit}>
            <label>
              Todo Heading
              <input
                type="text"
                required
                value={heading}
                onChange={(e) => setHeading(e.target.value)}
              />
            </label>
            <label>
              Todo desc
              <input
                type="text"
                required
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
              />
            </label>
            <button type="submit">Add a new Todo</button>
          </form>
        </TodoAdd>
        {todos?.map((todo) => {
          return (
            <TodoAdd key={todo.id}>
              <h3>Heading: {todo.heading}</h3>
              <p>Your Desc: {todo.desc}</p>
              <button onClick={() => deleteTodo(todo.id)}>Delete Todo</button>
            </TodoAdd>
          );
        })}
      </TodoHolder>
    </>
  );
};

export default Todos;
