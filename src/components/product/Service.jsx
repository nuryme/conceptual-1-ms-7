import React from "react";

export default function Service({ transfer }) {

  return (
    <div>
      <h1>This is Service component</h1>
      <button onClick={() => {
        transfer('hello')
      }
      }>Click on service</button>
    </div>
  );
}
