// dynamic routing
"use client"
const user = ({params}) => {
    
  return (
    <div>
      <h1>info about {params.user}</h1>
      <h1>Hello i am {params.user}</h1>
    </div>
  )
}

export default user
