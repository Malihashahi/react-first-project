import { useContext } from "react";
import { TestComtext } from "./testcontext";

const Item =(props)=>{
  const context =useContext(TestComtext);
return(
 <div className="time_item" style={{color:context}}>{props.children}</div>  
)

}
export default Item;