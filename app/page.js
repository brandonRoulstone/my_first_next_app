// page.js will be initial work folder
// in order to create another route we have to specify...
//.. a folder name :
// Example : about and inside that we have to create a page.js!

// have to use Client for router
"use client"
import Link from 'next/link';
import { useRouter } from 'next/navigation'
import { Roboto } from "next/font/google";

const roboto = Roboto({subsets: ['latin'], weight: "500"})

const Home = () => {
  const router = useRouter();

  const navigate = (page) => {
    router.push(page)
  }

  return (
    <section className={roboto.className}>
      <h1>useRouter</h1>
      <h1>Hello this is a roboto font use the following class</h1>
      <button className='border px-3 py-3'onClick={() => {navigate("about")}}>Go to about</button>
    </section>
  )
}

export default Home
