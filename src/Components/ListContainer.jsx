import React, { useContext } from "react";
import ListContext from "../Context/ListContext";

function ListContainer(props) {
  const context = useContext(ListContext);
  function deleteItem(id){
      if(props.user==="1"){
         context.setUser1List(prev => {
          return prev.filter((item , index)=> {
             return index != id ;
          })
         })
      }

      else{
        context.setUser2List(prev => {
          return prev.filter((item , index)=> {
             return index != id ;
          })
         })
      }
  }

  return props.user == "1" ? (
    <div>
      {context.user1List.map((item , index) => {
        return (
          <div id={index} key={index}>
            <div> {item.amount} </div>
            <div> {item.category} </div>
            <button onClick={()=>{
               return deleteItem(index) ;
            }}> ❌ </button>
          </div>
        );
      })}
    </div>

  ) : (

    <div>
      {context.user2List.map((item , index) => {
        return (
          <div>
            <div> {item.amount} </div>
            <div> {item.category} </div>
            <button onClick={()=>{
               return deleteItem(index) ;
            }}> ❌ </button>
          </div>
        );
      })}
    </div>
  );
}

export default ListContainer;
