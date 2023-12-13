import './Components.css'
import Category from "./Category"

export default function CategoriesGrid() {
    return (
        <section>
            <div className="center CategoriesGrid margins">
                <div className="Categories__wrapper">
                    <Category name="Historical fiction" link="" />
                    <Category name="Romance" link="" />
                    <Category name="Contemporary" link="" />
                    <Category name="Fantasy" link="" />
                    <Category name="Sci-fi" link="" />
                    <Category name="Thriller" link="" />
                    <Category name="Horror" link="" />
                    <Category name="YA" link="" />
                    <Category name="Non-Fiction" link="" />
                </div>
            </div>
        </section>
    )
}
