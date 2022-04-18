import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { FC } from "react";
import { ITodo } from "../../firebaseFunctions/firestore";
import { TodoAdded, TodoContainer, TodoDescription, TodoHeader } from "./style";

const Todo: FC<{ todo: ITodo }> = ({ todo }) => {
  return (
    <>
      <TodoAdded key={todo.id}>
        <TodoContainer>
          <TodoHeader>
            <h3>{todo.heading}</h3>
            <FontAwesomeIcon
              icon={faEllipsisVertical}
              style={{ color: "black", cursor: "pointer" }}
            />
          </TodoHeader>
          <TodoDescription>
            <p>{todo.desc}</p>
          </TodoDescription>
        </TodoContainer>
      </TodoAdded>
    </>
  );
};

export default Todo;
