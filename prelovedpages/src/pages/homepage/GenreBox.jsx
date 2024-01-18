import React from "react";
import { Link } from "react-router-dom";
import { fetchAllGenre } from "../../api/fetchData";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../components/Loading";
import Error from "../../components/Error";

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
    <article id={qkey}>
      {allGenre.length !== 0 ? (
        <div className="GenreBox">
          <Link to={`/genre/${genre}`}>
            <h5 className="mt-4">{genre}</h5>
          </Link>
          <div className="flex flex-wrap gap-2">
            {allGenre.map((book) => {
              return (
                <Link to={`/books/${book._id}`}>
                  <img
                    className="h-52"
                    src={book.cover}
                    alt={`image cover of ${book.title} by ${book.author.firstName} ${book.author.lastName}`}
                  />{" "}
                </Link>
              );
            })}
          </div>
        </div>
      ) : (
        ""
      )}
    </article>
  );
}
