import React from "react";

function ContextInput() {

    return (
        <div className="input">
            <label for="context">Context:</label> 
            <p>Example: "The information provided should assume that I am a Frontend Web Developer
who understands the technical aspects of what is needed to build websites.
But, I have not worked in team projects with individuals in different roles."</p>
            <textarea 
                type="text"
                id="context"
                name="context" 
                placeholder="Tell me background information."             
            />
        </div>
    );
}

export default ContextInput;