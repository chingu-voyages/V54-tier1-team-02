import React from "react";

function ConstraintInput() {

    return (
        <div className="input">
            <label for="constraint">Constraint:</label> 
            <p>Example: "Avoid generating lots of text only a summary of the websites are needed. Also,
responses should be tailored to readers with a high school level of education.
Avoid overly technical responses."</p>
            <textarea 
                type="text"
                id="constraint"
                name="constraint" 
                placeholder="Tell me what to avoid."           
            />
        </div>
    );
}

export default ConstraintInput;