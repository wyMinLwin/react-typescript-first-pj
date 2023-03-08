import React, { createContext, useReducer } from 'react'
import { TasksActionType, TasksContextType, TasksType } from '../types/Types'
type TasksContextWrapperProps = {
    children: React.ReactNode
}

const initialTasks:TasksType[] = [];
const tasksReducer = (state: typeof initialTasks,action: TasksActionType) => {
    switch(action.type) {
        case "add" :
            return [action.payload,...state]           
        case "remove" :
            return state = state.filter(task => task.title !== action.payload.title);
        case "update" : 
            return state = state.map(task => {
                if (task.title === action.payload.title) {
                    return {
                        title:action.payload.title,
                        details:action.payload.details
                    }
                }
                return task
            })
        default : throw new Error();
    }
}

export const TasksContext = createContext<TasksContextType>(null!)

const TasksContextWrapper = (props:TasksContextWrapperProps) => {
    const [tasks,dispatchTasks] = useReducer(tasksReducer,initialTasks);
   
    
  return (
    <TasksContext.Provider value={{tasks,dispatchTasks}}>
        {props.children}
    </TasksContext.Provider>
  )
}

export default TasksContextWrapper