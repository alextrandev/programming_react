import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-blue-300 flex justify-between items-center px-10 bg-opacity-80">
      <h1>React pratice</h1>
      <div className=" flex gap-3">
        <Link to={'/'}>Home</Link>
        <Link to={'/dashboard'}>Dashboard</Link>
        <Link to={'/person'}>Person</Link>
        <Link to={'/about'}>About</Link>
      </div>
    </header>
  )
}

