import React, {useState} from "react";



function InputContainer() {
    const [formValues, setFormValues] = useState({
        persona: '',
        context: '',
        task: '',
        output: '',
        constraint: '', 
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        // Prevent the browser from reloading the page
        e.preventDefault();
        console.log('Submitted text: ', formValues);
    };

    const handleReset = () => {
        setFormValues('');
    };

    return (
        <div className="input-form">
            <h2>Input Form</h2>
            <form method="post" onSubmit={handleSubmit}>
                <div className="input">
                    <label htmlFor="persona">Persona:</label>
                    <p>Example: "You are a Product Owner, Scrum Master, UI/UX Designer, Web Developer, or
                        Data Scientist who is at the beginning of your career and is looking to apply
                        what you've learned to build practical experience to help you get noticed in
                        the job market."
                    </p>
                    <textarea 
                        id="persona"
                        name="persona"
                        value={formValues.persona}
                        onChange={handleChange} 
                        placeholder="Tell me who you want me to pretend to be." 
                    />
                    <button onClick={handleReset} type="reset">Reset Section</button>
                </div>
                <div className="input">
                    <label htmlFor="context">Context:</label> 
                    <p>Example: "The information provided should assume that I am a Frontend Web Developer
                        who understands the technical aspects of what is needed to build websites.
                        But, I have not worked in team projects with individuals in different roles."
                    </p>
                    <textarea 
                        id="context"
                        name="context"
                        value={formValues.context}
                        onChange={handleChange} 
                        placeholder="Tell me background information."             
                    />
                    <button onClick={handleReset} type="reset">Reset Section</button>
                </div>
                <div className="input">
                    <label htmlFor="task">Task:</label>
                    <p>Example: "Provide a list of websites for organizations that provide programs and
                        services which will help me transform what I've learned into experience that
                        other job applicants will not have."
                    </p> 
                    <textarea 
                        id="task"
                        name="task"
                        value={formValues.task}
                        onChange={handleChange} 
                        placeholder="Tell me what information you want me give me."          
                    />
                    <button onClick={handleReset} type="reset">Reset Section</button>
                </div>
                <div className="input">
                    <label htmlFor="output">Output:</label> 
                    <p>Example: "The tone should be informal and the list of websites should include a link
                        to the site, it's name, and cost information."
                    </p>
                    <textarea 
                        id="output"
                        name="output"
                        value={formValues.output}
                        onChange={handleChange}  
                        placeholder="Tell me how you want me to respond to your request."   
                    />
                    <button onClick={handleReset} type="reset">Reset Section</button>
                </div>
                    
                <div className="input">
                    <label htmlFor="constraint">Constraint:</label> 
                    <p>Example: "Avoid generating lots of text only a summary of the websites are needed. Also,
                        responses should be tailored to readers with a high school level of education.
                        Avoid overly technical responses."
                    </p>
                    <textarea 
                        id="constraint"
                        name="constraint"
                        value={formValues.constraint}
                        onChange={handleChange} 
                        placeholder="Tell me what to avoid."           
                    />
                    <button onClick={handleReset} type="reset">Reset Section</button>
                </div>
                <div>
                    <button onClick={handleReset} type="reset">Reset Form</button>
                    <button type="submit">Submit Prompt</button>
                </div>
            </form>
        </div> 
    );
}

export default InputContainer;