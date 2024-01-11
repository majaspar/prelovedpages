import React, { useState, useEffect, useLayoutEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import SectionTitle from "../../components/SectionTitle";
import Loading from "../../components/Loading";
import Error from "../../components/Error";
import api from "axios";

export default function UpdateAvailableCopyForm({ initialValue }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const [bookModel, setBookModel] = useState(initialValue?.bookModel._id || "");
  const [author, setAuthor] = useState(initialValue?.author._id || "");
  const [photo, setPhoto] = useState(initialValue?.photo || []);
  const [thisCopyPublishedYear, setThisCopyPublishedYear] = useState(
    initialValue?.thisCopyPublishedYear || ""
  );
  const [publishingHouse, setPublishingHouse] = useState(
    initialValue?.publishingHouse || ""
  );
  const [condition, setCondition] = useState(initialValue?.condition || "");
  const [conditionDescription, setConditionDescription] = useState(
    initialValue?.conditionDescription || ""
  );
  const [isAvailable, setIsAvailable] = useState(
    initialValue?.isAvailable || true
  );
  const [price, setPrice] = useState(initialValue?.price || null);
  const [Isbn, setIsbn] = useState(initialValue?.Isbn || null);

  const handleUpdateCopy = async (updatedCopy) => {
    api
      .patch(`/api/copies/${id}/update`, updatedCopy)
      .catch((error) =>
        console.error("Error while updating a book model:", error)
      );
  };

  const updateCopyMutation = useMutation({
    mutationFn: handleUpdateCopy,
    onSuccess: () => {
      queryClient.invalidateQueries("availablecopies");
      navigate("/admin/availablecopieslist");
    },
  });

  const updateAvailableCopyData = () => {
    updateCopyMutation.mutate({
      bookModel,
      author,
      photo,
      publishingHouse,
      thisCopyPublishedYear,
      condition,
      conditionDescription,
      isAvailable,
      price,
      Isbn,
    });
  }

  if (updateCopyMutation.isLoading) {
    return <Loading />;
  }

  if (updateCopyMutation.isError) {
    return <Error message={updateCopyMutation.error.message} />;
  }
  return (
    <>
      <SectionTitle
        title="Update Available Copy"
        btn="Go to Copies List"
        link="/admin/availablecopieslist"
      />
      <section className="margins mt2 admin">
        <div className="form">
          <p>
            <label className="mr1" htmlFor="bookModel">
              Book Model Id:
            </label>
            <input
              required
              type="text"
              value={bookModel}
              id="bookModel"
              onChange={(e) => setBookModel(e.target.value)}
            />
          </p>
          <p>
            <label className="mr1" htmlFor="author">
              Author:
            </label>
            <input
              required
              type="text"
              value={author}
              id="author"
              onChange={(e) => setAuthor(e.target.value)}
            />
          </p>
          <p>
            <label className="mr1" htmlFor="photo">
              Photos separated with ',':
            </label>
            <input
              required
              type="text"
              id="photo"
              value={photo.join(", ")}
              onChange={(e) => setPhoto(e.target.value.split(","))}
            />
          </p>
          <p>
            <label className="mr1" htmlFor="thisCopyPublishedYear">
              Copy Published Date:
            </label>
            <input
              required
              type="number"
              value={thisCopyPublishedYear}
              id="thisCopyPublishedYear"
              onChange={(e) => setThisCopyPublishedYear(e.target.value)}
            />
          </p>
          <p>
            <label className="mr1" htmlFor="publishingHouse">
              Publishing house:
            </label>
            <input
              required
              type="text"
              id="publishingHouse"
              value={publishingHouse}
              onChange={(e) => setPublishingHouse(e.target.value)}
            />
          </p>
          <p>
            <label className="mr1" htmlFor="condition">
              Condition:
            </label>
            <select
              required
              name="condition"
              id="condition"
              value={condition}
              onChange={(e) => setCondition(e.target.value)}
            >
              <option value="New">New</option>
              <option value="Like New">Like New</option>
              <option value="Very Good">Very Good</option>
              <option value="Good">Good</option>
              <option value="Acceptable">Acceptable</option>
            </select>
          </p>
          <p>
            <label className="mr1" htmlFor="conditionDescription">
              Description:
            </label>
            <input
              type="text"
              id="conditionDescription"
              value={conditionDescription}
              onChange={(e) => setConditionDescription(e.target.value)}
            />
          </p>
          <p className="">
            <label className="mr1" htmlFor="isAvailable">
              Is it available?
            </label>
            <select
              required
              name="isAvailable"
              id="isAvailable"
              value={isAvailable}
              onChange={(e) => setIsAvailable(e.target.value)}
            >
              <option value={true}>Yes</option>
              <option value={false}>No</option>
            </select>
          </p>
          <p>
            <label className="mr1" htmlFor="price">
              Price:
            </label>
            <input
              required
              type="number"
              id="price"
              value={price}
              placeholder="Enter price"
              onChange={(e) => setPrice(e.target.value)}
            />
          </p>
          <p>
            <label className="mr1" htmlFor="Isbn">
              ISBN:
            </label>
            <input
              required
              type="number"
              id="Isbn"
              value={Isbn}
              onChange={(e) => setIsbn(e.target.value)}
            />
          </p>
          <button
            onClick={updateAvailableCopyData}
            type="submit"
            className="btn mt1"
          >
            Update
          </button>
        </div>
      </section>
    </>
  );
}
