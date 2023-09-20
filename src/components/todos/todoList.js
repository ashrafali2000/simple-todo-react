import Card from "antd/es/card/Card";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { useState } from "react";

export default function TodoLists({ item, todoFunc }) {
  const [showInput, setShowInput] = useState(true);

  const editHandler = () => {
    setShowInput(false);
  };


  return (
    <div style={{
             width: '50%',backgroundColor:"#ede4c7",
           }}>
      <Card >
        {showInput ? (
          <p>{item.title}</p>
        ) : (
          <input
            value={item.title}
            autoFocus
            style={{ backgroundColor: "white" }}
          ></input>
        )}
      <DeleteOutlined
        style={{ fontSize: 20, color: "#f00" }}
        onClick={() => todoFunc(item.id)}
      />
      <EditOutlined
        style={{ fontSize: 20, color: "#00f" }}
        onClick={() => editHandler()}
      />
      </Card>
    </div>
  );
}
