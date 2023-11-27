
import Item from "./item";
const TimeList = (props)=>{
  //console.log(props.children)
 return(
<div className="main_time_list">
  {props.children.map((c)=>(
 <Item>
 {c}
</Item>

  ))}
  
  
  </div>

 )
}
export default TimeList;