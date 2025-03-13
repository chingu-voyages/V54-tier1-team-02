import React from "react";

function OutputInput() {

    return (
        <div className="input">
            <h3>Output:</h3> 
            <p>Example: "The tone should be informal and the list of websites should include a link
to the site, it's name, and cost information."</p>
            <textarea 
                name="Output" 
                placeholder="Tell me how you want me to respond to your request."           
            />
        </div>
    );
}

export default OutputInput;