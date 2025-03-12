import React from "react";

function PersonaInput() {

    return (
        <div className="input">
            <h3>Persona:</h3>
            <p>Example: "You are a Product Owner, Scrum Master, UI/UX Designer, Web Developer, or
Data Scientist who is at the beginning of your career and is looking to apply
what you've learned to build practical experience to help you get noticed in
the job market."</p>
            <textarea 
                name="Persona" 
                placeholder="Tell me who you want me to pretend to be."
                         
            />
        </div>
    );
}

export default PersonaInput;