import { type DropdownContentProps,type DropdownTriggerProps, type DropdownContextTypes, type DropdownItemsProps, type DropdownRootsProps } from "./Dropdown.types.ts";
import React, {useState} from "react"

const DropdownContext = React.createContext<DropdownContextTypes | null>(null);

const useDropdown = () => {
    const context = React.useContext(DropdownContext);
    if(!context) return console.error("Erro! Não esta dentro de um Dropdown.")
    return context;    
}

const DropdownTrigger = ({children}: DropdownTriggerProps) => {
    const {toggle} = useDropdown();
    return React.cloneElement(children as React.ReactElement, {
        onClick: () => toggle()
    })
}
export default Dropdown => {
    return (
        <DropdownContext.Provider value={{}}>
            {children}
        </DropdownContext.Provider>
    )
}
/*
const DropdownContext = ({children, className, style}: DropdownContentProps) => {
    const {isOpen} = useDropdown();
    return (
        <>
        {
            isOpen && (
                <div
                className={className}

                {...style}>
                
                </div>
            )
        }
        </>
    )
}*/