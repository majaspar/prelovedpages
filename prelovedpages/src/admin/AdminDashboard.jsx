import React from "react";
import { Link } from "react-router-dom";
import "./Admin.css";
import SectionTitle from "../components/SectionTitle";

export default function AdminDashboard() {
  return (
    <>
      <SectionTitle
        title="Admin Dashboard"
        link="/admin"
        btn="Go to Admin Dashboard"
      />
      <section className="AdminDashboard mt2 margins flex">
        <div>
          <h5 className="mt2">Authors</h5>
          <Link to="/admin/authorslist">
            <p className="mb1">List of Authors</p>
          </Link>
          <Link to="/admin/newauthor">
            <p className="mb1">Add New Author</p>
          </Link>
        </div>
        <div>
          <h5 className="mt2">Book Models</h5>
          <Link to="/admin/bookmodelslist">
            <p className="mb1">List of Book Models </p>
          </Link>
          <Link to="/admin/newbook">
            <p className="mb1">Add New Book Model</p>
          </Link>
        </div>
        <div>
          <h5 className="mt2">Available Copies</h5>
          <Link to="/admin/availablecopieslist">
            <p className="mb1">List of Available Copies</p>
          </Link>
        </div>
        <div>
          <h5 className="mt2">Users</h5>
          <Link to="/admin/userslist">
            <p className="mb1">List of Users</p>
          </Link>
        </div>
      </section>
    </>
  );
}
