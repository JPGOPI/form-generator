import React from "react";
import CheckBox from "./checkbox";
import Field from "./field";

const Element = ({type}) => {
    switch (type) {
        case 'input':
        return <input type="text" placeholder="Text Input" />;
        case 'checkbox':
            return (
                <Field>
                    <CheckBox/>
                </Field>
            )
            break;
        default:
            return null;
    }
}

export default Element;