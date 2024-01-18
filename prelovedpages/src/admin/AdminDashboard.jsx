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
      <section className="AdminDashboard mt-8 margins flex">
        <div>
          <h5 className="mt-8">Authors</h5>
          <Link to="/admin/authorslist">
            <p className="mb-4">List of Authors</p>
          </Link>
          <Link to="/admin/newauthor">
            <p className="mb-4">Add New Author</p>
          </Link>
        </div>
        <div>
          <h5 className="mt-8">Book Models</h5>
          <Link to="/admin/bookmodelslist">
            <p className="mb-4">List of Book Models </p>
          </Link>
          <Link to="/admin/newbook">
            <p className="mb-4">Add New Book Model</p>
          </Link>
        </div>
        <div>
          <h5 className="mt-8">Available Copies</h5>
          <Link to="/admin/availablecopieslist">
            <p className="mb-4">List of Available Copies</p>
          </Link>
        </div>
        <div>
          <h5 className="mt-8">Users</h5>
          <Link to="/admin/userslist">
            <p className="mb-4">List of Users</p>
          </Link>
        </div>
      </section>
    </>
  );
}
