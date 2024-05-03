import React, { useEffect, useState } from 'react';
import './App.css';

import Todoinsert from './components/Todoinsert';
import Todolist from './components/Todolist';
import Todoedit from './components/Todoedit';

export interface Todo{
  id:number,
  text: string,
  check: boolean;

}

function App() {

  // const [service, setService] = useState(false);
  // const [marketing, setMarketing] = useState(false);
 
  const [todos, setTodos] = useState<Todo[]>([
    {
      id: 1,
      text: 'example1',
      check: false,
    },
    {
      id: 2,
      text: 'example2',
      check: true,
    },
    {
      id: 3,
      text: 'example3',
      check: false,
    },
  ]);
  

  const [resToggle, setResToggle] = useState<boolean>(false);
  

  const reserveClick = () => {
    setResToggle(!resToggle);
    console.log(resToggle);
  }

  const deletetxt = (id: number) => {
    
    // !== 두 피연산자가 같지 않거나, 같은 자료형이 아닐 때 true를 반환
    // 고로 todo.id(3) !== 클릭한 todo의 id가 3일 때 false
    // false를 제외하고 남은 걸 보여줌
    setTodos(todos.filter((todo) => todo.id !== id)
    )
  }


  const onUpdate = (id:number, text: string) => {
    setTodos(todos.map((todo) => (todo.id === id ? {...todo, text}: todo)))
  }

  return (
    <div>
      {/* <Checkbox checked={service} onchange={setService}>서비스 이용약관</Checkbox>
      <Checkbox checked={marketing} onchange={setMarketing} >마케팅 수신</Checkbox>
      <button className="px-4 py-2 font-bold text-white bg-blue-500 border border-blue-700 rounded hover:bg-blue-700" disabled={!service || !marketing}>회원 가입</button> */}
      <Todoinsert />
      <Todolist todos={todos} deletetxt={deletetxt} reserveClick={reserveClick} />
      {/* 
      && : resToggle이 true라면 <Todoedit />반환, 아니면 undefind
       */}
      {/* {resToggle && <Todoedit />} */}
      {resToggle ? <Todoedit onUpdate={onUpdate} /> : undefined}
    </div>
  );
}

export default App;
