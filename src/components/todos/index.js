import TodoLists from "./todoList";

export default function Todos({todo,todoFunc, updateFunc}) {

    return (<div style={{  display:"flex",
    justifyContent: "center",
    alignItems:"center",
    flexDirection:"column",
    gap:20}}>
    {todo.map((item) => <TodoLists key={Math.random()}  item = {item} todoFunc={todoFunc} updateFunc={updateFunc} />) }
    </div>)
}
