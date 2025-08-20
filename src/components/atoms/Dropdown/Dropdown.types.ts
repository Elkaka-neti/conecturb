import type React from "react";

export interface DropdownContextTypes {
isOpen: boolean;
setOpen: React.Dispatch<React.SetStateAction<boolean>>;
toogle: () => void;
}


export interface DropdownRootsProps {
    children: React.ReactNode;
}

export interface DropdownTriggerProps {
    children: React.ReactNode;
    childs?: boolean;
}

export interface DropdownContentProps {
    children: React.ReactNode;
    className?: string;
    style?: string;
}

export interface DropdownItemsProps {
    children: React.ReactNode;
    onClick: () => void;
    disabled?: boolean;
    className?: string;
}