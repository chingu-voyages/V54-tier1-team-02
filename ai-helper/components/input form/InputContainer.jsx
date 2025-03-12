import React from "react";
import PersonaInput from "./Persona";
import ContextInput from "./Context";
import ConstraintInput from "./Constraint";
import TaskInput from "./Task";
import OutputInput from "./Output";

function InputContainer() {

    return (
        <form>
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