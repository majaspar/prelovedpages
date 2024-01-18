import SectionTitle from "../components/SectionTitle";
import GenreBox from "./homepage/GenreBox";
import { Link } from "react-router-dom";

export default function GenrePage() {
  const genreList = [
    "fiction",
    "romance",
    "youngadult",
    "fantasy",
    "sciencefiction",
    "thriller",
    "horror",
    "historicalfiction",
    "contemporary",
    "nonfiction",
    "middlegrade",
    "childrens",
    "contemporary",
    "mystery",
    "foreign",
  ];
  return (
    <>
      <SectionTitle title="Browse by Genre" link="/" btn="Go back" />
      <article className="margins">
        {genreList.map((g) => {
          return (
            <Link to={`/genre#${g}`}>
              <button className="btn">{g}</button>
            </Link>
          );
        })}
      </article>
      <section className="margins mt-8">
        <GenreBox genre="Fiction" qkey="fiction" />
        <GenreBox genre="Romance" qkey="romance" />
        <GenreBox genre="Young Adult" qkey="youngadult" />
        <GenreBox genre="Fantasy" qkey="fantasy" />
        <GenreBox genre="Science Fiction" qkey="sciencefiction" />
        <GenreBox genre="Thriller" qkey="thriller" />
        <GenreBox genre="Horror" qkey="horror" />
        <GenreBox genre="Historical Fiction" qkey="historicalfiction" />
        <GenreBox genre="Foreign" qkey="foreign" />
        <GenreBox genre="Mystery" qkey="mystery" />
        <GenreBox genre="Contemporary" qkey="contemporary" />
        <GenreBox genre="Middle Grade" qkey="middlegrade" />
        <GenreBox genre="Childrens" qkey="childrens" />
        <GenreBox genre="Non-Fiction" qkey="nonfiction" />
      </section>
    </>
  );
}
