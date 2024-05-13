import React, { useMemo, createContext, useReducer } from 'react'
import TableContext from './components/TableContext'
import Form from './components/Form'
import Table from './components/Table'


// useMemo : 동일한 계산을 반복해야 할 때, 이전에 계산한 값을 메모리에 저장하여 반복 수행 제거
// 구조
// const value = useMemo(() => {
//     return calculateNewValue();
// },[item])

// useReducer : useState를 전역으로 사용할 수 있음
// 구조
// const [state, dispatch] = useReducer(reducer, initialState, init);
// state: 컴포넌트에서 사용할 State(상태).
// dispatch: reducer 함수를 실행시키며, 컴포넌트 내에서 state의 업데이트를 일으키기 위해서 사용하는 함수.\
// reducer: 컴포넌트 외부에서 state를 업데이트하는 로직을 담당하는 함수. 현재의 state와 action 객체를 인자로 받아서, 기존의 state를 대체(replace)할 새로운 State를 반환(return)하는 함수.
// initialState: 초기 State
// init: 초기 함수
// ✨중요✨ : 기존의 state를 새로운 state로 대체(replace)

export const TableContext = createContext({});

const MineSearch = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    
  return (
    <div>
        <TableContext>
            <div>timer</div>  
            <Form />
            <Table />
            <div>result</div>
        </TableContext>
    </div>
  )
}

export default MineSearch
