// import foxLogo from '../assets/foxes4ev.png'

export default function Header() {
  return (
    <header className="bg-blue-300 flex justify-between items-center px-10 bg-opacity-80">
      {/* <img className='h-6' src={foxLogo} alt="" /> */}
      <h1>React pratice</h1>
      <div className=" flex gap-3">
        <a href="">Home</a>
        <a href="">Persons</a>
      </div>
    </header>
  )
}

