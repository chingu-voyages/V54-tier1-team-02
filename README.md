# 🧪✨ PromptAlchemy

A web application that helps users learn to build effective AI prompts.

## 🧭 Overview

This app was created through a [Chingu](https://www.chingu.io/) tier 1 voyage. As a team, we built a web application, PromptAlchemy, which lets its users become more effective at building AI prompts.

<p align="center">
  <img src="images/Chingu v54 Project.PNG" alt="Blank fields" width="45%" />
  <img src="images/Chingu v54 Project in use.PNG" alt="Fields filled and response" width="45%" />
</p>

## 🚀 Features

This application, follows a structured methodology to help the user build good prompts, and along the way learn to improve on them.

To test them, the app will use Google Gemini's API to run the prompt and display the result from Gemini.

The structured methodology to follow for creating a prompt is called a [Pentagram](https://ai.plainenglish.io/prompt-engineering-with-pentagram-framework-persona-context-task-output-and-constraint-3717b0733578) and it consists of the following parts:

- Persona
- Context
- Task
- Output
- Constraint

Our app prompts you to include each component before generating a result.

## 🛠️ Technologies

Frontend: React + Vite – For building a fast, interactive, and modern user interface.

API: Google Gemini – To generate intelligent responses based on user-generated prompts.

Deployment: Netlify – For continuous deployment and hosting of our frontend application.

UI Design: Figma – For designing and prototyping a cohesive user experience.

## ⚙️ Running the project

### 🌐 Live Version:

[PromptAlchemy](https://promptalchemy-gemini.netlify.app/)

### 📦 From the Repo:

1. Clone this project locally
2. [Get a Gemini API Key](https://ai.google.dev/gemini-api/docs/api-key)
3. Create a .env file in your root folder
4. In the .env file, add export VITE_GEMINI_API_KEY = Your-API-Key
5. Run `npm install` in your bash / command line
6. Run `npm run dev` in your bash / command line

## 📚 Dependencies

    "@google/generative-ai": "^0.24.0",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "react-icons": "^5.5.0",
    "react-markdown": "^10.1.0"

### 🧰 Dev Dependencies

    "@eslint/js": "^9.21.0",
    "@types/react": "^19.0.10",
    "@types/react-dom": "^19.0.4",
    "@vitejs/plugin-react": "^4.3.4",
    "eslint": "^9.21.0",
    "eslint-plugin-react-hooks": "^5.1.0",
    "eslint-plugin-react-refresh": "^0.4.19",
    "globals": "^15.15.0",
    "vite": "^6.2.0"

## 🙏 Acknowledgements

We would like to extend our heartfelt thanks to Chingu for making this project possible. Their support, community, and structured project-based learning environment provided the perfect foundation for us to collaborate, grow, and build something we're truly proud of.

If you’re not yet a part of [Chingu](https://chingu.io/), we highly recommend checking it out. Chingu is a global learning community that helps aspiring developers, scrum masters, and product ownsers turn course and tutorial knowledge into real-world project experience. Through team voyages like this one, members gain the practical, hands-on skills that make them stand out in today’s job market.

## 🤝 Our Team

- Stephanie Leon, Developer: [GitHub](https://github.com/stefleon33) / [LinkedIn](https://www.linkedin.com/in/stephanie-leon33/)
- Alison Holland, Developer [GitHub](https://github.com/alison-ah) / [LinkedIn](https://linkedin.com/in/andersonholland)
- Brandi Nichols, Developer: [Github](https://github.com/branic18) / [LinkedIn](https://www.linkedin.com/in/brandi-nichols-dev)
- Chyna Stroud, CSM: [GitHub](https://github.com/Chyna397) / [LinkedIn](https://www.linkedin.com/in/chyna-stroud-csm-3448a9213)
- JD Horton, Product Owner: [Github](https://github.com/JD818)
