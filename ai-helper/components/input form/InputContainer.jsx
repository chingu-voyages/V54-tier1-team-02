import React from "react";
import PersonaInput from "./Persona";
import ContextInput from "./Context";
import ConstraintInput from "./Constraint";
import TaskInput from "./Task";
import OutputInput from "./Output";


function InputContainer() {
    function handleSubmit(e) {
        // Prevent the browser from reloading the page
        e.preventDefault();

        // Read the form data
        const form = e.target;
        const formData = new FormData(form);

        // REPLACE API NAME! Also, this may not be how Gemini needs the form data sent.
        fetch('/some-api', { method: form.method, body: formData});
    }

    return (
        <form method="post" onSubmit={handleSubmit} className="input-form">
                <ul><PersonaInput/></ul>
                <ul><ContextInput/></ul>
                <ul><TaskInput/></ul>
                <ul><OutputInput/></ul>
                <ul><ConstraintInput/></ul>
                <button type="submit">Submit form</button>
        </form>
    );
}

export default InputContainer;