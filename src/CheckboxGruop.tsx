
import React from 'react'
import { checkboxContext } from './CheckboxContext';

interface CheckboxGruopProps{
    label: string;
    children: string;
    values: any[];
    onchange: (values: boolean[]) => void;
}

    const CheckboxGruop : React.FC<CheckboxGruopProps> = ({ label, children, values, onchange }) => {
    
    const ischecked = (value:any[] ) => values.includes(value);
    // 인자로 넘어온 value가 values.props에 들어있다면 참을 반환
        const toggleValue = ({ checked, value}: { checked: boolean;  value:any[]}) => {
        if (checked) {
            onchange([...values, value]);
        } else {
            onchange(values.filter((v) => v !== value));
        }
        // 인자로 두개의 속성을 받는 객체로 이루어짐.
        // 첫번째 속성은 checked, 두번째 속성은 value
        // checked : 체크박스가 선택되었는지의 여부,
        // 만약에 선택이 되었다면, props으로 넘어온 onchange 함수 호출
        // 인자로 values의 concat함수를 이용해 더함.
        // 즉, 어떤 체크박스가 선택되어있다면, 체크박의 값을 values에 추가한 다음,
        // onchange함수 호출
        // 선택되어있지 않다면, filter함수를 이용해서 배열에서 제거
    };
    return (
        <fieldset>
            <legend>{label}</legend>
            <checkboxContext.Provider value={{ischecked, toggleValue}}>
                {children}
            </checkboxContext.Provider>
        </fieldset>
    )
}

export default CheckboxGruop;