import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsisVertical,
  faEdit,
  faDeleteLeft,
  faCheck,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { FC, useEffect, useState } from "react";
import { ITodo } from "../../firebaseFunctions/firestore";
import {
  TodoAdded,
  TodoContainer,
  TodoDescription,
  TodoEditDelete,
  TodoHeader,
  TodoHeading,
  EditModeTextArea,
  EditModeInput,
} from "./style";

const Todo: FC<{
  todo: ITodo;
  deleteTodo: (id: string | undefined) => void;
  addOrEditTodo: (todo: ITodo) => void;
  todoEditCancel: (todo: ITodo) => void;
}> = ({ todo, deleteTodo, addOrEditTodo, todoEditCancel }) => {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(!todo.id);
  const [editedTodo, setEditedTodo] = useState<ITodo>(todo);

  useEffect(() => {
    console.log(`[ToDo] id = ${editedTodo.id}`);
  }, []);

  return (
    <>
      <TodoAdded key={editedTodo.id}>
        <TodoContainer>
          <TodoHeader>
            {isEditMode ? (
              <>
                <EditModeInput
                  maxLength={14}
                  value={editedTodo.heading}
                  onChange={(e) =>
                    setEditedTodo({
                      ...editedTodo,
                      heading: e.target.value,
                    })
                  }
                />
              </>
            ) : (
              <TodoHeading>{editedTodo.heading}</TodoHeading>
            )}
            {isEditMode ? (
              <>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "right",
                    cursor: "pointer",
                    gap: "10px",
                  }}
                >
                  <FontAwesomeIcon
                    icon={faCheck}
                    color="green"
                    style={{
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      setIsEditMode(!isEditMode);
                      addOrEditTodo(editedTodo);
                    }}
                  />
                  <FontAwesomeIcon
                    onClick={() => {
                      setIsEditMode(false);
                      setEditedTodo(todo);
                      todoEditCancel(todo);
                    }}
                    icon={faTimes}
                    color="red"
                    style={{ cursor: "pointer" }}
                  />
                </div>
              </>
            ) : (
              <FontAwesomeIcon
                onClick={() => {
                  setIsEditOpen(!isEditOpen);
                }}
                icon={faEllipsisVertical}
                style={{ color: "black", cursor: "pointer", padding: "0.5rem" }}
              />
            )}

            <TodoEditDelete isOpen={isEditOpen}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "right",
                  cursor: "pointer",
                  color: "black",
                }}
              >
                <p>Edit</p>
                <p style={{ marginLeft: "0.5rem" }}>
                  <FontAwesomeIcon
                    icon={faEdit}
                    onClick={() => {
                      addOrEditTodo(editedTodo);
                      setIsEditMode(true);
                    }}
                  />
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "right",
                  cursor: "pointer",
                  color: "black",
                }}
              >
                <p>Delete</p>
                <p style={{ marginLeft: "0.5rem" }}>
                  <FontAwesomeIcon
                    onClick={() => deleteTodo(editedTodo.id)}
                    icon={faDeleteLeft}
                  />
                </p>
              </div>
            </TodoEditDelete>
          </TodoHeader>
          <TodoDescription>
            {isEditMode ? (
              <EditModeTextArea
                value={editedTodo.desc}
                onChange={(e) =>
                  setEditedTodo({ ...editedTodo, desc: e.target.value })
                }
              />
            ) : (
              <p>{editedTodo.desc}</p>
            )}
          </TodoDescription>
        </TodoContainer>
      </TodoAdded>
    </>
  );
};

export default Todo;
