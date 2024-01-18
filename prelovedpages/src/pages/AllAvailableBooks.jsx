import React from "react";
import "./Pages.css";
import { Link, useParams } from "react-router-dom";
import SectionTitle from "../components/SectionTitle";
import { useQuery } from "@tanstack/react-query";
import Loading from "../components/Loading";
import Error from "../components/Error";
import { fetchBookModelsData } from "../api/fetchData";

export default function AllAvailableBooks() {
  const {
    data: books,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["bookmodels"],
    queryFn: () => fetchBookModelsData(),
  });

  console.log(books);

  if (isError) {
    return (
      <div className="mt-8 margins">
        <Error message={isError.message} />
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="mt-8 margins">
        <Loading />
      </div>
    );
  }

  return (
    <>
      <SectionTitle title="All Books" link="/" btn="Go Back" />
      <div className="AllBooks__grid margins mt-8">
        {books.map((book) => {
          return book.availableCopies.length !== 0 ? (
            <Link to={`/books/${book._id}`}>
              <img className="h-[250px]" src={book.cover} alt={book.title} />
            </Link>
          ) : (
            ""
          );
        })}
      </div>
    </>
  );
}
