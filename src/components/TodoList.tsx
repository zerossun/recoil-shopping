import React from 'react'
import TodolistItem from './TodolistItem'
import type {Todo} from '../App'

interface list {
    todos: Todo[],
    deletetxt: (id: number) => void,
    reserveClick: () => void;
}

const Todolist = ({ todos, deletetxt, reserveClick }:list) => {
  return (
    <ul>
          {todos.map((todo) => (
              <li><TodolistItem todo={todo} deletetxt={deletetxt} reserveClick={reserveClick}/></li>
        ))}
      
    </ul>
  )
}

export default Todolist
