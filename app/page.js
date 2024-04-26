// page.js will be initial work folder
// in order to create another route we have to specify...
//.. a folder name :
// Example : about and inside that we have to create a page.js!

// have to use Client for router
"use client"
import { useRouter } from 'next/navigation'

const page = () => {
  const router = useRouter()
  return (
    <section>
      <h1>useRouter</h1>
      <button className='border px-3 py-3' onClick={() => {router.push("about")}}>Go to about</button>
    </section>
  )
}

export default page
