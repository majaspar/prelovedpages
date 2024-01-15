import { Link } from "react-router-dom"

export default function GenreItem({name, link}) {
  return (
    <Link to={link}>
    <div className='GenreItem'>
        {name}

    </div>
    </Link>
  )
}
