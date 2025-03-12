import React from "react";

function ContextInput() {

    return (
        <div className="input">
            <h3>Context:</h3> 
            <p>Example: "The information provided should assume that I am a Frontend Web Developer
who understands the technical aspects of what is needed to build websites.
But, I have not worked in team projects with individuals in different roles."</p>
            <textarea 
                name="Context" 
                placeholder="Tell me background information."             
            />
        </div>
    );
}

export default ContextInput;