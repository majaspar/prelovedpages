import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import SectionTitle from "../components/SectionTitle";

export default function AllAuthors() {
  const [authors, setAuthors] = useState([]);

  const getAuthorsData = async () => {
    await axios.get("/api/authors").then((response) => {
      setAuthors(response.data);
    });
  };
  useEffect(() => {
    getAuthorsData();
  }, []);

  return (
    <>
      <SectionTitle
        title="List of Authors"
        link="/books"
        btn="See All Books"
      />

      <section className="margins mt-8">
        <div className="flex flex-wrap gap-4 justify-between">
          {authors.map((author) => {
            return (
              <Link to={`/authors/${author._id}`}>
                <div
                  key={author._id}
                  className="AllAuthors__list--author flex mb-4"
                >
                  <img
                    src={author.photo}
                    alt={` Photograph of ${author.firstName} ${author.lastName}`}
                  />
                  <span className="center">
                    {author.firstName} {author.lastName}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </>
  );
}
