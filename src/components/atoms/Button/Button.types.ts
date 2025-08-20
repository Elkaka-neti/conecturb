import type React from "react";

export interface BaseButtonInterface extends React.ComponentPropsWithoutRef<'button'> {
    children: React.ReactNode;
    onClick: () => void;
    disabled?: boolean;
    className?: string;
    round?: boolean;
}