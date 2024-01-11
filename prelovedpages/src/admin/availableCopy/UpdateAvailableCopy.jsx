import React, { useState, useEffect, useLayoutEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import SectionTitle from "../../components/SectionTitle";
import { getCopyData } from "../../api/fetchData";
import Loading from "../../components/Loading";
import Error from "../../components/Error";
import UpdateAvailableCopyForm from "./UpdateAvailableCopyForm";
import api from "axios";

export default function UpdateAvailableCopy() {
  const { id } = useParams();

  const {
    data: copy,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["availablecopies", id],
    queryFn: () => getCopyData(id),
  });

  console.log("Copy fetched in UpdateAvailableCopy: ", copy);

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <Error message={isError.message} />;
  }

  return (
    <>
      <UpdateAvailableCopyForm initialValue={copy} />
    </>
  );
}
