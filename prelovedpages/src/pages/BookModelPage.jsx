import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useMutation, useQuery } from "@tanstack/react-query";
import Loading from "../components/Loading";
import cover from "../../../copies/24001.jpg";
import { fetchBookModelData } from "../api/fetchData";

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
      <div className="mt2 margins">
        <Error message={isError.message} />
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="mt2 margins">
        <Loading />
      </div>
    );
  }

  return (
    <>
      <section className="BookModelPage flex mt2 margins">
        <div className="">
          <img src={book.cover} alt="" />
        </div>

        {book.author ? (
          <div className="">
            <h2 className="">{book.title}</h2>
            <Link to={`/authors/${book.author._id}`}>
              <h4>
                {book.author.firstName} {book.author.lastName}
              </h4>
            </Link>
            <hr />
            <p className="mb1">Publication date: {book.publishedYear}</p>

            <p className="mb1">
              {book.isPartOfSeries ? (
                <span>
                  {book.series}, book {book.volume}
                </span>
              ) : (
                "A standalone novel"
              )}
            </p>
            <p className="mb1">Genre: {book.genre.join(", ")}</p>
            <p className="mb1">{book.synopsis}</p>
            <p className="mb1">
              {book.isAvailable ? (
                <span>{book.availableCopies}</span>
              ) : (
                <span>There are no copies available at the moment.</span>
              )}
            </p>
          </div>
        ) : (
          <Loading />
        )}
      </section>
      <div className="margins">
        <Link to={`/admin/books/${book._id}/update`}>
          <button className="btn mt1">Edit Book Model</button>
        </Link>
        <Link to={`/admin/books/${book._id}/addcopy`}>
          <button className="btn mt1">Add a Copy</button>
        </Link>
      </div>
      <hr className="margins mt2 mb2" />
      <section className="margins">
        <h2 className="mb2">Available Copies</h2>
        <ul className="AvailableCopies__wrapper">
          <li>
            <Link to="/availableCopyId">
              <img src={cover} alt="" />
            </Link>
          </li>

          <li>
            <img src={cover} alt="" />
          </li>
        </ul>
      </section>
    </>
  );
}
