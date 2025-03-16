import React, {useState} from "react";

function ContextInput() {
    const [ text, setText] = useState('');

    const handleReset = () => {
        setText('');
    };

    return (
        <div className="input">
            <label htmlFor="context">Context:</label> 
            <p>Example: "The information provided should assume that I am a Frontend Web Developer
who understands the technical aspects of what is needed to build websites.
But, I have not worked in team projects with individuals in different roles."</p>
            <textarea 
                value={text}
                onChange={(e) => setText(e.target.value)}
                id="context"
                name="context" 
                placeholder="Tell me background information."             
            />
            <button onClick={handleReset} type="reset">Reset Section</button>
        </div>
    );
}

export default ContextInput;