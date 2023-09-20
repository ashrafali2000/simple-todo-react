import TodoLists from "./todoList";

export default function Todos({todo,todoFunc}) {

    return (<div style={{  display:"flex",
    justifyContent: "center",
    alignItems:"center",
    flexDirection:"column"}}>
    {todo.map((item) => <TodoLists key={Math.random()} style={{display:"flex", justifyContent:"space-between", alignItems:"center"}} item = {item} todoFunc={todoFunc} />) }
    </div>)
}




// key={Math.random()} style={{
//     width: '50%',backgroundColor:"#ede4c7"
//   }}>
//    {showInput ? <p>{item.title}</p> : <input value={item.title} autoFocus style={{backgroundColor:"white"}}></input>}
//     <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
//   <DeleteOutlined style={{fontSize:20,color:"#f00"}} onClick={() => todoFunc(item.id)}/>
//   <EditOutlined  style={{fontSize:20,color:"#00f"}}  onClick={() => editHandler()}/>
//     </div>