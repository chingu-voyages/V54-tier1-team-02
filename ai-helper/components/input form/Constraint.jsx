import React from "react";

function ConstraintInput() {

    return (
        <label className="input">
            <h3>Constraint:</h3> 
            <p>Example: "Avoid generating lots of text only a summary of the websites are needed. Also,
responses should be tailored to readers with a high school level of education.
Avoid overly technical responses."</p>
            <textarea 
                name="Constraint" 
                placeholder="Tell me what to avoid."           
            />
        </label>
    );
}

export default ConstraintInput;