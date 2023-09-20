
import "./todoList.css"
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { useState } from "react";


export default function TodoLists({ item, todoFunc,updateFunc }) {
  const [showInput, setShowInput] = useState(true);
  const [showUpdate, setshowUpdate] = useState(true);
  const [imputVal, setInputVal] = useState(item.title);

  const editHandler = () => {
    setShowInput(false);
    setshowUpdate(false)
  };

  const changeHandler = (e) => {
    setInputVal(e.target.value);
  }


  const updateHandler = () => {
    updateFunc(imputVal,item.id);
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
   { showUpdate ? <EditOutlined
        style={{ fontSize: 20, color: "#00f" }}
        onClick={() => editHandler()}
      />
     : <button onClick={updateHandler} style={{backgroundColor:"#35910d",fontSize:14,color:"#fff",padding:5, borderRadius:10}}>Update</button>}

        </div>
      </div>
    </div>
  );
}
