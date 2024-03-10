import React,{useState} from "react";
function ToDo(){
    const [task,setTask]=useState([]);
    const [newTask,setNewTask]=useState("");
   
   
    function handleInputChange(event){
           setNewTask(event.target.value)
    }
    function addTask(){
        if(newTask.trim()!==""){
            setTask(t=>([...t,newTask]))
             setNewTask("")
        }else{
            alert("hey add any text")
        }
       
       
         
    }
    function deleteTask(index){
           const updatetask=task.filter((_,i)=>i!==index)
           setTask(updatetask)
    }
    function moveTaskUp(index){
              if(index>0){
                const updatedtask=[...task];
                [updatedtask[index],updatedtask[index-1]]=
                [updatedtask[index-1],updatedtask[index]];
                setTask(updatedtask)
              }
    }
    function moveTaskDwon(index){
        if(index<task.length-1){
            const updatedtask=[...task];
            [updatedtask[index],updatedtask[index+1]]=
            [updatedtask[index+1],updatedtask[index]];
            setTask(updatedtask)
          }
    }



    return(
       <div className="to-do-list">
        <h1>To-Do-List</h1>

        <div>
            <input type="text" 
            placeholder="Enter a task...."
            value={newTask}
            onChange={handleInputChange}
             />
             <button 
             className="add-button"
             onClick={addTask}>
                Add
                </button>
        </div>
        <ol>
            {task.map((task,index)=>
            <li key={index}>
                <span className="text">{task}</span>
                <button className="delete-button"
                onClick={()=>deleteTask(index)}
                >
                    Delete</button>
                    <button className="move-button"
                    onClick={()=>moveTaskUp(index)}
                >
                    UP</button>
                    <button className="move-button"
                    onClick={()=>moveTaskDwon(index)}
                >
                   Dwon</button>
                </li>
            )}
        </ol>
       </div>
    );
}
export default ToDo