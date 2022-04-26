import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsisVertical,
  faEdit,
  faDeleteLeft,
  faCheck,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { FC, useContext, useState } from "react";
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
import { ThemeContext } from "../../pages/_app";
import { AppTheme } from "../../Theme/AppTheme";

const Todo: FC<{
  todo: ITodo;
  deleteTodo: (id: string | undefined) => void;
  addOrEditTodo: (todo: ITodo) => void;
  todoAddNewCancel: (todo: ITodo) => void;
}> = ({ todo, deleteTodo, addOrEditTodo, todoAddNewCancel }) => {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(!todo.id);
  const [editedTodo, setEditedTodo] = useState<ITodo>(todo);
  const { theme } = useContext(ThemeContext);


  const headerStyle: AppTheme = {
    dark: { backgroundColor: '#333', color: "#f2f2f2" },
    light: { backgroundColor: '#f2f2f2', color: '#333' },
    common: { transition: 'all 1s ease' }
  }

  const themeStyle = {
    ...headerStyle.common,
    ...(theme === 'light' ? headerStyle.light : headerStyle.dark)
  }


  return (
    <>
      <TodoAdded key={editedTodo.id}>
        <TodoContainer >
          <TodoHeader style={themeStyle} >
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
              <TodoHeading style={themeStyle} > { editedTodo.heading}</TodoHeading>
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
                      setIsEditMode(false);
                      addOrEditTodo(editedTodo);
                    }}
                  />
                  <FontAwesomeIcon
                    onClick={() => {
                      setIsEditMode(false);
                      setEditedTodo(todo);

                      // We're working on a new todo
                      // cancel will remove it from the state
                      if (!todo.id) {
                        todoAddNewCancel(todo);
                      }
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

            <TodoEditDelete isOpen={isEditOpen} >
              <div
                onClick={() => {
                  setIsEditOpen(!isEditOpen);
                  setIsEditMode(true);
                  addOrEditTodo(editedTodo);
                }}
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
                  <FontAwesomeIcon icon={faEdit} />
                </p>
              </div>
              <div
                onClick={() => deleteTodo(editedTodo.id)}
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "right",
                  cursor: "pointer",
                  color: "black",
                }}
              >

                <p >Delete</p>
                <p style={{ marginLeft: "0.5rem" }} >
                  <FontAwesomeIcon icon={faDeleteLeft} />
                </p>
              </div>
            </TodoEditDelete>
          </TodoHeader>
          <TodoDescription style={themeStyle} >
            {isEditMode ? (
              <EditModeTextArea
                value={editedTodo.desc}
                onChange={(e) =>
                  setEditedTodo({ ...editedTodo, desc: e.target.value })
                }
              />
            ) : (
              <p style={themeStyle}>{editedTodo.desc}</p>
            )}
          </TodoDescription>
        </TodoContainer>
      </TodoAdded>
    </>
  );
};

export default Todo;
