import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Book from "./Book"
import Hero from "../components/Hero"

export default function HomePage() {
  return (<>
    <Navbar />
    <main className="mt4">
      <Hero/>
      <div className='margins'>
        <h1>Pre-Loved Pages h1</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem amet nesciunt quae quo vel quis error, sunt accusantium repellat, inventore, officiis distinctio itaque rerum facilis aliquid molestiae architecto nostrum dicta?</p>
        <hr />
        <h2>Hello from the new Bookshop App! h2</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem amet nesciunt quae quo vel quis error, sunt accusantium repellat, inventore, officiis distinctio itaque rerum facilis aliquid molestiae architecto nostrum dicta?</p>
        <hr />
        <h3>Hello from the new Bookshop App! h3</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem amet nesciunt quae quo vel quis error, sunt accusantium repellat, inventore, officiis distinctio itaque rerum facilis aliquid molestiae architecto nostrum dicta?</p>
        <hr />
        <h4>Hello from the new Bookshop App! h4</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem amet nesciunt quae quo vel quis error, sunt accusantium repellat, inventore, officiis distinctio itaque rerum facilis aliquid molestiae architecto nostrum dicta?</p>

        <hr />
        <h5>Hello from the new Bookshop App! h5</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, assumenda perspiciatis voluptate ducimus eius eos odit! Error sit voluptatum quis omnis nostrum alias repudiandae enim numquam. Repudiandae aspernatur assumenda earum?
          Rerum quidem ipsum repudiandae suscipit soluta animi incidunt id expedita tenetur placeat quaerat maiores deserunt, eius aliquid doloribus veritatis omnis eaque laborum dolorem, est esse. Minima repellat voluptas aut labore.
          Nulla tempora corrupti amet cumque ipsum iste rem rerum porro necessitatibus fuga, explicabo corporis veritatis dolor aspernatur in, quod, sint labore nemo vero quaerat error laborum illum enim recusandae? Quod!
          Error illo optio autem harum maxime voluptatum sint quasi fuga ad suscipit esse facilis, fugiat, distinctio, aperiam natus perferendis voluptatibus pariatur ducimus necessitatibus cum tenetur corrupti. Tenetur quidem deleniti sed.
          Tenetur voluptatibus eos laborum, a nesciunt laboriosam sequi magni nemo itaque qui? Illum, sunt natus! Magnam quae a incidunt quaerat. Aliquam cumque porro dolores eum fugit adipisci ratione maxime delectus!</p>
        <Book/>
      </div>
    </main>
    <Footer />
  </>
  )
}
