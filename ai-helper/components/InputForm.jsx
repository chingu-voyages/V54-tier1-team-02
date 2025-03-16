import React, {useState} from "react";



function InputContainer() {
    const handleSubmit = (e) => {
        // Prevent the browser from reloading the page
        e.preventDefault();
    };
    return (
            <form method="post" onSubmit={handleSubmit}>
                    <button type="submit">Submit Prompt</button>
            </form>
    );
}

export default InputContainer;