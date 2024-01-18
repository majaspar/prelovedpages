import React from "react";
import { Link } from "react-router-dom";

export default function Links() {
  return (
    <div className="margins flex mb-8">
      <Link to="/admin/newauthor">
        <button className="btn mr1">New Author</button>
      </Link>
      <Link to="/admin/authorslist">
        <button className="btn mr1">Authors</button>
      </Link>
      <Link to="/admin/bookmodelslist">
        <button className="btn mr1">Book Models</button>
      </Link>
      <Link to="/admin/availablecopieslist">
        <button className="btn mr1">Available Copies</button>
      </Link>
      <Link to="/admin/userslist">
        <button className="btn mr1">Users</button>
      </Link>
    </div>
  );
}
