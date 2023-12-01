
import { useContext } from "react";
import Item from "./item";
import { TestComtext } from "./testcontext";
const TimeList = (props)=>{
  //console.log(props.children)
  const context=useContext(TestComtext);
 return(
<div className="main_time_list">
  {context.timeArr.map((c)=>(
 <Item key={Math.random()}>
 {c}
</Item>

  ))}
  
  
  </div>

 )
}
export default TimeList;