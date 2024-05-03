import React, {createContext} from 'react'

interface myCheckboxContext {
    ischecked: (value: any[]) => void;
    toggleValue: ({ checked, value }: { checked: boolean; value: any[] }) => void;
}

// checkboxContext : 부모 컴포넌트와 자식컴포넌트 간의 효과적인 정보공유를 위해 사용 됨.
export const checkboxContext = React.createContext<myCheckboxContext | undefined>(undefined);