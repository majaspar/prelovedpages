import React from "react";
import { useParams } from "react-router-dom";
import "../Admin.css";
import { useQuery } from "@tanstack/react-query";
import UpdateAuthorForm from "./UpdateAuthorForm";
import Error from "../../components/Error";
import Loading from "../../components/Loading";
import { getAuthorData } from "../../api/fetchData";

export default function UpdateAuthor() {
  const { id } = useParams();

  const {
    data: author,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["authors", id],
    queryFn: () => getAuthorData(id),
  });

  console.log("Book fetched in UpdateAuthor: ", author);

  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    return <Error message={isError.message} />;
  }
  return (
    <>
      {" "}
      <UpdateAuthorForm initialValue={author} />{" "}
    </>
  );
}
