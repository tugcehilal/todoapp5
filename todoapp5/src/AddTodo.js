import React, {Component} from 'react';

class AddTodo extends Component {
   state = {
       content: ''
   }

    handleChange = (e) => {
     this.setState({
         //e.target.id : e.target.value could also be used if we gave id to <input>
         content: e.target.value
     })
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        console.log(this.state)
       this.props.addTodop(this.state);
    }
   render(){
       return(
           <div>
               <form onSubmit={this.handleSubmit}>
                   <label> Add new todo: </label>
                   <input type = "text " onChange={this.handleChange}></input>
               </form>
           </div>
       )
   }
}
export default AddTodo