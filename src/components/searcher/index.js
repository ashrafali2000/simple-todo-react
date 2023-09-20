import { Input, Button, Space } from "antd";
import { useState } from "react";

export default function Searcher({ todoFunc }) {
  const [val, setVal] = useState("");

  const changeHandler = (event) => {
    setVal(event.target.value);
  };
  const addHandler = () => {
    todoFunc(val);
    setVal("")
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Space.Compact
        style={{
          width: "50%",
        }}
      >
        <Input type="text" onChange={changeHandler} value={val} />
        <Button
          style={{ backgroundColor: "#f58142", color: "#fff", fontWeight: 600 }}
          onClick={addHandler}
        >
          Add todo
        </Button>
      </Space.Compact>
    </div>
  );
}
