// next js image tag optimizes the image
import Image from 'next/image'
import photo from '@/public/pexels-dastan-khdir-4971725.jpg'

const page = () => {
  return (
    <div>
      <Image src={photo} alt="camera image" width={500} height={500}/>
      <br />

      {/* cdn-images.imagevenue.com we will have to provide this in our next config as follows */}
      <Image src='https://cdn-images.imagevenue.com/9c/e0/d3/ME186N6K_o.jpg' alt="camera image" width={500} height={500}/>
    </div>
  )
}

export default page
