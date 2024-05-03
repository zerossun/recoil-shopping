import React, { ChangeEvent } from 'react'

interface edit {
  onUpdate: (id: number, text: string) => void;
}


const Todoedit = ({ onUpdate}:edit) => {

  console.log(onUpdate);
  const reserBtn = (e : ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
}

  return (
    <form onSubmit={reserBtn}>
      <input />
      <button>수정</button>
    </form>
  )
}

export default Todoedit
