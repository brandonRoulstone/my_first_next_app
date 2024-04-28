"use client"
// ... in the auth folder is used to create a catch-all route. It allows you to match multiple segments in the URL.
// For example, consider the following route: pages/api/auth/[...nextauth].js
const project = ({params}) => {
  return (
    <div>
      <h1>{params.all}</h1>
      <br />
      all routes:
      {params.all.map((p) => {
        <li key={p}>{p}</li>
      })}
    </div>
  )
}

export default project;