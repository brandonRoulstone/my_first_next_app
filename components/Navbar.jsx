"use client"
import Link from "next/link"
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathName = usePathname();
  console.log(pathName);
  return (
    <nav className="bg-green-100">
      <ul>
        <div className="logo">
          <h1>Logo</h1>
        </div>

      {pathName === "/login/loginAdmin" ? (
        <div className="link-container">
          <Link className="link" href='/login/loginUser'>Login user</Link>
        </div>
      ) : (
        <div className="link-container">
          <Link className="link" href='/login/loginAdmin'>Login Admin</Link>
        </div>
      )}

      </ul>
    </nav>
  )
}

export default Navbar;