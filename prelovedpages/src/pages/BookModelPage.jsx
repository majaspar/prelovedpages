import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useMutation, useQuery } from "@tanstack/react-query";
import Loading from "../components/Loading";
import Copy from "../components/Copy";
import { fetchBookModelData } from "../api/fetchData";
import SectionTitle from "../components/SectionTitle";
import LatestBookComponent from "../components/LatestBookComponent";
//import { useNavigate } from "react-router";

export default function BookModelPage() {
  const { id } = useParams();

  const {
    data: book,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["bookmodels", id],
    queryFn: () => fetchBookModelData(id),
  });

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
      <SectionTitle title={book.title} btn="Go to All Books" link="/books" />
      <section className="BookModelPage flex mt-8 margins gap-8">
        <div className="">
          <img src={book.cover} alt="" />
        </div>

        {book.author ? (
          <div className="">
            <p className="mb-4">
              {book.isAvailable ? (
                <span style={{ color: "green", fontWeight: "bold" }}>
                  Currently in stock
                </span>
              ) : (
                <span style={{ color: "red", fontWeight: "bold" }}>
                  Currently out of stock
                </span>
              )}
            </p>
            <Link to={`/authors/${book.author._id}`}></Link>
            <p>
              {" "}
              <span className="details--title">author:</span>
              <span className="details--data">
                <Link to={`/authors/${book.author._id}`}>
                  {book.author.firstName} {book.author.lastName}
                </Link>
              </span>
            </p>
            <p>
              <span className="details--title">Published: </span>
              <span className="details--data">{book.publishedYear}</span>
            </p>
            {book.isPartOfSeries ? (
              <div>
                <p>
                  <span className="details--title">Series: </span>
                  <span className="details--data">{book.series}</span>
                </p>
                <p>
                  <span className="details--title">Volume: </span>
                  <span className="details--data">{book.volume}</span>
                </p>
              </div>
            ) : (
              ""
            )}
            <div className="mb-4 flex">
              <p className="details--title">Genre: </p>
              <p className="details--data">
                {book.genre.map((genre) => {
                  return (
                    <span className="mr1" key={genre.replace(" ", "")}>
                      <Link to={`/genre/${genre}`}>{genre}</Link>
                    </span>
                  );
                })}
              </p>
            </div>
            <p className="mb-4">{book.synopsis}</p>
          </div>
        ) : (
          <Loading />
        )}
      </section>
      <div className="margins">
        <Link to={`/admin/books/${book._id}/update`}>
          <button className="btn mt-4">Edit Book Model</button>
        </Link>
        <Link className="ml1" to={`/admin/books/${book._id}/addcopy`}>
          <button className="btn mt-4">Add a Copy</button>
        </Link>
      </div>
      <hr className="margins mt-8 mb-8" />
      {book.isAvailable && (
        <section className="margins">
          <h2 className="mb-8">Available Copies</h2>
          <ul className="AvailableCopies__wrapper">
            {book.availableCopies.map((copy) => {
              return (
                <li key={book._id}>
                  <Copy copyid={copy} />
                  <hr className="mt-8 mb-8" />
                </li>
              );
            })}
          </ul>
        </section>
      )}
      <LatestBookComponent />
    </>
  );
}
