# GeminiBot - Your Conversational AI Companion

[![Vercel Deployment](https://vercel.com/api/www/button?url=https%3A%2F%2Fgeminibotbyumar.vercel.app%2F)](https://geminibotbyumar.vercel.app/)

**GeminiBot** is a web application that allows you to have conversations with an AI powered by the Google Gemini API. Ask it questions, seek information, or just have a chat!

This project was developed by [Muhammad Umar](https://mu-portfolio.web.app/) and utilizes the cutting-edge capabilities of the Gemini API to provide intelligent and helpful responses.

## Features

* **Interactive Chat Interface:** A clean and intuitive user interface for seamless conversations.
* **Powered by Google Gemini API:** Leverages the advanced natural language processing of the Gemini model.
* **Responsive Design:** Works smoothly on various devices, from desktops to mobile phones.
* **New Chat Functionality:** Easily start a fresh conversation with a single click.
* **Loading State:** Provides visual feedback during API calls, indicating that the AI is processing your request.
* **Developed with ❤️ by Muhammad Umar:** Showcases the developer's passion for AI and web development.

## Technologies Used

* **React:** A JavaScript library for building user interfaces.
* **Tailwind CSS:** A utility-first CSS framework for rapid styling.
* **Daisy UI:** A component library for Tailwind CSS, providing pre-built UI elements.
* **Vercel:** A platform for deploying and hosting web applications.
* **Google Gemini API:** The powerful AI model driving the conversational capabilities.

## How to Use

1.  Visit the live application at: [https://geminibotbyumar.vercel.app/](https://geminibotbyumar.vercel.app/)
2.  On the homepage, you'll see some example questions to get you started. Click on a card to automatically input the question.
3.  Alternatively, type your own question or message in the input box at the bottom of the screen.
4.  Click the send icon (paper airplane) to submit your query to the AI.
5.  The AI's response will appear in the chat window.
6.  To start a new conversation, click the "New Chat" button in the header.

## Development

If you are interested in contributing to or understanding the development of this project, the source code is likely private for now as it's a personal project. However, here's a general overview of the potential project structure:
geminibot-app/
├── public/
│   └── index.html
│   └── ... (other static assets)
├── src/
│   ├── App.js
│   ├── components/
│   │   ├── Card.js
│   │   ├── Message.js
│   │   └── ... (other UI components)
│   ├── hooks/
│   │   └── useGeminiApi.js (likely handles API calls)
│   ├── index.js
│   ├── index.css (or using Tailwind's JIT)
│   └── ... (other source files)
├── tailwind.config.js
├── postcss.config.js
├── package.json
├── yarn.lock (or package-lock.json)
└── README.md

**Key Development Aspects (Conceptual):**

* **React Components:** The UI is built using reusable React components for the chat interface, question cards, and input area.
* **State Management:** React's `useState` hook is likely used to manage the user's input, chat messages, and loading states.
* **API Integration:** A custom hook or a dedicated service would handle communication with the Google Gemini API, sending user queries and receiving responses.
* **Styling:** Tailwind CSS and Daisy UI classes are applied directly within the JSX for styling the components.
* **Deployment:** The application is deployed on Vercel, which provides easy deployment for React applications.

## Author

* **Muhammad Umar**
    * [Portfolio](https://mu-portfolio.web.app/)
    * [GitHub](https://github.com/Umar-Raza)
    * [Facebook](https://facebook.com/muhammadumar63)

## Acknowledgements

* **Google AI Team:** For developing the powerful Gemini API.
* **Tailwind CSS Team:** For creating an amazing utility-first CSS framework.
* **Daisy UI Team:** For building a helpful component library on top of Tailwind CSS.
* **Vercel:** For providing a seamless deployment platform.

## Feedback and Suggestions

If you have any feedback, suggestions, or encounter any issues, feel free to reach out to [Muhammad Umar](mailto:umardev92@gmail.com).

---

Thank you for trying GeminiBot! We hope you enjoy chatting with the AI.
