import React, {useState} from "react";

function ConstraintInput() {
    const [ text, setText] = useState('');

    const handleReset = () => {
        setText('');
    };

    return (
        <div className="input">
            <label htmlFor="constraint">Constraint:</label> 
            <p>Example: "Avoid generating lots of text only a summary of the websites are needed. Also,
responses should be tailored to readers with a high school level of education.
Avoid overly technical responses."</p>
            <textarea 
                value={text}
                onChange={(e) => setText(e.target.value)}
                id="constraint"
                name="constraint" 
                placeholder="Tell me what to avoid."           
            />
            <button onClick={handleReset} type="reset">Reset Section</button>
        </div>
    );
}

export default ConstraintInput;