import "./Pages.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import SectionTitle from "../components/SectionTitle";
import Loading from "../components/Loading";
import Tooltip from "@mui/material/Tooltip";
import Zoom from "@mui/material/Zoom";

export default function AuthorPage() {
  const { id } = useParams();
  const [author, setAuthor] = useState({});

  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get(`/api/authors/${id}`);
        setAuthor(response.data);
      } catch (error) {
        console.error("Error fetching author data:", error);
      }
    }
    getData();
  }, [id]); // Include id as a dependency

  return (
    <>
      <SectionTitle
        title={`${author.firstName} ${author.lastName}`}
        link="/authors"
        btn="Go Back"
      />

      <section className="AuthorPage margins mt-8">
        <figure>
          <img src={author.photo} alt="" />{" "}
          <figcaption>{author.photoSource}</figcaption>{" "}
        </figure>
        <h4 className="mt-4 mb-4">Books available by this author:</h4>

        {author.writtenBooks ? (
          <ul className="AuthorPage__writtenBooks--ul flex">
            {author.writtenBooks.map((book) => (
              <li className="AuthorPage__writtenBooks--li" key={book._id}>
                <Tooltip
                  TransitionComponent={Zoom}
                  title={book.title}
                  followCursor={true}
                >
                  <Link to={`/books/${book._id}`}>
                    <img
                      src={book.cover}
                      alt={`${book.title}`}
                      className="h-[150px]"
                    />
                  </Link>
                </Tooltip>
              </li>
            ))}
          </ul>
        ) : (
          <Loading />
        )}

        {/* <button onClick={showNewBookForm} className="mt-16 mb-8 btn">Add new book</button>
            <div className={`new-book-form ${checkState}`}>
                <NewBook authorid={id} />
            </div> */}
      </section>
    </>
  );
}
