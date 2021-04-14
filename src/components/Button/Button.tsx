import React, {FC} from "react";

interface IProps {
    name: string

    [key: string]: any
}


const Button: FC<IProps> = ({name, ...props}) => {
    return (
        <button className="custom-btn" {...props}>{name.toUpperCase()}</button>
    )
}

export default Button
