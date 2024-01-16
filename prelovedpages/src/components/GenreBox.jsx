import React from "react";
import { Link } from "react-router-dom";
import { fetchAllGenre } from "../api/fetchData";
import { useQuery } from "@tanstack/react-query";
import Loading from "./Loading";
import Error from "./Error";

export default function GenreBox({ genre, qkey }) {
  const {
    data: allGenre,
    isLoading,
    isError,
  } = useQuery({
    queryKey: [qkey, genre],
    queryFn: () => fetchAllGenre(genre),
  });

  console.log(allGenre);

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <Error message={isError.message} />;
  }
  return (
    <article>
      {allGenre.length !== 0 ? (
        <div className="GenreBox">
          <Link
          to={`/genre/${genre}`}
>
            <h5 className="mt1">{genre}</h5>
          </Link>

          {allGenre.map((book) => {
            return (
              <Link to={`/books/${book._id}`}>
                <img
                  height="150"
                  src={book.cover}
                  alt={`image cover of ${book.title} by ${book.author.firstName} ${book.author.lastName}`}
                />{" "}
              </Link>
            );
          })}
        </div>
      ) : (
        ""
      )}
    </article>
  );
}
