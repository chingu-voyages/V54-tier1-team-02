import React from "react";

function TaskInput() {

    return (
        <label className="input">
            Task: 
            <textarea 
                name="Task" 
                placeholder="'Provide a list of websites for organizations that provide programs and
services which will help me transform what I've learned into experience that
other job applicants will not have.'"
                rows={5}
                cols={80}              
            />
        </label>
    );
}

export default TaskInput;