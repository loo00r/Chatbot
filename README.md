
# Chatbot Application Overview



# Frontend setup

Open navigate to your project directory your terminal and type `npm install` to install all your dependencies.

Start the React application by running `npm start`

# Backend setup

Open your python readable terminal and Navigate to your project directory and navigate to your backend by typing `cd backend` and run the following command to create a virtual environment named "venv": `python -m venv venv`.

Activate virtual env by typing `.\venv\Scripts\activate`.

Now that the virtual environment is activated, you can install Flask and other libraries. Run: `pip install flask`  `pip install requests` `pip install flask-cors`


Next, to run your server, type `flask run --port=3000` into your terminal. Your server should start running on port 3000.

## Main Chatbot logic

Message Handling: When a user submits a message, it checks for specific keywords like "info about my music" or "analyze my account" to determine the conversation type.

Communication with Flask Backend: Constructs a POST request to the Flask backend, passing the conversation type and the last message from the chat history. It waits for the server's response and updates the state with the received data. Flask Backend Constructs a GET request to API then returns the JSON file to main app.js.


Rendering: Renders the chat history, input field for new messages, and a button to send messages. Additionally, it renders a UI block component if there is data received from the server.

## Approach:

The development of the Chatbot application followed a systematic approach, involving the following steps:


Thorough Planning: Planning and design helped anticipate challenges and devise appropriate solutions.

Continuous Testing: Regular testing throughout development helped identify and address issues early.

Community Resources: Leveraging online forums and documentation provided valuable insights and solutions.



