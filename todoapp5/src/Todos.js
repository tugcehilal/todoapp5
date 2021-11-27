import React from 'react';

const Todos = ({todos, deleteTodop}) => {
     console.log(todos, todos.length);
    const todoList = todos.length ? (
        todos.map(todo =>{
            return(
                <div className="collecton-item" key ={todo.id}>
                    <span onClick = {() => {deleteTodop(todo.id)}}>{todo.content}</span>
                </div>
            )
        })
    ) : (
        <p className = "center" >You have no todos lets, yay!</p>
    );
    return(
       <div className="todos collection">
         {todoList}
       </div>
    )
}
export default Todos