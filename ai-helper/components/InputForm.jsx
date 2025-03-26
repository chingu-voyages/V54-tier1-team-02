import React, { useState } from "react";
import { generateContent } from "./Model";
import ReactMarkdown from "react-markdown";
import { AiFillExclamationCircle } from "react-icons/ai";

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

  const [errors, setErrors] = useState({});

  //Variable to handle the user input
  const handleUserInput = (e) => {
    const { name, value } = e.target;

    setUserInput((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // This clears the error message when the user types
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: value.trim() ? "" : "Enter text in field",
    }));

    console.log("Updated userInput:", userInput);
    console.log("Updated errors:", errors);
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
    setErrors({});

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

    const newErrors = Object.keys(userInput).reduce((acc, key) => {
      if (!userInput[key].trim()) {
        acc[key] = (
          <span className="error-message">
            <AiFillExclamationCircle />
            Enter text in field
          </span>
        );
      }
      return acc;
    }, {});

    setErrors({ ...newErrors });

    // If there are any errors, prevent submission
    if (Object.values(newErrors).some((error) => error !== "")) {
      return;
    }

    //Checks if a field is empty and prompts the user to fill in the field
    if (
      !userInput.persona.trim() ||
      !userInput.context.trim() ||
      !userInput.task.trim() ||
      !userInput.output.trim() ||
      !userInput.constraint.trim()
    ) {
      setResponse([
        { type: "system", message: "Please enter a prompt in each field." },
      ]);
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
      setResponse([]); // Clear previous results
      const res = await generateContent(textBlock); //Send formatted input to Gemini API
      setResponse([
        // { type: "user", message: textBlock }, //Populates the user's input above the response.
        { type: "bot", message: res() },
      ]);
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
      handleSubmit(e);
    }
  };

  console.log("Current errors state:", errors);

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
                className={errors.persona ? "input-error" : ""}
              />
              <button
                onClick={() => handleClear("persona")}
                type="button"
                className="sec-clear-btn"
                id="clear-persona"
                title="reset persona"
              >
                Reset
              </button>
            </div>
            {errors.persona && (
              <p className="error-message">{errors.persona}</p>
            )}
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
                className={errors.context ? "input-error" : ""}
              />
              <button
                onClick={() => handleClear("context")}
                type="button"
                className="sec-clear-btn"
                id="clear-context"
                title="reset context"
              >
                Reset
              </button>
            </div>
            {errors.context && (
              <p className="error-message">{errors.context}</p>
            )}
          </div>
          <div className="input">
            <div className="form-item-heading-area">
              <label htmlFor="task">Task</label>
              <p className="note">Specific actions you need</p>
            </div>
            <div id="task">
              <textarea
                id="task"
                name="task"
                value={userInput.task}
                onChange={handleUserInput}
                onKeyDown={handleKeyPress}
                placeholder="Tell me what information you want me give me."
                className={errors.task ? "input-error" : ""}
              />
              <button
                onClick={() => handleClear("task")}
                type="button"
                className="sec-clear-btn"
                id="clear-task"
                title="reset task"
              >
                Reset
              </button>
            </div>
            {errors.task && <p className="error-message">{errors.task}</p>}
          </div>
          <div className="input">
            <div className="form-item-heading-area">
              <label htmlFor="output">Output</label>
              <p className="note">Dictate the style of responses</p>
            </div>
            <div id="output">
              <textarea
                id="output"
                name="output"
                value={userInput.output}
                onChange={handleUserInput}
                onKeyDown={handleKeyPress}
                placeholder="Tell me how you want me to respond to your request."
                className={errors.output ? "input-error" : ""}
              />
              <button
                onClick={() => handleClear("output")}
                type="button"
                className="sec-clear-btn"
                id="clear-output"
                title="reset output"
              >
                Reset
              </button>
            </div>
            {errors.output && <p className="error-message">{errors.output}</p>}
          </div>

          <div className="input">
            <div className="form-item-heading-area">
              <label htmlFor="constraint">Constraint</label>
              <p className="note">Avoid items such as topics and tones</p>
            </div>

            <div id="constraint">
              <textarea
                id="constraint"
                name="constraint"
                value={userInput.constraint}
                onChange={handleUserInput}
                onKeyDown={handleKeyPress}
                placeholder="Tell me what to avoid."
                className={errors.constraint ? "input-error" : ""}
              />
              <button
                onClick={() => handleClear("constraint")}
                type="button"
                className="sec-clear-btn"
                id="clear-constraint"
                title="reset constraint"
              >
                Reset
              </button>
            </div>
            {errors.constraint && (
              <p className="error-message">{errors.constraint}</p>
            )}
          </div>
          <div id="form-level-buttons">
            <button
              onClick={handleSubmit}
              className="send-btn"
              title="send request"
            >
              Generate prompt
            </button>
          </div>
        </form>
        <button
          onClick={handleResetForm}
          className="clear-btn"
          id="clear-all"
          title="reset form"
        >
          Reset
        </button>
      </div>

      <div className="result">
        <div className="result-heading-area">
          <h2>Your Result</h2>
          <p className="note">
            <span className="emphasis">Note:</span> This result is read-only
          </p>
        </div>

        <div className="result-box">
          {isLoading ? (
            <div className="message loading">
              <p className="loading-text">Generating response...</p>
            </div>
          ) : response.length === 0 ? (
            <p className="no-response-message">No response yet.</p>
          ) : (
            response.map((msg, index) => (
              <div key={index} className={`message ${msg.type}`}>
                <ReactMarkdown
                  components={{
                    // Map `h2` (`# heading`) to use `h3`s.
                    h2: "h3",
                  }}
                >
                  {msg.message}
                </ReactMarkdown>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}

export default InputContainer;
