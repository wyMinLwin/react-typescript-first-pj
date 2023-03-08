import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext } from 'react'
import { TasksContext } from '../../context/TasksContext'
import { TasksType } from '../../types/Types'
type TasksListProps = {
  setEditValue:  React.Dispatch<React.SetStateAction<TasksType>>,
  setEditStatus: React.Dispatch<React.SetStateAction<boolean>>
}

const TasksList = (props:TasksListProps) => {
  const tasksContext = useContext(TasksContext)
    
  return (
    <div className='sm:w-2/4 p-1 w-11/12 md:w-1/4'>
        <header className='font-light text-base'>Tasks to do</header>
        {tasksContext.tasks.map(task => 
          <div key={task.title} className='w-full mb-2 rounded-lg p-5' style={{backgroundColor:'#253237',color:'#9DB4C0'}}>
            <div className='flex flex-row justify-between'  style={{borderBottomWidth:0.1,borderColor:'#c2dfe3'}}>
                <h2 className='font-base text-xl'>{task.title}</h2>
                <div className='flex flex-row justify-center'>
                  <FontAwesomeIcon  className='active:opacity-80 active:drop-shadow-lg mx-1'  
                  onClick={() => {props.setEditValue({title:task.title,details:task.details});
                  props.setEditStatus(true)
                  } } icon={faPen}/>
                  <FontAwesomeIcon  className='active:opacity-80 active:drop-shadow-lg mx-1' 
                  onClick={() => tasksContext.dispatchTasks({type:'remove',payload:{title:task.title,details:task.details}})} icon={faTrash}/>
                </div>
            </div>
            <p className='mt-2 text-sm font-light '>{task.details}</p>
          </div>
        )}
        
    </div>
  )
}

export default TasksList