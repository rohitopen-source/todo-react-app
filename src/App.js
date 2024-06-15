import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
    
  let [todoList,setTodoList]=useState([])


  let saveToDoList=(event)=>{
    
    let toname = event.target.toname.value;

    if(!todoList.includes(toname)){

      let finalDolist= [...todoList,toname]
      setTodoList(finalDolist)
    }

    else{
      alert("Todo  already exists...")
    }

    event.preventDefault();  // preventDefaut form refresh hone se bacahega , event ke ander form ki details hai
  }
  
  let list=todoList.map((value,index)=>{
    return(
      <ToDoListItems value = {value}  key={index}  indexNumber={index} todoList={todoList} setTodoList={setTodoList}/>
    )
  })

  return (
    <div className="App">
     <h1>Today's work</h1>
     <form onSubmit={saveToDoList}>
      <input type='text' name='toname'/> <button>Save</button>
     </form>
     
     <div className='outerDiv'>
       <ul>
         {list}
       </ul>
     </div>

    </div>
  );
}

export default App;

function ToDoListItems({value,indexNumber,todoList,setTodoList}){

  let [status,setStatus]=useState(false)
   
  let deleteRow=()=>{
   // alert(indexNumber)
    let finalData = todoList.filter((v,i)=>i!=indexNumber)
     console.log(finalData)
    setTodoList(finalData)
  }

   let checkStatus=()=>{
    setStatus(!status)
   }
  return(
    <li className={(status)?'completetodo' : ''} onClick={checkStatus}>{indexNumber+1}  {value} <span onClick={deleteRow}>&times;</span></li>
  
  )
}