import Hero from "../components/Hero"
import SectionTitle from '../components/SectionTitle'
import LatestBooks from '../components/LatestBooks'
import CategoriesGrid from '../components/CategoriesGrid'
import PopularAuthors from '../components/PopularAuthors'

export default function HomePage() {
  return (<>

    <Hero />
    <SectionTitle title="Latest books" link="/latest" btn="Browse" />
    <LatestBooks />
    <SectionTitle title="Popular genre" link="/genre" btn="Explore" />
    <CategoriesGrid />
    <SectionTitle title="Popular authors" link="/authors" btn="See All" />
    <PopularAuthors />

  </>
  )
}
