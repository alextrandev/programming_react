import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-blue-300 flex justify-between items-center px-10 bg-opacity-80">
      <Link to={'/'}>
        <h1>React pratice</h1>
      </Link>
      <div className=" flex gap-3">
        <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'/dashboard'}>Dashboard</NavLink>
        <NavLink to={'/person'}>Person</NavLink>
        <NavLink to={'/about'}>About</NavLink>
      </div>
    </header>
  )
}

