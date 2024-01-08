import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import SectionTitle from "../../components/SectionTitle";
import { fetchBookModelData } from "../../api/fetchData";
import Loading from "../../components/Loading";
import Error from "../../components/Error";
import api from "axios";
export default function NewAvailableCopy() {
  const { id } = useParams();

  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const {
    data: bookData,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["bookmodels"],
    queryFn: () => fetchBookModelData(id),
  });
  console.log(bookData);

  const [bookModel, setBookModel] = useState(id);
  const [author, setAuthor] = useState(bookData?.author._id);
  const [photo, setPhoto] = useState([]);
  const [thisCopyPublishedYear, setThisCopyPublishedYear] = useState();
  const [publishingHouse, setPublishingHouse] = useState("");
  const [condition, setCondition] = useState("");
  const [conditionDescription, setConditionDescription] = useState("");
  const [isAvailable, setIsAvailable] = useState(true);
  const [price, setPrice] = useState();
  const [ISBN, setISBN] = useState();

  const addCopyMutation = useMutation({
    mutationFn: async (newCopy) => {
      return api.post(`/api/copies/${id}/addcopy`, newCopy);
    },
    onSuccess: () => {
      queryClient.invalidateQueries([
        "availablecopies",
        "authors",
        "bookmodels",
      ]);
      navigate("/admin/availablecopieslist");
    },
  });

  const postAvailableCopyData = () => {
    addCopyMutation.mutate({
      bookModel,
      author,
      thisCopyPublishedYear,
      publishingHouse,
      condition,
      conditionDescription,
      photo,
      isAvailable,
      price,
      ISBN,
    });
    // console.log(
    //   bookModel,
    //   author, ', ',
    //   thisCopyPublishedYear, ', ',
    //   publishingHouse, ', ',
    //   condition, ', ',
    //   photo, ', ',
    //   isAvailable, ', ',
    //   price, ', ',
    //   ISBN,)
  };
  //   console.log( bookModel,
  //     author, thisCopyPublishedYear,
  //     publishingHouse,
  //     condition,
  //     photo,
  //     isAvailable,
  //     price,
  //   ISBN)
  // };
  if (addCopyMutation.isLoading) {
    return <Loading />;
  }

  if (addCopyMutation.isError) {
    return <Error message={addCopyMutation.error.message} />;
  }

  //6580da01fcc2a3cb995ed7bb "6580d70a4e6f3ff298309f0c" ,  2020 ,  Head of Zeus ,  This paperback copy is in a very good condition, no damage to the cover or the pages, but it has some small creases on the spine. https://plp.lenaesposito.co.uk/covers/seagate.jpg, 9781789545180
  return (
    <>
      <SectionTitle
        title="Add New Copy"
        btn="Go to All Copies"
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
            <label className="mr1" htmlFor="prithisCopyPublishedYearce">
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
              required
              type="text"
              id="condition"
              placeholder="Enter condition"
              onChange={(e) => setCondition(e.target.value)}
            />
          </p>
          <p>
            <label className="mr1" htmlFor="conditionDescriprion">
              Description:
            </label>
            <input
              required
              type="text"
              id="conditionDescriprion"
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
              defaultValue={true}
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
            <label className="mr1" htmlFor="ISBN">
              ISBN:
            </label>
            <input
              required
              type="number"
              id="ISBN"
              placeholder="Enter ISBN"
              onChange={(e) => setISBN(e.target.value)}
            />
          </p>
          <button
            onClick={postAvailableCopyData}
            type="submit"
            className="btn mt1"
          >
            Add Copy
          </button>
        </div>
      </section>
    </>
  );
}
