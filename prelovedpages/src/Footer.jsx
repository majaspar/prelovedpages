import './App.css'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className='Footer'>
      <div className="Footer__wrapper margins">
        <div>
          <h2>Navigaton</h2>
          <ul>
            <li><Link to="/">Home</Link></li>
          </ul>
        </div>
      </div>
        <div className='center mb1 mt1'>&copy; <Link to='https://lenaesposit.co.uk'>Lena Esposito</Link> 2023</div>



    </footer>
  )
}
