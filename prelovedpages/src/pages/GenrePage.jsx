import SectionTitle from "../components/SectionTitle";
import GenreBox from "../components/GenreBox";

export default function GenrePage() {
  return (
    <>
      <SectionTitle title="Browse by Genre" link="/" btn="Go back" />
      <section className="margins mt2">
        <GenreBox genre="Fiction" key="fiction" />
        <GenreBox genre="Romance" key="romance" />
        <GenreBox genre="Young Adult" key="youngadult" />
        <GenreBox genre="Fantasy" key="fantasy" />
        <GenreBox genre="Science Fiction" key="sciencefiction" />
        <GenreBox genre="Thriller" key="thriller" />
        <GenreBox genre="Horror" key="horror" />
        <GenreBox genre="Historical Fiction" key="historicalfiction" />
        <GenreBox genre="Foreign" key="foreign" />
        <GenreBox genre="Mystery" key="mystery" />
        <GenreBox genre="Contemporary" key="contemporary" />
        <GenreBox genre="Middle Grade" key="middlegrade" />
        <GenreBox genre="Childrens" key="childrens" />
        <GenreBox genre="Non-Fiction" key="nonfiction" />
      </section>
    </>
  );
}
