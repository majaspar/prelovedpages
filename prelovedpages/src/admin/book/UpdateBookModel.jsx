import React from "react";
import { useParams } from "react-router-dom";
import "../Admin.css";
import { useQuery } from "@tanstack/react-query";
import Error from "../../components/Error";
import Loading from "../../components/Loading";
import { fetchBookModelData } from "../../api/fetchData";
import UpdateBookModelForm from "./UpdateBookModelForm";

export default function UpdateBookModel() {
  const { id } = useParams();

  const {
    data: book,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["bookmodels", id],
    queryFn: () => fetchBookModelData(id),
  });

  console.log("Book fetched in UpdateBookModel: ", book);

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <Error message={isError.message} />;
  }

  return (
    <div>
      <UpdateBookModelForm initialValue={book} />
    </div>
  );
}
