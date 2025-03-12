import React from "react";

function PersonaInput() {

    return (
        <label className="input">
            Persona: 
            <textarea 
                name="Persona" 
                defaultValue="'You are a Product Owner, Scrum Master, UI/UX Designer, Web Developer, or
Data Scientist who is at the beginning of your career and is looking to apply
what you've learned to build practical experience to help you get noticed in
the job market.'"
                rows={5}
                cols={80}              
            />
        </label>
    );
}

export default PersonaInput;