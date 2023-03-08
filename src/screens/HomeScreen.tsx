import React, { useState } from 'react'
import FormInput from '../components/home/FormInput'
import TasksList from '../components/home/TasksList'
import { TasksType } from '../types/Types'

const HomeScreen = () => {
  const [editValue,setEditValue] = useState<TasksType>({title:'',details:''});
  const [editStatus,setEditStatus] = useState<boolean>(false);
  return (
    <div className='max-w-screen min-h-screen justify-center' style={{backgroundColor:'#c2dfe3'}} >
        <div className='flex flex-col items-center'>
            <header className='text-2xl mt-3 font-light'>SKSAT</header>
            <FormInput editValue={editValue} editStatus={editStatus} setEditStatus={setEditStatus} />
            <TasksList setEditValue={setEditValue} setEditStatus={setEditStatus} />
        </div>
    </div>
  )
}

export default HomeScreen