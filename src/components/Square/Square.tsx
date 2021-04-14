import React, {FC} from "react";

interface IProps {
    target: 'X' | 'O'
    action?: () => void

    [key: string]: any
}

const Square: FC<IProps> = ({target, action}) => {
    return (
        <span className="square" onClick={action}>{target}</span>
    )
}

export default Square
