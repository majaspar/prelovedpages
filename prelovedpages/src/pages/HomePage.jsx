import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Book from "./Book"

export default function HomePage() {
  return (<>
    <Navbar />
    <main>
      <div>
        <h1>Pre-Loved Pages</h1>
        <p>Hello from the new Bookshop App!</p>
        <Book/>
      </div>
    </main>
    <Footer />
  </>
  )
}
