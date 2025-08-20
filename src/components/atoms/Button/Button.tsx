
import { type BaseButtonInterface } from "./Button.types.ts";

const BaseButton = ({
    children,
    onClick,
    disabled = false,
    className,
    ...rest
}: BaseButtonInterface) => {
 
    return (
        <button
        onClick={onClick}
        disabled={disabled}
        className={className}
        {...rest}></button>
    )


}

export default BaseButton;