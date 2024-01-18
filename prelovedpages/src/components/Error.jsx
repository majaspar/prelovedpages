import React from "react";

export default function Error({ message = "Error!" }) {
  return (
    <div className="margins mt-8 mb-8">
      <h1>Error!</h1>
      {message}
    </div>
  );
}
