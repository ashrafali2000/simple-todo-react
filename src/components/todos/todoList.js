
import "./todoList.css"
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { useState } from "react";

export default function TodoLists({ item, todoFunc }) {
  const [showInput, setShowInput] = useState(true);
  const [imputVal, setInputVal] = useState(item.title);

  const editHandler = () => {
    setShowInput(false);
  };

  const changeHandler = (e) => {
    setInputVal(e.target.value);
  }


  return (
    <div className="TodoCard">
      <div className="myCard">
        {showInput ? (
          <span>{item.title}</span>
        ) : (
          <input
          onChange={ changeHandler}
            value={imputVal}
            autoFocus
            style={{ backgroundColor: "white" }}
          ></input>
        )}

        <div  className="UpdatingOpt"> 
      <DeleteOutlined
        style={{ fontSize: 20, color: "#f00" }}
        onClick={() => todoFunc(item.id)}
      />
      <EditOutlined
        style={{ fontSize: 20, color: "#00f" }}
        onClick={() => editHandler()}
      />

        </div>
      </div>
    </div>
  );
}
