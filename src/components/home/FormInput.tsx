import React, { useCallback, useContext, useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark,faCheck } from '@fortawesome/free-solid-svg-icons'
import { TasksContext } from '../../context/TasksContext';
import { TasksType } from '../../types/Types';
type FormInputProps = {
    editValue: TasksType
    editStatus: boolean,
    setEditStatus: React.Dispatch<React.SetStateAction<boolean>>
}

const FormInput = (props:FormInputProps) => {
    const [title,setTitle] = useState<string>('');
    const [details,setDetails] = useState<string>('');
    const focusRef = useRef<HTMLInputElement>(null!);
    const {dispatchTasks} = useContext(TasksContext);

    const saveTask = () => {
        dispatchTasks({type:`${!props.editStatus ? 'add' : 'update'}`,payload:{title:title,details:details}});
        props.setEditStatus(false);
    }
    
    const clearInputs = useCallback(() => {
        setTitle(prev => prev='');
        setDetails(prev => prev='');
        focusRef.current.focus();
    },[]);

    useEffect(() => {
        setTitle(prev => prev = props.editValue.title);
        setDetails(prev => prev = props.editValue.details);
    },[props.editValue])

  return (
    <div className='flex flex-col justify-center items-center my-3 w-full'>
        <div className='sm:w-2/4 p-1 w-11/12 md:w-1/4 text-base font-light'>
            <header className='mr-auto'>Add new tasks</header>
        </div>
        <input 
        ref = {focusRef}
        type={'text'} className='my-2 sm:w-2/4 p-1 w-11/12 md:w-1/4 rounded-lg' value={title} placeholder='Task Title' 
        onChange={(e) => setTitle(prev => prev = e.target.value)}
        />
        <textarea className='my-2 sm:w-2/4 p-1 w-11/12 md:w-1/4 rounded-lg' value={details} placeholder='Task Details' 
        onChange={(e) => setDetails(prev => prev = e.target.value)}
        />
        {/* <input  value={''} placeholder='Task Description' /> */}
        <div className='flex my-2 sm:w-2/4 flex-row w-11/12 md:w-1/4 justify-evenly items-center'>
            <button 
            onClick={() => {  
                clearInputs();
            }}
            className='active:opacity-80 active:drop-shadow-lg p-1 w-5/12 rounded-lg flex align-middle justify-center' style={{backgroundColor:'#253237'}}>
                <FontAwesomeIcon icon={faXmark} color={'#c2dfe3'} fontSize={28} />
            </button>
            <button
            disabled={title.length === 0 || details.length === 0}
            onClick={() => {
                saveTask();
                clearInputs();
            }}
            className='active:opacity-80 active:drop-shadow-lg p-1 w-5/12 rounded-lg flex align-middle justify-center' style={{backgroundColor:'#253237'}}>
                <FontAwesomeIcon icon={faCheck} color={'#c2dfe3'} fontSize={28} />
            </button>
        </div>
    </div>
  )
}

export default FormInput