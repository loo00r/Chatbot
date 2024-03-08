// src/App.js

import React from "react";
import Chatbot_prototype from "./components/Chatbot_prototype";
import UI_block from "./components/UI_block";

const App = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <UI_block />
      <div className="w-full max-w-md p-8 rounded-xl bg-white border">
        <h1 className="text-2xl font-bold text-center">
          my bot
        </h1>
        <Chatbot_prototype />
      </div>
    </div>
  );
};

export default App;