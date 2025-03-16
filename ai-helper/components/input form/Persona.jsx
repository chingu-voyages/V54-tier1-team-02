import React, {useState} from "react";

function PersonaInput() {
    const [ text, setText] = useState('');

    const handleReset = () => {
        setText('');
    };

    return (
        <div className="input">
            <label htmlFor="persona">Persona:</label>
            <p>Example: "You are a Product Owner, Scrum Master, UI/UX Designer, Web Developer, or
Data Scientist who is at the beginning of your career and is looking to apply
what you've learned to build practical experience to help you get noticed in
the job market."</p>
            <textarea 
                value={text}
                onChange={(e) => setText(e.target.value)}
                id="persona"
                name="persona" 
                placeholder="Tell me who you want me to pretend to be." 
            />
            <button onClick={handleReset} type="reset">Reset Section</button>
        </div>
    );
}

export default PersonaInput;