import { Link } from "react-router-dom"

export default function Category({name, link}) {
  return (
    <Link to={link}>
    <div className='Category'>
        {name}

    </div>
    </Link>
  )
}
