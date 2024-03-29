import React from "react";
import { Link } from "react-router-dom";
import { fetchLatestBooksComponent } from "../api/fetchData";
import { useQuery } from "@tanstack/react-query";
import SectionTitle from "./SectionTitle";
import Error from "../components/Error";
import Loading from "../components/Loading";

export default function LatestBookComponent() {
  const {
    data: latest,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["bookmodels"],
    queryFn: () => fetchLatestBooksComponent(),
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
      <SectionTitle title="Latest books" link="/latest" btn="See all" />
      <section className="LatestBookComponent margins">
        <ul className="flex gap-2 flex-nowrap overflow-x-scroll">
          {latest?.map((book) => {
            return (
              <li key={book._id}>
                <Link to={`/books/${book._id}`}>
                  <img className="h-[300px]" alt={book.title} src={book.cover} />{" "}
                </Link>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
}
