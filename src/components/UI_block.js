import React from "react";

const UI_block = ({ data }) => {
  return (
    <div className="absolute top-12 left-12 p-4 rounded border hover:scale-105 hover:shadow-lg duration-200 bg-white">
      {data ? (
        <div>
          <h2>Data from Chatbot_prototype:</h2>
          <p>{data.message}</p>
        </div>
      ) : (
        <p>Waiting for data...</p>
      )}
    </div>
  );
};

export default UI_block;
