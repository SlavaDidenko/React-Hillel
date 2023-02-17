import React from "react";

export class Task extends React.Component {

    render() {
        const {data , onClick} = this.props;

        return (
            <li>
                <p
                    onClick={() => onClick(data.id)}
                    className={data.done ? "done" : ""}>
                    {data.title}
                </p>
            </li>
        )
    }
}

export default Task