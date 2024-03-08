# Chatbot Application Overview



# Frontend setup

Navigate to your project directory in the terminal.
Start the React application by running `npm start`

# Backend setup

Open your python readable terminal and Navigate to your project directory and navigate to your backend by typing `cd backend`.
All libraries was pre-installled for Flask server, you just need to activate virtual env by typing `.\venv\Scripts\activate`.
Next, to run your server, type `flask run --port=3000` into your terminal. Your server should start running on port 3000.

## Main Chatbot logic

Message Handling: When a user submits a message, it checks for specific keywords like "info about my music" or "analyze my account" to determine the conversation type.

Communication with Flask Backend: Constructs a POST request to the Flask backend, passing the conversation type and the last message from the chat history. It waits for the server's response and updates the state with the received data. Flask Backend Constructs a GET request to API then returns the JSON file to main app.js.


Rendering: Renders the chat history, input field for new messages, and a button to send messages. Additionally, it renders a UI block component if there is data received from the server.

## Approach:

The development of the Chatbot application followed a systematic approach, involving the following steps:

Requirement Analysis: Understanding the application's requirements, functionalities, and features.
Technology Selection: Choosing React.js for the frontend and Flask for the backend.
Component Design: Designing modular components using React for better maintainability and scalability.
Integration: Integrating the frontend with the backend using asynchronous fetch requests.
Testing: Conducting thorough testing, both manual and automated, to ensure functionality and responsiveness.
Challenges Faced:
Several challenges were encountered during development:

Handling Asynchronous Operations: Managing asynchronous tasks, like fetching data, required careful synchronization.
Cross-Origin Resource Sharing (CORS): Dealing with CORS issues when making requests between different domains.
State Management: Ensuring consistent state across components for seamless user interaction.
Error Handling: Implementing robust error handling to maintain a smooth user experience.
Overcoming Challenges:
To overcome these challenges, various strategies were employed:

Thorough Planning: Planning and design helped anticipate challenges and devise appropriate solutions.
Continuous Testing: Regular testing throughout development helped identify and address issues early.
Community Resources: Leveraging online forums and documentation provided valuable insights and solutions.
