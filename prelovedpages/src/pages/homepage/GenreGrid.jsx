import "../../components/Components.css";
import GenreItem from "../../components/GenreItem";

export default function GenreGrid() {
  return (
    <section>
      <div className="center CategoriesGrid margins">
        <div className="Categories__wrapper">
          <GenreItem name="Historical fiction" link="" />
          <GenreItem name="Romance" link="" />
          <GenreItem name="Contemporary" link="" />
          <GenreItem name="Fantasy" link="" />
          <GenreItem name="Sci-fi" link="" />
          <GenreItem name="Thriller" link="" />
          <GenreItem name="Horror" link="" />
          <GenreItem name="YA" link="" />
          <GenreItem name="Non-Fiction" link="" />
        </div>
      </div>
    </section>
  );
}
