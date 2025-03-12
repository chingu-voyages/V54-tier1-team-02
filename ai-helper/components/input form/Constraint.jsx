import React from "react";

function ConstraintInput() {

    return (
        <label className="input">
            Constraint: 
            <textarea 
                name="Constraint" 
                placeholder="'Avoid generating lots of text only a summary of the websites are needed. Also,
responses should be tailored to readers with a high school level of education.
Avoid overly technical responses.'"
                rows={5}
                cols={80}              
            />
        </label>
    );
}

export default ConstraintInput;