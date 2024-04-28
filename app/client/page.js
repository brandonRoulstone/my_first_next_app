"use client"
const client = () => {
    console.log("hello from client component");
  return (
    <div>
    <button onClick={() => {alert('hello')}}> Click</button>
    </div>
  )
}

export default client;