import React from "react";
import SectionTitle from "../components/SectionTitle";
import { fetchLatestBooks } from "../api/fetchData";
import { useQuery } from "@tanstack/react-query";
import Error from "../components/Error";
import Loading from "../components/Loading";

export default function LatestBooksPage() {
  const {
    data: latest,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["bookmodels"],
    queryFn: () => fetchLatestBooks(),
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
      <SectionTitle title="Latest Books" btn="Go Back" link="/" />

      <section className="margins mt2">
        {latest?.map((book) => {
          return book.availableCopies !== 0 ? <div>{book.title}</div> : "";
        })}
      </section>
    </>
  );
}
