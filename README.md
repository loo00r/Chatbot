##Chatbot Application Overview
Approach:
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
Collaboration: Effective communication and collaboration between frontend and backend developers facilitated problem-solving.
Continuous Testing: Regular testing throughout development helped identify and address issues early.
Community Resources: Leveraging online forums and documentation provided valuable insights and solutions.
Last bits of context
The most important file is app.py. Go there to see the prompt for the AI phone agent. Everything else enables the visual interface (the form) so that you can interact with our API.

Frontend setup
Navigate to your project directory in the terminal.
Start the React application by running npm start

Backend setup
Open your python readable terminal and Navigate to your project directory and navigate to your backend by typing cd backend.
All libraries was pre-installled for Flask server, you just need to activate virtual env by typing .\venv\Scripts\activate.
Next, to run your server, type flask run --port=3000 into your terminal. Your server should start running on port 3000.
