import React, { useState } from "react";
import { IoIosSend } from "react-icons/io";
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

  //   const handleSubmit = (e) => {
  //     // Prevent the browser from reloading the page
  //     e.preventDefault();
  //     console.log("Submitted text: ", formValues);
  //   };

  const handleReset = () => {
    setFormValues("");
  };

  const [userInput, setUserInput] = useState("");
  const [response, setResponse] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleUserInput = (e) => {
    setUserInput(e.target.value);
  };

  const handleClear = () => {
    setUserInput("");
    setResponse([]);
    setIsLoading(false);
  };

  const handleSubmit = async () => {
    if (!userInput.trim()) {
      setResponse([{ type: "system", message: "Please enter a prompt.." }]);
      return;
    }

    setIsLoading(true);
    try {
      const res = await generateContent(userInput);
      setResponse((prevResponse) => [
        ...prevResponse,
        { type: "user", message: userInput },
        { type: "bot", message: res() },
      ]);
      setUserInput("");
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
    <main>
      <div className="input-form">
        <h2>Input Form</h2>
        <form method="post" onSubmit={handleSubmit}>
          <div className="input">
            <label htmlFor="persona">Persona:</label>
            <p>
              Example: "You are a Product Owner, Scrum Master, UI/UX Designer, Web
              Developer, or Data Scientist who is at the beginning of your career
              and is looking to apply what you've learned to build practical
              experience to help you get noticed in the job market."
            </p>
            <textarea
              id="persona"
              name="persona"
              onChange={handleChange}
              value={userInput.persona}
              placeholder="Tell me who you want me to pretend to be."
            />
            <button onClick={handleReset} type="reset">
              Reset Section
            </button>
          </div>
          <div className="input">
            <label htmlFor="context">Context:</label>
            <p>
              Example: "The information provided should assume that I am a
              Frontend Web Developer who understands the technical aspects of what
              is needed to build websites. But, I have not worked in team projects
              with individuals in different roles."
            </p>
            <textarea
              id="context"
              name="context"
              onChange={handleChange}
              value={userInput.context}
              placeholder="Tell me background information."
            />
            <button onClick={handleReset} type="reset">
              Reset Section
            </button>
          </div>
          <div className="input">
            <label htmlFor="task">Task:</label>
            <p>
              Example: "Provide a list of websites for organizations that provide
              programs and services which will help me transform what I've learned
              into experience that other job applicants will not have."
            </p>
            <textarea
              id="task"
              name="task"
              onChange={handleChange}
              value={userInput.task}
              placeholder="Tell me what information you want me give me."
            />
            <button onClick={handleReset} type="reset">
              Reset Section
            </button>
          </div>
          <div className="input">
            <label htmlFor="output">Output:</label>
            <p>
              Example: "The tone should be informal and the list of websites
              should include a link to the site, it's name, and cost information."
            </p>
            <textarea
              id="output"
              name="output"
              onChange={handleChange}
              value={userInput.output}
              placeholder="Tell me how you want me to respond to your request."
            />
            <button onClick={handleReset} type="reset">
              Reset Section
            </button>
          </div>

          <div className="input">
            <label htmlFor="constraint">Constraint:</label>
            <p>
              Example: "Avoid generating lots of text only a summary of the
              websites are needed. Also, responses should be tailored to readers
              with a high school level of education. Avoid overly technical
              responses."
            </p>
            <textarea
              id="constraint"
              name="constraint"
              onChange={handleChange}
              value={userInput.constraint}
              placeholder="Tell me what to avoid."
            />
            <button onClick={handleReset} type="reset">
              Reset Section
            </button>
          </div>
          <div>
            <button onClick={handleReset} type="reset">
              Reset Form
            </button>
            <button type="submit">Submit Prompt</button>
          </div>
        </form>
        <div className="input-container">
          <button onClick={handleClear} className="clear-btn">
            Clear
          </button>

          <input
            type="text"
            value={userInput}
            onChange={handleUserInput}
            onKeyDown={handleKeyPress}
            placeholder="Type your message here..."
            className="chat-input"
          />

          <button onClick={handleSubmit} className="send-btn">
            <IoIosSend />
          </button>
        </div>
        
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
    </main>
  );
}

export default InputContainer;
