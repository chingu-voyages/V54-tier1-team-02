import React from "react";

function OutputInput() {

    return (
        <label className="input">
            Output: 
            <textarea 
                name="Output" 
                placeholder="'Avoid generating lots of text only a summary of the websites are needed. Also,
responses should be tailored to readers with a high school level of education.
Avoid overly technical responses.'"
                rows={5}
                cols={80}              
            />
        </label>
    );
}

export default OutputInput;