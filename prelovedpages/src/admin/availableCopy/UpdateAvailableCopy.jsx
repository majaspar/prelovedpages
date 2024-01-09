import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import SectionTitle from "../../components/SectionTitle";
import { fetchBookModelData } from "../../api/fetchData";
import Loading from "../../components/Loading";
import Error from "../../components/Error";
import api from "axios";
import { query } from "express";

export default function UpdateAvailableCopy() {

  const {id} = useParams()
  const navigate = useNavigate()
  const queryClient = useQueryClient()

  const {
    data: copy,
  } = useQuery({
    queryKey: ["availablecopies", id],
    queryFn: () => getCopiesData(),
  });
  console.log(copies);

  const [bookModel, setBookModel] = useState();
  const [author, setAuthor] = useState();
  const [photo, setPhoto] = useState([]);
  const [thisCopyPublishedYear, setThisCopyPublishedYear] = useState();
  const [publishingHouse, setPublishingHouse] = useState("");
  const [condition, setCondition] = useState("");
  const [conditionDescription, setConditionDescription] = useState("");
  const [isAvailable, setIsAvailable] = useState(true);
  const [price, setPrice] = useState();
  const [Isbn, setIsbn] = useState();


  const updateCopy = async (updatedCopy) => {
    api.patch(`/api/copies/${id}/update`, updatedCopy)
  }

  const updateCopyMutation = useMutation({
    mutationFn: updateCopy,
    onSuccess: () => {
      queryClient.invalidateQueries('availablecopies')
      navigate('/admin/availablecopieslist')
    }
  })

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
    Isbn
  })

  }
  return (
    <>
      <SectionTitle
        title="Update Available Copy"
        btn="Go to All Book Models"
        link="/admin/bookmodelslist"
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
              id="publishingHouse"
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
              placeholder="Enter photo url"
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
              id="thisCopyPublishedYear"
              placeholder="Enter year"
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
              placeholder="Enter publishing house"
              onChange={(e) => setPublishingHouse(e.target.value)}
            />
          </p>
          <p>
            <label className="mr1" htmlFor="condition">
              Condition:
            </label>
            <input
              type="text"
              id="condition"
              placeholder="Enter condition"
              onChange={(e) => setCondition(e.target.value)}
            />
          </p>
          <p>
            <label className="mr1" htmlFor="conditionDescription">
              Description:
            </label>
            <input
              type="text"
              id="conditionDescription"
              placeholder="Enter description"
              onChange={(e) => setConditionDescription(e.target.value)}
            />
          </p>
          <p className="mt1">
            <label className="mr1" htmlFor="isAvailable">
              Is it available?
            </label>
            <select
              required
              name="isAvailable"
              id="isAvailable"
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
              placeholder="Enter Isbn"
              onChange={(e) => setIsbn(e.target.value)}
            />
          </p>
          <button
            onClick={updateAvailableCopyData}
            type="submit"
            className="btn mt1"
          >
            Add Copy
          </button>
        </div>
      </section>
    </>
  )
}
