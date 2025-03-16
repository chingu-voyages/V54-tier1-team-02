import React, {useState} from "react";

function TaskInput() {
    const [ text, setText] = useState('');

    const handleReset = () => {
        setText('');
    };

    return (
        <div className="input">
            <label htmlFor="task">Task:</label>
            <p>Example: "Provide a list of websites for organizations that provide programs and
services which will help me transform what I've learned into experience that
other job applicants will not have."</p> 
            <textarea 
                value={text}
                onChange={(e) => setText(e.target.value)}
                id="task"
                name="task" 
                placeholder="Tell me what information you want me give me."          
            />
            <button onClick={handleReset} type="reset">Reset Section</button>
        </div>
    );
}

export default TaskInput;