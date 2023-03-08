export type TasksType = {
    title: string,
    details: string
}

export type TasksActionType = 
    | {type: 'add', payload: TasksType}
    | {type: 'remove', payload: TasksType}
    | {type: 'update', payload: TasksType};

export type TasksContextType = {
    tasks: TasksType[],
    dispatchTasks: React.Dispatch<TasksActionType>
}