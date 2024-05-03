import React, { useState } from 'react'
import type { Todo } from '../App'
import { MdCheckBox, MdCheckBoxOutlineBlank, MdModeEditOutline, MdRemoveCircleOutline } from 'react-icons/md';

interface Item {
    todo: Todo,
    deletetxt: (id: number) => void;
    reserveClick: () => void;
}

const TodolistItem = ({ todo, deletetxt, reserveClick }: Item) => {

    const [Check, setCheck] = useState<boolean>(todo.check);
    
    const onToggle = () => {
        setCheck(!Check);
    }

    const { text, check, id } = todo;

  return (
      <li className='flex items-center'>
          <div className='flex items-center' onClick={onToggle}>
            {Check === true ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
            <p>{text}</p>
          </div>
          <button onClick={()=>reserveClick()}><MdModeEditOutline/></button>
          <button onClick={()=>deletetxt(id)}><MdRemoveCircleOutline/></button>
    </li>
  )
}

export default TodolistItem
