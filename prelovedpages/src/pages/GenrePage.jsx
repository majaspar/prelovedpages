import SectionTitle from "../components/SectionTitle";
import GenreBox from "../components/GenreBox";

export default function GenrePage() {
  return (
    <>
      <SectionTitle title="Browse by Genre" link="/" btn="Go back" />
      <section className="margins mt2">
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
