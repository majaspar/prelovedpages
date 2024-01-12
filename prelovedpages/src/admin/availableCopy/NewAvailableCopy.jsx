import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import SectionTitle from "../../components/SectionTitle";
import { fetchBookModelData } from "../../api/fetchData";
import Loading from "../../components/Loading";
import Error from "../../components/Error";
import api from "axios";
import NewAvailableCopyForm from "./NewAvailableCopyForm";

export default function NewAvailableCopy() {
  const { id } = useParams();

  const {
    data: bookData,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["bookmodels"],
    queryFn: () => fetchBookModelData(id),
  });

  // console.log("Book fetched in UpdateBookModel: ", bookData);

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <Error message={isError.message} />;
  }

  return (
    <div>
      <NewAvailableCopyForm initialValue={bookData} />
    </div>
  );
}
