import React from "react";

export default function Success({ message = "Success!" }) {
  return <div className="margins mt-8">{message}</div>;
}
