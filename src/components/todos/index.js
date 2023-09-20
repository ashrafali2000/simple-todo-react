import Card from "antd/es/card/Card"
import { DeleteOutlined,EditOutlined  } from "@ant-design/icons"


export default function Todos({todo,todoFunc}) {

    return (<div style={{  display:"flex",
    justifyContent: "center",
    alignItems:"center",
    flexDirection:"column"}}>
    {todo.map((item) => <Card key={Math.random()} style={{
        width: '50%',backgroundColor:"#ede4c7"
      }}>
        <p>{item.title}</p>
        <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
      <DeleteOutlined style={{fontSize:20,color:"#f00"}} onClick={() => todoFunc(item.id)}/>
      <EditOutlined  style={{fontSize:20,color:"#00f"}} />
        </div>
     </Card>) }
    </div>)
}