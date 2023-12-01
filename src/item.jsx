import { useContext } from "react";
import { TestComtext } from "./testcontext";

const Item =(props)=>{
  const context =useContext(TestComtext);
  const handleDeleteItem =(e)=>{
 alert(e.target.innerHTML)
 context.setTimeArr(context.timeArr.filter(t=>t != e.target.innerHTML))
  }
return(
 <div className="time_item"  onClick={handleDeleteItem}>{props.children}</div>  
)

}
export default Item;