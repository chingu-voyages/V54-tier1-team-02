import React, { useState } from "react";
import { generateContent } from "./Model";
import ReactMarkdown from "react-markdown";

function InputContainer() {
  //Variable for the user input form with different names for each section
  const [userInput, setUserInput] = useState({
    persona: "",
    context: "",
    task: "",
    output: "",
    constraint: "",
  });
  
  //Variable to handle the response from Gemini API
  const [response, setResponse] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  //Variable to handle the user input 
  const handleUserInput = (e) => {
    const { name, value } = e.target;
    setUserInput((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  //Variable to clear a section
  const handleClear = (field) => {
    setUserInput((prevData) => ({
      ...prevData,
      [field]: "",
    }));
  };

  //Variable to clear the whole form
  const handleResetForm = () => {
    setUserInput({
      persona: "",
      context: "",
      task: "",
      output: "",
      constraint: "",
    });
    setResponse([]);
    setIsLoading(false);
  };

  //Variable to handle submission to Gemini API
  const handleSubmit = async (e) => {
    e.preventDefault();

    //Checks if a field is empty and prompts the user to fill in the field
    if (
      !userInput.persona.trim() || 
      !userInput.context.trim() || 
      !userInput.task.trim() || 
      !userInput.output.trim() || 
      !userInput.constraint.trim()
    ) {
      setResponse([{ type: "system", message: "Please enter a prompt in each field.." }]);
      return;
    }

    //Textblock created to contain all the user inputs being sent to the API
    const textBlock = `
      Persona: ${userInput.persona}
      Context: ${userInput.context}
      Task: ${userInput.task}
      Output: ${userInput.output}
      Constraint: ${userInput.constraint}
    `;

    setIsLoading(true);
    try {
      //Send formatted input to Gemini API
      const res = await generateContent(textBlock);
      setResponse((prevResponse) => [
        ...prevResponse,
        { type: "bot", message: res() },
      ]);

/*       // Resets the form
      setUserInput({
        persona: "",
        context: "",
        task: "",
        output: "",
        constraint: "",
      }); */

    } catch (err) {
      console.error("Error generating response:", err);
      setResponse((prevResponse) => [
        ...prevResponse,
        { type: "system", message: "Failed to generate response" },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <section>
      <div className="input-form">
        <h2 id="input-form-title">Input Form</h2>
        <form method="post" onSubmit={handleSubmit}>
          <div className="input">
            <div className="form-item-heading-area">
              <label htmlFor="persona">Persona</label>
              <p className="note">
                Who you want the GPT to be based on your audience
              </p>
            </div>
            <div id="persona">
              <textarea
                id="persona"
                name="persona"
                value={userInput.persona}
                onChange={handleUserInput}
                onKeyDown={handleKeyPress}
                placeholder="Tell me who you want me to pretend to be."
              />
              <button onClick={() => handleClear("persona")} type="button" className="sec-clear-btn" id="clear-persona" title="reset persona">
                Reset
              </button>
            </div>
          </div>
          <div className="input">
            <div className="form-item-heading-area">
              <label htmlFor="context">Context</label>
              <p className="note">
                Background information to get more control over the output
              </p>
            </div>
            <div id="context">
              <textarea 
                id="context"
                name="context"
                value={userInput.context}
                onChange={handleUserInput}
                onKeyDown={handleKeyPress}
                placeholder="Tell me background information."
              />
              <button onClick={() => handleClear("context")} type="button" className="sec-clear-btn" id="clear-context" title="reset context">
                Reset
              </button>
            </div>
          </div>
          <div className="input">
            <div className="form-item-heading-area">
              <label htmlFor="task">Task</label>
              <p className="note">
                Specific actions you need
              </p>
            </div>
            <div id="task">
              <textarea
                id="task"
                name="task"
                value={userInput.task}
                onChange={handleUserInput}
                onKeyDown={handleKeyPress}
                placeholder="Tell me what information you want me give me."
              />
              <button onClick={() => handleClear("task")} type="button" className="sec-clear-btn" id="clear-task" title="reset task">
                Reset
              </button>
            </div>
          </div>
          <div className="input">
            <div className="form-item-heading-area">
              <label htmlFor="output">Output</label>
              <p className="note">
                Dictate the style of responses
              </p>
            </div>
            <div id="output">
              <textarea
                id="output"
                name="output"
                value={userInput.output}
                onChange={handleUserInput}
                onKeyDown={handleKeyPress}
                placeholder="Tell me how you want me to respond to your request."
              />
              <button onClick={() => handleClear("output")} type="button" className="sec-clear-btn" id="clear-output" title="reset output">
                Reset
              </button>
            </div>
          </div>

          <div className="input">
            <div className="form-item-heading-area">
              <label htmlFor="constraint">Constraint</label>
              <p className="note">
                Avoid items such as topics and tones
              </p>
            </div>
            <div id="constraint">
              <textarea
                id="constraint"
                name="constraint"
                value={userInput.constraint}
                onChange={handleUserInput}
                onKeyDown={handleKeyPress}
                placeholder="Tell me what to avoid."
              />
              <button onClick={() => handleClear("constraint")} type="button" className="sec-clear-btn" id="clear-constraint" title="reset constraint">
                Reset
              </button>
            </div>
            <div id="form-level-buttons">
              <button onClick={handleSubmit} className="send-btn" title="send request">
                Generate prompt
              </button>
              <button onClick={handleResetForm} className="clear-btn" id="clear-all" title="reset form">
                Reset
              </button>             
            </div>
          </div>
          
        </form>
      </div>

      <div className="result">
        <div className="result-heading-area">
          <h2>Your Result</h2>
          <p className="note"><span className="emphasis">Note:</span> This result is read-only</p>
        </div>
        {response.length === 0 ? (
          <div className="result-box">
          </div>
        ) : (
          <div className="result-box">
            {response.map((msg, index) => (
              <div key={index} className={`message ${msg.type}`}>
                <ReactMarkdown>{msg.message}</ReactMarkdown>
              </div>
            ))}
            {isLoading && (
              <div className="result-box">
                <p className="loading-text">Generating response...</p>
              </div>
            )}
          </div>
        )}

        
      </div>
    </section>
  );
}

export default InputContainer;
