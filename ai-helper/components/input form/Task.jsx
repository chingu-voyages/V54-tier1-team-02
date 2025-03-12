import React from "react";

function TaskInput() {

    return (
        <label className="input">
            <h3>Task:</h3>
            <p>Example: "Provide a list of websites for organizations that provide programs and
services which will help me transform what I've learned into experience that
other job applicants will not have."</p> 
            <textarea 
                name="Task" 
                placeholder="Tell me what information you want me give me."              
            />
        </label>
    );
}

export default TaskInput;