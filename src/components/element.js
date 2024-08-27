import React from "react";
import CheckBox from "./checkbox";

const Element = ({type}) => {
    switch (type) {
        case 'input':
        return <input type="text" placeholder="Text Input" />;
        case 'checkbox':
            return (
                <CheckBox></CheckBox>
            )
            break;
        default:
            return null;
    }
}

export default Element;