import React, {useState} from "react";

function OutputInput() {
    const [ text, setText] = useState('');

    const handleReset = () => {
        setText('');
    };

    return (
        <div className="input">
            <label htmlFor="output">Output:</label> 
            <p>Example: "The tone should be informal and the list of websites should include a link
to the site, it's name, and cost information."</p>
            <textarea 
                value={text}
                onChange={(e) => setText(e.target.value)}
                id="output"
                name="output" 
                placeholder="Tell me how you want me to respond to your request."   
            />
            <button onClick={handleReset} type="reset">Reset Section</button>
        </div>
    );
}

export default OutputInput;