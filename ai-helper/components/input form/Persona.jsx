import React from "react";

function PersonaInput() {

    return (
        <div className="input">
            <label for="persona">Persona:</label>
            <p>Example: "You are a Product Owner, Scrum Master, UI/UX Designer, Web Developer, or
Data Scientist who is at the beginning of your career and is looking to apply
what you've learned to build practical experience to help you get noticed in
the job market."</p>
            <textarea 
                type="text"
                id="persona"
                name="persona" 
                placeholder="Tell me who you want me to pretend to be." 
            />
        </div>
    );
}

export default PersonaInput;