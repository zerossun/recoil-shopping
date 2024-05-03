// import React, { SetStateAction, Dispatch } from 'react'
// import { checkboxContext } from './CheckboxContext'
// interface checkProps{
//     children: string;
//     disabled?: boolean;
//     checked: boolean;
//     onchange: (ischecked: boolean) => void;
// }

// const Checkbox: React.FC<checkProps> = ({ children, disabled, value, checked, onchange }) => {
//     const context = React.useContext(checkboxContext);
    
//     const handleClick = () => {
//         onchange(!checked);
//     }

//     if(!context){
//         return (
//             <label>
//                 <input type="checkbox" disabled={disabled} checked={checked} onChange={handleClick}/>
//                 {children}
//             </label>
//             );
//     }
//     const { ischecked, toggleValue } = context;

//     return (
//         <label>
//             <input type='checkbox' disabled={disabled} checked={ischecked(value) } onChange={(e)=>toggleValue({checked:e.target.checked, })}/>
//         </label>
//     )
// }

// export default Checkbox;

// // 질문하고 싶은 것.
// // onchange로 선택한 것을

import React from 'react';